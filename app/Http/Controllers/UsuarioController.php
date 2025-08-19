<?php

namespace App\Http\Controllers;

use App\Models\User; // 1. Alterado de Usuario para User
use App\Rules\Cpf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia; // 2. Importar a classe Inertia

class UsuarioController extends Controller
{
    /**
     * Exibe o formulário de cadastro de usuário
     */
    public function create()
    {
        // 3. Alterado para renderizar um componente React/Inertia
        return Inertia::render('Usuarios/Create');
    }

    /**
     * Salva um novo usuário no banco
     */
    public function store(Request $request)
    {
        // Validação simples
        $request->validate([
            'nome_completo' => 'required|string|max:255',
            'cpf' => ['required', 'string', 'size:11', 'unique:users,cpf', new Cpf], // 4. Alterado para a tabela 'users'
            'senha' => 'required|string|min:6',
        ]);

        // Cria usuário
        User::create([ // 5. Alterado de Usuario para User
            'nome_completo' => $request->nome_completo,
            'cpf' => $request->cpf,
            'senha' => Hash::make($request->senha),
        ]);

        return redirect()->route('usuarios.create')->with('success', 'Usuário criado com sucesso!');
    }
}
