<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProdutoController::class, 'welcome'])->name('welcome');

Route::get('/produtos', [ProdutoController::class, 'index'])->name('produtos.index');

// Rotas do Carrinho
Route::post('/cart', [CartController::class, 'store'])->name('cart.store');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    // Rota para exibir o formulário de criação de vinho
    Route::get('/vinhos/create', function () {
        return Inertia::render('Vinhos/Create');
    })->name('vinhos.create');

    // Rota para processar o formulário (será implementada no backend depois)
    Route::post('/vinhos', function () {
        // A lógica de validação e salvamento no banco de dados virá aqui.
        return to_route('dashboard')->with('message', 'Vinho adicionado com sucesso!');
    })->name('vinhos.store');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //minhas rotas
    Route::get('/usuarios/create', [UsuarioController::class, 'create'])->name('usuarios.create');
    Route::post('/usuarios', [UsuarioController::class, 'store'])->name('usuarios.store');
});

require __DIR__.'/auth.php';
