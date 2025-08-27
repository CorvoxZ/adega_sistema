import { Link, Head, useForm } from '@inertiajs/react';

// Ícone de Carrinho (SVG)
const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962.344 1.087.835l.383 1.437M7.5 14.25L5.106 5.165A2.25 2.25 0 002.854 3H2.25" />
    </svg>
);

export default function Welcome({ auth, featuredWines = [], cart }) {
    const { post } = useForm({});

    function handleAddToCart(productId) {
        post(route('cart.store'), {
            product_id: productId,
        }, {
            preserveScroll: true, // Evita que a página role para o topo
        });
    }

    return (
        <>
            <Head title="Bem-vindo à Adega Virtual" />
            <div className="bg-stone-900 text-stone-300 font-sans">
                {/* Header */}
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="text-2xl font-serif font-bold text-white">Adega Virtual</span>
                            </Link>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <Link href={route('produtos.index')} className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors">
                                Produtos
                            </Link>
                            <a href="#sobre" className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors">
                                Sobre Nós
                            </a>
                            <a href="#contato" className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors">
                                Contato
                            </a>
                        </div>
                        <div className="flex lg:flex-1 lg:justify-end items-center gap-x-6">
                            <Link href="#" className="text-white hover:text-amber-400 transition-colors relative">
                                <CartIcon />
                                {cart.total > 0 && (
                                    <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                        {cart.total}
                                    </span>
                                )}
                            </Link>

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

                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-14">
                    <img
                        src="/images/fundo_adega.jpg"
                        alt="Garrafas de vinho em uma prateleira de madeira escura"
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-950/70"></div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif [text-shadow:2px_2px_6px_rgba(0,0,0,0.8)]">
                                Os Melhores Vinhos, na sua Casa
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.8)]">
                                Descubra uma seleção exclusiva de vinhos nacionais e importados, escolhidos para proporcionar experiências inesquecíveis.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    href={route('produtos.index')}
                                    className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    Ver Catálogo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Products Section */}
                <section id="produtos" className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">Nossos Destaques</h2>
                            <p className="mt-6 text-lg leading-8 text-stone-400">
                                Uma seleção especial dos vinhos mais apreciados pelos nossos clientes.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {featuredWines.map((wine) => (
                                <article key={wine.id} className="flex flex-col items-start justify-between bg-stone-800/50 p-6 rounded-lg shadow-lg hover:shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="relative w-full">
                                        <img src={wine.foto_url} alt={`Garrafa de ${wine.nome}`} className="aspect-[9/16] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/4]" />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="max-w-xl w-full mt-6">
                                        <div className="flex items-center justify-between gap-x-4">
                                            <span className="relative z-10 rounded-full bg-amber-800 px-3 py-1.5 text-xs font-medium text-white self-center">
                                                {wine.tipo_produto}
                                            </span>
                                            <p className="text-lg font-semibold text-amber-400">{wine.preco_formatado}</p>
                                        </div>
                                        <div className="group relative">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-amber-400">
                                                <a href="#"><span className="absolute inset-0" />{wine.nome}</a>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-stone-400">{wine.descricao_produto || 'Uma breve descrição do vinho, suas notas e harmonização.'}</p>
                                        </div>
                                        <div className="mt-6">
                                            <button
                                                type="button"
                                                onClick={() => handleAddToCart(wine.id)}
                                                className="w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all duration-300 transform hover:scale-105"
                                            >
                                                Adicionar ao Carrinho
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <div className="mt-20 text-center">
                            <Link
                                href={route('produtos.index')}
                                className="rounded-md bg-amber-600 px-4 py-3 text-base font-semibold text-white shadow-lg hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                Ver nosso catálogo completo
                            </Link>
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section id="sobre" className="bg-stone-950/20 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">Nossa História</h2>
                            <p className="mt-6 text-lg leading-8 text-stone-400">
                                Nascemos da paixão por vinhos e do desejo de compartilhar essa paixão. Desde 2020, nossa adega seleciona rótulos que contam histórias e criam memórias. Cada garrafa é uma viagem, e queremos ser o seu guia.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer id="contato" className="bg-stone-950/50">
                    <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                            <div className="pb-6"> <a href="#produtos" className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Produtos </a> </div>
                            <div className="pb-6"> <a href="#sobre" className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Sobre </a> </div>
                            <div className="pb-6"> <Link href={route('login')} className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Minha Conta </Link> </div>
                            <div className="pb-6"> <a href="#" className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Carrinho </a> </div>
                        </nav>
                        <div className="mt-10 flex justify-center space-x-10">
                            <a href="#" className="text-stone-400 hover:text-amber-400">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.398 1.363.444 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.046 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.398-2.427.444-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.398-1.363-.444-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.046-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 4.245c.636-.247 1.363-.398 2.427-.444C9.531 2.013 9.885 2 12.315 2zM4.842 12a7.468 7.468 0 00-1.153 3.808c-.046 1.024-.06 1.378-.06 3.808s.013 2.784.06 3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772c.636.247 1.363.398 2.427.444 1.024.048 1.378.06 3.808.06s2.784-.013 3.808-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.398-1.363.444-2.427.048-1.024.06-1.378.06-3.808s-.012-2.784-.06-3.808c-.046-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0018.16 4.245c-.636-.247-1.363-.398-2.427-.444-1.024-.048-1.378-.06-3.808-.06s-2.784.013-3.808.06c-1.064.049-1.791.218-2.427.465a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 004.842 12z" clipRule="evenodd" /><path d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /><path d="M16.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
                            </a>
                            <a href="#" className="text-stone-400 hover:text-amber-400">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                        <p className="mt-10 text-center text-xs leading-5 text-stone-500">
                            &copy; {new Date().getFullYear()} Adega Virtual. Todos os direitos reservados.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
