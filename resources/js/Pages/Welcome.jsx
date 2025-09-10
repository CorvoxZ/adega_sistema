import { Link, Head, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Welcome({ auth, featuredWines = [], cart, flash }) {
    function handleAddToCart(productId) {
        router.post(route('cart.store'), {
            product_id: productId,
        }, {
            preserveScroll: true,
            onSuccess: () => {
                // A notificação de sucesso já é tratada pelo MainLayout
            },
        });
    }

    return (
        <>
            <Head title="Bem-vindo à Adega Virtual" />
            <div className="bg-stone-900 text-stone-300 font-sans"> {/* Manter a cor de fundo específica da página, se necessário */}
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
                                As melhores bebidas na sua casa!
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.8)]">
                                Descubra uma seleção exclusiva de bebidas nacionais e importadas, escolhidos para proporcionar experiências inesquecíveis.
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
                                Uma seleção especial das bebidas mais apreciadas pelos nossos clientes.
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
                                                className="w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all duration-300 transform hover:scale-105 disabled:bg-stone-500 disabled:cursor-not-allowed"
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
            </div>
        </>
    );
}

Welcome.layout = page => <MainLayout {...page.props} children={page} />
