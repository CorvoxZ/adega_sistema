import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <MainLayout>
            <Head title="Cadastrar" />

            <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">
                <div className="grid w-full gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div className="rounded-[2rem] bg-gradient-to-br from-stone-900/90 via-stone-900/70 to-amber-950/30 border border-stone-700 p-10 shadow-2xl shadow-black/25 backdrop-blur-xl">
                        <div className="mb-8">
                            <span className="inline-flex rounded-full bg-amber-600/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                                Crie sua conta
                            </span>
                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">
                                Comece a sua jornada na Adega Virtual
                            </h1>
                            <p className="mt-4 max-w-xl text-stone-400">
                                Cadastre-se para acompanhar pedidos, salvar seus produtos favoritos e aproveitar promoções exclusivas.
                            </p>
                        </div>

                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <InputLabel htmlFor="name" value="Nome" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="password" value="Senha" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Confirme a senha" />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <Link
                                    href={route('login')}
                                    className="text-sm text-stone-300 hover:text-white"
                                >
                                    Já possui conta?
                                </Link>
                                <PrimaryButton className="w-full sm:w-auto" disabled={processing}>
                                    Cadastrar
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>

                    <div className="rounded-[2rem] border border-amber-500/10 bg-amber-600/10 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
                        <h2 className="text-3xl font-semibold text-white font-serif">Sua reserva está garantida</h2>
                        <p className="mt-4 text-stone-300 leading-7">
                            Crie sua conta para receber recomendações, visualizar seu histórico de compras e acessar a experiência completa do site.
                        </p>
                        <div className="mt-8 space-y-4 text-stone-300">
                            <p className="rounded-2xl border border-amber-500/20 bg-stone-900/70 px-4 py-3">Acesso rápido à sua conta.</p>
                            <p className="rounded-2xl border border-amber-500/20 bg-stone-900/70 px-4 py-3">Ofertas exclusivas para membros.</p>
                            <p className="rounded-2xl border border-amber-500/20 bg-stone-900/70 px-4 py-3">Checkout mais rápido e seguro.</p>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
