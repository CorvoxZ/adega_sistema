<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Produto;

class ProdutoSeeder extends Seeder
{
    public function run(): void
    {
        $produtos = [
            ['nome' => 'Cerveja Pilsen', 'descricao_produto' => 'Cerveja clara, leve', 'tipo_produto' => 'alcoólica', 'preco' => 5.50, 'foto' => 'produtos/cerveja_pilsen.jpg'],
            ['nome' => 'Cerveja IPA', 'descricao_produto' => 'Cerveja artesanal IPA', 'tipo_produto' => 'alcoólica', 'preco' => 8.90, 'foto' => 'produtos/cerveja_ipa.jpg'],
            ['nome' => 'Cerveja Weiss', 'descricao_produto' => 'Cerveja de trigo', 'tipo_produto' => 'alcoólica', 'preco' => 7.00, 'foto' => 'produtos/cerveja_weiss.jpg'],
            ['nome' => 'Vodka Smirnoff', 'descricao_produto' => 'Vodka importada', 'tipo_produto' => 'destilado', 'preco' => 45.00, 'foto' => 'produtos/vodka_smirnoff.jpg'],
            ['nome' => 'Whisky Jack Daniel\'s', 'descricao_produto' => 'Whisky americano', 'tipo_produto' => 'destilado', 'preco' => 120.00, 'foto' => 'produtos/whisky_jack.jpg'],
            ['nome' => 'Rum Bacardi', 'descricao_produto' => 'Rum branco', 'tipo_produto' => 'destilado', 'preco' => 80.00, 'foto' => 'produtos/rum_bacardi.jpg'],
            ['nome' => 'Coca-Cola', 'descricao_produto' => 'Refrigerante clássico', 'tipo_produto' => 'refrigerante', 'preco' => 6.50, 'foto' => 'produtos/coca_cola.jpg'],
            ['nome' => 'Guaraná Antarctica', 'descricao_produto' => 'Refrigerante de guaraná', 'tipo_produto' => 'refrigerante', 'preco' => 5.50, 'foto' => 'produtos/guarana.jpg'],
            ['nome' => 'Fanta Laranja', 'descricao_produto' => 'Refrigerante de laranja', 'tipo_produto' => 'refrigerante', 'preco' => 5.50, 'foto' => 'produtos/fanta_laranja.jpg'],
            ['nome' => 'Cerveja Stout', 'descricao_produto' => 'Cerveja escura e encorpada', 'tipo_produto' => 'alcoólica', 'preco' => 9.00, 'foto' => 'produtos/cerveja_stout.jpg'],
            ['nome' => 'Gin Tanqueray', 'descricao_produto' => 'Gin importado', 'tipo_produto' => 'destilado', 'preco' => 90.00, 'foto' => 'produtos/gin_tanqueray.jpg'],
            ['nome' => 'Cerveja Lager', 'descricao_produto' => 'Cerveja clara tradicional', 'tipo_produto' => 'alcoólica', 'preco' => 6.00, 'foto' => 'produtos/cerveja_lager.jpg'],
            ['nome' => 'Tequila José Cuervo', 'descricao_produto' => 'Tequila prata', 'tipo_produto' => 'destilado', 'preco' => 110.00, 'foto' => 'produtos/tequila_cuervo.jpg'],
            ['nome' => 'Sprite', 'descricao_produto' => 'Refrigerante limão', 'tipo_produto' => 'refrigerante', 'preco' => 5.50, 'foto' => 'produtos/sprite.jpg'],
            ['nome' => 'Cerveja Pale Ale', 'descricao_produto' => 'Cerveja artesanal clara', 'tipo_produto' => 'alcoólica', 'preco' => 8.50, 'foto' => 'produtos/cerveja_pale.jpg'],
            ['nome' => 'Cerveja Red Ale', 'descricao_produto' => 'Cerveja avermelhada', 'tipo_produto' => 'alcoólica', 'preco' => 8.50, 'foto' => 'produtos/cerveja_red.jpg'],
            ['nome' => 'Whisky Chivas Regal', 'descricao_produto' => 'Whisky escocês', 'tipo_produto' => 'destilado', 'preco' => 130.00, 'foto' => 'produtos/whisky_chivas.jpg'],
            ['nome' => 'Rum Havana Club', 'descricao_produto' => 'Rum cubano', 'tipo_produto' => 'destilado', 'preco' => 85.00, 'foto' => 'produtos/rum_havana.jpg'],
            ['nome' => 'Fanta Uva', 'descricao_produto' => 'Refrigerante de uva', 'tipo_produto' => 'refrigerante', 'preco' => 5.50, 'foto' => 'produtos/fanta_uva.jpg'],
            ['nome' => 'Guaraná Zero', 'descricao_produto' => 'Refrigerante zero açúcar', 'tipo_produto' => 'refrigerante', 'preco' => 5.50, 'foto' => 'produtos/guarana_zero.jpg'],
        ];

        // Cria um usuário padrão para associar aos produtos, caso não exista.
        $user = User::firstOrCreate(
            ['email' => 'thiago.brito@example.com'],
            ['name' => 'Thiago Brito', 'password' => bcrypt('password')]
        );

        foreach ($produtos as $produto) {
            $produto['user_id'] = $user->id;
            Produto::create($produto);
        }
    }
}
