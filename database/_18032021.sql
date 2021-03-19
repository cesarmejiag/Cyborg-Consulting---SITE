-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 18-03-2021 a las 14:31:30
-- Versión del servidor: 5.6.49-cll-lve
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cyborgconsulting-site`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `file`
--

CREATE TABLE `file` (
  `idfile` int(11) NOT NULL,
  `guid` varchar(50) DEFAULT NULL,
  `iduser` int(11) DEFAULT '0',
  `idowner` int(11) DEFAULT '0',
  `idparent` int(11) DEFAULT '0',
  `owner` varchar(50) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `size` int(11) DEFAULT '0',
  `bucket` varchar(30) DEFAULT NULL,
  `path` varchar(128) DEFAULT NULL,
  `uploaded` datetime DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `width` int(11) DEFAULT '0',
  `height` int(11) DEFAULT '0',
  `key` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `file`
--

INSERT INTO `file` (`idfile`, `guid`, `iduser`, `idowner`, `idparent`, `owner`, `name`, `size`, `bucket`, `path`, `uploaded`, `description`, `width`, `height`, `key`) VALUES
(1991, 'D2hj6GkglO', 1, 1, 0, 'Page', 'high.jpg', 120819, 'page', 'fragment/files/uploads/2021/03/01/603d33f7dc2cf-high.jpg', '2021-03-01 12:35:35', '', 1, 1, '[key]'),
(1992, 'VknQ-7LEqz', 1, 1991, 1991, 'File', 'high.jpg', 217950, 'page', 'fragment/files/uploads/2021/03/01/603d33fe69d88-high.jpg', '2021-03-01 12:35:42', '[description]', 854, 526, 'presentable'),
(1993, 'daZywh2dSz', 1, 432, 0, 'Page', 'cover-ebook.jpg', 144995, 'page', 'fragment/files/uploads/2021/03/01/603d35eabc2e3-cover-ebook.jpg', '2021-03-01 12:43:54', '', 1, 1, '[key]'),
(1994, 'BXj_ITNTi4', 1, 1993, 1993, 'File', 'cover-ebook.jpg', 335755, 'page', 'fragment/files/uploads/2021/03/01/603d35fb3caa4-cover-ebook.jpg', '2021-03-01 12:44:11', '[description]', 1440, 602, 'presentable'),
(1995, 'ugCcFYq7bL', 1, 432, 0, 'Page', 'book.jpg', 56147, 'page', 'fragment/files/uploads/2021/03/01/603d3609c44d8-book.jpg', '2021-03-01 12:44:25', '', 1, 1, '[key]'),
(1996, 'HL3G6s2Bgx', 1, 1995, 1995, 'File', 'book.jpg', 82244, 'page', 'fragment/files/uploads/2021/03/01/603d360c92938-book.jpg', '2021-03-01 12:44:28', '[description]', 446, 415, 'presentable'),
(1997, 'KN6vnQ_FK3', 1, 433, 0, 'Page', 'cover-aviso.jpg', 144273, 'page', 'fragment/files/uploads/2021/03/01/603d37d5e17d9-cover-aviso.jpg', '2021-03-01 12:52:05', '', 1, 1, '[key]'),
(1998, 'S6o8OvLxGu', 1, 1997, 1997, 'File', 'cover-aviso.jpg', 325401, 'page', 'fragment/files/uploads/2021/03/01/603d37e077bdd-cover-aviso.jpg', '2021-03-01 12:52:16', '[description]', 1440, 584, 'presentable'),
(1999, 'plwZvxQsCl', 1, 414, 0, 'Page', 'nosotros1.jpg', 91763, 'page', 'fragment/files/uploads/2021/03/01/603d38f6a8516-nosotros1.jpg', '2021-03-01 12:56:54', '', 1, 1, '[key]'),
(2000, 'Pu5zc5cobS', 1, 1999, 1999, 'File', 'nosotros1.jpg', 155035, 'page', 'fragment/files/uploads/2021/03/01/603d38fbd3103-nosotros1.jpg', '2021-03-01 12:56:59', '[description]', 485, 409, 'presentable'),
(2001, 'BPU__hN5oq', 1, 414, 0, 'Page', 'nosotros2.jpg', 39161, 'page', 'fragment/files/uploads/2021/03/01/603d390544838-nosotros2.jpg', '2021-03-01 12:57:09', '', 1, 1, '[key]'),
(2002, '_WUd9prRml', 1, 2001, 2001, 'File', 'nosotros2.jpg', 61128, 'page', 'fragment/files/uploads/2021/03/01/603d3907a7ae6-nosotros2.jpg', '2021-03-01 12:57:11', '[description]', 299, 200, 'presentable'),
(2003, 'C6Bd_lqyIO', 1, 426, 0, 'Page', 'tecnologia-boton.jpg', 54087, 'page', 'fragment/files/uploads/2021/03/01/603d3c4d587a4-tecnologia-boton.jpg', '2021-03-01 13:11:09', '', 1, 1, '[key]'),
(2004, 'OlzXlN-xkL', 1, 2003, 2003, 'File', 'tecnologia-boton.jpg', 101981, 'page', 'fragment/files/uploads/2021/03/01/603d3c50941e7-tecnologia-boton.jpg', '2021-03-01 13:11:12', '[description]', 298, 395, 'presentable'),
(2005, 'nSun4qkbcp', 1, 427, 0, 'Page', 'consultoria-boton.jpg', 60772, 'page', 'fragment/files/uploads/2021/03/01/603d3cb5f1ad4-consultoria-boton.jpg', '2021-03-01 13:12:53', '', 1, 1, '[key]'),
(2006, 'xws5i4mpeU', 1, 2005, 2005, 'File', 'consultoria-boton.jpg', 92993, 'page', 'fragment/files/uploads/2021/03/01/603d3cb96cef1-consultoria-boton.jpg', '2021-03-01 13:12:57', '[description]', 298, 397, 'presentable'),
(2007, 'KZuSVuEfXN', 1, 428, 0, 'Page', 'implementaciones-boton.jpg', 67128, 'page', 'fragment/files/uploads/2021/03/01/603d3cc996862-implementaciones-boton.jpg', '2021-03-01 13:13:13', '', 1, 1, '[key]'),
(2008, 'xihotvy_dE', 1, 2007, 2007, 'File', 'implementaciones-boton.jpg', 105939, 'page', 'fragment/files/uploads/2021/03/01/603d3ccd3afca-implementaciones-boton.jpg', '2021-03-01 13:13:17', '[description]', 300, 395, 'presentable'),
(2009, 'cnkxzqfwIE', 1, 429, 0, 'Page', 'operaciones-y-mantenimiento-boton.jpg', 73148, 'page', 'fragment/files/uploads/2021/03/01/603d3cda19717-operaciones-y-mantenimiento-boton.jpg', '2021-03-01 13:13:30', '', 1, 1, '[key]'),
(2010, 'gVmz0Tte2l', 1, 2009, 2009, 'File', 'operaciones-y-mantenimiento-boton.jpg', 119323, 'page', 'fragment/files/uploads/2021/03/01/603d3cde0cf6f-operaciones-y-mantenimiento-boton.jpg', '2021-03-01 13:13:34', '[description]', 299, 397, 'presentable'),
(2011, 'xMf7FNA9q5', 1, 416, 0, 'Page', 'cover-rpa.jpg', 179850, 'page', 'fragment/files/uploads/2021/03/01/603d3d0d5a900-cover-rpa.jpg', '2021-03-01 13:14:21', '', 1, 1, '[key]'),
(2012, '4-zGxvw4wi', 1, 2011, 2011, 'File', 'cover-rpa.jpg', 411155, 'page', 'fragment/files/uploads/2021/03/01/603d3d1998aea-cover-rpa.jpg', '2021-03-01 13:14:33', '[description]', 1440, 570, 'presentable'),
(2013, 'Fa-sJI7eFO', 1, 430, 0, 'Page', 'rpa.jpg', 66513, 'page', 'fragment/files/uploads/2021/03/01/603d3d5d6961d-rpa.jpg', '2021-03-01 13:15:41', '', 1, 1, '[key]'),
(2014, 'jwg0AGJSR4', 1, 2013, 2013, 'File', 'rpa.jpg', 108326, 'page', 'fragment/files/uploads/2021/03/01/603d3d61d1cff-rpa.jpg', '2021-03-01 13:15:45', '[description]', 370, 273, 'presentable'),
(2015, 'j0vQZ3iL0S', 1, 431, 0, 'Page', 'robots.jpg', 68230, 'page', 'fragment/files/uploads/2021/03/01/603d3d77a2719-robots.jpg', '2021-03-01 13:16:07', '', 1, 1, '[key]'),
(2016, '1TiobglDvQ', 1, 2015, 2015, 'File', 'robots.jpg', 107921, 'page', 'fragment/files/uploads/2021/03/01/603d3d7b1f92b-robots.jpg', '2021-03-01 13:16:11', '[description]', 370, 272, 'presentable'),
(2017, 'Gj1K3u2hYT', 1, 439, 0, 'Page', 'hiperautomatizacion.jpg', 86079, 'page', 'fragment/files/uploads/2021/03/01/603d3da93480a-hiperautomatizacion.jpg', '2021-03-01 13:16:57', '', 1, 1, '[key]'),
(2018, 'fEJBXFxW2d', 1, 2017, 2017, 'File', 'hiperautomatizacion.jpg', 136105, 'page', 'fragment/files/uploads/2021/03/01/603d3dae01398-hiperautomatizacion.jpg', '2021-03-01 13:17:02', '[description]', 370, 272, 'presentable'),
(2019, 'cPjQEuf7-q', 1, 430, 0, 'Page', 'rpa-img1.jpg', 122708, 'page', 'fragment/files/uploads/2021/03/01/603d3e7cc5bec-rpa-img1.jpg', '2021-03-01 13:20:28', '', 1, 1, '[key]'),
(2020, '4SOjBmSxqs', 1, 430, 0, 'Page', 'rpa-manual.jpg', 35824, 'page', 'fragment/files/uploads/2021/03/01/603d3e7e138e0-rpa-manual.jpg', '2021-03-01 13:20:30', '', 1, 1, '[key]'),
(2021, '11NS39MtXg', 1, 2020, 2020, 'File', 'rpa-manual.jpg', 55041, 'page', 'fragment/files/uploads/2021/03/01/603d3e7fe2d8a-rpa-manual.jpg', '2021-03-01 13:20:31', '[description]', 321, 223, 'presentable'),
(2022, '8xQ7jrCl7w', 1, 2019, 2019, 'File', 'rpa-img1.jpg', 201419, 'page', 'fragment/files/uploads/2021/03/01/603d3e851cbf4-rpa-img1.jpg', '2021-03-01 13:20:37', '[description]', 446, 519, 'presentable'),
(2023, 'gWLWBKMd3F', 1, 446, 0, 'Page', 'robots-soft.png', 48654, 'page', 'fragment/files/uploads/2021/03/01/603d3f14dec61-robots-soft.png', '2021-03-01 13:23:00', '', 1, 1, '[key]'),
(2024, '7-wt0IbsRJ', 1, 2023, 2023, 'File', 'robots-soft.png', 52568, 'page', 'fragment/files/uploads/2021/03/01/603d3f16dbfaa-robots-soft.png', '2021-03-01 13:23:02', '[description]', 185, 185, 'presentable'),
(2025, '0tWfmu_KtG', 1, 447, 0, 'Page', 'robots-imitacion.png', 46328, 'page', 'fragment/files/uploads/2021/03/01/603d3f2f57b90-robots-imitacion.png', '2021-03-01 13:23:27', '', 1, 1, '[key]'),
(2026, '-qDUFl32-e', 1, 2025, 2025, 'File', 'robots-imitacion.png', 46725, 'page', 'fragment/files/uploads/2021/03/01/603d3f31799f8-robots-imitacion.png', '2021-03-01 13:23:29', '[description]', 185, 185, 'presentable'),
(2027, 'vlqtm9yURi', 1, 448, 0, 'Page', 'robots-automatizacion.png', 50714, 'page', 'fragment/files/uploads/2021/03/01/603d3f5c89a81-robots-automatizacion.png', '2021-03-01 13:24:12', '', 1, 1, '[key]'),
(2028, 'm2zRVsDxzt', 1, 2027, 2027, 'File', 'robots-automatizacion.png', 53413, 'page', 'fragment/files/uploads/2021/03/01/603d3f5e9ae6b-robots-automatizacion.png', '2021-03-01 13:24:14', '[description]', 185, 185, 'presentable'),
(2029, 'OV8mD27HyJ', 1, 417, 0, 'Page', 'cover-industrias.jpg', 266565, 'page', 'fragment/files/uploads/2021/03/01/603d3fa9375a5-cover-industrias.jpg', '2021-03-01 13:25:29', '', 1, 1, '[key]'),
(2030, 'iw_SwJdmYe', 1, 2029, 2029, 'File', 'cover-industrias.jpg', 574758, 'page', 'fragment/files/uploads/2021/03/01/603d3fbb9aefd-cover-industrias.jpg', '2021-03-01 13:25:47', '[description]', 1440, 585, 'presentable'),
(2031, 'rZ-Ry9c1CS', 1, 449, 0, 'Page', 'retail.jpg', 38533, 'page', 'fragment/files/uploads/2021/03/01/603d402ea4d81-retail.jpg', '2021-03-01 13:27:42', '', 1, 1, '[key]'),
(2032, 'RpAJpeeOwM', 1, 2031, 2031, 'File', 'retail.jpg', 55828, 'page', 'fragment/files/uploads/2021/03/01/603d40314e4c3-retail.jpg', '2021-03-01 13:27:45', '[description]', 250, 181, 'presentable'),
(2033, 'LlBFD45-9H', 1, 450, 0, 'Page', 'finanzas.jpg', 35524, 'page', 'fragment/files/uploads/2021/03/01/603d41b48f8eb-finanzas.jpg', '2021-03-01 13:34:12', '', 1, 1, '[key]'),
(2034, 'l7MLAB1a88', 1, 2033, 2033, 'File', 'finanzas.jpg', 51362, 'page', 'fragment/files/uploads/2021/03/01/603d41b660c62-finanzas.jpg', '2021-03-01 13:34:14', '[description]', 250, 181, 'presentable'),
(2035, 'HbTHYuzTUb', 1, 451, 0, 'Page', 'salud.jpg', 32933, 'page', 'fragment/files/uploads/2021/03/01/603d420f2bb9d-salud.jpg', '2021-03-01 13:35:43', '', 1, 1, '[key]'),
(2036, '5u0AtyQ3qj', 1, 2035, 2035, 'File', 'salud.jpg', 46627, 'page', 'fragment/files/uploads/2021/03/01/603d4211754c2-salud.jpg', '2021-03-01 13:35:45', '[description]', 250, 181, 'presentable'),
(2037, 'qruNzjkXGi', 1, 452, 0, 'Page', 'industrial.jpg', 34072, 'page', 'fragment/files/uploads/2021/03/01/603d42281217d-industrial.jpg', '2021-03-01 13:36:08', '', 1, 1, '[key]'),
(2038, 'mj0K5IufCS', 1, 2037, 2037, 'File', 'industrial.jpg', 48294, 'page', 'fragment/files/uploads/2021/03/01/603d422a21405-industrial.jpg', '2021-03-01 13:36:10', '[description]', 250, 180, 'presentable'),
(2039, 'WrGserR6Mi', 1, 453, 0, 'Page', 'turismo.jpg', 40227, 'page', 'fragment/files/uploads/2021/03/01/603d42b5cb71a-turismo.jpg', '2021-03-01 13:38:29', '', 1, 1, '[key]'),
(2040, '1g8DunSDH3', 1, 2039, 2039, 'File', 'turismo.jpg', 57859, 'page', 'fragment/files/uploads/2021/03/01/603d42b8cb09f-turismo.jpg', '2021-03-01 13:38:32', '[description]', 250, 180, 'presentable'),
(2041, 'LmCT1NYvbP', 1, 454, 0, 'Page', 'publico.jpg', 46112, 'page', 'fragment/files/uploads/2021/03/01/603d42e96b199-publico.jpg', '2021-03-01 13:39:21', '', 1, 1, '[key]'),
(2042, 'Ct3FbMTh_5', 1, 2041, 2041, 'File', 'publico.jpg', 69007, 'page', 'fragment/files/uploads/2021/03/01/603d42eb9d79e-publico.jpg', '2021-03-01 13:39:23', '[description]', 250, 180, 'presentable'),
(2043, 'zAQEZOYE5q', 1, 455, 0, 'Page', 'tecnologia.jpg', 30149, 'page', 'fragment/files/uploads/2021/03/01/603d43860d283-tecnologia.jpg', '2021-03-01 13:41:58', '', 1, 1, '[key]'),
(2044, 'NQQYy8ig8i', 1, 2043, 2043, 'File', 'tecnologia.jpg', 44775, 'page', 'fragment/files/uploads/2021/03/01/603d4387a0aef-tecnologia.jpg', '2021-03-01 13:41:59', '[description]', 250, 181, 'presentable'),
(2045, '85SKQb0EOD', 1, 456, 0, 'Page', 'transporte.jpg', 42242, 'page', 'fragment/files/uploads/2021/03/01/603d43a46af1b-transporte.jpg', '2021-03-01 13:42:28', '', 1, 1, '[key]'),
(2046, 'OTL08q-rB0', 1, 2045, 2045, 'File', 'transporte.jpg', 63959, 'page', 'fragment/files/uploads/2021/03/01/603d43a67da18-transporte.jpg', '2021-03-01 13:42:30', '[description]', 250, 181, 'presentable'),
(2047, 'oL4LyoUG9m', 1, 457, 0, 'Page', 'energia.jpg', 26501, 'page', 'fragment/files/uploads/2021/03/01/603d445421e1c-energia.jpg', '2021-03-01 13:45:24', '', 1, 1, '[key]'),
(2048, 'C-tpfoaI_t', 1, 2047, 2047, 'File', 'energia.jpg', 37945, 'page', 'fragment/files/uploads/2021/03/01/603d4455ed22e-energia.jpg', '2021-03-01 13:45:25', '[description]', 250, 181, 'presentable'),
(2049, 'aPo8xX0rGs', 1, 458, 0, 'Page', 'automotriz.jpg', 57551, 'page', 'fragment/files/uploads/2021/03/01/603d447a99953-automotriz.jpg', '2021-03-01 13:46:02', '', 1, 1, '[key]'),
(2050, 'Zdf0shDEyD', 1, 2049, 2049, 'File', 'automotriz.jpg', 83707, 'page', 'fragment/files/uploads/2021/03/01/603d447ded84b-automotriz.jpg', '2021-03-01 13:46:05', '[description]', 250, 181, 'presentable'),
(2051, 'PBZtC8zfvr', 1, 463, 0, 'Page', 'fase1.jpg', 49480, 'page', 'fragment/files/uploads/2021/03/01/603d5beb4123a-fase1.jpg', '2021-03-01 15:26:03', '', 1, 1, '[key]'),
(2052, 'qfTRNlQx7H', 1, 2051, 2051, 'File', 'fase1.jpg', 59000, 'page', 'fragment/files/uploads/2021/03/01/603d5bed3320e-fase1.jpg', '2021-03-01 15:26:05', '[description]', 212, 212, 'presentable'),
(2053, 'ozaaB4NSOw', 1, 464, 0, 'Page', 'fase2.jpg', 48087, 'page', 'fragment/files/uploads/2021/03/01/603d5c2a6f8e5-fase2.jpg', '2021-03-01 15:27:06', '', 1, 1, '[key]'),
(2054, 'gnwy4rtq6T', 1, 2053, 2053, 'File', 'fase2.jpg', 56747, 'page', 'fragment/files/uploads/2021/03/01/603d5c2c56aa2-fase2.jpg', '2021-03-01 15:27:08', '[description]', 212, 212, 'presentable'),
(2055, 'uO3nZ32pZ0', 1, 465, 0, 'Page', 'fase3.jpg', 49884, 'page', 'fragment/files/uploads/2021/03/01/603d5c4690705-fase3.jpg', '2021-03-01 15:27:34', '', 1, 1, '[key]'),
(2056, 'jK0eRwlvHJ', 1, 2055, 2055, 'File', 'fase3.jpg', 59260, 'page', 'fragment/files/uploads/2021/03/01/603d5c4880bd4-fase3.jpg', '2021-03-01 15:27:36', '[description]', 214, 212, 'presentable'),
(2057, 'zwdcTHwKME', 1, 466, 0, 'Page', 'fase4.jpg', 50915, 'page', 'fragment/files/uploads/2021/03/01/603d5c62b3ef4-fase4.jpg', '2021-03-01 15:28:02', '', 1, 1, '[key]'),
(2058, 'DFfd9OZvn1', 1, 2057, 2057, 'File', 'fase4.jpg', 62046, 'page', 'fragment/files/uploads/2021/03/01/603d5c64b3722-fase4.jpg', '2021-03-01 15:28:04', '[description]', 212, 212, 'presentable'),
(2059, 'i8Kgzyp2vY', 1, 467, 0, 'Page', 'fase5.jpg', 42596, 'page', 'fragment/files/uploads/2021/03/01/603d5c8a7759d-fase5.jpg', '2021-03-01 15:28:42', '', 1, 1, '[key]'),
(2060, 'WtQVez-NJV', 1, 2059, 2059, 'File', 'fase5.jpg', 52619, 'page', 'fragment/files/uploads/2021/03/01/603d5c8cb8804-fase5.jpg', '2021-03-01 15:28:44', '[description]', 212, 212, 'presentable'),
(2061, '7k5JU_mVS6', 1, 423, 0, 'Page', 'partners.jpg', 130774, 'page', 'fragment/files/uploads/2021/03/01/603d5cd196fa5-partners.jpg', '2021-03-01 15:29:53', '', 1, 1, '[key]'),
(2062, 'vO7755yyYw', 1, 2061, 2061, 'File', 'partners.jpg', 160220, 'page', 'fragment/files/uploads/2021/03/01/603d5cd68200a-partners.jpg', '2021-03-01 15:29:58', '[description]', 414, 255, 'presentable'),
(2063, '7jccO1Cc3S', 1, 425, 0, 'Page', 'equipo.jpg', 101706, 'page', 'fragment/files/uploads/2021/03/01/603d5d5adaa1c-equipo.jpg', '2021-03-01 15:32:10', '', 1, 1, '[key]'),
(2064, '8fY97puLig', 1, 2063, 2063, 'File', 'equipo.jpg', 154997, 'page', 'fragment/files/uploads/2021/03/01/603d5d5f70470-equipo.jpg', '2021-03-01 15:32:15', '[description]', 369, 450, 'presentable'),
(2065, '3gd7On0w6L', 1, 468, 0, 'Page', 'team1.jpg', 20788, 'page', 'fragment/files/uploads/2021/03/01/603d5e49a0af9-team1.jpg', '2021-03-01 15:36:09', '', 1, 1, '[key]'),
(2066, 'M8wVPVIQ8U', 1, 2065, 2065, 'File', 'team1.jpg', 22134, 'page', 'fragment/files/uploads/2021/03/01/603d5e4ae1766-team1.jpg', '2021-03-01 15:36:10', '[description]', 150, 150, 'presentable'),
(2067, 'r1UcNaDcBO', 1, 469, 0, 'Page', 'team2.jpg', 30457, 'page', 'fragment/files/uploads/2021/03/01/603d5e6bd4532-team2.jpg', '2021-03-01 15:36:43', '', 1, 1, '[key]'),
(2068, 'o9saCLexaf', 1, 2067, 2067, 'File', 'team2.jpg', 33835, 'page', 'fragment/files/uploads/2021/03/01/603d5e6d43c95-team2.jpg', '2021-03-01 15:36:45', '[description]', 150, 150, 'presentable'),
(2069, 'TiBBRK0m8w', 1, 469, 0, 'Page', 'team5.jpg', 20351, 'page', 'fragment/files/uploads/2021/03/01/603d5eab71c3e-team5.jpg', '2021-03-01 15:37:47', '', 1, 1, '[key]'),
(2070, 'SB0nD_p6gO', 1, 2069, 2069, 'File', 'team5.jpg', 21971, 'page', 'fragment/files/uploads/2021/03/01/603d5eac59f54-team5.jpg', '2021-03-01 15:37:48', '[description]', 150, 150, 'presentable'),
(2071, '5XuNTQUj4Z', 1, 418, 0, 'Page', 'carrusel-serverware.jpg', 8391, 'page', 'fragment/files/uploads/2021/03/09/6047dcbec5036-carrusel-serverware.jpg', '2021-03-09 14:38:22', '', 1, 1, '[key]'),
(2072, 'Lc-QDBOLCw', 1, 418, 0, 'Page', 'carrusel-team.jpg', 9589, 'page', 'fragment/files/uploads/2021/03/09/6047dcbedb32b-carrusel-team.jpg', '2021-03-09 14:38:22', '', 1, 1, '[key]'),
(2073, 'O4ztLH4dHy', 1, 418, 0, 'Page', 'carrusel-ui-path.jpg', 6957, 'page', 'fragment/files/uploads/2021/03/09/6047dcbee8d58-carrusel-ui-path.jpg', '2021-03-09 14:38:22', '', 1, 1, '[key]'),
(2074, '6VoMca63lw', 1, 2071, 2071, 'File', 'carrusel-serverware.jpg', 7169, 'page', 'fragment/files/uploads/2021/03/09/6047dcbf71986-carrusel-serverware.jpg', '2021-03-09 14:38:23', '[description]', 163, 51, 'sys-thumb'),
(2075, 'MqnWEd_fqj', 1, 2073, 2073, 'File', 'carrusel-ui-path.jpg', 6649, 'page', 'fragment/files/uploads/2021/03/09/6047dcbfb3665-carrusel-ui-path.jpg', '2021-03-09 14:38:23', '[description]', 189, 56, 'sys-thumb'),
(2076, 'f8NziZgu5p', 1, 2072, 2072, 'File', 'carrusel-team.jpg', 9077, 'page', 'fragment/files/uploads/2021/03/09/6047dcbfe518b-carrusel-team.jpg', '2021-03-09 14:38:23', '[description]', 170, 74, 'sys-thumb'),
(2077, 'rytSDb1xj3', 1, 2073, 2073, 'File', 'carrusel-ui-path.jpg', 6649, 'page', 'fragment/files/uploads/2021/03/09/6047dcc01fe65-carrusel-ui-path.jpg', '2021-03-09 14:38:24', '[description]', 189, 56, 'presentable'),
(2078, 'Ukud6rJERf', 1, 2072, 2072, 'File', 'carrusel-team.jpg', 9077, 'page', 'fragment/files/uploads/2021/03/09/6047dcc07f052-carrusel-team.jpg', '2021-03-09 14:38:24', '[description]', 170, 74, 'presentable'),
(2079, 'JXkqhR4Wor', 1, 2071, 2071, 'File', 'carrusel-serverware.jpg', 7169, 'page', 'fragment/files/uploads/2021/03/09/6047dcc08cfe4-carrusel-serverware.jpg', '2021-03-09 14:38:24', '[description]', 163, 51, 'presentable'),
(2080, 'jJ41KAJkbv', 1, 418, 0, 'Page', 'carrusel-team.jpg', 9589, 'page', 'fragment/files/uploads/2021/03/09/6047dcc3bfc32-carrusel-team.jpg', '2021-03-09 14:38:27', '', 1, 1, '[key]'),
(2081, 'wAJHqGmjdX', 1, 418, 0, 'Page', 'carrusel-ui-path.jpg', 6957, 'page', 'fragment/files/uploads/2021/03/09/6047dcc3dab02-carrusel-ui-path.jpg', '2021-03-09 14:38:27', '', 1, 1, '[key]'),
(2082, 'Hk6Xs5o-dK', 1, 418, 0, 'Page', 'carrusel-serverware.jpg', 8391, 'page', 'fragment/files/uploads/2021/03/09/6047dcc3e5299-carrusel-serverware.jpg', '2021-03-09 14:38:27', '', 1, 1, '[key]'),
(2083, 'am-rE9V2zr', 1, 2080, 2080, 'File', 'carrusel-team.jpg', 9077, 'page', 'fragment/files/uploads/2021/03/09/6047dcc43f874-carrusel-team.jpg', '2021-03-09 14:38:28', '[description]', 170, 74, 'sys-thumb'),
(2084, 'T3xWtFcNNU', 1, 2082, 2082, 'File', 'carrusel-serverware.jpg', 7169, 'page', 'fragment/files/uploads/2021/03/09/6047dcc49fa36-carrusel-serverware.jpg', '2021-03-09 14:38:28', '[description]', 163, 51, 'sys-thumb'),
(2085, 'cNS2y_xMfY', 1, 2080, 2080, 'File', 'carrusel-team.jpg', 9077, 'page', 'fragment/files/uploads/2021/03/09/6047dcc4d55d3-carrusel-team.jpg', '2021-03-09 14:38:28', '[description]', 170, 74, 'presentable'),
(2086, 'idfTWI7Cya', 1, 2081, 2081, 'File', 'carrusel-ui-path.jpg', 6649, 'page', 'fragment/files/uploads/2021/03/09/6047dcc4defcd-carrusel-ui-path.jpg', '2021-03-09 14:38:28', '[description]', 189, 56, 'sys-thumb'),
(2087, '8luWQFneo1', 1, 2082, 2082, 'File', 'carrusel-serverware.jpg', 7169, 'page', 'fragment/files/uploads/2021/03/09/6047dcc51e115-carrusel-serverware.jpg', '2021-03-09 14:38:29', '[description]', 163, 51, 'presentable'),
(2088, 'pF8zQjN3LS', 1, 2081, 2081, 'File', 'carrusel-ui-path.jpg', 6649, 'page', 'fragment/files/uploads/2021/03/09/6047dcc55ad8b-carrusel-ui-path.jpg', '2021-03-09 14:38:29', '[description]', 189, 56, 'presentable'),
(2089, 'zXyIIYQ7eJ', 1, 415, 0, 'Page', 'cover-servicios.jpg', 166115, 'page', 'fragment/files/uploads/2021/03/09/6047ea143215e-cover-servicios.jpg', '2021-03-09 15:35:16', '', 1, 1, '[key]'),
(2090, 'nQ299RFHTi', 1, 2089, 2089, 'File', 'cover-servicios.jpg', 404756, 'page', 'fragment/files/uploads/2021/03/09/6047ea1dd865f-cover-servicios.jpg', '2021-03-09 15:35:25', '[description]', 1440, 515, 'presentable'),
(2091, 'x78m6I4p8m', 1, 470, 0, 'Page', 'team2.jpg', 30457, 'page', 'fragment/files/uploads/2021/03/09/604832363491d-team2.jpg', '2021-03-09 20:43:02', '', 1, 1, '[key]'),
(2092, '_XV-neGE5J', 1, 2091, 2091, 'File', 'team2.jpg', 33835, 'page', 'fragment/files/uploads/2021/03/09/60483237a9e62-team2.jpg', '2021-03-09 20:43:03', '[description]', 150, 150, 'presentable'),
(2093, '6tsHn-98O4', 1, 471, 0, 'Page', 'team6.jpg', 26453, 'page', 'fragment/files/uploads/2021/03/09/604832ba9483b-team6.jpg', '2021-03-09 20:45:14', '', 1, 1, '[key]'),
(2094, 'baUiFCVqTw', 1, 2093, 2093, 'File', 'team6.jpg', 29082, 'page', 'fragment/files/uploads/2021/03/09/604832bbcf453-team6.jpg', '2021-03-09 20:45:15', '[description]', 150, 150, 'presentable'),
(2095, 'SJW2zRjXub', 1, 472, 0, 'Page', 'team3.jpg', 27071, 'page', 'fragment/files/uploads/2021/03/09/604832f42fd1f-team3.jpg', '2021-03-09 20:46:12', '', 1, 1, '[key]'),
(2096, '0kSm17vO7s', 1, 2095, 2095, 'File', 'team3.jpg', 30113, 'page', 'fragment/files/uploads/2021/03/09/604832f56daef-team3.jpg', '2021-03-09 20:46:13', '[description]', 150, 150, 'presentable'),
(2097, 'pJVSwwtToQ', 1, 473, 0, 'Page', 'team7.jpg', 26606, 'page', 'fragment/files/uploads/2021/03/09/60483339d8cc1-team7.jpg', '2021-03-09 20:47:21', '', 1, 1, '[key]'),
(2098, 'fbShPln6zD', 1, 2097, 2097, 'File', 'team7.jpg', 29574, 'page', 'fragment/files/uploads/2021/03/09/6048333b27749-team7.jpg', '2021-03-09 20:47:23', '[description]', 150, 150, 'presentable'),
(2099, 'vHDI6b1ZO0', 1, 475, 0, 'Page', 'team8.jpg', 30043, 'page', 'fragment/files/uploads/2021/03/09/6048337878663-team8.jpg', '2021-03-09 20:48:24', '', 1, 1, '[key]'),
(2100, 'IIhxiGb5wL', 1, 474, 0, 'Page', 'team4.jpg', 24145, 'page', 'fragment/files/uploads/2021/03/09/604834e8bd358-team4.jpg', '2021-03-09 20:54:32', '', 1, 1, '[key]'),
(2101, '6LY9-m75tN', 1, 2100, 2100, 'File', 'team4.jpg', 27074, 'page', 'fragment/files/uploads/2021/03/09/604834e9f074b-team4.jpg', '2021-03-09 20:54:33', '[description]', 150, 150, 'presentable'),
(2102, 'CGiWj4fNzC', 1, 475, 0, 'Page', 'team8.jpg', 30043, 'page', 'fragment/files/uploads/2021/03/09/604835129b835-team8.jpg', '2021-03-09 20:55:14', '', 1, 1, '[key]'),
(2103, 'A5F9PFlhvx', 1, 2102, 2102, 'File', 'team8.jpg', 33210, 'page', 'fragment/files/uploads/2021/03/09/60483513eb4b1-team8.jpg', '2021-03-09 20:55:15', '[description]', 150, 150, 'presentable'),
(2104, 'ysT3b3BE4s', 1, 419, 0, 'Page', 'cover-blog.jpg', 128397, 'page', 'fragment/files/uploads/2021/03/09/60483564dd3f1-cover-blog.jpg', '2021-03-09 20:56:36', '', 1, 1, '[key]'),
(2105, 'V7iBIgGNVc', 1, 2104, 2104, 'File', 'cover-blog.jpg', 293312, 'page', 'fragment/files/uploads/2021/03/09/6048356c573e0-cover-blog.jpg', '2021-03-09 20:56:44', '[description]', 1440, 532, 'presentable'),
(2106, 'AYeUXUuuek', 1, 476, 0, 'Page', 'entry-6.jpg', 49296, 'page', 'fragment/files/uploads/2021/03/10/60496ded27055-entry-6.jpg', '2021-03-10 19:10:05', '', 1, 1, '[key]'),
(2107, 'D2wtXE5Y5F', 1, 2106, 2106, 'File', 'entry-6.jpg', 27082, 'page', 'fragment/files/uploads/2021/03/10/60496dee875e3-entry-6.jpg', '2021-03-10 19:10:06', '[description]', 298, 385, 'presentable'),
(2108, '6bNPUvqEyJ', 1, 476, 0, 'Page', 'cover.jpg', 112350, 'page', 'fragment/files/uploads/2021/03/10/60496df6acb58-cover.jpg', '2021-03-10 19:10:14', '', 1, 1, '[key]'),
(2109, '8PTp4GY6mK', 1, 2108, 2108, 'File', 'cover.jpg', 55912, 'page', 'fragment/files/uploads/2021/03/10/60496df8b2a61-cover.jpg', '2021-03-10 19:10:16', '[description]', 1176, 524, 'presentable'),
(2110, 'C2pcsIra_E', 1, 477, 0, 'Page', 'cover.jpg', 112350, 'page', 'fragment/files/uploads/2021/03/10/60496f07cb9b6-cover.jpg', '2021-03-10 19:14:47', '', 1, 1, '[key]'),
(2111, 'O1blCPNasH', 1, 2110, 2110, 'File', 'cover.jpg', 55912, 'page', 'fragment/files/uploads/2021/03/10/60496f0a04277-cover.jpg', '2021-03-10 19:14:50', '[description]', 1176, 524, 'presentable'),
(2112, 'LlZQif0Fw2', 1, 477, 0, 'Page', 'entry-5.jpg', 32698, 'page', 'fragment/files/uploads/2021/03/10/60496f132e944-entry-5.jpg', '2021-03-10 19:14:59', '', 1, 1, '[key]'),
(2113, 'H1r93cNQI5', 1, 2112, 2112, 'File', 'entry-5.jpg', 15802, 'page', 'fragment/files/uploads/2021/03/10/60496f13eea55-entry-5.jpg', '2021-03-10 19:14:59', '[description]', 298, 223, 'presentable'),
(2114, 'Jig4fw0J8c', 1, 476, 0, 'Page', 'cover.jpg', 88378, 'page', 'fragment/files/uploads/2021/03/10/60496f4a75dfe-cover.jpg', '2021-03-10 19:15:54', '', 1, 1, '[key]'),
(2115, 'BOrc7uv-gy', 1, 2114, 2114, 'File', 'cover.jpg', 47367, 'page', 'fragment/files/uploads/2021/03/10/60496f4c820bd-cover.jpg', '2021-03-10 19:15:56', '[description]', 1174, 524, 'presentable'),
(2116, 'dmT8CE2z8P', 1, 478, 0, 'Page', 'entry-4.jpg', 61525, 'page', 'fragment/files/uploads/2021/03/10/6049701ff2527-entry-4.jpg', '2021-03-10 19:19:27', '', 1, 1, '[key]'),
(2117, '4X7vvGbR1Q', 1, 2116, 2116, 'File', 'entry-4.jpg', 31425, 'page', 'fragment/files/uploads/2021/03/10/6049702168ea5-entry-4.jpg', '2021-03-10 19:19:29', '[description]', 298, 385, 'presentable'),
(2118, '-V46Xj93Kh', 1, 478, 0, 'Page', 'cover.jpg', 123503, 'page', 'fragment/files/uploads/2021/03/10/604970281cb63-cover.jpg', '2021-03-10 19:19:36', '', 1, 1, '[key]'),
(2119, 'VmalaS6tJv', 1, 2118, 2118, 'File', 'cover.jpg', 60291, 'page', 'fragment/files/uploads/2021/03/10/6049702a1d0f8-cover.jpg', '2021-03-10 19:19:38', '[description]', 1174, 524, 'presentable'),
(2120, '122q5Luhvn', 1, 479, 0, 'Page', 'entry-3.jpg', 37240, 'page', 'fragment/files/uploads/2021/03/10/60497090a16bb-entry-3.jpg', '2021-03-10 19:21:20', '', 1, 1, '[key]'),
(2121, 'xME7buJkbz', 1, 2120, 2120, 'File', 'entry-3.jpg', 19594, 'page', 'fragment/files/uploads/2021/03/10/60497091c11e5-entry-3.jpg', '2021-03-10 19:21:21', '[description]', 298, 223, 'presentable'),
(2122, '9vQiYGJg2a', 1, 479, 0, 'Page', 'cover.jpg', 127176, 'page', 'fragment/files/uploads/2021/03/10/604970969368b-cover.jpg', '2021-03-10 19:21:26', '', 1, 1, '[key]'),
(2123, '7CY1CFf-Qv', 1, 2122, 2122, 'File', 'cover.jpg', 68717, 'page', 'fragment/files/uploads/2021/03/10/60497098c05ce-cover.jpg', '2021-03-10 19:21:28', '[description]', 1174, 524, 'presentable'),
(2124, 'XrGG01oMtJ', 1, 480, 0, 'Page', 'entry-2.jpg', 59940, 'page', 'fragment/files/uploads/2021/03/10/60497681cdd9c-entry-2.jpg', '2021-03-10 19:46:41', '', 1, 1, '[key]'),
(2125, 'y7qomLDdfb', 1, 2124, 2124, 'File', 'entry-2.jpg', 30792, 'page', 'fragment/files/uploads/2021/03/10/6049768345313-entry-2.jpg', '2021-03-10 19:46:43', '[description]', 298, 385, 'presentable'),
(2126, 'AUSDsxsHzB', 1, 480, 0, 'Page', 'cover.jpg', 171282, 'page', 'fragment/files/uploads/2021/03/10/6049768c2f77f-cover.jpg', '2021-03-10 19:46:52', '', 1, 1, '[key]'),
(2127, 'IYkI_sJpJr', 1, 2126, 2126, 'File', 'cover.jpg', 86611, 'page', 'fragment/files/uploads/2021/03/10/6049768f7ca43-cover.jpg', '2021-03-10 19:46:55', '[description]', 1174, 524, 'presentable'),
(2128, 'wp97yCHuPU', 1, 481, 0, 'Page', 'cover.jpg', 155925, 'page', 'fragment/files/uploads/2021/03/10/604976fed878f-cover.jpg', '2021-03-10 19:48:46', '', 1, 1, '[key]'),
(2129, 'U6ek4XXTTa', 1, 2128, 2128, 'File', 'cover.jpg', 72960, 'page', 'fragment/files/uploads/2021/03/10/604977017aff1-cover.jpg', '2021-03-10 19:48:49', '[description]', 1174, 524, 'presentable'),
(2130, 't5Q59w6NeN', 1, 481, 0, 'Page', 'entry-1.jpg', 51405, 'page', 'fragment/files/uploads/2021/03/10/60497702ca78e-entry-1.jpg', '2021-03-10 19:48:50', '', 1, 1, '[key]'),
(2131, 'B89BugqIHF', 1, 2130, 2130, 'File', 'entry-1.jpg', 22096, 'page', 'fragment/files/uploads/2021/03/10/60497703bfa5a-entry-1.jpg', '2021-03-10 19:48:51', '[description]', 298, 223, 'presentable');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fragment`
--

