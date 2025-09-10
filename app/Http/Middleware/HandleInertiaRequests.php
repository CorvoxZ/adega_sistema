<?php

namespace App\Http\Middleware;

use Tighten\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],            
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],

            'cart' => function () use ($request) {
                $cartSession = $request->session()->get('cart', []);
                return [
                    // Calcula o total de itens no carrinho para exibir no cabeçalho
                    'total' => collect($cartSession)->sum('quantity'),
                ];
            },
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
            ],
        ];
    }
}
