<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Exibe a página do carrinho de compras.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $cartSession = session('cart', []);
        $cartItems = [];
        $total = 0;

        if (!empty($cartSession)) {
            $productIds = array_keys($cartSession);
            $products = Produto::find($productIds);

            foreach ($products as $product) {
                $quantity = $cartSession[$product->id]['quantity'];
                $subtotal = $product->preco * $quantity;
                $cartItems[] = [
                    'id' => $product->id,
                    'nome' => $product->nome,
                    'foto_url' => $product->foto_url,
                    'preco_formatado' => $product->preco_formatado,
                    'quantity' => $quantity,
                    'subtotal' => $subtotal,
                    'subtotal_formatado' => 'R$ ' . number_format($subtotal, 2, ',', '.'),
                ];
                $total += $subtotal;
            }
        }

        return Inertia::render('Carrinho/Index', [
            'cartItems' => $cartItems,
            'total' => 'R$ ' . number_format($total, 2, ',', '.'),
        ]);
    }

    /**
     * Adiciona um produto ao carrinho.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:produtos,id',
        ]);

        $cart = session()->get('cart', []);
        $productId = $request->product_id;

        if (isset($cart[$productId])) {
            $cart[$productId]['quantity']++;
        } else {
            $cart[$productId] = [
                'quantity' => 1,
            ];
        }

        session()->put('cart', $cart);

        return redirect()->back()->with('success', 'Produto adicionado ao carrinho!');
    }

    /**
     * Atualiza a quantidade de um item no carrinho.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Produto $produto)
    {
        $request->validate(['quantity' => 'required|integer|min:1']);
        $cart = session()->get('cart', []);

        if (isset($cart[$produto->id])) {
            $cart[$produto->id]['quantity'] = $request->quantity;
            session()->put('cart', $cart);
        }

        return to_route('cart.index')->with('status', 'Carrinho atualizado.');
    }

    /**
     * Remove um item do carrinho.
     *
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Produto $produto)
    {
        $cart = session()->get('cart', []);

        if (isset($cart[$produto->id])) {
            unset($cart[$produto->id]);
            session()->put('cart', $cart);
        }

        return to_route('cart.index')->with('status', 'Produto removido do carrinho.');
    }
}