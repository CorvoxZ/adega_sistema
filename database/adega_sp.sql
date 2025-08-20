-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 20/08/2025 às 00:24
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `adega_sp`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_08_19_204608_create_usuarios_table', 1),
(5, '2025_08_19_212837_create_produtos_table', 2),
(6, '2025_08_19_213551_add_foto_to_produtos_table', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome` varchar(255) NOT NULL,
  `descricao_produto` text DEFAULT NULL,
  `tipo_produto` varchar(255) DEFAULT NULL,
  `preco` decimal(10,2) NOT NULL,
  `usuario_cadastro` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `descricao_produto`, `tipo_produto`, `preco`, `usuario_cadastro`, `foto`, `created_at`, `updated_at`) VALUES
(1, 'Cerveja Pilsen', 'Cerveja clara, leve', 'alcoólica', 5.50, 'Thiago Brito', 'produtos/cerveja_pilsen.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(2, 'Cerveja IPA', 'Cerveja artesanal IPA', 'alcoólica', 8.90, 'Thiago Brito', 'produtos/cerveja_ipa.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(3, 'Cerveja Weiss', 'Cerveja de trigo', 'alcoólica', 7.00, 'Thiago Brito', 'produtos/cerveja_weiss.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(4, 'Vodka Smirnoff', 'Vodka importada', 'destilado', 45.00, 'Thiago Brito', 'produtos/vodka_smirnoff.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(5, 'Whisky Jack Daniel\'s', 'Whisky americano', 'destilado', 120.00, 'Thiago Brito', 'produtos/whisky_jack.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(6, 'Rum Bacardi', 'Rum branco', 'destilado', 80.00, 'Thiago Brito', 'produtos/rum_bacardi.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(7, 'Coca-Cola', 'Refrigerante clássico', 'refrigerante', 6.50, 'Thiago Brito', 'produtos/coca_cola.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(8, 'Guaraná Antarctica', 'Refrigerante de guaraná', 'refrigerante', 5.50, 'Thiago Brito', 'produtos/guarana.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(9, 'Fanta Laranja', 'Refrigerante de laranja', 'refrigerante', 5.50, 'Thiago Brito', 'produtos/fanta_laranja.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(10, 'Cerveja Stout', 'Cerveja escura e encorpada', 'alcoólica', 9.00, 'Thiago Brito', 'produtos/cerveja_stout.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(11, 'Gin Tanqueray', 'Gin importado', 'destilado', 90.00, 'Thiago Brito', 'produtos/gin_tanqueray.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(12, 'Cerveja Lager', 'Cerveja clara tradicional', 'alcoólica', 6.00, 'Thiago Brito', 'produtos/cerveja_lager.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(13, 'Tequila José Cuervo', 'Tequila prata', 'destilado', 110.00, 'Thiago Brito', 'produtos/tequila_cuervo.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(14, 'Sprite', 'Refrigerante limão', 'refrigerante', 5.50, 'Thiago Brito', 'produtos/sprite.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(15, 'Cerveja Pale Ale', 'Cerveja artesanal clara', 'alcoólica', 8.50, 'Thiago Brito', 'produtos/cerveja_pale.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(16, 'Cerveja Red Ale', 'Cerveja avermelhada', 'alcoólica', 8.50, 'Thiago Brito', 'produtos/cerveja_red.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(17, 'Whisky Chivas Regal', 'Whisky escocês', 'destilado', 130.00, 'Thiago Brito', 'produtos/whisky_chivas.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(18, 'Rum Havana Club', 'Rum cubano', 'destilado', 85.00, 'Thiago Brito', 'produtos/rum_havana.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(19, 'Fanta Uva', 'Refrigerante de uva', 'refrigerante', 5.50, 'Thiago Brito', 'produtos/fanta_uva.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19'),
(20, 'Guaraná Zero', 'Refrigerante zero açúcar', 'refrigerante', 5.50, 'Thiago Brito', 'produtos/guarana_zero.jpg', '2025-08-20 00:38:19', '2025-08-20 00:38:19');

-- --------------------------------------------------------

--
-- Estrutura para tabela `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('FNhKp0lYzDPifF3X0nOgI7abgt4JVU14uI6lPtov', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQlpVVndZU2tGT2RLaGtBWWVkVU1RbDNDekZ5Qk41c1ZSMjgweEZ6UCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC93ZWxjb21lIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755641230);

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome_completo` varchar(255) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome_completo`, `cpf`, `senha`, `created_at`, `updated_at`) VALUES
(1, 'Thiago Brito', '17180780723', '$2y$12$I8BLsbsvUufI0kNVsgwLa.jxuWrVoMnsNZMrblqAmAW4hl11gwg6y', '2025-08-19 23:49:46', '2025-08-19 23:49:46');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Índices de tabela `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Índices de tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Índices de tabela `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Índices de tabela `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarios_cpf_unique` (`cpf`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
