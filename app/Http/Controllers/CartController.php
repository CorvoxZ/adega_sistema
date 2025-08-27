<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => ['required', 'exists:produtos,id'],
        ]);

        $produto = Produto::findOrFail($request->input('product_id'));

        // Pega o carrinho da sessão ou inicia um array vazio
        $cart = session()->get('cart', []);

        // Verifica se o produto já está no carrinho
        if (isset($cart[$produto->id])) {
            // Se sim, incrementa a quantidade
            $cart[$produto->id]['quantity']++;
        } else {
            // Se não, adiciona o produto ao carrinho
            $cart[$produto->id] = [
                "name" => $produto->nome,
                "quantity" => 1,
                "price" => $produto->preco,
                "photo_url" => $produto->foto_url
            ];
        }

        // Salva o carrinho de volta na sessão
        session()->put('cart', $cart);

        // Redireciona de volta com uma mensagem de sucesso
        return redirect()->back()->with('success', 'Produto adicionado ao carrinho!');
    }
}