CREATE TABLE `fragment` (
  `idfragment` int(11) NOT NULL,
  `idpage` int(11) DEFAULT '0',
  `value` longtext,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `fragment`
--

INSERT INTO `fragment` (`idfragment`, `idpage`, `value`, `name`) VALUES
(157, 1, 'Lorem Ipsum', 'body'),
(158, 421, '', 'body'),
(159, 1, '<div>Leading The</div><div>HYPERAUTOMATION REVOLUTION!</div>', 'slogan'),
(160, 1, '<div>Aceleramos tu camino</div><div>hacia la transformaciÃ³n digital.</div>', 'ribbon'),
(161, 1, '<img data-guid=\"VknQ-7LEqz\" data-original-guid=\"D2hj6GkglO\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d33fe69d88-high.jpg\">', 'ribbon-image'),
(162, 432, 'EBOOK DE LA HIPERAUTOMATIZACIÃ“N', 'title'),
(163, 432, '<div><b>Â¿EstÃ¡ preparada su empresa para la hiperautomatizaciÃ³n?</b></div><div><br></div><div>HiperautomatizaciÃ³n, el futuro de RPA.</div><div><br></div><div>Los robots de RPA son capaces de realizar tareas con una mayor complejidad: en un primer momento, la automatizaciÃ³n de procesos se limitaba a robotizar tareas simples, repetitivas y basadas en reglas especÃ­ficas; despuÃ©s se pasÃ³ a la era del â€œAutomation Firstâ€, en la que se implementaba RPA en todos los procesos que se podÃ­an automatizar.</div><div><br></div><div>Ahora, con la hiperautomatizaciÃ³n, se da un paso mÃ¡s y los robots de software comienzan a trabajar con actividades mÃ¡s complejas y de larga duraciÃ³n, e incluso con aquellas que requieren de cierto aprendizaje en base a excepciones.</div><div><br></div><div><br></div>', 'intro'),
(164, 432, '<img data-guid=\"BXj_ITNTi4\" data-original-guid=\"daZywh2dSz\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d35fb3caa4-cover-ebook.jpg\">', 'image'),
(165, 432, 'Â¡Solicita tu ebook acerca de la hiperautomatizaciÃ³n!&nbsp;<div><br></div><div>Todo lo que debes conocer acerca de la hiperautomatizacion, estrategia de ruta, plataforma asi como otros muchos beneficios.</div>', 'slogan'),
(166, 432, '<img data-guid=\"HL3G6s2Bgx\" data-original-guid=\"ugCcFYq7bL\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d360c92938-book.jpg\">', 'small-image'),
(167, 433, '<div style=\"text-align: justify;\">El objeto es informarle sobre el tratamiento y la protecciÃ³n de los datos personales que usted (titular de la informaciÃ³n), proporcione al RESPONSABLE: CYBORG CONSULTING, S.A. de C.V.</div><div style=\"text-align: justify;\">&nbsp;</div><div style=\"text-align: justify;\">FINALIDAD: La informaciÃ³n que se le solicitarÃ¡ incluye datos personales necesarios para ser usada en razÃ³n de las actividades comerciales y/o cualquier acto jurÃ­dico derivado de esas actividades entre usted y EL RESPONSABLE, a efecto de que podamos cumplir con las disposiciones mercantiles y fiscales correspondientes. La negativa de uso de datos personales, no es causa para negarle servicios.&nbsp;</div><div style=\"text-align: justify;\">&nbsp;</div><div style=\"text-align: justify;\">DATOS PERSONALES:&nbsp;</div><div style=\"text-align: justify;\">Los datos personales que se obtengan de manera verbal, por escrito, o a travÃ©s de medios electrÃ³nicos, de conformidad con las finalidades para las que otorgue su consentimiento, serÃ¡n los siguientes:</div><div style=\"text-align: justify;\">a) Datos de identificaciÃ³n; y&nbsp;</div><div style=\"text-align: justify;\">b) Datos financieros y/o patrimoniales.</div><div style=\"text-align: justify;\">&nbsp;</div><div style=\"text-align: justify;\">DEL USO O DIVULGACIÃ“N DE DATOS PERSONALES: Los datos personales que nos proporcione UNICAMENTE serÃ¡n utilizadas por las personas autorizadas por esta instituciÃ³n (con quienes se tiene celebrado contrato de confidencialidad), por lo que no serÃ¡n dispuesto para ningÃºn fin que no estÃ© autorizado por usted.</div><div style=\"text-align: justify;\">&nbsp;</div><div style=\"text-align: justify;\">Los datos personales que se obtengan serÃ¡n utilizados para realizar las siguientes finalidades:</div><div style=\"text-align: justify;\">Finalidades: Primarias: verificar su identidad e informaciÃ³n; integrar su expediente; actualizar nuestra base de datos; analizar su capacidad y calificaciÃ³n crediticia para la contrataciÃ³n de una lÃ­nea de crÃ©dito; gestionar pagos derivados de su crÃ©dito; prestar los servicios y llevar a cabo la compra y venta de productos solicitados por usted de manera remoto, incluyendo sin limitar los servicios de venta por telÃ©fono e Internet; brindarle los servicios en mesa de ayuda; entregarle en la tienda o a domicilio de sus productos y/o prestarle los servicios adquiridos; informarle y/o contactarle por cualquier medio Ã³ptico, sonoro, tecnolÃ³gico o fÃ­sico (redes sociales, SMS, telÃ©fono, correo electrÃ³nico, mensajerÃ­a, entre otros), respecto al estatus de sus compras y/o entrega de sus productos o servicios o garantÃ­as; instalarle y/o armarle sus productos; la devoluciÃ³n y/o cambio de productos; la emisiÃ³n de facturas; pago de servicios por Ãºnica ocasiÃ³n o programaciÃ³n de pagos de servicios; video vigilancia dentro de nuestras instalaciones para su seguridad y la del personal que se encuentra en ellas; cumplir con la normatividad aplicable; fines mercado lÃ³gicos, de prospecciÃ³n comercial y fines estadÃ­sticos e histÃ³ricos; ofrecerle cualquiera de nuestros servicios y productos, lÃ­neas de crÃ©dito y requerimientos de las autoridades con base en Ley Federal de Datos Personales en PosesiÃ³n de los Particulares y su reglamento y; (r) atender sus dudas, quejas y sugerencias como cliente.</div><div style=\"text-align: justify;\">&nbsp;</div><div style=\"text-align: justify;\">DERECHOS DEL TITULAR (derechos arco): Usted como titular o su representante legal, en todo momento tienen derecho a acceder a sus datos personales, a rectificarlos, modificarlos, cancelarlos u oponerse a su uso â€“en estos dos casos, serÃ¡ responsabilidad absoluta del titular-.</div><div style=\"text-align: justify;\">&nbsp;</div><div style=\"text-align: justify;\">Para lo anterior, usted deberÃ¡ dirigirse al Ã¡rea de PROTECCION DE DATOS, ubicada en Enrique Rebsamen 925, Col. Narvarte Poniente, AlcaldÃ­a Benito JuÃ¡rez, CDMX, o correo electrÃ³nico info@cyborgconsulting.com.mx</div><div style=\"text-align: justify;\">&nbsp;</div><div style=\"text-align: justify;\">EXCEPCIONES: El tratamiento de datos personales no serÃ¡ necesario, cuando el uso de la informaciÃ³n o Ã©sta:</div><div style=\"text-align: justify;\">EstÃ© previsto en una Ley;</div><div style=\"text-align: justify;\">Los datos figuren en fuentes de acceso pÃºblico;</div><div style=\"text-align: justify;\">Los datos personales se sometan a un procedimiento previo de disociaciÃ³n;</div><div style=\"text-align: justify;\">Tenga el propÃ³sito de cumplir obligaciones derivadas de una relaciÃ³n jurÃ­dica entre el titular y el responsable;</div><div style=\"text-align: justify;\">Exista una situaciÃ³n de emergencia que potencialmente pueda daÃ±ar a un individuo en su persona o en sus bienes;</div><div style=\"text-align: justify;\">Se dicte resoluciÃ³n de autoridad competente.</div><div style=\"text-align: justify;\">&nbsp;</div><div style=\"text-align: justify;\">DE LA PROHIBICIÃ“N DE LA CANCELACIÃ“N DE LOS DATOS PERSONALES:</div><div style=\"text-align: justify;\">Se refiera a las partes de un contrato suscrito entre las partes de cualquier naturaleza (civil mercantil, etc.), y sean necesarios para su desarrollo y cumplimiento;</div><div style=\"text-align: justify;\">Deban ser tratados por disposiciÃ³n legal;&nbsp;</div><div style=\"text-align: justify;\">Obstaculice actuaciones judiciales o administrativas vinculadas a obligaciones fiscales, la investigaciÃ³n y persecuciÃ³n de delitos o la actualizaciÃ³n de sanciones administrativas impuestas por autoridad;</div><div style=\"text-align: justify;\">Sean necesarios para proteger los intereses jurÃ­dicamente tutelados del titular;</div><div style=\"text-align: justify;\">Sean necesarios para realizar una acciÃ³n en funciÃ³n del interÃ©s pÃºblico;</div><div style=\"text-align: justify;\">Sean necesarios para cumplir con una obligaciÃ³n legalmente adquirida por el titular, y</div><div style=\"text-align: justify;\">&nbsp;</div><div style=\"text-align: justify;\">DE LA TRANSFERENCIA DE DATOS PERSONALES. Sus datos personales, sÃ³lo podrÃ¡n transferirse en cualquiera de los siguientes casos:</div><div style=\"text-align: justify;\">Cuando la transferencia estÃ© prevista en una Ley o Tratado en los que MÃ©xico sea parte y sea necesaria para el cumplimientos de cualquiera de estos;</div><div style=\"text-align: justify;\">Cuando la transferencia sea necesaria por virtud de un contrato celebrado o por celebrar en interÃ©s del titular, por el responsable y un tercero;</div><div style=\"text-align: justify;\">Cuando la transferencia sea necesaria o legalmente exigida para la salvaguarda de un interÃ©s pÃºblico, o para la procuraciÃ³n o administraciÃ³n de justicia;</div><div style=\"text-align: justify;\">Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial, y</div><div style=\"text-align: justify;\">Cuando la transferencia sea precisa para el mantenimiento o cumplimiento de una relaciÃ³n jurÃ­dica entre EL RESPONSABLE y el titular.</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">DERECHOS DE EL RESPONSABLE: En cualquier tiempo, el responsable tiene el derecho de modificar la forma del presente aviso, sin embargo, en ningÃºn momento se podrÃ¡ considerar que esa modificaciÃ³n pueda afectar de ninguna forma los derechos del titular.</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">Fecha de creaciÃ³n: 11 de enero de 2021</div>', 'body'),
(168, 433, '<img data-guid=\"S6o8OvLxGu\" data-original-guid=\"KN6vnQ_FK3\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d37e077bdd-cover-aviso.jpg\">', 'img'),
(169, 414, '<div style=\"text-align: left;\">Somos una consultoriÌa boutique de TI, con amplia experiencia en hiperautomatizacioÌn de procesos clave, los que impulsan a las organizaciones de las diversas industrias a alcanzar sus objetivos, mejorando su eficiencia, reduciendo costos y aumentando su productividad.</div>', 'intro'),
(170, 414, '<img data-guid=\"Pu5zc5cobS\" data-original-guid=\"plwZvxQsCl\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d38fbd3103-nosotros1.jpg\">', 'main-image'),
(171, 414, '<img data-guid=\"_WUd9prRml\" data-original-guid=\"BPU__hN5oq\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3907a7ae6-nosotros2.jpg\">', 'small-image'),
(172, 414, 'AcompaÃ±amos a nuestros clientes, desde la elaboraciÃ³n del diagnÃ³stico, la generaciÃ³n de alternativas, su evaluaciÃ³n, el diseÃ±o de la soluciÃ³n y su instrumentaciÃ³n con la puesta en marcha de cada transformaciÃ³n digital.\n\n', 'desc-1'),
(173, 414, 'Somos una consultoriÌa boutique de TI, con amplia experiencia en hiperautomatizacioÌn de procesos clave, los que impulsan a las organizaciones de las diversas industrias a alcanzar sus objetivos, mejorando su eficiencia, reduciendo costos y aumentando su productividad.', 'desc-2'),
(174, 426, '<img data-guid=\"OlzXlN-xkL\" data-original-guid=\"C6Bd_lqyIO\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3c50941e7-tecnologia-boton.jpg\">', 'img'),
(175, 427, '<img data-guid=\"xws5i4mpeU\" data-original-guid=\"nSun4qkbcp\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3cb96cef1-consultoria-boton.jpg\">', 'img'),
(176, 428, '<img data-guid=\"xihotvy_dE\" data-original-guid=\"KZuSVuEfXN\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3ccd3afca-implementaciones-boton.jpg\">', 'img'),
(177, 429, '<img data-guid=\"gVmz0Tte2l\" data-original-guid=\"cnkxzqfwIE\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3cde0cf6f-operaciones-y-mantenimiento-boton.jpg\">', 'img'),
(178, 416, '<img data-guid=\"4-zGxvw4wi\" data-original-guid=\"xMf7FNA9q5\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3d1998aea-cover-rpa.jpg\">', 'image'),
(179, 430, '<img data-guid=\"jwg0AGJSR4\" data-original-guid=\"Fa-sJI7eFO\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3d61d1cff-rpa.jpg\">', 'img'),
(180, 431, '<img data-guid=\"1TiobglDvQ\" data-original-guid=\"j0vQZ3iL0S\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3d7b1f92b-robots.jpg\">', 'img'),
(181, 439, '<img data-guid=\"fEJBXFxW2d\" data-original-guid=\"Gj1K3u2hYT\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3dae01398-hiperautomatizacion.jpg\">', 'img'),
(182, 439, 'Automatiza todo los posibles procesos de negocio, punta a punta.\nLa hiperautomatizacioÌn es la combinacioÌn de Machine Learning (ML), software empaquetado y herramientas de automatizacioÌn para entregar trabajo.', 'content'),
(183, 439, '<div style=\"text-align: left;\">HiperautomatizaciÃ³n es la suma de distintas aplicaciones y software, asÃ­ como un cambio de mentalidad, que se implementa en la parte estratÃ©gica del negocio, y que tiene el potencial de crear nuevas oportunidades. Â¿CÃ³mo? Combinando la tecnologÃ­a RPA (Robotic Process Automation), con Inteligencia Artificial, aprendizaje automÃ¡tico (Machine Learning), la minerÃ­a de procesos y el procesamiento de lenguaje natural (NLP).</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Para poder entender mejor todas la ventajas de la hiperautomatizaciÃ³n en su empresa, vamos a desgranar algunas de sus caracterÃ­sticas esenciales:</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">MÃ¡s coordinaciÃ³n: al aplicar sistemas de automatizaciÃ³n de procesos, como RPA, la parte del trabajo mÃ¡s repetitiva y tediosa pasa a ser llevada a cabo por un software, asÃ­ como el procesamiento de ciertos datos. La tecnologÃ­a RPA permite que diferentes departamentos estÃ©n interconectados y que la informaciÃ³n se procese para mejorar la coordinaciÃ³n entre los trabajadores y tener una visiÃ³n global del negocio.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">AutomatizaciÃ³n de tareas mÃ¡s complejas: la hiperautomatizaciÃ³n es un paso mÃ¡s dentro de la automatizaciÃ³n de procesos, ya que permite que se roboticen tareas mÃ¡s complejas. Todo esto es posible gracias a la incorporaciÃ³n de la Inteligencia Artificial a los robots de software de RPA, tal y como hizo UiPath en una de sus Ãºltimas actualizaciones.&nbsp;&nbsp;</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Mejora la toma de decisiones estratÃ©gicas: al tener una visiÃ³n de conjunto de la empresa se pueden tomar mejores decisiones, ya que se dispone de todos los datos en tiempo real. AdemÃ¡s, se agiliza el tratamiento de la informaciÃ³n, por lo que la compaÃ±Ã­a estÃ¡ mÃ¡s preparada para gestionar y solucionar cualquier circunstancia adversa.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">&nbsp;MÃ¡s productividad, menos errores y mejor calidad del trabajo: los trabajadores podrÃ¡n dedicar su tiempo a tareas que sean mÃ¡s productivas para la empresa, que tengan un mayor valor aÃ±adido.</div><div style=\"text-align: left;\">Esto trae consigo una mejora de la calidad del trabajo, por ejemplo, preparaciÃ³n de reuniones, estudio de potenciales clientes, anÃ¡lisis de la competencia, bÃºsqueda de nuevos mercados, etc. AsÃ­, se incrementa la productividad del recurso mÃ¡s importante con el que cuentan las compaÃ±Ã­as: la fuerza laboral.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Por otro lado, se reducirÃ¡ la tasa de errores que se producen al estar mucho tiempo realizando la misma tarea de forma manual, aumentando la calidad y precisiÃ³n en la ejecuciÃ³n de tareas.</div><div style=\"text-align: left;\">Automatiza todos los posibles procesos de negocio punta a punta. Descubre, analiza, diseÃ±a, automatizar, medir, monitorear y reevaluar.</div><div style=\"text-align: left;\"><br></div>', 'body'),
(184, 431, 'El software llamado â€œBotâ€ recoge e interpreta los datos de una determinada aplicacioÌn, para proceder a tareas tales como el procesamiento de transacciones o la manipulacioÌn simple de datos.', 'content'),
(185, 430, 'Consiste en crear un â€œtrabajador virtual o robotâ€ con el fin de que pueda imitar y mejorar las tareas de la misma forma en la que una persona, hoy en diÌa, realiza una tarea o actividad.', 'content'),
(186, 430, '<div style=\"text-align: left;\">Consiste en crear un â€œtrabajador virtual o robotâ€ con el fin de que pueda imitar y mejorar las tareas de la misma forma en la que una persona, hoy en dÃ­a, realiza una tarea o actividad.</div><div style=\"text-align: left;\">&nbsp;</div><div style=\"text-align: left;\">El dÃ­a a dÃ­a de cualquier empresa estÃ¡ lleno de procesos y flujos de trabajo que requieren interactuar con varios entornos diferenciados. Esto obliga a realizar acciones manuales para importar registros y datos entre distintas plataformas.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Automatizar las tareas repetitivas y mecÃ¡nicas que se llevan a cabo en un entorno digital permite aumentar la eficiencia, reducir recursos, mejorar la calidad del trabajo y ahorrar tiempo y dinero. Estos son los principales beneficios:</div><div style=\"text-align: left;\"><br></div>', 'intro'),
(187, 430, '<div style=\"text-align: left;\">Con RPA puede automatizar tareas repetitivas que los empleados llevan a cabo muchas veces al dÃ­a dentro de un ciclo de trabajo</div><div style=\"text-align: left;\">&nbsp;</div><div style=\"text-align: left;\">Procesos manuales y repetitivos: Con RPA puede automatizar tareas repetitivas que los empleados llevan a cabo muchas veces al dÃ­a dentro de un ciclo de trabajo.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Procesos basados en reglas especÃ­ficas:. Procesos que tienen en su forma de ejecuciÃ³n unas directrices especÃ­ficas para llevarse a cabo, es decir, instrucciones de procesamiento claras.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Procesos con tipos de entrada estÃ¡ndar legibles de manera electrÃ³nica:</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Procesos que sean estÃ¡ndar, homogÃ©neos y electrÃ³nicamente legibles, como Excel, correo electrÃ³nico, Word, PDF, PPT, XML, etc Procesos estables y maduros: Procesos de los que se conozca su ejecuciÃ³n, la tasa de errores y que tengan un recorrido de uso dentro de la organizaciÃ³n.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">MÃ©todo de procesamiento modificable o cambio de sistema: Procesos que puedan modificarse para adaptarlos a la automatizaciÃ³n.</div><div style=\"text-align: left;\"><br></div>', 'desc'),
(188, 430, '<img data-guid=\"11NS39MtXg\" data-original-guid=\"4SOjBmSxqs\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3e7fe2d8a-rpa-manual.jpg\">', 'small-image'),
(189, 430, '<img data-guid=\"8xQ7jrCl7w\" data-original-guid=\"cPjQEuf7-q\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3e851cbf4-rpa-img1.jpg\">', 'main-image'),
(190, 446, '<img data-guid=\"7-wt0IbsRJ\" data-original-guid=\"gWLWBKMd3F\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3f16dbfaa-robots-soft.png\">', 'img'),
(191, 446, 'El software llamado â€œBotâ€ se usa para imitar la gestiÃ³n de tareas repetitivas y de gran volumen que, anteriormente, eran ejecutadas por un ser humano.', 'body'),
(192, 447, '<img data-guid=\"-qDUFl32-e\" data-original-guid=\"0tWfmu_KtG\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3f31799f8-robots-imitacion.png\">', 'img'),
(193, 447, 'El Bot es confifurado de manerea que recoge e interpreta los datos de una determinada aplicaciÃ³n, para proceder a tareas tales como el procesamiento de transacciones o la manipulaciÃ³n simple de datos.', 'body'),
(194, 448, 'La aplicaciÃ³n o robot del tÃ­pico software de RPA funciona en la interfaz de usuario (IU), de forma similar a como trabajamos las personas. Puede ejecutar automÃ¡ticamente las transacciones que le han sido asignadas y colaborar con otros sistemas cuÃ¡ndo y cÃ³mo sea necesario.', 'body'),
(195, 448, '<img data-guid=\"m2zRVsDxzt\" data-original-guid=\"vlqtm9yURi\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3f5e9ae6b-robots-automatizacion.png\">', 'img'),
(196, 417, 'Nuestras Industrias', 'intro'),
(197, 417, '<img data-guid=\"iw_SwJdmYe\" data-original-guid=\"OV8mD27HyJ\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d3fbb9aefd-cover-industrias.jpg\">', 'image'),
(198, 449, '<img data-guid=\"RpAJpeeOwM\" data-original-guid=\"rZ-Ry9c1CS\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d40314e4c3-retail.jpg\">', 'img'),
(199, 449, 'Servicios integrados que le ayudan a gestionar el cambio e impulsar el valor.', 'content'),
(200, 450, '<img data-guid=\"l7MLAB1a88\" data-original-guid=\"LlBFD45-9H\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d41b660c62-finanzas.jpg\">', 'img'),
(201, 450, 'Construyendo el futuro de los servicios financieros con soluciones con visiÃ³n de futuro.', 'content'),
(202, 451, 'Asesoramiento de especialistas independientes para ayudar a ofrecer resultados de salud mejores y mÃ¡s justos.', 'content'),
(203, 451, '<img data-guid=\"5u0AtyQ3qj\" data-original-guid=\"HbTHYuzTUb\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d4211754c2-salud.jpg\">', 'img'),
(204, 452, '<img data-guid=\"mj0K5IufCS\" data-original-guid=\"qruNzjkXGi\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d422a21405-industrial.jpg\">', 'img'),
(205, 452, 'Asesoramiento de especialistas independientes para ayudar a ofrecer resultados de salud mejores y mÃ¡s justos.', 'content'),
(206, 453, '<img data-guid=\"1g8DunSDH3\" data-original-guid=\"WrGserR6Mi\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d42b8cb09f-turismo.jpg\">', 'img'),
(207, 453, 'Atraemos a tus clientes mediante soluciones disruptivas.', 'content'),
(208, 454, 'Impulsar la excelencia en la prestaciÃ³n de servicios a travÃ©s de la innovaciÃ³n y la asociaciÃ³n.', 'content'),
(209, 454, '<img data-guid=\"Ct3FbMTh_5\" data-original-guid=\"LmCT1NYvbP\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d42eb9d79e-publico.jpg\">', 'img'),
(210, 455, '<img data-guid=\"NQQYy8ig8i\" data-original-guid=\"zAQEZOYE5q\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d4387a0aef-tecnologia.jpg\">', 'img'),
(211, 455, 'Ideas innovadoras para empresas de tecnologÃ­a, medios y telecomunicaciones de rÃ¡pido crecimiento y conectadas digitalmente.', 'content'),
(212, 456, '<img data-guid=\"OTL08q-rB0\" data-original-guid=\"85SKQb0EOD\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d43a67da18-transporte.jpg\">', 'img'),
(213, 456, 'Soluciones para hacer avanzar su estrategia.', 'content'),
(214, 457, 'Soluciones a medida para satisfacer las necesidades globales y gestionar los recursos en un entorno cambiante.', 'content'),
(215, 457, '<img data-guid=\"C-tpfoaI_t\" data-original-guid=\"oL4LyoUG9m\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d4455ed22e-energia.jpg\">', 'img'),
(216, 458, '<img data-guid=\"Zdf0shDEyD\" data-original-guid=\"aPo8xX0rGs\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d447ded84b-automotriz.jpg\">', 'img'),
(217, 458, 'Promoviendo la transformacion digital y omnicanalidad.', 'content'),
(218, 434, 'Ser la consultoriÌa tecnoloÌgica boutique liÌder, especializada en hiperautomatizacioÌn con enfoque global.', 'body'),
(219, 435, 'Ayudar a nuestros clientes a crear valor en sus negocios mediante la aplicacioÌn de soluciones digitales lideres de automatizacioÌn roboÌtica, implementadas por un equipo de consultoriÌa, integrado en un entorno profesional que fomenta el desarrollo personal continuo.', 'body'),
(220, 437, '<div style=\"text-align: justify;\">Aportamos valor y estamos orientados a los resultados.</div>', 'body'),
(221, 438, '<div style=\"text-align: justify;\">El equipo es lo que nos da fuerza y nos permite alcanzar resultados excepcionales.</div>', 'body'),
(222, 459, 'Entender las necesidades de nuestros clientes nos permite construir relaciones a largo plazo.', 'body'),
(223, 460, '<div style=\"text-align: justify;\">Nuestro know-how nos permite guiar a nuestros clientes al cumplimiento de sus objetivos.</div>', 'body'),
(224, 461, '<div style=\"text-align: justify;\">CreaciÃ³n de nuevas oportunidades, asÃ­ como actualizaciÃ³n y mejora continua de todos nuestros procesos y de los recursos que a nuestros clientes.</div>', 'body'),
(225, 462, '<div style=\"text-align: justify;\">Lo pactado con nuestros clientes es nuestra prioridad.</div>', 'body'),
(226, 463, '<img data-guid=\"qfTRNlQx7H\" data-original-guid=\"PBZtC8zfvr\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d5bed3320e-fase1.jpg\">', 'img'),
(227, 463, 'Sponsor, Process Owner', 'desc'),
(228, 464, '<img data-guid=\"gnwy4rtq6T\" data-original-guid=\"ozaaB4NSOw\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d5c2c56aa2-fase2.jpg\">', 'img'),
(229, 464, 'Arquitecto de Soluciones, Desarrolladores RPA y TÃ©cnicos de infraestructura.', 'desc'),
(230, 465, '<img data-guid=\"jK0eRwlvHJ\" data-original-guid=\"uO3nZ32pZ0\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d5c4880bd4-fase3.jpg\">', 'img'),
(231, 465, 'Resplado servicio RPA', 'desc'),
(232, 466, '<img data-guid=\"DFfd9OZvn1\" data-original-guid=\"zwdcTHwKME\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d5c64b3722-fase4.jpg\">', 'img'),
(233, 466, 'Plan de integraciÃ³n RPA', 'desc'),
(234, 467, '<img data-guid=\"WtQVez-NJV\" data-original-guid=\"i8Kgzyp2vY\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d5c8cb8804-fase5.jpg\">', 'img'),
(235, 467, 'Cyborg Academy', 'desc'),
(236, 423, '<div style=\"text-align: left;\">Buscamos business partners para hacer llegar los beneficios de nuestra completa soluciÃ³n al mayor nÃºmero de empresas para elevar su competitividad y mejorar sus procesos.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Ofrecemos un acompaÃ±amiento en todo el proceso, desde la pre-venta hasta la implementaciÃ³n, con la formaciÃ³n especÃ­fica en el producto para conocer todas las posibilidades y oportunidades de negocio.</div>', 'intro'),
(237, 423, '<div style=\"text-align: left;\">Nuestros programas y herramientas estÃ¡n diseÃ±ados para ofrecer conocimientos tÃ©cnicos, de ventas y marketing con el fin de ayudarle a hacer crecer su negocio con Ã©xito y obtener una ventaja competitiva en el mercado.</div>', 'text-1'),
(238, 423, '<img data-guid=\"vO7755yyYw\" data-original-guid=\"7k5JU_mVS6\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d5cd68200a-partners.jpg\">', 'img'),
(239, 423, '<div style=\"text-align: left;\">Para aprovechar al mÃ¡ximo los beneficios como Partner, ponte en contacto con nosotros.</div>', 'text-2'),
(240, 423, '<div style=\"text-align: left;\">Nos adaptamos perfectamente a todas tus necesidades y trabajamos cada acuerdo como Ãºnico. Nuestro objetivo es un modelo win-win.</div>', 'text-3'),
(241, 424, 'Conoce a Nuestro Equipo', 'body'),
(242, 425, 'Â¡Ãšnete a nuestro equipo!', 'title'),
(243, 425, 'Si eres una persona con iniciativa, motivaciÃ³n y quieres integrarte en un equipo de trabajo dinÃ¡mico en una empresa de vanguardia, te estamos esperando.', 'desc'),
(244, 425, '<img data-guid=\"8fY97puLig\" data-original-guid=\"7jccO1Cc3S\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d5d5f70470-equipo.jpg\">', 'img'),
(245, 468, 'Forma el equipo de RPA para construir la configuraciÃ³n y entregar el programa a las unidades de negocio. Gestiona el equipo de RPA y los interlocutores de negocio para alcanzar los resultados de automatizaciÃ³n esperados.', 'desc'),
(246, 468, '<img data-guid=\"M8wVPVIQ8U\" data-original-guid=\"3gd7On0w6L\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d5e4ae1766-team1.jpg\">', 'img'),
(247, 469, '<img data-guid=\"SB0nD_p6gO\" data-original-guid=\"TiBBRK0m8w\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/01/603d5eac59f54-team5.jpg\">', 'img'),
(248, 469, 'Primera lÃ­nea de respaldo de la soluciÃ³n de RPA desplegada.', 'desc'),
(249, 440, 'La sustituciÃ³n de robot sen procesos le generarÃ¡ ahorros importantes.', 'body'),
(250, 441, 'Registro de actividades con registros auditables.', 'body'),
(251, 442, 'RÃ¡pido y fÃ¡cil de implementar segÃºn las necesidades del negocio.', 'body'),
(252, 443, 'Procesos + rÃ¡pidos, de calidad y precisiÃ³n donde el error humano es cero.', 'body'),
(253, 444, 'Reteniendo el talento de su empresa.', 'body'),
(254, 445, 'Respuestas Ã¡giles 24/7 potenciarÃ¡n sus ventas.', 'body'),
(255, 418, 'Socios EstratÃ©gicos', 'title-gallery-1'),
(256, 418, 'Nuestros Clientes', 'title-gallery-2'),
(257, 418, '<img data-guid=\"5XuNTQUj4Z\" data-thumb-guid=\"6VoMca63lw\" data-image-guid=\"JXkqhR4Wor\" data-image-url=\"/fragment/files/uploads/2021/03/09/6047dcc08cfe4-carrusel-serverware.jpg\" alt=\"\" class=\"thumb\" src=\"/fragment/files/uploads/2021/03/09/6047dcbf71986-carrusel-serverware.jpg\" data-image-width=\"null\" data-image-height=\"null\" data-image-desc-text=\"null\"><img data-guid=\"Lc-QDBOLCw\" data-thumb-guid=\"f8NziZgu5p\" data-image-guid=\"Ukud6rJERf\" data-image-url=\"/fragment/files/uploads/2021/03/09/6047dcc07f052-carrusel-team.jpg\" alt=\"\" class=\"thumb\" src=\"/fragment/files/uploads/2021/03/09/6047dcbfe518b-carrusel-team.jpg\" data-image-width=\"null\" data-image-height=\"null\" data-image-desc-text=\"null\"><img data-guid=\"O4ztLH4dHy\" data-thumb-guid=\"MqnWEd_fqj\" data-image-guid=\"rytSDb1xj3\" data-image-url=\"/fragment/files/uploads/2021/03/09/6047dcc01fe65-carrusel-ui-path.jpg\" alt=\"\" class=\"thumb\" src=\"/fragment/files/uploads/2021/03/09/6047dcbfb3665-carrusel-ui-path.jpg\" data-image-width=\"null\" data-image-height=\"null\" data-image-desc-text=\"null\">', 'gallery-1'),
(258, 418, '<img data-guid=\"Hk6Xs5o-dK\" data-thumb-guid=\"T3xWtFcNNU\" data-image-guid=\"8luWQFneo1\" data-image-url=\"/fragment/files/uploads/2021/03/09/6047dcc51e115-carrusel-serverware.jpg\" alt=\"\" class=\"thumb\" src=\"/fragment/files/uploads/2021/03/09/6047dcc49fa36-carrusel-serverware.jpg\" data-image-width=\"null\" data-image-height=\"null\" data-image-desc-text=\"null\"><img data-guid=\"jJ41KAJkbv\" data-thumb-guid=\"am-rE9V2zr\" data-image-guid=\"cNS2y_xMfY\" data-image-url=\"/fragment/files/uploads/2021/03/09/6047dcc4d55d3-carrusel-team.jpg\" alt=\"\" class=\"thumb\" src=\"/fragment/files/uploads/2021/03/09/6047dcc43f874-carrusel-team.jpg\" data-image-width=\"null\" data-image-height=\"null\" data-image-desc-text=\"null\"><img data-guid=\"wAJHqGmjdX\" data-thumb-guid=\"idfTWI7Cya\" data-image-guid=\"pF8zQjN3LS\" data-image-url=\"/fragment/files/uploads/2021/03/09/6047dcc55ad8b-carrusel-ui-path.jpg\" alt=\"\" class=\"thumb\" src=\"/fragment/files/uploads/2021/03/09/6047dcc4defcd-carrusel-ui-path.jpg\" data-image-width=\"null\" data-image-height=\"null\" data-image-desc-text=\"null\">', 'gallery-2'),
(259, 415, '<img data-guid=\"nQ299RFHTi\" data-original-guid=\"zXyIIYQ7eJ\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/09/6047ea1dd865f-cover-servicios.jpg\">', 'image'),
(260, 415, 'Nuestros Servicios', 'intro'),
(261, 449, 'RETAIL Y DISTRIBUCION', 'title'),
(262, 449, '<div style=\"text-align: left;\">En la industria del retail y la distribuciÃ³n se estÃ¡ viendo una tendencia&nbsp; a la digitalizaciÃ³n debido al potencial de clientes que se pueden captar de esa forma y la perspectiva de mejora hacia el cliente final. De esta forma cada vez mÃ¡s estÃ¡n introduciendo y aplicando procesos que involucran el anÃ¡lisis de datos digitales y un correcto manejo de estos. Con esta visiÃ³n a futuro, el implementar RPA en tu organizaciÃ³n te ayudarÃ¡ a tener una mejor gestiÃ³n de datos, eficiencia de procesos y predicciÃ³n de demanda. Debido al gran potencial y escalabilidad de una soluciÃ³n de RPA podrÃ¡s generar una expansiÃ³n de tu negocio con un menor riesgo.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Posibles automatizaciones:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">Contabilidad y Finanzas: mejor la eficiencia de los procesos reduciendo costos y agilizando los flujos de trabajo.</li><li style=\"text-align: left;\">Control de stock: trazabilidad de los productos que se manejan y flujo de informaciÃ³n en tiempo real de su estado.</li><li style=\"text-align: left;\">GestiÃ³n de proveedores: generaciÃ³n de informes comparativos de productos y sus proveedores, notificaciones de registros, verificaciÃ³n de certificaciones de proveedores.</li><li style=\"text-align: left;\">Promociones: realiza anÃ¡lisis sobre el rendimiento de las promociones.</li><li style=\"text-align: left;\">EstadÃ­sticas de ventas: maximiza las oportunidades de ventas debido al anÃ¡lisis de la informaciÃ³n en tiempo real.</li><li style=\"text-align: left;\">Departamento de Recursos Humanos: agiliza las altas y bajas de empleados, gestiÃ³n de nÃ³minas, gestiÃ³n de dÃ­as de asueto entre otros procesos internos.</li><li style=\"text-align: left;\">AnÃ¡lisis de la competencia: anÃ¡lisis de mercado de la competencia que te permite una mayor precisiÃ³n y menor riesgo al momento de cambiar precio en productos o el lanzamiento de uno nuevo.</li><li style=\"text-align: left;\">Control de pedidos e inventario: te permite tener un control stock, trazabilidad de productos y control de inventario, asÃ­ mismo realizar un reporte detallado y ser enviado todo de forma automÃ¡tica al personal correspondiente.</li></ul></div><div style=\"text-align: left;\">Ejemplos:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">Optimizar proceso de la cadena de suministro.</li><li style=\"text-align: left;\">Agilizar trÃ¡mites comerciales y financieros.</li><li style=\"text-align: left;\">Aumento de la demanda por comercio electrÃ³nico.</li><li style=\"text-align: left;\">ActualizaciÃ³n de inventarios.</li><li style=\"text-align: left;\">AutomatizaciÃ³n de CRM (sistema de gestiÃ³n de clientes) para mejorar la relaciÃ³n y confianza.</li><li style=\"text-align: left;\">AnÃ¡lisis de recomendaciones.</li><li style=\"text-align: left;\">MicrosegmentaciÃ³n y modelos predictivos.</li><li style=\"text-align: left;\">Ã“rdenes de compra.</li></ul><div style=\"text-align: left;\">Beneficios.</div></div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">20% del crecimiento del mercado se dio gracias a soluciones tecnolÃ³gicas.</li><li style=\"text-align: left;\">43% de los ejecutivos de la industria automatizan proceso para la reducciÃ³n de costes y aumento de eficiencia.</li><li style=\"text-align: left;\">90% del cuerpo laboral de la industria estÃ¡ preparado para una transformaciÃ³n digital.</li></ul></div>', 'info'),
(263, 450, 'SERVICIOS FINANCIEROS', 'title'),
(264, 450, '<div style=\"text-align: left;\">Las entidades bancarias forman parte de las industrias mÃ¡s grandes del mundo y debido a su importancia tienen que aplicar tecnologÃ­as que les ayuden a manejar un gran volumen de datos y mejorar la experiencia con sus clientes.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">En Cyborg te ayudamos a realizar una transformaciÃ³n digital de tu negocio mediante la automatizaciÃ³n de procesos especÃ­ficos de la industria, los cuales te ayudarÃ¡n a tener una visiÃ³n holÃ­stica de tu empresa y realizar mejores anÃ¡lisis de mercado.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Posibles automatizaciones:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">Sucursal Bancaria: Una automatizaciÃ³n de los servicios que se ofrecen en las sucursales bancarias es fundamental para generar una buena relaciÃ³n con el cliente y que se resuelva su solicitud de una forma rÃ¡pida, esto se logra mediante el RPA debido a que permite un flujo de informaciÃ³n efectivo dentro de los sistemas.</li><li style=\"text-align: left;\">Centro de contacto: La mayorÃ­a de los procesos que se llevan a cabo en un centro de contacto se realizan por el operador y muchas veces el tiempo de respuesta es largo y puede contener errores. Los robots de software pueden ayudar al operador a reducir en un 80% el tiempo de llamada y a tener la informaciÃ³n precisa para dar respuestas confiables a los clientes.</li><li style=\"text-align: left;\">Operaciones bancarias a gran escala: ademÃ¡s de ser de alto volumen, se necesitan validaciones y seguridad al momento de realizarlas. Muchas de las operaciones que se llevan de manera electrÃ³nica se pueden automatizar para disminuir los errores al 0%.</li><li style=\"text-align: left;\">Operaciones de prÃ©stamos minoritas/hipotecarios: Durante todo el proceso para otorgar un prÃ©stamo y darle seguimiento para su cumplimiento, se necesitan una serie de subprocesos en donde el RPA puede entrar y ayudar a la precisiÃ³n de los agentes en los anÃ¡lisis y actualizaciones.</li><li style=\"text-align: left;\">Cumplimiento de riesgos y auditorÃ­a: la disminuciÃ³n de riesgos es parte fundamental en el sector bancario, por lo que es necesario analistas de riesgos, analistas de fraude los cuales al analizar ciertos patrones pueden llegar a una conclusiÃ³n. Los robots de software son especialistas en entregar este tipo de anÃ¡lisis ya que de manera precisa y rÃ¡pida entrar a todos los sistemas que se requiera para extraer informaciÃ³n clave y ordenarla en un entregable.</li><li style=\"text-align: left;\">GestiÃ³n Patrimonial: varios procesos relacionados con la gestiÃ³n patrimonial pueden ser automatizados mejorando la experiencia del usuario debido a que los robots actualizan la informaciÃ³n de forma automÃ¡tica y sin errores en diversos sistemas, igualmente ayudan a gestionar todos los movimientos y en los analÃ­ticos internos.</li><li style=\"text-align: left;\">Mercados Capitales: para una buena toma de decisiones en inversiones a largo plazo se debe tener informaciÃ³n actualizada en buenos formatos que se entregan a expertos en la materia, los cuales decidirÃ¡n si es viable esa operaciÃ³n. La extracciÃ³n de toda la informaciÃ³n necesaria y la creaciÃ³n de diversos entregables se pueden delegar a un robot de software.</li></ul></div><div style=\"text-align: left;\">Ejemplos:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">DiagnÃ³sticos en declinaciÃ³n de tarjetas de dÃ©bito.</li><li style=\"text-align: left;\">Manejo de transacciones fraudulentas.</li><li style=\"text-align: left;\">Cierre de cuentas.</li><li style=\"text-align: left;\">Solicitud de tarjeta de crÃ©dito.</li><li style=\"text-align: left;\">Procesos de emisiÃ³n de hipotecas.</li><li style=\"text-align: left;\">AnÃ¡lisis de casos de fraude.</li><li style=\"text-align: left;\">GeneraciÃ³n de propuestas.</li><li style=\"text-align: left;\">SupervisiÃ³n de clientes.&nbsp;</li><li style=\"text-align: left;\">Comportamiento crediticio para prÃ©stamos comerciales.</li></ul></div><div style=\"text-align: left;\">Beneficios.</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">Tiempo de respuesta reducido, entre un 40% y 60%.</li><li style=\"text-align: left;\">ReducciÃ³n de un 30% en ejecuciÃ³n de tareas.</li><li style=\"text-align: left;\">Mejora en la eficiencia de operaciones entre un 40% y 60%.</li><li style=\"text-align: left;\">Alta disminuciÃ³n en costes, alcanzando un 25% a 50%.</li></ul></div>', 'info'),
(265, 451, 'SALUD Y FARMA', 'title'),
(266, 451, '<div style=\"text-align: left;\">El sector salud es una de las industrias donde se puede ver reflejada la importancia de automatizar todos los procesos de negocio aptos para esta tecnologÃ­a. Todo el tiempo utilizado por el personal de salud en la captura de cierta informaciÃ³n en diversos sistemas, puede ser utilizado para atender de forma mÃ¡s personalizada a los pacientes al igual que estar enfocados en brindar una buena atenciÃ³n. Adoptar el ideal de automatizaciÃ³n nos ayudarÃ¡ a salvar mÃ¡s vidas.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Posibles automatizaciones:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">Servicios digitales: cada vez se estÃ¡ viendo una tendencia mundial hacia la digitalizaciÃ³n, y esto es una ventaja para la automatizaciÃ³n de un gran volumen de procesos como solicitud de citas, historiales mÃ©dicos y atenciÃ³n al cliente. Gracias a estas mejoras en los procesos es como se pueden resolver de forma rÃ¡pida y segura todas las solicitudes de los pacientes.</li><li style=\"text-align: left;\">AdministraciÃ³n de equipo mÃ©dico: todas las Ã³rdenes de compra y administraciÃ³n de facturas a proveedores se pueden jerarquizar y validar mediante la programaciÃ³n de robots de software, esto permite una mayor seguridad de las transacciones realizadas y un mejor anÃ¡lisis de almacenes debido a una buena fluidez de datos.</li><li style=\"text-align: left;\">Recursos humanos: como en todas las industrias una gran Ã¡rea de oportunidad para la automatizaciÃ³n de procesos es esta Ã¡rea. Se pueden delegar muchas tareas a los bots, por ejemplo: procesamiento, control y actualizaciÃ³n de datos del cuerpo laboral, gestiÃ³n de nÃ³minas y anÃ¡lisis de contrataciÃ³n de personal.</li><li style=\"text-align: left;\">InformaciÃ³n de pacientes: los historiales mÃ©dicos o informaciÃ³n de pacientes pasa por muchas Ã¡reas y es de suma importancia que se mantenga segura y solo se proporcione al Ã¡rea concreta la informaciÃ³n que necesita del mismo. El RPA ademÃ¡s de realizar esta tarea, te permite guardar informaciÃ³n valiosa en tus sistemas de registro de manera automÃ¡tica.</li><li style=\"text-align: left;\">AtenciÃ³n a clientes: todos los dÃ­as se reciben llamadas para solicitar ciertos estudios mÃ©dicos o simplemente pedir cierta informaciÃ³n, aquÃ­ el RPA es una herramienta muy poderosa ya que ayuda al agente en llamada a proporcionarle la informaciÃ³n precisa de manera mÃ¡s rÃ¡pida debido a que mientras se estÃ¡ en la llamada se puede activar un robot que proporcione informaciÃ³n del paciente de diversos sistemas y te la despliegue de forma estructurada en un formato preestablecido.</li><li style=\"text-align: left;\">AtenciÃ³n especializada: se pueden realizar mejores ventas automatizando o creando un proceso de un doctor digital donde de forma automÃ¡tica pueda resolver todas las dudas del paciente de forma precisa, actualizadas y de fuentes confiables, esto se logra mediante la interacciÃ³n con un chatbot que activa diversos subprocesos</li><li style=\"text-align: left;\">Operaciones de ventas: es un Ã¡rea empresarial en donde gran parte del cuerpo laboral realiza tareas repetitivas lo que causa un riesgo debido al error humano que puede ocurrir, toda la informaciÃ³n que se introduce en los sistemas de manejo de la relaciÃ³n con clientes se puede hacer de forma automÃ¡tica delegÃ¡ndosela a un robot de software</li></ul></div><div style=\"text-align: left;\">Ejemplos:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">MÃ©dico virtual.</li><li style=\"text-align: left;\">Registro de pacientes y actualizaciÃ³n de datos en diversos sistemas.</li><li style=\"text-align: left;\">AutomatizaciÃ³n del manejo de inventario</li><li style=\"text-align: left;\">Manejo y asignaciÃ³n de citas</li><li style=\"text-align: left;\">PlanificaciÃ³n de vacaciones para empleados</li></ul></div><div style=\"text-align: left;\">Beneficios.</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">ReducciÃ³n del 25% en costos de operaciones</li><li style=\"text-align: left;\">Un retorno de la inversiÃ³n alto en un lapso menor a un aÃ±o</li><li style=\"text-align: left;\">SatisfacciÃ³n del cuerpo laboral debido al aumento en tareas que generan valor</li><li style=\"text-align: left;\">ReducciÃ³n importante de FTEÂ´s gracias al trabajo eficiente de los bots</li><li style=\"text-align: left;\">PrevenciÃ³n de multas del sector salud</li><li style=\"text-align: left;\">Control, manejo y actualizaciÃ³n de datos</li><li style=\"text-align: left;\">VisualizaciÃ³n y mediciÃ³n de procesos empresariales para encontrar cuellos de botella y mejorarlos</li><li style=\"text-align: left;\">DigitalizaciÃ³n empresarial</li></ul></div>', 'info'),
(267, 452, 'SECTOR INDUSTRIAL', 'title'),
(268, 452, '<div style=\"text-align: left;\">En el sector industrial es muy importante tener una buena administraciÃ³n de la producciÃ³n y almacenaje del producto, para esto se necesita un buen anÃ¡lisis. El RPA llegÃ³ a mejorar esta industria ya que te permite mejorar procesos de obtenciÃ³n de datos y procesamiento de estos, con los cuales puede hacer una buena generaciÃ³n de demanda. Dentro de toda la cadena de suministro se pueden automatizar muchos procesos como la generaciÃ³n de facturas, gestiÃ³n de proveedores y Ã³rdenes de compra.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Posibles automatizaciones:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">MigraciÃ³n de datos: podrÃ¡s mover de manera segura todos los datos almacenados en un sistema a otro de manera rÃ¡pida.</li><li style=\"text-align: left;\">Lista de materiales: lo mÃ¡s importante es la buena administraciÃ³n de todas las materias primas y los proveedores especÃ­ficos quienes los pueden suministrar, aquÃ­ el RPA te permite agilizar el proceso de producciÃ³n y un buen manejo de todos los datos requeridos para la fabricaciÃ³n de tu producto.</li><li style=\"text-align: left;\">Ãrea administrativa: toda empresa del sector industrial debe tener un Ã¡rea administrativa en donde se puedan generar todas las ordenes de compra y manejar la logÃ­stica de entrega. Todos los procesos dentro de esta Ã¡rea tienen un alto porcentaje de automatizaciÃ³n gracias a que son de muy alto volumen y repetitivas, aquÃ­ el RPA trae un ROI elevado y a corto plazo.</li><li style=\"text-align: left;\">Sistema de planificaciÃ³n de recursos empresariales: se puede agregar mucho valor en diversos procesos como creaciÃ³n de inventarios, identificaciÃ³n de las cuentas por pagar y cobrar. Estas automatizaciones te ayudan a reducir el tiempo de ejecuciÃ³n de los procesos y sin errores.</li></ul></div><div style=\"text-align: left;\">Ejemplos:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">GestiÃ³n de quejas.</li><li style=\"text-align: left;\">Equilibrio oferta-demanda.</li><li style=\"text-align: left;\">Ordenes de compra a proveedores.</li><li style=\"text-align: left;\">Seguimiento de envÃ­os de productos.</li><li style=\"text-align: left;\">Transferencia y actualizaciÃ³n de datos del cuerpo laboral en diversos sistemas.</li></ul></div><div style=\"text-align: left;\">Beneficios.</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">91% de las empresas del sector industrial estÃ¡n realizando una transformaciÃ³n digital</li><li style=\"text-align: left;\">El 98% de la industria estÃ¡ buscando la innovaciÃ³n mediante la aplicaciÃ³n de la tecnologÃ­a</li><li style=\"text-align: left;\">El 90% menciona que existen muchos beneficios y poco riesgo en una transformaciÃ³n digital</li></ul></div>', 'info'),
(269, 453, 'TURISMO Y OCIO', 'title');
INSERT INTO `fragment` (`idfragment`, `idpage`, `value`, `name`) VALUES
(270, 453, '<div style=\"text-align: left;\">El sector de turismo y entretenimiento se encuentra en un mercado en el cual debe mantener una muy buena relaciÃ³n con sus clientes y aumentar el Ã­ndice de fidelizaciÃ³n. Para ellos las empresas utilizan diversas herramientas para el control y flujo de datos sobre los clientes que les ayudan a la buena toma de decisiones. El RPA es una soluciÃ³n para todas aquellas empresas de esta industria que quieran reducir costos y agilizar diversos procesos internos que al final se traducen en una mejora exponencial frente al usuario final debido a su rÃ¡pido nivel de respuesta y anÃ¡lisis en tiempo real de la informaciÃ³n que circula en sistemas internos.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Posibles automatizaciones:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">Mejora de la experiencia del viajero: automatizaciÃ³n de tareas que permiten usar los recursos humanos en tareas que ayuden a mejorar la experiencia del consumidor final</li><li style=\"text-align: left;\">Ãrea administrativa: se pueden automatizar todos aquellos procesos de alto volumen, repetitivos y basados en reglas de negocio. Facilita los procesos contables y ayuda a reducir riesgos debido a que no se comenten errores durante el proceso automatizado. Reduce gastos de operaciÃ³n y agiliza los flujos de trabajo</li><li style=\"text-align: left;\">Ãrea de TI: el RPA es una tecnologÃ­a complementarÃ­a a todos los sistemas de administraciÃ³n de recursos con los que cuenta tu empresa. De forma no invasiva se adapta al entorno tecnolÃ³gico donde trabaja y su integraciÃ³n agiliza todos los procesos tediosos de back office</li><li style=\"text-align: left;\">GestiÃ³n de proveedores: la gran conectividad y adaptabilidad del RPA permite gestionar pedidos a proveedores generando una conexiÃ³n entre los programas utilizados por el proveedor y los internos sin necesidad de cambiar los sistemas</li><li style=\"text-align: left;\">AutomatizaciÃ³n de la confirmaciÃ³n de reservas: genera una alta efectividad operacional en los procesos de confirmaciÃ³n de reservas debido a su Ã¡gil manejo de datos y sin errores</li><li style=\"text-align: left;\">Ãrea de recursos humanos: es un Ã¡rea donde gran parte de los procesos pueden tener un grado alto y benÃ©fico de automatizaciÃ³n. Debido a que se maneja un volumen grande de datos entre diversos sistemas y se realizan reportes especÃ­ficos</li><li style=\"text-align: left;\">AnÃ¡lisis de la competencia: el sector turismo es una industria donde se debe tener periÃ³dicamente anÃ¡lisis de mercado y de competencia, de esta forma se tiene informaciÃ³n para una toma de decisiones certera con la cual se podrÃ¡n ofrecer diversas promociones o productos en tendencia</li></ul></div><div style=\"text-align: left;\">Ejemplos:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">GestiÃ³n de demanda en productos</li><li style=\"text-align: left;\">AnÃ¡lisis de satisfacciÃ³n de cliente</li><li style=\"text-align: left;\">GestiÃ³n de empleados en sistemas internos</li><li style=\"text-align: left;\">Proceso de confirmaciÃ³n de reservas</li><li style=\"text-align: left;\">Mejora en procesos de atenciÃ³n al cliente por medio de integraciÃ³n con chatbots</li></ul></div><div style=\"text-align: left;\">Beneficios.</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">Desarrollar modelos de negocio mÃ¡s eficientes</li><li style=\"text-align: left;\">ReducciÃ³n de costos</li><li style=\"text-align: left;\">Aumento de la productividad en colaboradores</li><li style=\"text-align: left;\">AutomatizaciÃ³n de tareas repetitivas y poco productivas para la empresa</li><li style=\"text-align: left;\">Mejora en la experiencia del cliente para aumentar el Ã­ndice de fidelizaciÃ³n</li></ul></div>', 'info'),
(271, 454, 'SECTOR PÃšBLICO Y SOCIAL', 'title'),
(272, 454, '<div>Para una buena gestiÃ³n de la informaciÃ³n pÃºblica se necesita una soluciÃ³n tecnolÃ³gica que te ayude a generar valor en tus diversas plataformas en lÃ­nea, en las cuales podrÃ¡s brindar una mejor atenciÃ³n al sector pÃºblico debido a la atenciÃ³n 24 horas derivada de la automatizaciÃ³n de procesos internos. Al brindarle oportunidades al trabajador pÃºblico de realizar tareas que aÃ±adan valor a los procesos, se sentirÃ¡ mÃ¡s conforme con su trabajo, ademÃ¡s de tener mÃ¡s horas para servir a las necesidades de los ciudadanos.</div><div><br></div><div>Posibles automatizaciones:</div><div><ul style=\"text-align: justify;\"><li style=\"text-align: left;\">ReducciÃ³n del procesamiento manual: todas las tareas que tengan una entrada estÃ¡ndar, de alto volumen y repetitiva se puede automatizar. Todos los procesos manuales que se realizan en diversas Ã¡reas como: finanzas, en el tema de actualizaciÃ³n de archivos de nÃ³mina; recursos humanos, para el alta de nuevos empleados y la actualizaciÃ³n en sistemas; ente otros</li><li style=\"text-align: left;\">AutomatizaciÃ³n de procesos no estructurados: mediante la integraciÃ³n de herramientas de inteligencia artificial dentro del flujo de trabajo se pueden automatizar procesos en donde la entrada de datos no estÃ© estructurada y necesite ser analizada para el seguimiento del proceso</li><li style=\"text-align: left;\">Cumplimiento con todas las normativas: te ayuda a tener la reglamentaciÃ³n legal en orden al igual que proporciona registro, monitorizaciÃ³n y seguimiento de la auditorÃ­a. Reduce los errores humanos que muchas veces se traducen en costes operacionales para la empresa</li><li style=\"text-align: left;\">Incremento de la velocidad de validaciÃ³n: verificaciÃ³n de documentos con parÃ¡metros de validaciÃ³n, transferencia de datos entre sistemas y entrega de reportes y validaciones</li><li style=\"text-align: left;\">GestiÃ³n de contratos en plataformas del sector pÃºblico: se predefinen ciertos requisitos para la modelaciÃ³n y seguimiento en las diversas etapas del proceso de gestiÃ³n de contratos</li><li style=\"text-align: left;\">GestiÃ³n de clientes: permite la correcta administraciÃ³n y actualizaciÃ³n de informaciÃ³n valiosa sobre los clientes en sistemas de gestiÃ³n</li></ul></div><div>Ejemplos:</div><ul style=\"text-align: justify;\"><li style=\"text-align: left;\">IntegraciÃ³n con chatbots para la atenciÃ³n ciudadana las 24 horas</li><li style=\"text-align: left;\">AuditorÃ­a de procesos internos para el cumplimiento de normas</li><li style=\"text-align: left;\">AutomatizaciÃ³n de la gestiÃ³n de empleados</li><li style=\"text-align: left;\">Entrega de reportes en base al anÃ¡lisis de documentos</li></ul><div>Beneficios.</div><div><ul style=\"text-align: justify;\"><li style=\"text-align: left;\">Automatizar tareas repetitivas</li><li style=\"text-align: left;\">Empleados pÃºblicos concentrados en mejorar la calidad de los servicios pÃºblicos</li><li style=\"text-align: left;\">Puede trabajar junto con las soluciones de TI tradicionales</li></ul></div>', 'info'),
(273, 455, 'TECNOLOGÃA, MEDIOS Y COMUNICACIÃ“N', 'title'),
(274, 455, '<div style=\"text-align: left;\">La industria de medios y comunicaciÃ³n estÃ¡ en una constante evoluciÃ³n hacia una transformaciÃ³n digital, la forma de consumir contenidos ha cambiado y si se quiere seguir a la vanguardia de la industria se necesitan herramientas tecnolÃ³gicas que ayuden a generar un mayor valor a sus empleados. El RPA te ayuda mediante la delegaciÃ³n de procesos manuales repetitivos a robots de software. El anÃ¡lisis de mercado es parte fundamental en esta industria ya que debes conocer a fondo el tipo de pÃºblico al que te quieres dirigir, para esto se debe recaudar informaciÃ³n de diversas fuentes y posteriormente realizar el anÃ¡lisis. Trabajando en conjunto con esta tecnologÃ­a podrÃ¡s reducir una gran cantidad de FTEÂ´s.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Posibles automatizaciones:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">Procesos administrativos: el RPA te ayudarÃ¡ en todos aquellos procesos que sigan las siguientes caracterÃ­sticas: repetitivos, alto volumen y que sigan reglas de negocio</li><li style=\"text-align: left;\">AnÃ¡lisis de mercado: puede obtener informaciÃ³n de fuentes confiables y realizar un reporte donde contenga toda esa informaciÃ³n y enviarla de forma automÃ¡tica al Ã¡rea correspondiente</li><li style=\"text-align: left;\">GestiÃ³n de clientes: permite la correcta administraciÃ³n y actualizaciÃ³n de informaciÃ³n valiosa sobre los clientes en sistemas de gestiÃ³n</li></ul></div><div style=\"text-align: left;\">Ejemplos:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">AnÃ¡lisis de datos para el manejo de publicidad</li><li style=\"text-align: left;\">Desarrollo de contenidos mediante la recaudaciÃ³n de datos de diversas fuentes</li><li style=\"text-align: left;\">GestiÃ³n de suscripciones mediante el anÃ¡lisis de clientes</li></ul></div><div style=\"text-align: left;\">Beneficios.</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">ReducciÃ³n de costos operacionales</li><li style=\"text-align: left;\">Cuerpo laboral mÃ¡s activo debido a la reducciÃ³n de tareas repetitivas</li><li style=\"text-align: left;\">Mejora la comunicaciÃ³n y transmisiÃ³n de datos</li><li style=\"text-align: left;\">Agilidad y escalabilidad</li><li style=\"text-align: left;\">Altos niveles de seguridad de datos</li></ul></div>', 'info'),
(275, 456, 'TRANSPORTE Y LOGISTICA', 'title'),
(276, 456, '<div style=\"text-align: left;\">En un mercado globalizado las empresas de logÃ­stica y transporte deben encontrarse en una posiciÃ³n de constante innovaciÃ³n y desarrollo debido a la alta competencia y demanda del mercado. Los sistemas integrales de logÃ­stica tienen subprocesos que tiene que realizar el personal para alimentar el flujo de datos para asÃ­ poder obtener rendimiento de los programas. El RPA entra como una soluciÃ³n de tecnologÃ­a que ayuda a eliminar el riesgo de captura de datos y agiliza los procesos, asÃ­ generando valor y ofreciÃ©ndole al colaborador una oportunidad de generar valor en tareas que involucren un razonamiento crÃ­tico. Igualmente engloba otras oportunidades de automatizaciÃ³n de procesos de negocio en diferentes Ã¡reas de la empresa.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Posibles automatizaciones:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">AtenciÃ³n a clientes: optimiza procesos internos del flujo de informaciÃ³n, generando de esta forma una resoluciÃ³n Ã¡gil y precisa de las peticiones de los clientes</li><li style=\"text-align: left;\">Subprocesos en sistemas de logÃ­stica y ERP: la administraciÃ³n de este tipo de sistemas requiere precisiÃ³n y buen manejo de las plataformas, procesos que involucren el alta de informaciÃ³n pueden ser automatizados</li><li style=\"text-align: left;\">Seguimiento de envÃ­os: los bots se pueden programar para extraer informaciÃ³n de diversos documentos y registrarla en diversos sistemas, de esta forma logramos una actualizaciÃ³n del estado del pedido mÃ¡s Ã¡gil y sin riesgos</li><li style=\"text-align: left;\">Procesamiento de facturas y cobros de crÃ©dito: en las Ã¡reas de cuentas por cobrar y cuentas por pagar hay un gran potencial de aplicaciÃ³n del RPA debido a que no se cuenta con una circulaciÃ³n de informaciÃ³n efectiva</li><li style=\"text-align: left;\">Procesamiento de pedidos y pagos: es un proceso que tiene un alto potencial de automatizaciÃ³n debido al tipo de entrada</li><li style=\"text-align: left;\">AutomatizaciÃ³n de inventarios: para un buen manejo de almacenes se debe tener informaciÃ³n en tiempo real para el anÃ¡lisis de demanda y una buena administraciÃ³n de logÃ­stica de proveedores. Para esto se deben tener procesos optimizados que funciones de la mano con bots de software que se encarguen del levantamiento de datos de diversos sistemas</li><li style=\"text-align: left;\">GestiÃ³n de documentos: se deben gestionar los documentos que forman un proceso para garantizar la calidad de este, se realizan de forma manual y esta es una carga muy tediosa para el responsable. Gracias al RPA se puede programar a un bot con ciertos parÃ¡metros para que analice documentos y gestione las excepciones</li><li style=\"text-align: left;\">RevisiÃ³n de contratos: se automatiza mediante la programaciÃ³n de un bot que siga ciertas condiciones al momento de realizar el anÃ¡lisis de un contrato</li></ul></div><div style=\"text-align: left;\">Ejemplos:</div><ul style=\"text-align: justify;\"><li style=\"text-align: left;\"><span style=\"text-align: justify;\">Ã“rdenes de compra</span></li><li style=\"text-align: left;\">GestiÃ³n de facturas</li><li style=\"text-align: left;\">AdministraciÃ³n de productos en almacenes</li><li style=\"text-align: left;\">ActualizaciÃ³n de datos en sistema de planificaciÃ³n de recursos</li></ul><div style=\"text-align: left;\">Beneficios.</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">60% de reducciÃ³n de costos de servicio</li><li style=\"text-align: left;\">ReducciÃ³n del 80% en tiempo en procesos automatizados</li><li style=\"text-align: left;\">60% al 100% en cumplimiento de SLAâ€™s</li></ul></div>', 'info'),
(277, 457, 'ENERGÃA Y UTILITIES', 'title'),
(278, 457, '<div style=\"text-align: left;\">La creciente demanda de energÃ­a limpia, barata y fiable genera un cambio en este sector debido a que las empresas involucradas en esta industria deben estar preparadas para cambios constantes debido a la forma acelerada en que se desarrolla la tecnologÃ­a. La innovaciÃ³n y tener una perspectiva hacia las necesidades del consumidor son puntos clave para que una empresa pueda prosperar en la industria. El RPA entra como catalizador debido a la naturaleza de la tecnologÃ­a que funciona de manera no invasiva y se puede desarrollar un proyecto en un corto lapso.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Posibles automatizaciones:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">Clientes: atender a los clientes de manera personalizada mediante una gestiÃ³n efectiva de reclamaciones y comunicaciÃ³n efectiva</li><li style=\"text-align: left;\">Facturas: gestionar facturas con alto nivel de informaciÃ³n y hacer la relaciÃ³n con costes</li><li style=\"text-align: left;\">InformaciÃ³n: al facilitarle informaciÃ³n rÃ¡pida y confiable a tus consumidores. Generando de esta manera confianza y aumentando la generaciÃ³n de oportunidades de venta</li><li style=\"text-align: left;\">Transferencia de informaciÃ³n segura: vincula los sistemas de inventarios entre las empresas. La transferencia y anÃ¡lisis de datos se realiza de forma mÃ¡s segura debido a que esa informaciÃ³n y las excepciones solo estÃ¡n al alcance de personas especÃ­ficas</li><li style=\"text-align: left;\">Mejora de procesos contables: anÃ¡lisis de la informaciÃ³n financiera y generaciÃ³n de entregables</li><li style=\"text-align: left;\">AdministraciÃ³n de datos: ayuda a gestionar volÃºmenes altos de informaciÃ³n de manera precisa y organizÃ¡ndola en los rubros que se requiera</li><li style=\"text-align: left;\">GestiÃ³n de informes: extrae y compila informaciÃ³n de diversos sistemas para generar informes de cumplimiento</li><li style=\"text-align: left;\">Ã“rdenes de compra: RPA te permite la automatizaciÃ³n completa del proceso de pedidos de clientes mediante el anÃ¡lisis de documentos y gestiÃ³n de los mÃ³dulos pertinentes en las plataformas de inventarios y gestiÃ³n de recursos empresariales</li></ul></div><div style=\"text-align: left;\">Ejemplos:</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">RealizaciÃ³n de proyecciones</li><li style=\"text-align: left;\">Trading de energÃ­a</li><li style=\"text-align: left;\">OptimizaciÃ³n de rentabilidad</li><li style=\"text-align: left;\">Interfaces de comportamiento con la red</li><li style=\"text-align: left;\">GestiÃ³n de reclamaciones</li></ul></div><div style=\"text-align: left;\">Beneficios.</div><div style=\"text-align: justify;\"><ul><li style=\"text-align: left;\">Incremento en la calidad de las operaciones</li><li style=\"text-align: left;\"><span style=\"text-align: justify;\">Incremento en clientes potenciales (leads)</span></li><li style=\"text-align: left;\">Mejora en la experiencia del cliente debido a una respuesta mÃ¡s rÃ¡pida</li><li style=\"text-align: left;\">ReducciÃ³n del nÃºmero de procesos relacionados con peticiones de informaciÃ³n y compras</li><li style=\"text-align: left;\">Incremento en la productividad del personal</li><li style=\"text-align: left;\">47% de los directivos de empresas de energÃ­a y utilities menciona que el ahorro de costes conseguido con RPA estÃ¡ por encima de lo que esperaba</li></ul></div>', 'info'),
(279, 458, 'AUTOMOTRIZ', 'title'),
(280, 458, '<div>La innovaciÃ³n y modernizaciÃ³n eficiente de esta industria ha ido incrementando de manera tan rÃ¡pida debido a la demanda del mercado y su implementaciÃ³n ha podido realizarse gracias a la aplicaciÃ³n de la tecnologÃ­a.&nbsp; De esta manera, la hiperautomatizaciÃ³n (RPA + IA) se puede implementar no sÃ³lo en los procesos de operaciÃ³n a nivel planta sino tambiÃ©n en la automatizaciÃ³n de procesos financieros&nbsp; y administrativos, que tengan como objetivo el ahorro de recursos.</div><div><br></div><div>Nuestro objetivo es presentar soluciones realistas a las empresas, de esta forma, podrÃ¡n agilizar su operaciÃ³n manteniendo la misma cantidad de inversiÃ³n en recursos. Es de suma importancia para nosotros entender el contexto de cada uno de nuestros clientes para ofrecerle soluciones confiables, basadas en metodologÃ­as comprobadas, para alcanzar los resultados estimados de manera rÃ¡pida y eficiente.</div><div><br></div><div>Posibles automatizaciones:</div><div><ul style=\"text-align: justify;\"><li style=\"text-align: left;\">GestiÃ³n y anÃ¡lisis de proveedores: te permite recaudar informaciÃ³n de diversas fuentes e ingresarla en sistemas de anÃ¡lisis o realizarlos directamente en una hoja de cÃ¡lculo. Esto te permite una mejor toma de decisiones que impacta directamente en las ventas y utilidades de la empresa. Igualmente, a nivel de circulaciÃ³n de informaciÃ³n con tus proveedores se utilizan diversos sistemas en donde se tiene que actualizar la informaciÃ³n, todo este proceso es automatizable y se puede delegar a un robot de software</li><li style=\"text-align: left;\">Ãrea de recursos humanos: en procesos como contrataciÃ³n de personal, gestiÃ³n de vacaciones y faltas, prevenciÃ³n de riesgos laborales, entre otros. Al pensar en automatizaciÃ³n se crean oportunidades de generaciÃ³n de valor para los colaboradores, debido a la optimizaciÃ³n del tiempo de ejecuciÃ³n de los procesos que permite un enfoque centrado en la resoluciÃ³n de excepciones y problemas complejos</li><li style=\"text-align: left;\">Ãrea de venta: ayudando al agente de ventas a proporcionar toda la informaciÃ³n necesaria y precisa en llamada con clientes. De esta forma se tendrÃ¡n prospectos con un alto Ã­ndice de venta</li><li style=\"text-align: left;\">GestiÃ³n de clientes: realizar un anÃ¡lisis de la informaciÃ³n de clientes para el correcto manejo de campaÃ±as de marketing. Automatizando el proceso completo se obtendrÃ¡n proyecciones de ventas mÃ¡s altas</li><li style=\"text-align: left;\">Ãrea de finanzas y contabilidad: mediante el uso de herramientas de inteligencia artificial aplicadas a la automatizaciÃ³n se puede obtener informaciÃ³n importante de facturas de clientes y posteriormente introducirla en softwares de contabilidad y fianzas. De esta forma aseguramos el manejo seguro de la informaciÃ³n empresarial y la reducciÃ³n de errores</li></ul></div><div>Ejemplos:</div><div><ul style=\"text-align: justify;\"><li style=\"text-align: left;\">CampaÃ±a de marketing dirigida a clientes potenciales</li><li style=\"text-align: left;\">IdentificaciÃ³n de potenciales proveedores</li><li style=\"text-align: left;\">EmisiÃ³n de facturas a clientes</li><li style=\"text-align: left;\">GestiÃ³n de vacaciones del personal</li><li style=\"text-align: left;\">Transferencia y actualizaciÃ³n de datos entre los sistemas de gestiÃ³n empresarial</li></ul></div><div>Beneficios.</div><div><ul style=\"text-align: justify;\"><li style=\"text-align: left;\">Aumento en la productividad en InvestigaciÃ³n y Desarrollo del 16%</li><li style=\"text-align: left;\">Mejoras de la eficiencia operativa en la cadena de suministro del 15%</li><li style=\"text-align: left;\">En fabricaciÃ³n y operaciones se obtiene una mejora del 16%</li><li style=\"text-align: left;\">ReducciÃ³n de costos directos en la experiencia del cliente en un 14%</li><li style=\"text-align: left;\">ReducciÃ³n en tecnologÃ­as de la informaciÃ³n en un 17%</li><li style=\"text-align: left;\">DisminuciÃ³n en el tiempo de comercializaciÃ³n en un 15%</li><li style=\"text-align: left;\">ReducciÃ³n del 13% en tiempo de comercializaciÃ³n en marketing y ventas</li><li style=\"text-align: left;\">Aumento en agilidad, diversidad y flexibilidad de la cadena de suministros</li></ul></div>', 'info'),
(281, 426, 'TECNOLOGÃA', 'title'),
(282, 426, '<div style=\"text-align: left;\">Nuestra alianza estratÃ©gica de especialistas en automatizaciÃ³n robÃ³tica de procesos (RPA) pueden ayudarlo a:</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Incrementa la productividad sin aumentar tu fuerza laboral, Minimizar el riesgo operativo, Ahorro en costos, Mejora la experiencia de tus clientes.Reduce errores humanos.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Incrementar la velocidad y exactitud. Incrementa el cumplimiento.Escalable y flexible.</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Disponibilidad 24x365. Acelerar la empresa hacia la transformaciÃ³n digital. en su empresa para determinar la mejor estrategia de automatizaciÃ³n. Roi acelerado</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">GarantÃ­a Partner de UiPath</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Clasificada como la mejor tecnologÃ­a de AutomatizaciÃ³n de Procesos</div><div style=\"text-align: left;\"><br></div><div style=\"text-align: left;\">Nuestro objetivo es ayudarte con implementaciones de RPA de extremo a extremo para optimizar tu eficiencia operativa, con una metodologÃ­a que cubre de manera integral el ciclo de vida completo del proyecto RPA que implantamos.</div>', 'info'),
(283, 427, 'CONSULTORIA ESPECIALIZADA EN RPA', 'title'),
(284, 427, '<div style=\"text-align: justify;\">Para la automatizaciÃ³n de procesos es indispensable contar con un proceso definido, por medio de este servicio apoyamos a la empresa para la identificaciÃ³n, definiciÃ³n y diseÃ±o de nuevos procesos para poder ser automatizados.</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">Nuestro equipo puede garantizar que lleguemos a una estrategia adecuada para las implementaciones de RPA para tu empresa, gracias a nuestra experiencia en consultorÃ­a, AnÃ¡lisis de los procesos de negocio, estudios de viabilidad y construcciÃ³n de los RPA Business Case.</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">Servicio de consultorÃ­a especializada en transformaciÃ³n digital, con enfoque en la generaciÃ³n de valor en conjunto con tecnologÃ­a a travÃ©s de:</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">PLAN ESTRATÃ‰GICO DE DIGITALIZACIÃ“N</div><div style=\"text-align: justify;\">EVALUACIÃ“N DE OPORTUNIDADES DE DIGITALIZACIÃ“N</div><div style=\"text-align: justify;\">DEFINICIÃ“N DE COE - CENTRO DE EXCELENCIA</div>', 'info'),
(285, 428, 'IMPLEMENTACIONES', 'title'),
(286, 428, '<div>Nuestros consultores, ingernieros y profesionales de negocio, asegurarÃ¡n que el proceso de RPA a implementarse, tenga un riesgo extremadamente bajo y alta eficiencia para tu organizaciÃ³n, aportando una combinaciÃ³n Ãºnica de experiencia y una increÃ­ble profundidad de conocimiento en RPA, para ayudarte a implementarlo en tu negocio.</div><div><br></div><div>Servicio de implementaciÃ³n de proyectos de automatizaciÃ³n llave en mano, contando con cÃ©lulas de trabajo de alto rendimiento:</div><div><br></div><div>LLAVE EN MANO ON PREMISE</div><div>AS A SERVICE</div><div><br></div>', 'info'),
(287, 429, 'OPERACIONES Y MANTENIMIENTO', 'title'),
(288, 429, '<div style=\"text-align: justify;\">El equipo de mantenimiento le ayudara a mantener y mejorar las implementaciones RPA existentes para alcanzar resultados excelentes, a traves de:</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">Manejo de la operaciÃ³n de los robots, dedicando mÃ¡s fuerza de trabajo virtual al proceso mÃ¡s prioritario en cada momento (de forma planificada o reaccionando a puntas de trabajo).</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">Mejora continua de cada proceso robotizado a medida que se avanza en la implementaciÃ³n e identificaciÃ³n de oportunidades.</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">Simulacion y trazabilidad&nbsp; de cada uno de los clicks y movimientos realizados por el robot.</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">GestiÃ³n y resoluciÃ³n de incidencias de operaciÃ³n, segÃºn protocolos pactados de criticidad y urgencia.</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">ActualizaciÃ³n de los software de RPA segÃºn necesidades del cliente&nbsp;</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">GestiÃ³n de la infraestructura y soporte para una soluciÃ³n llave en mano.</div><div style=\"text-align: justify;\"><br></div><div style=\"text-align: justify;\">Servicio de administraciÃ³n, gestiÃ³n y mantenimiento de robots que garantiza una operaciÃ³n Ã¡gil y dinÃ¡mica.</div>', 'info'),
(289, 470, '<img data-guid=\"_XV-neGE5J\" data-original-guid=\"x78m6I4p8m\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/09/60483237a9e62-team2.jpg\">', 'img'),
(290, 470, 'Administra, orquesta y controla la mano de obra virtual en el entorno operacional.', 'desc'),
(291, 471, '<img data-guid=\"baUiFCVqTw\" data-original-guid=\"6tsHn-98O4\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/09/604832bbcf453-team6.jpg\">', 'img'),
(292, 471, 'Crea las definiciones del proceso y los mapas  del proceso utilizados para automatizar.', 'desc'),
(293, 472, '<img data-guid=\"0kSm17vO7s\" data-original-guid=\"SJW2zRjXub\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/09/604832f56daef-team3.jpg\">', 'img'),
(294, 472, 'Crea un cambio y comunica un plan, que se alinea con  las entregas del proyecto, con objeto de facilitar la adopciÃ³n de RPA dentro de la empresa.', 'desc'),
(295, 473, '<img data-guid=\"fbShPln6zD\" data-original-guid=\"pJVSwwtToQ\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/09/6048333b27749-team7.jpg\">', 'img'),
(296, 473, 'DiseÃ±a, desarrolla y prueba los objetos de automatizaciÃ³n.', 'desc'),
(297, 475, 'Gestiona las instalaciones del servidor y la  resoluciÃ³n de fallos.', 'desc'),
(298, 474, '<img data-guid=\"6LY9-m75tN\" data-original-guid=\"IIhxiGb5wL\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/09/604834e9f074b-team4.jpg\">', 'img'),
(299, 474, 'Define la arquitectura de la soluciÃ³n de RPA  y cuida del rendimiento global de la soluciÃ³n  acordada.', 'desc'),
(300, 475, '<img data-guid=\"A5F9PFlhvx\" data-original-guid=\"CGiWj4fNzC\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/09/60483513eb4b1-team8.jpg\">', 'img'),
(301, 419, 'Blog', 'intro'),
(302, 419, '<img data-guid=\"V7iBIgGNVc\" data-original-guid=\"ysT3b3BE4s\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/09/6048356c573e0-cover-blog.jpg\">', 'image'),
(303, 476, '<img data-guid=\"D2wtXE5Y5F\" data-original-guid=\"AYeUXUuuek\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/60496dee875e3-entry-6.jpg\">', 'image'),
(304, 476, '<img data-guid=\"BOrc7uv-gy\" data-original-guid=\"Jig4fw0J8c\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/60496f4c820bd-cover.jpg\">', 'main-image'),
(305, 476, 'Los ingresos por software de automatizaciÃ³n de procesos robÃ³ticos (RPA) a nivel mundial alcanzarÃ¡n el prÃ³ximo aÃ±o los 1,890 millones de dÃ³lares (mdd) en 2021â€¦', 'intro'),
(306, 476, '', 'body'),
(307, 477, 'Se estarÃ¡n preguntando Â¿QuÃ© aplicaciones existen actualmente para RPA?â€¦', 'intro'),
(308, 477, '<img data-guid=\"O1blCPNasH\" data-original-guid=\"C2pcsIra_E\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/60496f0a04277-cover.jpg\">', 'main-image'),
(309, 477, '<img data-guid=\"H1r93cNQI5\" data-original-guid=\"LlZQif0Fw2\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/60496f13eea55-entry-5.jpg\">', 'image'),
(310, 478, '<img data-guid=\"4X7vvGbR1Q\" data-original-guid=\"dmT8CE2z8P\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/6049702168ea5-entry-4.jpg\">', 'image'),
(311, 478, '<img data-guid=\"VmalaS6tJv\" data-original-guid=\"-V46Xj93Kh\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/6049702a1d0f8-cover.jpg\">', 'main-image'),
(312, 478, 'La automatizaciÃ³n inteligente de procesos empresariales con tecnologÃ­as como Robotic Process Automation (RPA)â€¦', 'intro'),
(313, 479, '<img data-guid=\"xME7buJkbz\" data-original-guid=\"122q5Luhvn\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/60497091c11e5-entry-3.jpg\">', 'image'),
(314, 479, '<img data-guid=\"7CY1CFf-Qv\" data-original-guid=\"9vQiYGJg2a\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/60497098c05ce-cover.jpg\">', 'main-image'),
(315, 479, 'La implementaciÃ³n de soluciones disruptivas en sectores como&nbsp; Recursosâ€¦', 'intro'),
(316, 480, '<img data-guid=\"y7qomLDdfb\" data-original-guid=\"XrGG01oMtJ\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/6049768345313-entry-2.jpg\">', 'image'),
(317, 480, '<img data-guid=\"IYkI_sJpJr\" data-original-guid=\"AUSDsxsHzB\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/6049768f7ca43-cover.jpg\">', 'main-image'),
(318, 480, 'A finales de 2019, mucho antes de que la crisis de salud de la COVID-19 tuviera dimensiones globales, Guy Kirkwood, Evangelistaâ€¦', 'intro'),
(319, 481, '<img data-guid=\"U6ek4XXTTa\" data-original-guid=\"wp97yCHuPU\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/604977017aff1-cover.jpg\">', 'main-image'),
(320, 481, '<img data-guid=\"B89BugqIHF\" data-original-guid=\"t5Q59w6NeN\" alt=\"[description]\" src=\"/fragment/files/uploads/2021/03/10/60497703bfa5a-entry-1.jpg\">', 'image'),
(321, 481, '<div>Robotic Process Automation.</div><div>Es un software que combina robÃ³tica con informÃ¡tica, el cual hace referencia a laâ€¦</div>', 'intro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `group`
--

CREATE TABLE `group` (
  `idgroup` int(11) NOT NULL,
  `name` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `group`
--

INSERT INTO `group` (`idgroup`, `name`) VALUES
(1, 'System');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `group_user`
--

CREATE TABLE `group_user` (
  `idgroupuser` int(11) NOT NULL,
  `idgroup` int(11) DEFAULT '0',
  `iduser` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `page`
--

CREATE TABLE `page` (
  `idpage` int(11) NOT NULL,
  `idparent` int(11) DEFAULT '0',
  `idgroup` int(11) DEFAULT '0',
  `iduser` int(11) DEFAULT '0',
  `guid` varchar(50) DEFAULT NULL,
  `key` varchar(200) DEFAULT NULL,
  `trash` int(1) DEFAULT '0',
  `online` int(1) DEFAULT '0',
  `template` varchar(20) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `title` varchar(128) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `order` int(11) DEFAULT '0',
  `sort` varchar(20) DEFAULT NULL,
  `powner` int(11) DEFAULT '0',
  `pgroup` int(11) DEFAULT '0',
  `pother` int(11) DEFAULT '0',
  `pworld` int(11) DEFAULT '0',
  `flags` int(11) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `page`
--

INSERT INTO `page` (`idpage`, `idparent`, `idgroup`, `iduser`, `guid`, `key`, `trash`, `online`, `template`, `created`, `modified`, `title`, `description`, `order`, `sort`, `powner`, `pgroup`, `pother`, `pworld`, `flags`) VALUES
(1, 0, 1, 1, 'home', 'home', 0, 1, 'index', '2021-02-09 22:42:30', '2021-02-09 22:42:30', 'Home', NULL, 0, NULL, 63, 19, 17, 17, 0),
(414, 0, 1, 1, '63BNe3m_6P', 'nosotros', 0, 1, 'nosotros', '2021-02-11 00:29:35', '2021-02-24 13:40:33', 'Nosotros', '', 1, '', 59, 17, 0, 17, 1),
(415, 0, 1, 1, 'WC0H2V_CTu', 'servicios', 0, 1, 'template', '2021-02-11 22:42:28', '2021-03-09 15:36:32', 'Servicios', '', 1, '', 59, 17, 0, 17, 1),
(416, 0, 1, 1, '3to---yEhD', 'rpa-and-hiperautomatizacion', 0, 1, 'rpa-hiper', '2021-02-11 22:43:23', '2021-02-24 13:40:56', 'RPA & HiperautomatizaciÃ³n', '', 1, '', 59, 17, 0, 17, 1),
(417, 0, 1, 1, 'xx1BNhE2-l', 'industrias', 0, 1, 'template', '2021-02-11 22:43:48', '2021-03-09 14:59:13', 'Industrias', '', 1, '', 59, 17, 0, 17, 1),
(418, 0, 1, 1, 'XlFM3rwVvc', 'clientes', 0, 1, 'index', '2021-02-11 22:44:01', '2021-02-11 22:44:01', 'Clientes', '', 1, '', 59, 17, 0, 17, 1),
(419, 0, 1, 1, 'cH5tfO7Jkb', 'blog', 0, 1, 'blog', '2021-02-11 22:44:05', '2021-03-09 15:44:13', 'Blog', '', 1, '', 59, 17, 0, 17, 1),
(420, 0, 1, 1, 'QJ22o0nMwG', 'contacto', 0, 1, 'index', '2021-02-11 22:44:12', '2021-02-11 22:44:12', 'Contacto', '', 1, '', 59, 17, 0, 17, 1),
(421, 414, 1, 1, 'm7PGfV1J3c', 'visin-misin-y-valores', 0, 1, 'index', '2021-02-11 22:45:48', '2021-02-11 22:45:48', 'VisiÃ³n, misiÃ³n y valores', '', 1, '', 59, 17, 0, 17, 1),
(422, 414, 1, 1, 'S8EpPRgT4y', 'cyborg-way', 0, 1, 'index', '2021-02-11 22:46:02', '2021-02-11 22:46:02', 'CYBORG Way', '', 1, '', 59, 17, 0, 17, 1),
(423, 414, 1, 1, 'RyzlfdeJl4', 'programa-partners', 0, 1, 'index', '2021-02-11 22:46:14', '2021-02-11 22:46:14', 'Programa Partners', '', 1, '', 59, 17, 0, 17, 1),
(424, 414, 1, 1, 'XyGeB9WeZI', 'equipo-cyborg', 0, 1, 'index', '2021-02-11 22:46:29', '2021-02-11 22:46:29', 'Equipo CYBORG', '', 1, '', 59, 17, 0, 17, 1),
(425, 414, 1, 1, 'qyQWZGMCu7', 'nete-a-cyborg', 0, 1, 'index', '2021-02-11 22:46:39', '2021-02-11 22:46:39', 'Ãšnete a CYBORG', '', 1, '', 59, 17, 0, 17, 1),
(426, 415, 1, 1, 'tJkR1smJoN', 'tecnologa', 0, 1, 'index', '2021-02-11 22:47:00', '2021-02-11 22:47:00', 'TecnologÃ­a', '', 1, '', 59, 17, 0, 17, 1),
(427, 415, 1, 1, 'soGqCRlUhr', 'consultora', 0, 1, 'index', '2021-02-11 22:47:05', '2021-02-11 22:47:05', 'ConsultorÃ­a', '', 1, '', 59, 17, 0, 17, 1),
(428, 415, 1, 1, 'nxTDEl1dz7', 'implementaciones', 0, 1, 'index', '2021-02-11 22:47:14', '2021-02-11 22:47:14', 'Implementaciones', '', 1, '', 59, 17, 0, 17, 1),
(429, 415, 1, 1, 'OI4VvGv7d9', 'operaciones-y-mantenimiento', 0, 1, 'index', '2021-02-11 22:47:24', '2021-02-11 22:47:24', 'Operaciones y mantenimiento', '', 1, '', 59, 17, 0, 17, 1),
(430, 416, 1, 1, 'vzmB-OasR-', 'rpa', 0, 1, 'index', '2021-02-11 22:47:39', '2021-02-11 22:47:39', 'RPA', '', 1, '', 59, 17, 0, 17, 1),
(431, 416, 1, 1, '7neekUcqHu', 'robots', 0, 1, 'index', '2021-02-11 22:47:44', '2021-02-11 22:47:44', 'Robots', '', 1, '', 59, 17, 0, 17, 1),
(432, 1, 1, 1, 'eCZ8LJw7BP', 'ebook', 0, 1, 'ebook', '2021-02-26 19:29:44', '2021-03-01 12:45:49', 'Ebook', '', 1, '', 59, 17, 0, 17, 1),
(433, 1, 1, 1, '0Zi3-3tvvj', 'aviso-de-privacidad', 0, 1, 'aviso', '2021-02-26 19:30:55', '2021-02-26 19:31:10', 'Aviso de Privacidad', '', 1, '', 59, 17, 0, 17, 1),
(434, 421, 1, 1, 'UQutB-2aiq', 'visin', 0, 1, 'index', '2021-02-26 19:31:37', '2021-02-26 19:31:58', 'VisiÃ³n', '', 1, '', 59, 17, 0, 17, 1),
(435, 421, 1, 1, '97EgrLScys', 'misin', 0, 1, 'index', '2021-02-26 19:31:48', '2021-02-26 19:32:01', 'MisiÃ³n', '', 1, '', 59, 17, 0, 17, 1),
(436, 421, 1, 1, '8klDBjVTu6', 'valores', 0, 1, 'index', '2021-02-26 19:31:54', '2021-02-26 19:34:54', 'Valores', '', 1, '', 59, 17, 0, 17, 1),
(437, 436, 1, 1, 'YNMyf2mkGJ', 'excelencia', 0, 1, 'index', '2021-02-26 19:35:10', '2021-02-26 19:35:13', 'Excelencia', '', 1, '', 59, 17, 0, 17, 1),
(438, 436, 1, 1, 'GItsbnT9Jg', 'trabajo-en-equipo', 0, 1, 'index', '2021-02-26 19:35:20', '2021-02-26 19:35:27', 'Trabajo en equipo', '', 1, '', 59, 17, 0, 17, 1),
(439, 416, 1, 1, 'YVEr65sESM', 'hiperautomatizacin', 0, 1, 'rpa-hiper', '2021-03-01 10:07:50', '2021-03-01 10:07:52', 'HiperautomatizaciÃ³n', '', 1, '', 59, 17, 0, 17, 1),
(440, 430, 1, 1, 'sMFZKz7T6a', 'reduccin-de-costos-operativos-30--60', 0, 1, 'index', '2021-03-01 10:30:27', '2021-03-01 10:30:32', 'ReducciÃ³n de costos operativos 30% - 60%', '', 1, '', 59, 17, 0, 17, 1),
(441, 430, 1, 1, 'pX-lNBBUP0', 'cumplimiento-en-normativa-100', 0, 1, 'index', '2021-03-01 10:30:43', '2021-03-01 10:30:46', 'Cumplimiento en normativa 100%', '', 1, '', 59, 17, 0, 17, 1),
(442, 430, 1, 1, 'gpsT_WsAf9', 'escalabilidad-y-mejor-capacidad-30', 0, 1, 'index', '2021-03-01 10:32:14', '2021-03-01 10:37:07', 'Escalabilidad y mejor capacidad 30%', '', 1, '', 59, 17, 0, 17, 1),
(443, 430, 1, 1, 'pZA4jzWEmc', 'incremento-de-la-productividad-y-eficiencia-80', 0, 1, 'index', '2021-03-01 10:37:16', '2021-03-01 10:37:20', 'Incremento de la productividad y eficiencia 80%', '', 1, '', 59, 17, 0, 17, 1),
(444, 430, 1, 1, '0a6aG1rAH5', 'incremento-de-la-satisfaccin-de-sus-empleados-100', 0, 1, 'index', '2021-03-01 10:37:31', '2021-03-01 10:37:33', 'Incremento de la satisfacciÃ³n de sus empleados 100%', '', 1, '', 59, 17, 0, 17, 1),
(445, 430, 1, 1, 'uC2sCB40jA', 'mejora-la-experiencia-del-cliente-57', 0, 1, 'index', '2021-03-01 10:37:41', '2021-03-01 10:39:32', 'Mejora la experiencia del cliente 57%', '', 1, '', 59, 17, 0, 17, 1),
(446, 431, 1, 1, 'CyJM1RU6QC', 'soft-bots', 0, 1, 'index', '2021-03-01 10:40:05', '2021-03-01 10:40:10', 'Soft-Bots', '', 1, '', 59, 17, 0, 17, 1),
(447, 431, 1, 1, 'MxraxJWtAv', 'imitacin-de-tareas', 0, 1, 'index', '2021-03-01 10:40:18', '2021-03-01 10:40:21', 'ImitaciÃ³n de Tareas', '', 1, '', 59, 17, 0, 17, 1),
(448, 431, 1, 1, '8f-V9hF6vd', 'automatizacin', 0, 1, 'index', '2021-03-01 10:40:33', '2021-03-01 10:42:10', 'AutomatizaciÃ³n', '', 1, '', 59, 17, 0, 17, 1),
(449, 417, 1, 1, 'rE4tzLj8Fi', 'retail-y-distribucion', 0, 1, 'index', '2021-03-01 10:42:42', '2021-03-17 17:37:51', 'Retail y DistribuciÃ³n', '', 1, '', 59, 17, 0, 17, 1),
(450, 417, 1, 1, 'wLVfe10b0w', 'servicios-financieros', 0, 1, 'index', '2021-03-01 13:33:58', '2021-03-01 13:34:04', 'Servicios Financieros', '', 1, '', 59, 17, 0, 17, 1),
(451, 417, 1, 1, 'NrKm2S83KG', 'salud-y-farma', 0, 1, 'index', '2021-03-01 13:34:28', '2021-03-01 13:34:31', 'Salud y Farma', '', 1, '', 59, 17, 0, 17, 1),
(452, 417, 1, 1, 'y0lEUKKthy', 'industrial', 0, 1, 'index', '2021-03-01 13:35:59', '2021-03-01 13:36:02', 'Industrial', '', 1, '', 59, 17, 0, 17, 1),
(453, 417, 1, 1, 'Ar9j1fCfuV', 'turismo-y-ocio', 0, 1, 'index', '2021-03-01 13:36:23', '2021-03-01 13:38:17', 'Turismo y Ocio', '', 1, '', 59, 17, 0, 17, 1),
(454, 417, 1, 1, 'wBLeytVpEu', 'sector-pblico-y-social', 0, 1, 'index', '2021-03-01 13:39:03', '2021-03-17 17:38:05', 'Sector PÃºblico y Social', '', 1, '', 59, 17, 0, 17, 1),
(455, 417, 1, 1, 'ldKheSEF10', 'tecnologa-medios-y-comunicacin', 0, 1, 'index', '2021-03-01 13:39:50', '2021-03-17 17:39:23', 'TecnologÃ­a, medios y comunicaciÃ³n', '', 1, '', 59, 17, 0, 17, 1),
(456, 417, 1, 1, 'bldCJJSrLe', 'transporte-y-logistica', 0, 1, 'index', '2021-03-01 13:42:16', '2021-03-17 17:39:34', 'Transporte y logÃ­stica', '', 1, '', 59, 17, 0, 17, 1),
(457, 417, 1, 1, 'OiszrQf7-v', 'energa-y-utilities', 0, 1, 'index', '2021-03-01 13:44:01', '2021-03-01 13:45:10', 'EnergÃ­a y Utilities', '', 1, '', 59, 17, 0, 17, 1),
(458, 417, 1, 1, 'eCrVLGN9Ft', 'automotriz', 0, 1, 'index', '2021-03-01 13:45:50', '2021-03-01 13:45:54', 'Automotriz', '', 1, '', 59, 17, 0, 17, 1),
(459, 436, 1, 1, 'S_cOK6ciTT', 'empatia', 0, 1, 'index', '2021-03-01 13:47:54', '2021-03-12 20:10:06', 'EmpatÃ­a', '', 1, '', 59, 17, 0, 17, 1),
(460, 436, 1, 1, 'L64UevtBgA', 'liderazgo', 0, 1, 'index', '2021-03-01 13:49:45', '2021-03-01 13:49:51', 'Liderazgo', '', 1, '', 59, 17, 0, 17, 1),
(461, 436, 1, 1, 'BklokD0tx3', 'innovacion', 0, 1, 'index', '2021-03-01 13:49:55', '2021-03-12 20:10:18', 'InnovaciÃ³n', '', 1, '', 59, 17, 0, 17, 1),
(462, 436, 1, 1, 'EJDlnAv4qs', 'compromiso', 0, 1, 'index', '2021-03-01 13:50:05', '2021-03-01 13:50:07', 'Compromiso', '', 1, '', 59, 17, 0, 17, 1),
(463, 422, 1, 1, 'SIEpJQuTn9', 'fase-1-identificacin-y-anlisis', 0, 1, 'index', '2021-03-01 15:19:40', '2021-03-01 15:19:48', 'Fase 1 Â· IdentificaciÃ³n y anÃ¡lisis', '', 1, '', 59, 17, 0, 17, 1),
(464, 422, 1, 1, 'HOtKR3QQtX', 'fase-2-definicin-diseo-y-desarrollo', 0, 1, 'index', '2021-03-01 15:19:52', '2021-03-01 15:19:55', 'Fase 2 Â· DefiniciÃ³n, diseÃ±o y desarrollo', '', 1, '', 59, 17, 0, 17, 1),
(465, 422, 1, 1, 'RruJMx-yRF', 'fase-3-pruebas-y-certificaciones', 0, 1, 'index', '2021-03-01 15:20:03', '2021-03-01 15:20:06', 'Fase 3 Â· Pruebas y certificaciones', '', 1, '', 59, 17, 0, 17, 1),
(466, 422, 1, 1, 'tHdAbK2Thf', 'fase-4-implementacin', 0, 1, 'index', '2021-03-01 15:20:16', '2021-03-01 15:21:46', 'Fase 4 Â· ImplementaciÃ³n', '', 1, '', 59, 17, 0, 17, 1),
(467, 422, 1, 1, 'RH_IlIbvDy', 'fase-5-buenas-prcticas', 0, 1, 'index', '2021-03-01 15:23:19', '2021-03-01 15:23:22', 'Fase 5 Â· Buenas prÃ¡cticas', '', 1, '', 59, 17, 0, 17, 1),
(468, 424, 1, 1, 'oXNB_z1doT', 'administrador-del-proyecto-de-rpa.', 0, 1, 'index', '2021-03-01 15:35:50', '2021-03-11 09:51:36', 'Administrador del proyecto RPA', '', 1, '', 59, 17, 0, 17, 1),
(469, 424, 1, 1, '0wVvOpCra0', 'respaldo-de-servicio-de-rpa.', 0, 1, 'index', '2021-03-01 15:36:31', '2021-03-11 09:51:51', 'Respaldo de Servicio RPA', '', 1, '', 59, 17, 0, 17, 1),
(470, 424, 1, 1, 'SmlTYXldEW', 'supervisor-de-rpa', 0, 1, 'index', '2021-03-09 20:38:43', '2021-03-09 20:40:48', 'Supervisor de RPA', '', 1, '', 59, 17, 0, 17, 1),
(471, 424, 1, 1, 'FmLUokbszZ', 'analista-de-negocios-de-rpa', 0, 1, 'index', '2021-03-09 20:45:01', '2021-03-09 20:45:04', 'Analista de negocios de RPA', '', 1, '', 59, 17, 0, 17, 1),
(472, 424, 1, 1, 'Fq7IHvkeK8', 'administrador-de-cambios-de-rpa', 0, 1, 'index', '2021-03-09 20:46:04', '2021-03-09 20:46:39', 'Administrador de cambios de RPA', '', 1, '', 59, 17, 0, 17, 1),
(473, 424, 1, 1, 'PIoXnPbO0z', 'desarrollador-de-rpa', 0, 1, 'index', '2021-03-09 20:47:09', '2021-03-09 20:47:13', 'Desarrollador de RPA', '', 1, '', 59, 17, 0, 17, 1),
(474, 424, 1, 1, 'qvhBxCVMXv', 'arquitecto-de-soluciones-rpa', 0, 1, 'index', '2021-03-09 20:47:52', '2021-03-09 20:47:55', 'Arquitecto de  soluciones RPA', '', 1, '', 59, 17, 0, 17, 1),
(475, 424, 1, 1, '1-lME2eSU0', 'tcnico-de-infraestructuras-de-rpa', 0, 1, 'index', '2021-03-09 20:48:12', '2021-03-09 20:51:32', 'TÃ©cnico de infraestructuras de RPA', '', 1, '', 59, 17, 0, 17, 1),
(476, 419, 1, 1, 'phqqjw-CoV', 'el-mercado-de-rpa-alcanzar-los-2000-mdd-en-2021', 0, 1, 'blog-post', '2021-03-10 19:09:31', '2021-03-10 19:09:36', 'El mercado de RPA alcanzarÃ¡ los 2,000 mdd en 2021', '', 1, '', 59, 17, 0, 17, 1),
(477, 419, 1, 1, 'XCjk1PjwxO', 'aplicaciones-rpa-y-por-qu-uipath', 0, 1, 'blog-post', '2021-03-10 19:13:55', '2021-03-10 19:13:58', 'Aplicaciones RPA Y Â¿POR QUÃ‰ UIPATH?', '', 1, '', 59, 17, 0, 17, 1),
(478, 419, 1, 1, 'zgLgqTfxK5', 'iniciativas-exitosas-de-automatizacin-con-rpa-e-ia', 0, 1, 'blog-post', '2021-03-10 19:17:42', '2021-03-10 19:17:45', 'Iniciativas exitosas de automatizaciÃ³n con RPA e IA', '', 1, '', 59, 17, 0, 17, 1),
(479, 419, 1, 1, '4NWlbxC9Td', 'ocho-claves-para-una-implementacin-exitosa-de-rpa-en-rrhh', 0, 1, 'blog-post', '2021-03-10 19:21:06', '2021-03-10 19:38:39', 'Ocho claves para una implementaciÃ³n exitosa de RPA en RRHH', '', 1, '', 59, 17, 0, 17, 1),
(480, 419, 1, 1, 'Uflm6HczmR', 'rpa-qu-esperar-en-2021', 0, 1, 'blog-post', '2021-03-10 19:46:21', '2021-03-10 19:46:24', 'RPA: QuÃ© esperar en 2021', '', 1, '', 59, 17, 0, 17, 1),
(481, 419, 1, 1, 'i8IBqqwuiM', 'qu-es-rpa', 0, 1, 'blog-post', '2021-03-10 19:48:26', '2021-03-10 19:48:29', 'Â¿QUÃ‰ ES RPA?', '', 1, '', 59, 17, 0, 17, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `setting`
--

CREATE TABLE `setting` (
  `idsetting` int(11) NOT NULL,
  `idowner` int(11) DEFAULT '0',
  `owner` varchar(50) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `value` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `setting`
--

INSERT INTO `setting` (`idsetting`, `idowner`, `owner`, `name`, `value`) VALUES
(1832, 1, 'Page', 'page-configuration', '{\n \"fragments\":[\n  {\n   \"key\":\"slogan\",\n   \"type\":\"html\",\n   \"name\":\"Slogan principal\"\n  },\n  {\n   \"key\":\"ribbon\",\n   \"type\":\"html\",\n   \"name\":\"Texto de Ribbon\"\n  },\n  {\n   \"key\":\"ribbon-image\",\n   \"name\":\"Imagen Grande en Bloque Home. (982px * 605px)\",\n   \"type\": \"image\",\n   \"image-width\": 982,\n   \"image-height\": 605,\n   \"image-quality\": 1\n  }\n ]\n}'),
(1833, 0, 'global', 'home', 'Home'),
(1834, 0, 'global', 'theme', 'cyborgconsulting'),
(1835, 0, 'global', 'title', 'Cyborg Consulting'),
(1836, 414, 'Page', 'page-configuration', '{\n \"fragments\":[\n  {\n   \"key\":\"intro\",\n   \"name\":\"IntroducciÃ³n de Bloque en Home\",\n   \"type\":\"html\"\n  },\n  {\n   \"key\":\"main-image\",\n   \"name\":\"Imagen Grande en Bloque Home. (558px * 470px)\",\n   \"type\": \"image\",\n   \"image-width\": 558,\n   \"image-height\": 470,\n   \"image-quality\": 1\n  },\n  {\n   \"key\":\"small-image\",\n   \"name\":\"Imagen PequeÃ±a en Bloque Home. (345px * 230px)\",\n   \"type\": \"image\",\n   \"image-width\": 345,\n   \"image-height\": 230,\n   \"image-quality\": 1\n  },\n  {\n   \"key\":\"desc-1\",\n   \"name\":\"DescripciÃ³n 1 en pÃ¡gina Interna Nosotros\",\n   \"type\":\"text\"\n  },\n  {\n   \"key\":\"desc-2\",\n   \"name\":\"DescripciÃ³n 2 en pÃ¡gina Interna Nosotros\",\n   \"type\":\"text\"\n  }\n ]\n}'),
(1837, 415, 'Page', 'page-configuration', '{\n \"fragments\":[\n  {\n   \"key\": \"image\",\n   \"name\": \"Imagen de portada para pÃ¡gina interna de Servicios. (1495px * 425px)\",\n   \"type\": \"image\",\n   \"image-width\": 1495,\n   \"image-height\": 425,\n   \"image-quality\": 1\n  },\n  {\n   \"key\":\"intro\",\n   \"name\":\"TÃ­tulo a desplegar en pÃ¡gina interna de Servicios\",\n   \"type\":\"html\"\n  }\n],\n \"children\":{\n  \"fragments\":[\n   {\n    \"key\": \"img\",\n    \"name\": \"Imagen en Home para secciÃ³n Servicios. (460px * 345px)\",\n    \"type\": \"image\",\n    \"image-width\": 460,\n    \"image-height\": 345,\n    \"image-quality\": 1\n   },\n   {\n    \"key\":\"title\",\n    \"name\":\"TÃ­tulo a desplegar en pÃ¡gina interna de Servicios\",\n    \"type\":\"text\"\n   },\n   {\n    \"key\":\"info\",\n    \"name\":\"InformaciÃ³n a desplegar en pÃ¡gina interna de Servicios\",\n    \"type\":\"html\"\n   }\n  ]\n }\n}\n'),
(1838, 416, 'Page', 'page-configuration', '{\n \"fragments\":[\n  {\n    \"key\":\"image\",\n    \"name\": \"Imagen de Portada para Interna RPA. (425px * 310px)\",\n    \"type\": \"image\",\n    \"image-width\": 425,\n    \"image-height\": 310,\n    \"image-quality\": 1\n  }\n ],\n \"children\":{\n  \"fragments\":[\n   {\n    \"key\": \"img\",\n    \"name\": \"Imagen en Home para secciÃ³n RPA. (425px * 310px)\",\n    \"type\": \"image\",\n    \"image-width\": 1656,\n    \"image-height\": 415,\n    \"image-quality\": 1\n   },\n   {\n    \"key\": \"content\",\n    \"name\": \"Contenido\",\n    \"type\": \"text\"\n   }\n  ]\n }\n}\n'),
(1839, 417, 'Page', 'page-configuration', '{\n \"fragments\":[\n  {\n   \"key\": \"image\",\n   \"name\": \"Imagen de portada de secciÃ³n Industrias en Home. (1495px * 425px)\",\n   \"type\": \"image\",\n   \"image-width\": 1495,\n   \"image-height\": 425,\n   \"image-quality\": 1\n  },\n  {\n   \"key\": \"intro\",\n   \"name\": \"TÃ­tulo de SecciÃ³n\",\n   \"type\":\"text\"\n  }  \n ],\n \"children\":{\n  \"fragments\":[\n   {\n    \"key\": \"img\",\n    \"name\": \"Imagen en Home para botÃ³n de Industrias. (255px * 280px)\",\n    \"type\": \"image\",\n    \"image-width\": 255,\n    \"image-height\": 280,\n    \"image-quality\": 1\n   },\n   {\n    \"key\": \"content\",\n    \"name\": \"DescripciÃ³n para botÃ³n de Industrias\",\n    \"type\":\"text\"\n   },\n   {\n    \"key\":\"title\",\n    \"name\":\"TÃ­tulo a desplegar en pÃ¡gina interna de Servicios\",\n    \"type\":\"text\"\n   },\n   {\n    \"key\":\"info\",\n    \"name\":\"InformaciÃ³n a desplegar en pÃ¡gina interna de Servicios\",\n    \"type\":\"html\"\n   }\n  ]\n }\n}'),
(1840, 418, 'Page', 'page-configuration', '{\n \"fragments\":[\n  {\n   \"key\":\"title-gallery-1\",\n   \"name\":\"TÃ­tulo del primer carrusel de logos\",\n   \"type\":\"text\"\n  },\n  {\n   \"key\":\"gallery-1\",\n   \"name\":\"Logos de primer carrusel de logos\",\n   \"type\":\"gallery\",\n   \"image-quality\": 1,\n   \"image-width\": 215,\n   \"image-height\": 84\n  },\n  {\n   \"key\":\"title-gallery-2\",\n   \"name\":\"TÃ­tulo del segundo carrusel de logos\",\n   \"type\":\"text\"\n  },\n  {\n   \"key\":\"gallery-2\",\n   \"name\":\"Logos de segundo carrusel de logos\",\n   \"type\":\"gallery\",\n   \"image-quality\": 1,\n   \"image-width\": 215,\n   \"image-height\": 84\n  }\n ]\n}'),
(1841, 419, 'Page', 'page-configuration', '{\n  \"fragments\":[\n  {\n   \"key\": \"image\",\n   \"name\": \"Imagen de portada de secciÃ³n Blog. (1495px * 425px)\",\n   \"type\": \"image\",\n   \"image-width\": 1495,\n   \"image-height\": 425,\n   \"image-quality\": 1\n  },\n  {\n   \"key\": \"intro\",\n   \"name\": \"TÃ­tulo de SecciÃ³n\",\n   \"type\":\"text\"\n  }\n ],\n  \"children\": {\n    \"template\": \"blog-post\",\n    \"fragments\": [\n      {\n        \"key\": \"image\",\n        \"name\": \"Imagen Preliminar\",\n        \"type\": \"image\"\n      },\n      {\n        \"key\": \"main-image\",\n        \"name\": \"Imagen de Principal de Post\",\n        \"type\": \"image\"\n      },\n      {\n        \"key\": \"intro\",\n        \"name\": \"IntroducciÃ³n\",\n        \"type\": \"html\"\n      },\n      {\n        \"key\": \"body\",\n        \"name\": \"Contenido de Post\",\n        \"type\": \"html\"\n      },\n      {\n        \"key\": \"modal\",\n        \"name\": \"Contenido de Modal (opcional)\",\n        \"type\": \"html\"\n      }\n    ]\n  }\n}'),
(1842, 420, 'Page', 'page-configuration', ''),
(1843, 421, 'Page', 'page-configuration', ''),
(1844, 422, 'Page', 'page-configuration', '{\n \"fragments\":[],\n \"children\":{\n  \"fragments\":[\n   {\n    \"key\": \"img\",\n    \"name\": \"Imagen de fases. (244px* 244px)\",\n    \"type\": \"image\",\n    \"image-width\": 244,\n    \"image-height\": 244,\n    \"image-quality\": 1\n   },\n   {\n    \"key\": \"desc\",\n    \"name\": \"DescripciÃ³n de fase\",\n    \"type\": \"text\"\n   }\n  ]\n }\n}'),
(1845, 423, 'Page', 'page-configuration', '{\n \"fragments\":[\n  {\n   \"key\":\"intro\",\n   \"type\":\"html\",\n   \"name\":\"PÃ¡rrafo de introducciÃ³n\"\n  },\n  {\n    \"key\": \"img\",\n    \"name\": \"Imagen de fases. (475px* 292px)\",\n    \"type\": \"image\",\n    \"image-width\": 475,\n    \"image-height\": 292,\n    \"image-quality\": 1\n   },\n   {\n    \"key\":\"text-1\",\n    \"type\":\"html\",\n    \"name\":\"Texto Izquierda\"\n  },\n  {\n    \"key\":\"text-2\",\n    \"type\":\"html\",\n    \"name\":\"Texto al Centro\"\n  },\n  {\n    \"key\":\"text-3\",\n    \"type\":\"html\",\n    \"name\":\"Texto Derecha\"\n  }\n ]\n}\n'),
(1846, 424, 'Page', 'page-configuration', '{\n \"fragments\":[],\n \"children\":{\n  \"fragments\":[\n   {\n    \"key\": \"img\",\n    \"name\": \"Imagen en Home para secciÃ³n Servicios. (172px * 172px)\",\n    \"type\": \"image\",\n    \"image-width\": 172,\n    \"image-height\": 172,\n    \"image-quality\": 1\n   },\n   {\n    \"key\": \"desc\",\n    \"name\": \"DescripciÃ³n de puesto\",\n    \"type\": \"text\"\n   }\n  ]\n }\n}'),
(1847, 425, 'Page', 'page-configuration', '{\n \"fragments\":[\n  {\n   \"key\":\"title\",\n   \"type\":\"text\",\n   \"name\":\"TÃ­tulo de secciÃ³n Ãšnete a CYBORG\"\n  },\n  {\n   \"key\":\"desc\",\n   \"type\":\"text\",\n   \"name\":\"DescripciÃ³n de secciÃ³n Ãšnete a CYBORG\"\n  },\n  {\n    \"key\": \"img\",\n    \"name\": \"Imagen de secciÃ³n Ãšnete a CYBORG. (415px * 518px)\",\n    \"type\": \"image\",\n    \"image-width\": 415,\n    \"image-height\": 518,\n    \"image-quality\": 1\n   }\n ]\n}'),
(1848, 426, 'Page', 'page-configuration', ''),
(1849, 427, 'Page', 'page-configuration', ''),
(1850, 428, 'Page', 'page-configuration', ''),
(1851, 429, 'Page', 'page-configuration', ''),
(1852, 430, 'Page', 'page-configuration', '{\n \"fragments\":[\n  {\n   \"key\":\"no-fragment-1\",\n   \"name\":\"\",\n   \"type\":\"\"  \n  },\n  {\n   \"key\":\"no-fragment-2\",\n   \"name\":\"\",\n   \"type\":\"\"  \n  },\n  {\n   \"key\":\"intro\",\n   \"name\":\"Â¿QuÃ© es RPA?\",\n   \"type\":\"html\"  \n  },\n  {\n   \"key\":\"desc\",\n   \"name\":\"Â¿QuÃ© procesos se pueden automatizar con RPA?\",\n   \"type\":\"html\"  \n  },\n  {\n   \"key\":\"main-image\",\n   \"name\":\"Imagen Grande en Bloque Home. (512px * 600px)\",\n   \"type\": \"image\",\n   \"image-width\": 512,\n   \"image-height\": 600,\n   \"image-quality\": 1\n  },\n  {\n   \"key\":\"small-image\",\n   \"name\":\"Imagen PequeÃ±a en Bloque Home. (370px * 256px)\",\n   \"type\": \"image\",\n   \"image-width\": 370,\n   \"image-height\": 256,\n   \"image-quality\": 1\n  }\n ]\n}'),
(1853, 431, 'Page', 'page-configuration', '{\n \"fragments\":[],\n \"children\":{\n  \"fragments\":[\n   {\n    \"key\": \"img\",\n    \"name\": \"Imagen para secciÃ³n Robots\",\n    \"type\": \"image\",\n    \"image-width\": 212,\n    \"image-height\": 212,\n    \"image-quality\": 1\n   },\n   {\n    \"key\":\"body\",\n    \"name\":\"DescripciÃ³n de Robot\",\n    \"type\":\"html\"\n   }\n  ]\n }\n}'),
(1854, 432, 'Page', 'page-configuration', '{\n \"fragments\":[\n  {\n    \"key\":\"image\",\n    \"name\": \"Imagen de Portada para Interna Ebook. (425px * 310px)\",\n    \"type\": \"image\",\n    \"image-width\": 425,\n    \"image-height\": 310,\n    \"image-quality\": 1\n  },\n  {\n   \"key\":\"title\",\n   \"name\":\"TÃ­tulo de interna Ebook\",\n   \"type\":\"type\"\n  },\n  {\n   \"key\":\"intro\",\n   \"name\":\"Â¿EstÃ¡ preparada su empresa para la hiperautomatizaciÃ³n?\",\n   \"type\":\"html\"\n  },\n  {\n   \"key\":\"slogan\",\n   \"name\":\"Eslogan para pÃ¡gina interna Ebook\",\n   \"type\":\"html\"\n  },\n {\n   \"key\":\"small-image\",\n   \"name\":\"Imagen Book en interna de Ebook\",\n    \"type\": \"image\",\n    \"image-width\": 512,\n    \"image-height\": 478,\n    \"image-quality\": 1\n  }\n ]\n}\n'),
(1855, 433, 'Page', 'page-configuration', '{\n \"fragments\":[\n  {\n   \"key\": \"img\",\n   \"name\": \"Imagen en Home para secciÃ³n Aviso de Privacidad. (1656 * 415)\",\n   \"type\": \"image\",\n   \"image-width\": 1656,\n   \"image-height\": 415,\n   \"image-quality\": 1\n  },\n  {\n   \"key\":\"body\",\n   \"type\":\"html\",\n   \"name\":\"Aviso de Privacidad - Contenido\"\n  }\n ]\n}'),
(1856, 434, 'Page', 'page-configuration', ''),
(1857, 435, 'Page', 'page-configuration', ''),
(1858, 436, 'Page', 'page-configuration', ''),
(1859, 437, 'Page', 'page-configuration', ''),
(1860, 438, 'Page', 'page-configuration', ''),
(1861, 439, 'Page', 'page-configuration', '{\n \"fragments\":[\n   {\n   \"key\":\"no-fragment-1\",\n   \"name\":\"\",\n   \"type\":\"\"  \n  },\n  {\n   \"key\":\"no-fragment-2\",\n   \"name\":\"\",\n   \"type\":\"\"   \n  },\n  {\n   \"key\":\"body\",\n   \"name\":\"DefiniciÃ³n de HiperautomatizaciÃ³n\",\n   \"type\":\"html\"\n  }\n ]\n}'),
(1862, 440, 'Page', 'page-configuration', ''),
(1863, 441, 'Page', 'page-configuration', ''),
(1864, 442, 'Page', 'page-configuration', ''),
(1865, 443, 'Page', 'page-configuration', ''),
(1866, 444, 'Page', 'page-configuration', ''),
(1867, 445, 'Page', 'page-configuration', ''),
(1868, 446, 'Page', 'page-configuration', ''),
(1869, 447, 'Page', 'page-configuration', ''),
(1870, 448, 'Page', 'page-configuration', ''),
(1871, 449, 'Page', 'page-configuration', ''),
(1872, 0, 'global', 'image-quality', ''),
(1873, 450, 'Page', 'page-configuration', ''),
(1874, 451, 'Page', 'page-configuration', ''),
(1875, 452, 'Page', 'page-configuration', ''),
(1876, 453, 'Page', 'page-configuration', ''),
(1877, 454, 'Page', 'page-configuration', ''),
(1878, 455, 'Page', 'page-configuration', ''),
(1879, 456, 'Page', 'page-configuration', ''),
(1880, 457, 'Page', 'page-configuration', ''),
(1881, 458, 'Page', 'page-configuration', ''),
(1882, 459, 'Page', 'page-configuration', ''),
(1883, 460, 'Page', 'page-configuration', ''),
(1884, 461, 'Page', 'page-configuration', ''),
(1885, 462, 'Page', 'page-configuration', ''),
(1886, 463, 'Page', 'page-configuration', ''),
(1887, 464, 'Page', 'page-configuration', ''),
(1888, 465, 'Page', 'page-configuration', ''),
(1889, 466, 'Page', 'page-configuration', ''),
(1890, 467, 'Page', 'page-configuration', ''),
(1891, 468, 'Page', 'page-configuration', ''),
(1892, 469, 'Page', 'page-configuration', ''),
(1893, 470, 'Page', 'page-configuration', ''),
(1894, 471, 'Page', 'page-configuration', ''),
(1895, 472, 'Page', 'page-configuration', ''),
(1896, 473, 'Page', 'page-configuration', ''),
(1897, 474, 'Page', 'page-configuration', ''),
(1898, 475, 'Page', 'page-configuration', ''),
(1899, 476, 'Page', 'page-configuration', ''),
(1900, 477, 'Page', 'page-configuration', ''),
(1901, 478, 'Page', 'page-configuration', ''),
(1902, 479, 'Page', 'page-configuration', ''),
(1903, 480, 'Page', 'page-configuration', ''),
(1904, 481, 'Page', 'page-configuration', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `uname` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `flags` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`iduser`, `uname`, `password`, `flags`) VALUES
(1, 'root', 'caf20d165506c90d0c886cee08282a82', 3),
(2, 'alvaro', '4a7493f12e0a468ebeedeb1329654977', 19);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`idfile`);

--
-- Indices de la tabla `fragment`
--
ALTER TABLE `fragment`
  ADD PRIMARY KEY (`idfragment`);

--
-- Indices de la tabla `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`idgroup`);

--
-- Indices de la tabla `group_user`
--
ALTER TABLE `group_user`
  ADD PRIMARY KEY (`idgroupuser`);

--
-- Indices de la tabla `page`
--
ALTER TABLE `page`
  ADD PRIMARY KEY (`idpage`),
  ADD KEY `typeIndex` (`trash`,`online`,`idparent`) USING BTREE,
  ADD KEY `i_guid` (`guid`) USING BTREE;

--
-- Indices de la tabla `setting`
--
ALTER TABLE `setting`
  ADD PRIMARY KEY (`idsetting`),
  ADD KEY `i_name` (`name`) USING BTREE,
  ADD KEY `i_owner` (`idowner`,`owner`) USING BTREE;

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`iduser`),
  ADD KEY `i_uname` (`uname`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `file`
--
ALTER TABLE `file`
  MODIFY `idfile` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2132;

--
-- AUTO_INCREMENT de la tabla `fragment`
--
ALTER TABLE `fragment`
  MODIFY `idfragment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=322;

--
-- AUTO_INCREMENT de la tabla `group`
--
ALTER TABLE `group`
  MODIFY `idgroup` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `group_user`
--
ALTER TABLE `group_user`
  MODIFY `idgroupuser` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `page`
--
ALTER TABLE `page`
  MODIFY `idpage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=482;

--
-- AUTO_INCREMENT de la tabla `setting`
--
ALTER TABLE `setting`
  MODIFY `idsetting` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1905;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
