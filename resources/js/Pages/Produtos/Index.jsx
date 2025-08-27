import { Head, Link, useForm } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';

// Ícone de Carrinho (SVG)
const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962.344 1.087.835l.383 1.437M7.5 14.25L5.106 5.165A2.25 2.25 0 002.854 3H2.25" />
    </svg>
);

export default function Index({ auth, produtos, filters, tiposProduto = [] }) {
    const { data, setData, get, processing } = useForm({
        search: filters.search || '',
        tipo_produto: filters.tipo_produto || '',
    });

    function submit(e) {
        e.preventDefault();
        get(route('produtos.index'), {
            preserveState: true,
            replace: true,
        });
    }

    return (
        <>
            <Head title="Nosso Catálogo" />
            <div className="bg-stone-900 text-stone-300 font-sans min-h-screen">
                {/* Header */}
                <header className="bg-stone-950/50 backdrop-blur-sm sticky top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="text-2xl font-serif font-bold text-white">Adega Virtual</span>
                            </Link>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <Link href={route('produtos.index')} className="text-sm font-semibold leading-6 text-amber-400">
                                Produtos
                            </Link>
                            <a href="/#sobre" className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors">
                                Sobre Nós
                            </a>
                            <a href="/#contato" className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors">
                                Contato
                            </a>
                        </div>
                        <div className="flex lg:flex-1 lg:justify-end items-center gap-x-6">
                            <a href="#" className="text-white hover:text-amber-400 transition-colors">
                                <CartIcon />
                            </a>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 hover:ring-white/20"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="hidden lg:block text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors"
                                    >
                                        Entrar <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors"
                                    >
                                        Cadastrar
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                <main className="py-12 sm:py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">Nosso Catálogo</h1>
                            <p className="mt-4 text-lg leading-8 text-stone-400">
                                Explore nossa coleção completa de vinhos e outras bebidas.
                            </p>
                        </div>

                        {/* Filter and Search Form */}
                        <form onSubmit={submit} className="mb-12 flex flex-col sm:flex-row gap-4 items-center bg-stone-800/50 p-4 rounded-lg">
                            <div className="relative flex-grow w-full sm:w-auto">
                                <input
                                    type="text"
                                    name="search"
                                    value={data.search}
                                    onChange={(e) => setData('search', e.target.value)}
                                    placeholder="Buscar por nome do produto..."
                                    className="w-full pl-4 pr-4 py-2 bg-stone-900 border-stone-700 text-white rounded-md focus:ring-amber-500 focus:border-amber-500"
                                />
                            </div>
                            <div className="flex-shrink-0 w-full sm:w-auto">
                                <select
                                    name="tipo_produto"
                                    value={data.tipo_produto}
                                    onChange={(e) => setData('tipo_produto', e.target.value)}
                                    className="w-full bg-stone-900 border-stone-700 text-white rounded-md focus:ring-amber-500 focus:border-amber-500"
                                >
                                    <option value="">Todos os tipos</option>
                                    {tiposProduto.map((tipo) => (
                                        <option key={tipo} value={tipo}>{tipo}</option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-6 py-2 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-500 transition-colors disabled:opacity-50"
                                disabled={processing}
                            >
                                Filtrar
                            </button>
                            <Link
                                href={route('produtos.index')}
                                className="w-full sm:w-auto text-center px-6 py-2 bg-stone-700 text-white font-semibold rounded-md hover:bg-stone-600 transition-colors"
                            >
                                Limpar
                            </Link>
                        </form>

                        {/* Product Grid */}
                        {produtos.data.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                                {produtos.data.map((produto) => (
                                    <article key={produto.id} className="flex flex-col items-start justify-between bg-stone-800/50 p-6 rounded-lg shadow-lg hover:shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-1">
                                        <div className="relative w-full">
                                            <img src={produto.foto_url} alt={`Garrafa de ${produto.nome}`} className="aspect-[9/16] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/4]" />
                                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="max-w-xl w-full mt-6">
                                            <div className="flex items-center justify-between gap-x-4">
                                                <span className="relative z-10 rounded-full bg-amber-800 px-3 py-1.5 text-xs font-medium text-white self-center">
                                                    {produto.tipo_produto}
                                                </span>
                                                <p className="text-lg font-semibold text-amber-400">{produto.preco_formatado}</p>
                                            </div>
                                            <div className="group relative">
                                                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-amber-400">
                                                    <a href="#"><span className="absolute inset-0" />{produto.nome}</a>
                                                </h3>
                                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-stone-400">{produto.descricao_produto || 'Uma breve descrição do produto.'}</p>
                                            </div>
                                            <div className="mt-6">
                                                <button
                                                    type="button"
                                                    className="w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all duration-300 transform hover:scale-105"
                                                >
                                                    Adicionar ao Carrinho
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-xl text-stone-400">Nenhum produto encontrado com os filtros aplicados.</p>
                            </div>
                        )}

                        {/* Pagination */}
                        {produtos.data.length > 0 && (
                            <div className="mt-16">
                                <Pagination links={produtos.links} />
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
