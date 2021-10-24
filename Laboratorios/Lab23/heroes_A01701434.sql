-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2021 a las 09:51:12
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `heroes`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteHeroe` (IN `h_id` TINYINT(4))  DELETE FROM heroes WHERE heroes.id = h_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertHeroe` (IN `id` TINYINT(4), IN `nombre` VARCHAR(100) CHARSET utf8mb4, IN `profesion` VARCHAR(100) CHARSET utf8mb4, IN `pais` VARCHAR(30) CHARSET utf8mb4, IN `resenia` LONGTEXT CHARSET utf8mb4, IN `imagen` VARCHAR(800) CHARSET utf8mb4)  INSERT INTO heroes VALUES (id, nombre, profesion, pais, resenia, imagen)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateHeroe` (IN `h_id` TINYINT(4), IN `h_nombre` VARCHAR(100) CHARSET utf8mb4, IN `h_profesion` VARCHAR(100) CHARSET utf8mb4, IN `h_pais` VARCHAR(30) CHARSET utf8mb4, IN `h_resenia` LONGTEXT CHARSET utf8mb4)  BEGIN

UPDATE heroes SET  heroes.nombre = h_nombre, heroes.profesion = h_profesion, heroes.pais = h_pais, heroes.resenia = h_resenia WHERE heroes.id = h_id;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `heroes`
--

CREATE TABLE `heroes` (
  `id` tinyint(4) NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `profesion` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `pais` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `resenia` longtext COLLATE utf8mb4_spanish_ci NOT NULL,
  `imagen` varchar(800) COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `heroes`
--

INSERT INTO `heroes` (`id`, `nombre`, `profesion`, `pais`, `resenia`, `imagen`) VALUES
(1, 'Ada Lovelace', 'Matemática e Informática', 'Reino Unido', 'Augusta Ada King, Condesa de Lovelace (Londres, 10 de diciembre de 1815-íd., 27 de noviembre de 1852), registrada al nacer como Augusta Ada Byron y conocida habitualmente como Ada Lovelace, fue una matemática, informática y escritora británica, célebre sobre todo por su trabajo acerca de la calculadora de uso general de Charles Babbage, la denominada máquina analítica. Entre sus notas sobre la máquina, se encuentra lo que se reconoce hoy como el primer algoritmo destinado a ser procesado por una máquina, por lo que se la considera como la primera programadora de ordenadores.', 'Ada_Lovelace_Chalon.jpg'),
(2, 'Charles Babbage', 'Matemático y Científico de la Computación', 'Reino Unido', '\"Charles Babbage FRS (Teignmouth, Devonshire, Gran Bretaña, 26 de diciembre de 1791-Londres, 18 de octubre de 1871) fue un matemático y científico de la computación británico.1​ Diseñó y desarrolló parcialmente una calculadora mecánica capaz de calcular tablas de funciones numéricas por el método de diferencias. También diseñó, pero nunca construyó, la analítica para ejecutar programas de tabulación o computación; por estos inventos se le considera como una de las primeras personas en concebir la idea de lo que hoy llamaríamos una computadora, por lo que se le considera como «El Padre de la Computación». En el Museo de Ciencias de Londres se exhiben partes de sus mecanismos inconclusos. Parte de su cerebro conservado en formol se exhibe en el Royal College of Surgeons of England. Sitio en Londres.', 'CharlesBabbage.jpg'),
(3, 'Margaret Hamilton', 'Ingeniera de Software', 'Estados Unidos', 'Margaret Hamilton (Paoli, Estados Unidos, 17 de agosto de 1963)) fue directora de ingeniería de software para el proyecto que escribió el código de la Guía de Apollo Computer (AGC). Desarrollado en el Laboratorio de Instrumentación del MIT para la misión Apolo 11, los programadores, literalmente, tuvieron que empezar de cero.', 'Margaret_Hamilton.jpg'),
(4, 'Tim Berners-Lee', 'Científico de la Computación', 'Reino Unido', 'Timothy \"Tim\" John Berners-Lee, KBE,1​ OM,1​ FRS,1​ FREng,1​ FRSA,1​ (Londres, Reino Unido, 8 de junio de 1955) es un científico de la computación británica, conocido por ser el padre de la World Wide Web. Estableció la primera comunicación entre un cliente y un servidor usando el protocolo HTTP en noviembre de 1989. En octubre de 1994 fundó el Consorcio de la World Wide Web (W3C) con sede en el MIT, para supervisar y estandarizar el desarrollo de las tecnologías sobre las que se fundamenta la Web y que permiten el funcionamiento de Internet.', 'berners-Lee.jpg'),
(5, 'Grace Hopper', 'Científica de la Computación y Militar', 'Estados Unidos', 'Grace Murray Hopper (Nueva York, 9 de diciembre de 1906 - Condado de Arlington, 1 de enero de 1992). La contralmirante Dra. Grace Murray Hopper fue pionera en el desarrollo de lenguajes de programación accesibles escritos en Inglés. Estaba convencida que la informática debía extenderse a las aplicaciones de negocio no científicas y requirió lenguajes de programación más simples. Partía de la idea de que los ordenadores no entienden Inglés, y llevó años antes de que se aceptaran sus ideas.', 'Grace_M._Hopper.jpg'),
(7, 'Vinton (Vin) Cerf', 'Matemático y Científico de la Computación', 'Estados Unidos', 'Vinton Gray Cerf (New Haven, Connecticut, Estados Unidos, 23 de junio de 1943) es un científico de la computación estadounidense, considerado uno de los padres de Internet. Se graduó en matemáticas y ciencias de la computación en la Universidad de Stanford (1965). Durante su estancia posterior en la Universidad de California (UCLA) obtuvo la maestría en ciencias y el doctorado.', 'vinton_cerf.jpg'),
(8, 'Joan Clarke', 'Criptoanalista y Numismática', 'Reino Unido', 'Joan Elisabeth Lowther Murray (Londres, 24 de junio de 1917 – Oxford, 4 de septiembre de 1996) fue una criptoanalista y numismática británica que trabajó en Bletchley Park durante la Segunda Guerra Mundial. Fue la única mujer que trabajó en el equipo del matemático Alan Turing en el proyecto Enigma, que desencriptó las comunicaciones secretas de la Alemania nazi. Su papel en este proceso le valió premios y citaciones, como el nombramiento como miembro de la Orden del Imperio Británico (MBE), en 1946.1', 'Joan-Clarke.jpg'),
(9, 'Alan Turing', 'Matemático y Científico de la Computación', 'Reino Unido', 'Alan Mathison Turing (Paddington, Londres, 23 de junio de 1912-Wilmslow, Cheshire, 7 de junio de 1954), fue un matemático, lógico, científico de la computación, criptógrafo, filósofo, biólogo teórico, maratoniano y corredor de ultradistancia británico. Es considerado uno de los padres de la ciencia de la computación y precursor de la informática moderna. Proporcionó una influyente formalización de los conceptos de algoritmo y computación: la máquina de Turing. Formuló su propia versión que hoy es ampliamente aceptada como la tesis de Church-Turing (1936).', 'Alan_Turing.jpg'),
(11, 'Nikola Tesla', 'Físico', 'Estados Unidos', 'Físico estadounidense de origen serbio. Estudió en las universidades de Graz (Austria) y Praga. Después de haber trabajado en varias industrias eléctricas en París y en Budapest, se trasladó a Estados Unidos (1884), donde trabajó a las órdenes de Thomas A. Edison, entonces partidario de la corriente eléctrica continua..', 'Nikola_Tesla.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `Nombres` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Apellidos` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(250) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `Nombres`, `Apellidos`, `email`, `password`, `created_at`) VALUES
(1, 'Joseph Alessandro', 'García García', 'jalessandro.ag@gmail.com', '$2a$12$3uwLfXsDZWyLF9HIuKu1Uus/eGx8t1kuMAmv0iRmjIlc.1pL92a2i', '2021-10-10 19:20:33'),
(2, 'Pruebas', 'DAW BD', 'pruebas@gmail.com', '$2a$12$sGqSRBC9Q.F2bEcq00Maz.5J6uq9UcVVEz8Lk8ISlVg3C8/wYXPP.', '2021-10-10 19:50:59');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `heroes`
--
ALTER TABLE `heroes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `unique_email` (`email`),
  ADD UNIQUE KEY `contrasenia` (`password`),
  ADD UNIQUE KEY `contrasenia_2` (`password`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `heroes`
--
ALTER TABLE `heroes`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
