# Adega Sistema

Uma loja virtual de adega construída com **Laravel 12**, **Inertia.js**, **React** e **Tailwind CSS**.

## Visão geral

Este projeto é um sistema de comércio eletrônico simples para uma adega virtual com:

- Catálogo de produtos
- Carrinho de compras com atualização de quantidade
- Login e cadastro de usuário
- Dashboard autenticado
- Layout responsivo com a cara do site

## Tecnologias

- PHP 8.2
- Laravel 12
- Inertia.js
- React 18
- Tailwind CSS 3
- Vite
- Ziggy

## Funcionalidades principais

- Página inicial com destaque de produtos
- Listagem de produtos em `/produtos`
- Adicionar ao carrinho em qualquer produto
- Página de carrinho em `/carrinho`
- Incrementar e decrementar quantidades no carrinho
- Login em `/login`
- Cadastro em `/register`
- Logout funcionando globalmente em todas as telas
- Dashboard protegido para usuários logados

## Rotas importantes

- `/` - Home
- `/produtos` - Catálogo de produtos
- `/carrinho` - Carrinho de compras
- `/login` - Tela de login
- `/register` - Tela de cadastro
- `/dashboard` - Área restrita do usuário admin

## Instalação

1. Clone o repositório:
   ```bash
   git clone <repo-url> adega_sistema
   cd adega_sistema
   ```

2. Instale as dependências PHP:
   ```bash
   composer install
   ```

3. Instale as dependências JS:
   ```bash
   npm install
   ```

4. Copie o arquivo de ambiente e configure o banco:
   ```bash
   cp .env.example .env
   ```

5. Gere a chave do aplicativo:
   ```bash
   php artisan key:generate
   ```

6. Ajuste as configurações de banco de dados em `.env`.

7. Execute migrações e seeders:
   ```bash
   php artisan migrate
   php artisan db:seed --class=UsuarioSeeder
   ```

8. Faça build dos assets:
   ```bash
   npm run build
   ```

9. Inicie o servidor local:
   ```bash
   php artisan serve
   ```

## Usuário de teste

Use as credenciais abaixo para acessar o sistema depois do seeder:

- Email: `thiago@example.com`
- Senha: `12345678`

## Notas importantes

- O sistema utiliza `users` com os campos:
  - `nome_completo`
  - `cpf`
  - `email`
  - `senha`
- O frontend usa Inertia + React e está em `resources/js/Pages`.
- O layout global está em `resources/js/Layouts/MainLayout.jsx`.

## Desenvolvimento

Para rodar em modo de desenvolvimento:

```bash
npm run dev
```

Se precisar rodar o backend e frontend juntos, use o servidor Laravel e o Vite em paralelo.

## Licença

Este projeto é licenciado sob a licença **MIT**.
