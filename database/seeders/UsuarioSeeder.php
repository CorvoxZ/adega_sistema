<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;

class UsuarioSeeder extends Seeder
{
    public function run(): void
    {
        Usuario::create([
            'nome_completo' => 'Thiago Brito',
            'cpf' => '17180780723',
            'senha' => Hash::make('12345678'),
        ]);
    }
}
