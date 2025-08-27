import { Link } from '@inertiajs/react';

export default function Pagination({ links = [] }) {
    // Não renderiza nada se houver 3 ou menos links (ex: anterior, 1, próximo)
    if (links.length <= 3) {
        return null;
    }

    return (
        <div className="flex justify-center mt-16" aria-label="Pagination">
            <nav className="flex flex-wrap justify-center items-center gap-2">
                {links.map((link, key) =>
                    link.url === null ? (
                        <div
                            key={key}
                            className="px-4 py-3 text-sm leading-4 text-stone-500 border border-stone-700 rounded-lg cursor-not-allowed"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <Link
                            key={key}
                            className={`px-4 py-3 text-sm leading-4 border rounded-lg transition-colors duration-200 ${
                                link.active ? 'bg-amber-600 text-white border-amber-600' : 'bg-stone-900 text-stone-300 border-stone-700 hover:bg-stone-800 hover:text-white'
                            }`}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    )
                )}
            </nav>
        </div>
    );
}
