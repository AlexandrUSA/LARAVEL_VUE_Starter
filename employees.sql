-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 08 2018 г., 13:14
-- Версия сервера: 5.7.20
-- Версия PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `tourism`
--

-- --------------------------------------------------------

--
-- Структура таблицы `employees`
--

CREATE TABLE `employees` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` char(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `patronymic` char(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `birthday` date NOT NULL,
  `salary` int(11) NOT NULL,
  `position` char(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `employees`
--

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `patronymic`, `birthday`, `salary`, `position`, `address`, `phone_number`, `created_at`, `updated_at`) VALUES
(2, 'Александр', 'Лукашенко', 'Григорьевич', '1937-03-14', 1580, 'Старший сотрудник', 'г. Минск, Президентский дворец, корпус Г', '+37511111111', NULL, '2018-03-03 17:07:38'),
(4, 'Владимир', 'Селедкин', 'Владимирович', '1973-02-16', 460, 'Сотрудник', 'г. Гомель, проспект Речицкий, д. 23, кв 68', '+37512345678', '2018-03-03 17:23:49', '2018-03-03 18:26:59'),
(5, 'Зинаида', 'Лебедева', 'Михайловна', '1959-11-25', 520, 'Сотрудник', 'г. Ельск, ул. Матюшенко, д.34, кв.45', '+375985643434', '2018-03-03 17:25:38', '2018-03-03 19:33:27'),
(6, 'Сергей', 'Помойкин', 'Алексеевич', '1989-02-05', 320, 'Сотрудник', 'г. Гомель, ул. Советская, д.45, кв. 45', '+37543434445', '2018-03-03 17:26:59', '2018-03-03 17:26:59'),
(7, 'Михаил', 'Поветкин', 'Алексеевич', '1990-08-23', 580, 'Бухгалтер', 'г. Гомель, ул. Матюшенко, д56, кв.23', '+3758965875', '2018-03-03 17:28:14', '2018-03-03 17:28:14'),
(8, 'Юлия', 'Воробей', 'Леонидовна', '1993-12-08', 1700, 'Директор', 'г.Гомель, проспект Октября, д.45, кв. 13', '+375232323232', '2018-03-03 17:30:09', '2018-03-03 17:30:09'),
(9, 'Вадим', 'Мазепин', 'Александрович', '1988-05-12', 470, 'Сотрудник', 'г. Гомель,  проспект Октября, д. 34, кв. 7', '+3752244545656', '2018-03-03 17:31:13', '2018-03-03 19:56:22'),
(10, 'Михаил', 'Горбачев', 'Сергеевич', '1963-02-17', 470, 'Бухгалтер', 'г. Москва, ул. Красная поляна, д.126, кв.12', '+33778787878', '2018-03-03 18:28:02', '2018-03-03 18:28:02'),
(11, 'Владимир', 'Гриневич', 'Григорьевич', '1961-09-07', 840, 'Старший сотрудник', 'г. Гомель, проспект Речицкий, д. 64, кв. 12', '+37545454534', '2018-03-03 18:29:17', '2018-03-03 18:29:17'),
(12, 'Мария', 'Краснова', 'Михайловна', '1991-02-07', 560, 'Сотрудник', 'г. Гомель, ул. Барыкина, . 45', '+3753434343', '2018-03-03 18:30:17', '2018-03-03 18:30:17'),
(13, 'Ксения', 'Белова', 'Андеевна', '2002-05-24', 470, 'Сотрудник', 'г. Гомель, ул. Черниговская, д. 45', '+37534343434343', '2018-03-03 18:31:32', '2018-03-03 18:31:32');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
