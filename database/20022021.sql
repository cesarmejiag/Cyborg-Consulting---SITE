-- MariaDB dump 10.17  Distrib 10.4.10-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: cyborgconsulting-site
-- ------------------------------------------------------
-- Server version	10.4.10-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `file` (
  `idfile` int(11) NOT NULL AUTO_INCREMENT,
  `guid` varchar(50) DEFAULT NULL,
  `iduser` int(11) DEFAULT 0,
  `idowner` int(11) DEFAULT 0,
  `idparent` int(11) DEFAULT 0,
  `owner` varchar(50) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `size` int(11) DEFAULT 0,
  `bucket` varchar(30) DEFAULT NULL,
  `path` varchar(128) DEFAULT NULL,
  `uploaded` datetime DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `width` int(11) DEFAULT 0,
  `height` int(11) DEFAULT 0,
  `key` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idfile`)
) ENGINE=MyISAM AUTO_INCREMENT=1991 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fragment`
--

DROP TABLE IF EXISTS `fragment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fragment` (
  `idfragment` int(11) NOT NULL AUTO_INCREMENT,
  `idpage` int(11) DEFAULT 0,
  `value` longtext DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idfragment`)
) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fragment`
--

LOCK TABLES `fragment` WRITE;
/*!40000 ALTER TABLE `fragment` DISABLE KEYS */;
INSERT INTO `fragment` VALUES (157,1,'Lorem Ipsum','body'),(158,421,'','body');
/*!40000 ALTER TABLE `fragment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group` (
  `idgroup` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`idgroup`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group`
--

LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
INSERT INTO `group` VALUES (1,'System');
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_user`
--

DROP TABLE IF EXISTS `group_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_user` (
  `idgroupuser` int(11) NOT NULL AUTO_INCREMENT,
  `idgroup` int(11) DEFAULT 0,
  `iduser` int(11) DEFAULT 0,
  PRIMARY KEY (`idgroupuser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_user`
--

LOCK TABLES `group_user` WRITE;
/*!40000 ALTER TABLE `group_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `group_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `page`
--

DROP TABLE IF EXISTS `page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `page` (
  `idpage` int(11) NOT NULL AUTO_INCREMENT,
  `idparent` int(11) DEFAULT 0,
  `idgroup` int(11) DEFAULT 0,
  `iduser` int(11) DEFAULT 0,
  `guid` varchar(50) DEFAULT NULL,
  `key` varchar(200) DEFAULT NULL,
  `trash` int(1) DEFAULT 0,
  `online` int(1) DEFAULT 0,
  `template` varchar(20) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `title` varchar(128) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `order` int(11) DEFAULT 0,
  `sort` varchar(20) DEFAULT NULL,
  `powner` int(11) DEFAULT 0,
  `pgroup` int(11) DEFAULT 0,
  `pother` int(11) DEFAULT 0,
  `pworld` int(11) DEFAULT 0,
  `flags` int(11) DEFAULT 0,
  PRIMARY KEY (`idpage`),
  KEY `typeIndex` (`trash`,`online`,`idparent`) USING BTREE,
  KEY `i_guid` (`guid`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=432 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `page`
--

LOCK TABLES `page` WRITE;
/*!40000 ALTER TABLE `page` DISABLE KEYS */;
INSERT INTO `page` VALUES (1,0,1,1,'home','home',0,1,'index','2021-02-09 22:42:30','2021-02-09 22:42:30','Home',NULL,0,NULL,63,19,17,17,0),(414,0,1,1,'63BNe3m_6P','nosotros',0,1,'index','2021-02-11 00:29:35','2021-02-11 00:29:35','Nosotros','',1,'',59,17,0,17,1),(415,0,1,1,'WC0H2V_CTu','servicios',0,1,'index','2021-02-11 22:42:28','2021-02-11 22:42:28','Servicios','',1,'',59,17,0,17,1),(416,0,1,1,'3to---yEhD','rpa-and-hiperautomatizacion',0,1,'index','2021-02-11 22:43:23','2021-02-11 22:43:35','RPA & HiperautomatizaciÃ³n','',1,'',59,17,0,17,1),(417,0,1,1,'xx1BNhE2-l','industrias',0,1,'index','2021-02-11 22:43:48','2021-02-11 22:43:48','Industrias','',1,'',59,17,0,17,1),(418,0,1,1,'XlFM3rwVvc','clientes',0,1,'index','2021-02-11 22:44:01','2021-02-11 22:44:01','Clientes','',1,'',59,17,0,17,1),(419,0,1,1,'cH5tfO7Jkb','blog',0,1,'index','2021-02-11 22:44:05','2021-02-11 22:44:05','Blog','',1,'',59,17,0,17,1),(420,0,1,1,'QJ22o0nMwG','contacto',0,1,'index','2021-02-11 22:44:12','2021-02-11 22:44:12','Contacto','',1,'',59,17,0,17,1),(421,414,1,1,'m7PGfV1J3c','visin-misin-y-valores',0,1,'index','2021-02-11 22:45:48','2021-02-11 22:45:48','VisiÃ³n, misiÃ³n y valores','',1,'',59,17,0,17,1),(422,414,1,1,'S8EpPRgT4y','cyborg-way',0,1,'index','2021-02-11 22:46:02','2021-02-11 22:46:02','CYBORG Way','',1,'',59,17,0,17,1),(423,414,1,1,'RyzlfdeJl4','programa-partners',0,1,'index','2021-02-11 22:46:14','2021-02-11 22:46:14','Programa Partners','',1,'',59,17,0,17,1),(424,414,1,1,'XyGeB9WeZI','equipo-cyborg',0,1,'index','2021-02-11 22:46:29','2021-02-11 22:46:29','Equipo CYBORG','',1,'',59,17,0,17,1),(425,414,1,1,'qyQWZGMCu7','nete-a-cyborg',0,1,'index','2021-02-11 22:46:39','2021-02-11 22:46:39','Ãšnete a CYBORG','',1,'',59,17,0,17,1),(426,415,1,1,'tJkR1smJoN','tecnologa',0,1,'index','2021-02-11 22:47:00','2021-02-11 22:47:00','TecnologÃ­a','',1,'',59,17,0,17,1),(427,415,1,1,'soGqCRlUhr','consultora',0,1,'index','2021-02-11 22:47:05','2021-02-11 22:47:05','ConsultorÃ­a','',1,'',59,17,0,17,1),(428,415,1,1,'nxTDEl1dz7','implementaciones',0,1,'index','2021-02-11 22:47:14','2021-02-11 22:47:14','Implementaciones','',1,'',59,17,0,17,1),(429,415,1,1,'OI4VvGv7d9','operaciones-y-mantenimiento',0,1,'index','2021-02-11 22:47:24','2021-02-11 22:47:24','Operaciones y mantenimiento','',1,'',59,17,0,17,1),(430,416,1,1,'vzmB-OasR-','rpa',0,1,'index','2021-02-11 22:47:39','2021-02-11 22:47:39','RPA','',1,'',59,17,0,17,1),(431,416,1,1,'7neekUcqHu','robots',0,1,'index','2021-02-11 22:47:44','2021-02-11 22:47:44','Robots','',1,'',59,17,0,17,1);
/*!40000 ALTER TABLE `page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `setting`
--

DROP TABLE IF EXISTS `setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `setting` (
  `idsetting` int(11) NOT NULL AUTO_INCREMENT,
  `idowner` int(11) DEFAULT 0,
  `owner` varchar(50) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `value` longtext DEFAULT NULL,
  PRIMARY KEY (`idsetting`),
  KEY `i_name` (`name`) USING BTREE,
  KEY `i_owner` (`idowner`,`owner`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1854 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setting`
--

LOCK TABLES `setting` WRITE;
/*!40000 ALTER TABLE `setting` DISABLE KEYS */;
INSERT INTO `setting` VALUES (1832,1,'Page','page-configuration',''),(1833,0,'global','home','Home'),(1834,0,'global','theme','cyborgconsulting'),(1835,0,'global','title','Cyborg Consulting'),(1836,414,'Page','page-configuration',''),(1837,415,'Page','page-configuration',''),(1838,416,'Page','page-configuration',''),(1839,417,'Page','page-configuration',''),(1840,418,'Page','page-configuration',''),(1841,419,'Page','page-configuration',''),(1842,420,'Page','page-configuration',''),(1843,421,'Page','page-configuration',''),(1844,422,'Page','page-configuration',''),(1845,423,'Page','page-configuration',''),(1846,424,'Page','page-configuration',''),(1847,425,'Page','page-configuration',''),(1848,426,'Page','page-configuration',''),(1849,427,'Page','page-configuration',''),(1850,428,'Page','page-configuration',''),(1851,429,'Page','page-configuration',''),(1852,430,'Page','page-configuration',''),(1853,431,'Page','page-configuration','');
/*!40000 ALTER TABLE `setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `flags` int(11) DEFAULT 0,
  PRIMARY KEY (`iduser`),
  KEY `i_uname` (`uname`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'root','caf20d165506c90d0c886cee08282a82',3);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-20  0:15:15
