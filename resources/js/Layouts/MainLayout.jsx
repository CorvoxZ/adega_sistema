
import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Modal from '@/Components/Modal';

// Ícone de Carrinho (SVG)
const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962.344 1.087.835l.383 1.437M7.5 14.25L5.106 5.165A2.25 2.25 0 002.854 3H2.25" />
    </svg>
);

export default function MainLayout({ children }) {
    const { auth, cart, flash } = usePage().props;
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Mostra o modal se houver uma mensagem de sucesso no flash
        if (flash && flash.success) {
            setShowModal(true);
        }
    }, [flash]); // Observa o objeto flash para reagir a mudanças

    return (
        <div className="bg-stone-900 text-stone-300 font-sans min-h-screen flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-stone-900/80 backdrop-blur-sm">
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
                        <a href="/#sobre" className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors">
                            Sobre Nós
                        </a>
                        <a href="/#contato" className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors">
                            Contato
                        </a>
                    </div>
                    <div className="flex flex-1 justify-end items-center gap-x-6">
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

                        {/* Separador e Ícone do Carrinho */}
                        <div className="hidden lg:flex lg:h-6 lg:w-px lg:bg-stone-600" aria-hidden="true" />
                        <Link href={route('cart.index')} className="text-white hover:text-amber-400 transition-colors relative">
                            <CartIcon />
                            {cart && cart.total > 0 && (
                                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    {cart.total}
                                </span>
                            )}
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            <Modal show={showModal} onClose={() => setShowModal(false)} title="Sucesso!">
                {flash.success}
            </Modal>

            {/* Footer */}
            <footer id="contato" className="bg-stone-950/50">
                <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                    <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                        <div className="pb-6"> <a href="/#produtos" className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Produtos </a> </div>
                        <div className="pb-6"> <a href="/#sobre" className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Sobre </a> </div>
                        <div className="pb-6"> <Link href={route('login')} className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Minha Conta </Link> </div>
                        <div className="pb-6"> <Link href={route('cart.index')} className="text-sm leading-6 text-stone-300 hover:text-amber-400 transition-colors"> Carrinho </Link> </div>
                    </nav>
                    <p className="mt-10 text-center text-xs leading-5 text-stone-500">
                        &copy; {new Date().getFullYear()} Adega Virtual. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}