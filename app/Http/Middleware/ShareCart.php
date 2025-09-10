<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShareCart
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $cartSession = session('cart', []);
        $totalItems = 0;

        if (!empty($cartSession)) {
            foreach ($cartSession as $id => $details) {
                $totalItems += $details['quantity'];
            }
        }

        Inertia::share('cart', [
            'total' => $totalItems,
        ]);

        return $next($request);
    }
}
