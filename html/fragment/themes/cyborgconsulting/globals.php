<?php

/**
 * Created by PhpStorm.
 * User: cesarmejia
 * Date: 04/09/17
 * Time: 13:30
 */

// ---------------------------------------------------------------------
// | Global Variables                                                   |
// ---------------------------------------------------------------------

/*
 * Site Name
 */
define("SITE_NAME", "CYBORG Consulting: RPA | Hiperautomatizacion");


/*
 * Site Domain
 */
define("SITE_DOMAIN", "cyborgconsulting.com.mx");


/*
 * Site URL
 */
define("SITE_URL", sprintf("https://%s", SITE_DOMAIN));


/*
 * Site Description
 */
define("SITE_DESCRIPTION", "CYBORG Consulting especialistas en soluciones de Robotic Process Automation (RPA) e Hiperautomatización.");


/*
 * Social site image
 */
define("SITE_SOCIAL_IMAGE", "");


/*
 * Site Description
 */
define("SITE_KEYWORDS", implode(", ", array(
    "RPA", "Robotizacion", "Inteligencia Artificial", "Tecnologia", "OCR", "ICR", "NLP", "Machine Learning", "Punta a punta", "End to end", "UiPath",
    "Bots", "Consultoria", "Trasnformacion Digital", "Soluciones", "Chatbot", "Reduccion costos", "Beneficios", "Robots", "Normatividad", "Mejorara de la experiencia del cliente", "Mejora de la experiencia del empleado", "Incremento de productividad", "Trazabilidad", "Escalabilidad", "Digitalizar", "Tareas repetitivas", "Reglas de negocio", "Procesos ", "Entrada estandar", "Analista de negocio", "Arquitecto de solucion", "Tecnico de Infraestructura"
)));

/*
 * Path that points to site theme.
 */
define("TEMPLATE_PATH", "/fragment/themes/cyborgconsulting/");


/*
 * Path that points to css resources of sartoria theme.
 */
define("CSS_PATH", sprintf("%sdesign/styles/", TEMPLATE_PATH));


/*
 * Path that points to img resources of sartoria theme.
 */
define("IMGS_PATH", sprintf("%sdesign/images/", TEMPLATE_PATH));


/*
 * Path that points to js resources of sartoria theme.
 */
define("JS_PATH", sprintf("%sdesign/scripts/", TEMPLATE_PATH));


/*
 * Path that points to favicon resources of sartoria theme.
 */
define("FAVICONS_PATH", sprintf("%sfavicons/", TEMPLATE_PATH));


/*
 * Path that points to favicon resources of sartoria theme.
 */
define("FILES_PATH", sprintf("%sfiles/", TEMPLATE_PATH));


// ---------------------------------------------------------------------
// | Theme Variables                                                    |
// ---------------------------------------------------------------------

define("THEME_COLOR", "#e8511d");


// ---------------------------------------------------------------------
// | Contact Variables                                                  |
// ---------------------------------------------------------------------

define("PHONE_CONTACT", "");
