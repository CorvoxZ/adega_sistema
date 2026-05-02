import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <MainLayout>
            <Head title="Entrar" />

            <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">
                <div className="grid w-full gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
                    <div className="rounded-[2rem] border border-stone-700 bg-stone-800/80 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
                        <div className="mb-8">
                            <span className="inline-flex rounded-full bg-amber-600/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                                Bem-vindo de volta
                            </span>
                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">
                                Faça login e continue comprando
                            </h1>
                            <p className="mt-4 max-w-xl text-stone-400">
                                Acesse sua conta para visualizar pedidos, gerenciar seu carrinho e aproveitar as melhores ofertas da Adega Virtual.
                            </p>
                        </div>

                        <form onSubmit={submit} className="space-y-6">
                            {status && (
                                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                                    {status}
                                </div>
                            )}

                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
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
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <label className="flex items-center gap-3 text-sm text-stone-300">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    Lembrar-me
                                </label>

                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-sm text-amber-300 hover:text-amber-200"
                                    >
                                        Esqueceu a senha?
                                    </Link>
                                )}
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <Link
                                    href={route('register')}
                                    className="text-sm text-stone-300 hover:text-white"
                                >
                                    Ainda não tem conta?
                                </Link>
                                <PrimaryButton className="w-full sm:w-auto" disabled={processing}>
                                    Entrar
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>

                    <div className="rounded-[2rem] bg-gradient-to-br from-amber-600/15 via-amber-500/10 to-stone-800 border border-stone-700 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
                        <h2 className="text-3xl font-semibold text-white font-serif">Uma adega a um clique</h2>
                        <p className="mt-4 text-stone-300 leading-7">
                            Faça login para acessar sua experiência personalizada, acompanhar suas compras anteriores e receber ofertas exclusivas.
                        </p>
                        <div className="mt-8 space-y-4 text-stone-300">
                            <p className="rounded-2xl border border-stone-700 bg-stone-900/70 px-4 py-3">Acesse rapidamente seus favoritos.</p>
                            <p className="rounded-2xl border border-stone-700 bg-stone-900/70 px-4 py-3">Gerencie pedidos e histórico de compras.</p>
                            <p className="rounded-2xl border border-stone-700 bg-stone-900/70 px-4 py-3">Volte sempre que quiser.</p>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
