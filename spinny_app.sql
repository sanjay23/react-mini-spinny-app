-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2024 at 11:30 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spinny_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `is_active`) VALUES
(1, 'Maruti Suzuki', 1),
(2, 'Hyundai', 1),
(3, 'Tata', 1),
(4, 'Renault', 1),
(5, 'Honda', 1),
(6, 'Mahindra', 1),
(7, 'Kia', 1);

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `name`) VALUES
(1, 'Ahmedabad');

-- --------------------------------------------------------

--
-- Table structure for table `models`
--

CREATE TABLE `models` (
  `id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `year` year(4) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `transmission` enum('manual','automatic') NOT NULL DEFAULT 'manual',
  `no_of_seats` int(5) NOT NULL,
  `max_mileage` int(11) NOT NULL,
  `fual_type` mediumint(1) NOT NULL COMMENT '1=petrol,2=diesel,3=cng,4=ev'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `brand_id`, `city_id`, `year`, `price`, `transmission`, `no_of_seats`, `max_mileage`, `fual_type`) VALUES
(1, 1, 1, '2022', 600000.00, 'manual', 3, 20000, 1),
(2, 2, 1, '2022', 660000.00, 'manual', 5, 25000, 1),
(3, 3, 1, '2014', 400000.00, 'manual', 4, 30000, 2),
(4, 5, 1, '2019', 560000.00, 'manual', 5, 55000, 1),
(5, 1, 1, '2019', 570000.00, 'manual', 3, 21000, 1),
(6, 5, 1, '2018', 550000.00, 'manual', 5, 45000, 1),
(7, 6, 1, '2017', 440000.00, 'manual', 5, 32000, 1),
(8, 7, 1, '2016', 450000.00, 'manual', 4, 50000, 2),
(9, 4, 1, '2018', 570000.00, 'manual', 5, 51000, 1),
(10, 3, 1, '2016', 440000.00, 'manual', 4, 32000, 1),
(11, 1, 1, '2012', 240000.00, 'manual', 4, 56000, 1),
(12, 2, 1, '2013', 300000.00, 'manual', 5, 67000, 1),
(13, 3, 1, '2013', 290000.00, 'manual', 4, 60000, 2),
(14, 5, 1, '2016', 500000.00, 'manual', 5, 52000, 1),
(15, 5, 1, '2014', 230000.00, 'manual', 3, 78000, 1),
(16, 6, 1, '2014', 220000.00, 'manual', 5, 99000, 1),
(17, 2, 1, '2011', 210000.00, 'manual', 5, 56000, 1),
(18, 3, 1, '2016', 450000.00, 'manual', 4, 50000, 2),
(19, 4, 1, '2018', 570000.00, 'manual', 5, 51000, 1),
(20, 7, 1, '2016', 440000.00, 'manual', 4, 32000, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `models`
--
ALTER TABLE `models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
