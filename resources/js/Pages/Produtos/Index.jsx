import { Link, Head } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';

// Ícone de Carrinho (SVG) - Reutilizado de Welcome.jsx
const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962.344 1.087.835l.383 1.437M7.5 14.25L5.106 5.165A2.25 2.25 0 002.854 3H2.25" />
    </svg>
);

export default function Index({ auth, produtos }) {
    return (
        <>
            <Head title="Nossos Produtos" />
            <div className="bg-stone-900 text-stone-300 font-sans min-h-screen flex flex-col">
                {/* Header - Reused from Welcome.jsx */}
                <header className="bg-stone-950/80 backdrop-blur-sm sticky top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="text-2xl font-serif font-bold text-white">Adega Virtual</span>
                            </Link>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <Link href={route('produtos.index')} className="text-sm font-semibold leading-6 text-amber-400 transition-colors">
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
                                    </Link >
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Main Content */}
                <main className="flex-grow">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">
                                Nosso Catálogo de Produtos
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-stone-400">
                                Explore nossa seleção completa de bebidas para todas as ocasiões.
                            </p>
                        </div>

                        {produtos.data.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                                    {produtos.data.map((produto) => (
                                        <article key={produto.id} className="flex flex-col bg-stone-800/50 p-6 rounded-lg shadow-lg hover:shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-1">
                                            <div className="relative w-full">
                                                <img src={produto.foto_url} alt={`Foto de ${produto.nome}`} className="aspect-[3/4] w-full rounded-lg bg-gray-700 object-cover" />
                                            </div>
                                            <div className="flex-grow flex flex-col mt-6">
                                                <div className="flex items-center gap-x-4 text-xs">
                                                    {produto.tipo_produto && (
                                                        <span className="relative z-10 rounded-full bg-amber-800 px-3 py-1.5 font-medium text-white">
                                                            {produto.tipo_produto}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="group relative flex-grow mt-3">
                                                    <h3 className="text-lg font-semibold leading-6 text-white">
                                                        {produto.nome}
                                                    </h3>
                                                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-stone-400">{produto.descricao_produto}</p>
                                                </div>
                                                <div className="mt-6">
                                                    <p className="text-xl font-bold text-amber-400 mb-4">{produto.preco_formatado}</p>
                                                    <button
                                                        type="button"
                                                        className="w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors"
                                                    >
                                                        Adicionar ao Carrinho
                                                    </button>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                <Pagination links={produtos.links} />
                            </>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-stone-400">Nenhum produto encontrado no momento.</p>
                            </div>
                        )}
                    </div>
                </main>

                {/* Footer - Reused from Welcome.jsx */}
                <footer id="contato" className="bg-stone-950/50">
                    <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                            <div className="pb-6"> <Link href={route('produtos.index')} className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Produtos </Link> </div>
                            <div className="pb-6"> <a href="/#sobre" className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Sobre </a> </div>
                            <div className="pb-6"> <Link href={route('login')} className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Minha Conta </Link> </div>
                            <div className="pb-6"> <a href="#" className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Carrinho </a> </div>
                        </nav>
                        <p className="mt-10 text-center text-xs leading-5 text-stone-500">
                            &copy; {new Date().getFullYear()} Adega Virtual. Todos os direitos reservados.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
