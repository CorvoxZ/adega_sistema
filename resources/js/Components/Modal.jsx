import { Link } from '@inertiajs/react';

const Modal = ({ show, onClose, title, children, actions }) => {
    if (!show) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center"
            onClick={onClose} // Fecha o modal ao clicar no fundo
        >
            <div
                className="bg-stone-800 rounded-lg shadow-xl p-6 w-full max-w-md m-4 text-white transform transition-all"
                onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal o feche
            >
                <div className="text-center">
                    {/* Ícone de Sucesso */}
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>

                    {/* Título e Mensagem */}
                    <h3 className="text-lg leading-6 font-medium font-serif" id="modal-title">
                        {title}
                    </h3>
                    <div className="mt-2">
                        <p className="text-sm text-stone-400">
                            {children}
                        </p>
                    </div>
                </div>

                {/* Botões de Ação */}
                <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full inline-flex justify-center rounded-md border border-stone-600 shadow-sm px-4 py-2 bg-stone-700 text-base font-medium text-white hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-800 focus:ring-amber-500 sm:text-sm transition-colors"
                    >
                        Continuar Comprando
                    </button>
                    <Link
                        href={route('cart.index')}
                        onClick={onClose}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-amber-600 text-base font-medium text-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-800 focus:ring-amber-500 sm:text-sm transition-colors"
                    >
                        Ir para o Carrinho
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Modal;
