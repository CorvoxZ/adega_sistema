import { Head, Link, useForm } from '@inertiajs/react';

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962.344 1.087.835l.383 1.437M7.5 14.25L5.106 5.165A2.25 2.25 0 002.854 3H2.25" />
    </svg>
);

const PageLayout = ({ auth, children, cart }) => (
    <div className="bg-stone-900 text-stone-300 font-sans min-h-screen flex flex-col">
        <header className="bg-stone-950/80 backdrop-blur-sm sticky top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="text-2xl font-serif font-bold text-white">Adega Virtual</span>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href={route('produtos.index')} className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors">
                        Produtos
                    </Link>
                </div>
                <div className="flex flex-1 justify-end items-center gap-x-6">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 hover:ring-white/20">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="hidden lg:block text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors">
                                Entrar <span aria-hidden="true">&rarr;</span>
                            </Link>
                            <Link href={route('register')} className="rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors">
                                Cadastrar
                            </Link>
                        </>
                    )}
                    {/* Separador e Ícone do Carrinho */}
                    <div className="hidden lg:flex lg:h-6 lg:w-px lg:bg-stone-600" aria-hidden="true" />
                    <Link href={route('cart.index')} className="text-white hover:text-amber-400 transition-colors relative">
                        <CartIcon />
                        {cart.total > 0 && (
                            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                {cart.total}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
        <main className="flex-grow">
            {children}
        </main>
        <footer className="bg-stone-950/50">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <p className="text-center text-xs leading-5 text-stone-500">
                    &copy; {new Date().getFullYear()} Adega Virtual. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    </div>
);

export default function CartIndex({ auth, cart, cartItems, total, flash }) {
    const { delete: destroy, patch, processing } = useForm();

    function handleRemoveItem(productId) {
        if (processing) return;
        destroy(route('cart.destroy', productId), {
            preserveScroll: true,
        });
    }

    function handleUpdateQuantity(productId, newQuantity) {
        if (processing || newQuantity < 1) return;
        patch(route('cart.update', productId), {
            quantity: newQuantity
        }, {
            preserveScroll: true,
        });
    }

    return (
        <PageLayout auth={auth} cart={cart}>
            <Head title="Seu Carrinho" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-stone-800/50 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-stone-200">
                            <h1 className="text-3xl font-bold text-white mb-6 font-serif">Seu Carrinho de Compras</h1>

                            {flash.success && (
                                <div className="mb-4 bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded relative" role="alert">
                                    <span className="block sm:inline">{flash.success}</span>
                                </div>
                            )}

                            {cartItems.length > 0 ? (
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Itens do Carrinho */}
                                    <div className="lg:w-2/3">
                                        <ul role="list" className="divide-y divide-stone-700">
                                            {cartItems.map((item) => (
                                                <li key={item.id} className="flex py-6">
                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-stone-700">
                                                        <img
                                                            src={item.foto_url || '/images/placeholder.jpg'}
                                                            alt={`Vinho ${item.nome}`}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base font-medium text-white">
                                                                <h3><Link href="#">{item.nome}</Link></h3>
                                                                <p className="ml-4">{item.subtotal_formatado}</p>
                                                            </div>
                                                            <p className="mt-1 text-sm text-stone-400">{item.preco_formatado} cada</p>
                                                        </div>
                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                            <div className="flex items-center border border-stone-600 rounded">
                                                                <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1 || processing} className="px-2 py-1 text-lg disabled:text-stone-500">-</button>
                                                                <span className="px-3 py-1">{item.quantity}</span>
                                                                <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} disabled={processing} className="px-2 py-1 text-lg">+</button>
                                                            </div>

                                                            <div className="flex">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleRemoveItem(item.id)}
                                                                    disabled={processing}
                                                                    className="font-medium text-amber-500 hover:text-amber-400 disabled:text-stone-500"
                                                                >
                                                                    Remover
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Resumo do Pedido */}
                                    <div className="lg:w-1/3">
                                        <div className="border-t border-stone-700 pt-4 mt-4 lg:mt-0 lg:border-0 lg:pt-0">
                                            <div className="rounded-lg bg-stone-900/60 p-6">
                                                <h2 className="text-lg font-medium text-white">Resumo do Pedido</h2>
                                                <dl className="mt-6 space-y-4">
                                                    <div className="flex items-center justify-between border-t border-stone-700 pt-4">
                                                        <dt className="text-base font-medium text-white">Total</dt>
                                                        <dd className="text-base font-medium text-white">{total}</dd>
                                                    </div>
                                                </dl>
                                                <div className="mt-6">
                                                    <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-500">
                                                        Finalizar Compra
                                                    </a>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-sm text-stone-400">
                                                    <p>
                                                        ou{' '}
                                                        <Link href={route('produtos.index')} className="font-medium text-amber-500 hover:text-amber-400">
                                                            Continuar Comprando
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-10">
                                    <p className="text-lg text-stone-400">Seu carrinho está vazio.</p>
                                    <Link
                                        href={route('produtos.index')}
                                        className="mt-4 inline-block rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all duration-300"
                                    >
                                        Ver Produtos
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
