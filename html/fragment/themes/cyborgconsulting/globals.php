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
define("SITE_NAME", "Cyborg Consulting");


/*
 * Site Domain
 */
define("SITE_DOMAIN", "cyborgconsulting.local");


/*
 * Site URL
 */
define("SITE_URL", sprintf("http://%s", SITE_DOMAIN));


/*
 * Site Description
 */
define("SITE_DESCRIPTION", "Cyborg Consulting");


/*
 * Social site image
 */
define("SITE_SOCIAL_IMAGE", "");


/*
 * Site Description
 */
define("SITE_KEYWORDS", implode(", ", array("consulting")));


/*
 * Path that points to site theme.
 */
define("TEMPLATE_PATH", "/fragment/themes/cyborgconsulting/");


/*
 * Path that points to css resources of sartoria theme.
 */
define("CSS_PATH", sprintf("%sdesign/css/",TEMPLATE_PATH));


/*
 * Path that points to img resources of sartoria theme.
 */
define("IMGS_PATH", sprintf("%sdesign/imgs/",TEMPLATE_PATH));


/*
 * Path that points to js resources of sartoria theme.
 */
define("JS_PATH", sprintf("%sdesign/js/",TEMPLATE_PATH));


/*
 * Path that points to favicon resources of sartoria theme.
 */
define("FAVICONS_PATH", sprintf("%sfavicons/",TEMPLATE_PATH));


/*
 * Path that points to favicon resources of sartoria theme.
 */
define("FILES_PATH", sprintf("%sfiles/",TEMPLATE_PATH));


// ---------------------------------------------------------------------
// | Theme Variables                                                    |
// ---------------------------------------------------------------------

define("THEME_COLOR", "#151515");


// ---------------------------------------------------------------------
// | Contact Variables                                                  |
// ---------------------------------------------------------------------

define("PHONE_CONTACT", "");
