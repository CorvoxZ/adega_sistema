<?php
namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // para pegar o usuário logado
use App\Models\Usuario; // sua tabela de usuários
use Inertia\Inertia;

class ProdutoController extends Controller
{
    public function index()
    {
        // Busca os produtos com paginação de 20 itens por página, ordenando pelos mais recentes.
        $produtos = Produto::latest()->paginate(20);

        return Inertia::render('Produtos/Index', [
            'produtos' => $produtos,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'descricao_produto' => 'nullable|string',
            'tipo_produto' => 'nullable|string|max:255',
            'preco' => 'required|regex:/^\d{1,6}(,\d{1,2})?$/', // Valida formato como 1234,56
        ]);

        // Pega o usuário logado
        $usuario = Auth::user(); // precisa estar autenticado
        $nomeUsuario = $usuario ? $usuario->nome_completo : 'Desconhecido';

        // Converte preço para formato do banco (ponto decimal)
        $preco = str_replace(',', '.', $request->preco);

        Produto::create([
            'nome' => $request->nome,
            'descricao_produto' => $request->descricao_produto,
            'tipo_produto' => $request->tipo_produto,
            'preco' => $preco,
            'usuario_cadastro' => $nomeUsuario,
        ]);

        return redirect()->back()->with('success', 'Produto cadastrado!');
}
}