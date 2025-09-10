<?php
namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ProdutoController extends Controller
{
    public function welcome()
    {
        // Busca os 3 produtos mais recentes para serem exibidos como destaque.
        $featuredWines = Produto::latest()->take(3)->get();

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'featuredWines' => $featuredWines,
        ]);
    }

    public function index(Request $request)
    {
        // Busca todos os tipos de produto distintos para popular o filtro
        $tiposProduto = Produto::select('tipo_produto')->whereNotNull('tipo_produto')->distinct()->pluck('tipo_produto');

        // Inicia a query de produtos
        $query = Produto::query();

        // Aplica o filtro de busca se o parâmetro 'search' estiver presente
        $query->when($request->input('search'), function ($query, $search) {
            $query->where(function ($q) use ($search) {
                $q->where('nome', 'like', "%{$search}%")
                  ->orWhere('descricao_produto', 'like', "%{$search}%");
            });
        });

        // Aplica o filtro por tipo de produto se o parâmetro 'tipo_produto' estiver presente
        $query->when($request->input('tipo_produto'), function ($query, $tipo) {
            $query->where('tipo_produto', $tipo);
        });

        return Inertia::render('Produtos/Index', [
            'produtos' => $query->latest()->paginate(16)->withQueryString(),
            'filters' => $request->only(['search', 'tipo_produto']),
            'tiposProduto' => $tiposProduto,
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

        // Converte preço para formato do banco (ponto decimal)
        $preco = str_replace(',', '.', $request->preco);

        Produto::create([
            'nome' => $request->nome,
            'descricao_produto' => $request->descricao_produto,
            'tipo_produto' => $request->tipo_produto,
            'preco' => $preco,
            'user_id' => Auth::id(), // Associa o produto ao usuário logado
        ]);

        return redirect()->back()->with('success', 'Produto cadastrado!');
}
}