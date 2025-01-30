-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 30, 2025 at 10:34 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task_manager`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
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
-- Table structure for table `jobs`
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
-- Table structure for table `job_batches`
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
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_01_29_045014_create_tasks_table', 1),
(5, '2025_01_30_110801_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '9e8de334ec8b806b759f21b3f1f76ff86df820c6efe88e01de92719848a8a700', '[\"*\"]', '2025-01-30 17:56:05', NULL, '2025-01-30 11:53:36', '2025-01-30 17:56:05'),
(2, 'App\\Models\\User', 1, 'auth_token', 'e2515ebb8ed9d416aa520b005a6181bddf55f18b88083497b175e3bc2c9cac69', '[\"*\"]', '2025-01-30 13:01:51', NULL, '2025-01-30 13:01:51', '2025-01-30 13:01:51'),
(3, 'App\\Models\\User', 1, 'auth_token', 'c3fb3813d058cd952068350f6c4b4ca8ba3b9897ca00465fbf771d272226fdbd', '[\"*\"]', '2025-01-30 13:02:54', NULL, '2025-01-30 13:02:29', '2025-01-30 13:02:54'),
(4, 'App\\Models\\User', 1, 'auth_token', '60842fa92ae136d91e54760959c0042c72bc7852ab47a6d5da9898c9c5dd7bf2', '[\"*\"]', '2025-01-30 14:30:13', NULL, '2025-01-30 13:07:41', '2025-01-30 14:30:13'),
(5, 'App\\Models\\User', 1, 'auth_token', '8bd3f282283a8ba790ab6423cd948a9aa3d7ce6e0b6c44941216582ab038ec34', '[\"*\"]', '2025-01-30 14:30:54', NULL, '2025-01-30 14:30:53', '2025-01-30 14:30:54'),
(6, 'App\\Models\\User', 1, 'auth_token', '52c780b8367e915029e5158556d9b67151e29a4a0f46332efdde0808515444fe', '[\"*\"]', '2025-01-30 15:58:17', NULL, '2025-01-30 14:31:11', '2025-01-30 15:58:17'),
(7, 'App\\Models\\User', 1, 'auth_token', '4946eab4f35a34bc7517bd08774d8c65081e413a822bff8bebe8d1a59cf61c31', '[\"*\"]', '2025-01-30 17:33:06', NULL, '2025-01-30 17:33:06', '2025-01-30 17:33:06'),
(8, 'App\\Models\\User', 3, 'auth_token', 'a43f054deeb56276c5d7ee1fd57a95173826d69544f74703e987533c665f4ecb', '[\"*\"]', '2025-01-30 17:54:28', NULL, '2025-01-30 17:52:59', '2025-01-30 17:54:28'),
(9, 'App\\Models\\User', 1, 'auth_token', '1b8ade2d415bd3f12a2f47179bd33612d6cf968b4601b94a5e60315acc7e1032', '[\"*\"]', '2025-01-30 17:56:53', NULL, '2025-01-30 17:56:43', '2025-01-30 17:56:53'),
(10, 'App\\Models\\User', 1, 'auth_token', '0f2c07966755061f2c3a6a0f27a698ca27fd2f9d9f6a09180f47e57ac7917475', '[\"*\"]', '2025-01-30 18:25:01', NULL, '2025-01-30 17:57:43', '2025-01-30 18:25:01'),
(11, 'App\\Models\\User', 1, 'auth_token', 'e0ab6551cf3ac815f52338cf0653c0f8814ebeca5c781d12f762488ddc94bb24', '[\"*\"]', '2025-01-30 18:26:22', NULL, '2025-01-30 18:25:44', '2025-01-30 18:26:22'),
(12, 'App\\Models\\User', 1, 'auth_token', '05af3b3b7b5fac36ea5aba7c5eefc012606dfa02098467dec72aad161638fe2a', '[\"*\"]', '2025-01-30 21:13:27', NULL, '2025-01-30 18:26:57', '2025-01-30 21:13:27'),
(13, 'App\\Models\\User', 1, 'auth_token', 'e6f5ac32e29f085ae98e2e3bf2004ff3b028565f20d5ad938ce1eab8c16a6d22', '[\"*\"]', '2025-01-30 21:19:30', NULL, '2025-01-30 21:15:52', '2025-01-30 21:19:30');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
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
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('ht35YgQ811tOFot00U3nHsqqDlekCbqbeSaz9XeJ', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiakZ6cjlXR1ZxZTZaODBrQnhOUUQ0S2FCR3F5d0lUQ0haTDFJNzR5RCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1738272319);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `priority` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `deadline` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `user_id`, `title`, `description`, `priority`, `status`, `deadline`, `created_at`, `updated_at`) VALUES
(1, 1, 'Updated Task', 'This task has been updated', 'Low', 'Completed', '2025-01-29', '2025-01-30 12:21:41', '2025-01-30 20:52:02'),
(4, 1, 'Task ds', 'dfsfd', 'Low', 'New', '2025-01-30', '2025-01-30 14:19:19', '2025-01-30 14:19:19'),
(5, 1, 'dsfsfsd', 'dfsdf', 'High', 'Cancelled', '2025-01-30', '2025-01-30 14:19:40', '2025-01-30 14:19:40'),
(6, 1, 'dsfsfsd', 'dfsdf', 'High', 'Cancelled', '2025-01-31', '2025-01-30 14:51:37', '2025-01-30 14:51:37'),
(7, 1, 'Updated Task', 'This task has been updated', 'High', 'New', '2025-01-30', '2025-01-30 15:58:06', '2025-01-30 15:58:06'),
(8, 1, 'Updated Task', 'This task has been updated', 'High', 'New', '2025-01-30', '2025-01-30 15:58:17', '2025-01-30 15:58:17'),
(9, 1, 'First Task56', 'This is the first task', 'High', 'Completed', '2025-02-01', '2025-01-30 17:56:06', '2025-01-30 17:56:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
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

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Ebenezer', 'eo199124@gmail.com', NULL, '$2y$12$HsSNrP/XMLi91KYhxoMSFuIEgSCfUmr5Cyo027Kd74MujxwKoCuMC', NULL, '2025-01-30 11:45:24', '2025-01-30 11:45:24'),
(2, 'Micheal', 'mich@gmail.com', NULL, '$2y$12$RTPuJrQYQM/Zon0COTLF0.BvOtcvH10lWMNYjs0k5GR9QCUuns2pO', NULL, '2025-01-30 13:01:21', '2025-01-30 13:01:21'),
(3, 'kwaku', 'kwaku@gmail.com', NULL, '$2y$12$VjBkAjVR4oJNLkujpmL/2eb1dbkEiat9sBFovbUJrXeUDGK0fcmtG', NULL, '2025-01-30 17:52:34', '2025-01-30 17:52:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
