-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2024 at 04:40 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `asm_php1`
--

-- --------------------------------------------------------

--
-- Table structure for table `catalog`
--

CREATE TABLE `catalog` (
  `id_catalog` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `sapxep` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `catalog`
--

INSERT INTO `catalog` (`id_catalog`, `name`, `sapxep`) VALUES
(1, 'Điện thoại', 1),
(2, 'Laptop', 1);

-- --------------------------------------------------------

--
-- Table structure for table `donhang`
--

CREATE TABLE `donhang` (
  `id` int(5) NOT NULL,
  `mahoadon` varchar(50) NOT NULL,
  `thanhtien` double(10,2) NOT NULL DEFAULT 0.00,
  `pttt` tinyint(1) NOT NULL DEFAULT 1,
  `iduser` int(5) NOT NULL,
  `hoten` varchar(50) NOT NULL,
  `diachi` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `dienthoai` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `giohang`
--

CREATE TABLE `giohang` (
  `id` int(5) NOT NULL,
  `id_product` int(5) NOT NULL,
  `img` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dongia` double(10,2) NOT NULL,
  `soluong` int(5) NOT NULL,
  `thanhtien` double(10,2) NOT NULL,
  `mahoadon` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id_img` int(5) NOT NULL,
  `name_img` varchar(50) NOT NULL,
  `id_product` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id_img`, `name_img`, `id_product`) VALUES
(1, 'iphone-1.1.jpg', 1),
(2, 'iphone-1.2.jpg', 1),
(3, 'iphone-1.3.jpg', 3),
(4, 'iphone-1.4.jpg', 3),
(5, 'iphone-1.jpg', 2),
(6, 'iphone-2.jpg', 2),
(7, 'iphone-3.jpg', 4),
(8, 'iphone-4.jpg', 4),
(9, 'laptop1.jpg', 5),
(10, 'laptop2.jpg', 5),
(11, 'laptop1.jpg', 6),
(12, 'laptop3.jpg', 6),
(13, 'iphone-1.3.jpg', 1),
(14, 'iphone-5.jpg', 3),
(15, 'iphone-3.jpg', 2),
(16, 'laptop3.jpg', 5),
(17, 'laptop6.jpg', 6),
(18, 'laptop3.jpg', 7),
(19, 'laptop7.jpg', 7),
(20, 'laptop1.jpg', 8),
(21, 'laptop7.jpg', 8),
(22, 'iphone-5.jpg', 9),
(23, 'iphone-1.jpg', 9),
(24, 'iphone-5.jpg', 10),
(25, 'chitiet_01.jpg', 10),
(26, 'chitiet_02.jpg', 10),
(27, 'laptop7.jpg', 11),
(28, 'laptop6.jpg', 11),
(29, 'laptop8.jpg', 12),
(30, 'laptop7.jpg', 12);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` int(5) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `price` double(10,2) NOT NULL DEFAULT 0.00,
  `soluong` int(5) NOT NULL DEFAULT 1,
  `price2` double(10,2) NOT NULL DEFAULT 0.00,
  `promotion` int(10) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 0,
  `view` int(10) NOT NULL DEFAULT 0,
  `id_catalog` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `name`, `img`, `price`, `soluong`, `price2`, `promotion`, `state`, `view`, `id_catalog`) VALUES
(1, 'Iphone 15.1', 'iphone-1.jpg', 1500.00, 1, 1900.00, 15, 1, 16, 1),
(2, 'Iphone 15.2', 'iphone-2.jpg', 1500.00, 1, 1900.00, 10, 1, 21, 1),
(3, 'Iphone 15.3', 'iphone-3.jpg', 1500.00, 1, 1900.00, 0, 1, 10, 1),
(4, 'Iphone 15.4', 'iphone-4.jpg', 1500.00, 1, 1900.00, 0, 1, 25, 1),
(5, 'Laptop1', 'laptop1.jpg', 1200.00, 1, 2000.00, 50, 1, 1, 2),
(6, 'Laptop2', 'laptop2.jpg', 1200.00, 1, 2000.00, 0, 1, 3, 2),
(7, 'Laptop3', 'laptop3.jpg', 1200.00, 1, 2000.00, 25, 1, 4, 2),
(8, 'Laptop4', 'laptop4.jpg', 2200.00, 1, 2500.00, 20, 1, 2, 2),
(9, 'Iphone 15.5', 'iphone-5.jpg', 1600.00, 1, 1900.00, 30, 1, 2, 1),
(10, 'Iphone 15.6', 'iphone-6.jpg', 1700.00, 1, 2000.00, 0, 1, 100, 1),
(11, 'Laptop5', 'laptop5.jpg', 1700.00, 1, 1500.00, 16, 1, 3, 2),
(12, 'Laptop6', 'laptop6.jpg', 1790.00, 1, 1990.00, 5, 1, 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `iduser` int(5) NOT NULL,
  `hoten` varchar(50) NOT NULL,
  `dienthoai` int(5) NOT NULL,
  `email` varchar(50) NOT NULL,
  `diachi` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`id_catalog`);

--
-- Indexes for table `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_donhang_user` (`iduser`);

--
-- Indexes for table `giohang`
--
ALTER TABLE `giohang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_giohang_product` (`id_product`),
  ADD KEY `fk_giohang_donhang` (`mahoadon`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id_img`),
  ADD KEY `fk_img_product` (`id_product`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `fk_product_catalog` (`id_catalog`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catalog`
--
ALTER TABLE `catalog`
  MODIFY `id_catalog` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `donhang`
--
ALTER TABLE `donhang`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `giohang`
--
ALTER TABLE `giohang`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id_img` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(5) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `giohang`
--
ALTER TABLE `giohang`
  ADD CONSTRAINT `fk_giohang_donhang` FOREIGN KEY (`mahoadon`) REFERENCES `donhang` (`id`),
  ADD CONSTRAINT `fk_giohang_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`);

--
-- Constraints for table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `fk_img_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_product_catalog` FOREIGN KEY (`id_catalog`) REFERENCES `catalog` (`id_catalog`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_donhang` FOREIGN KEY (`iduser`) REFERENCES `donhang` (`iduser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
