<?php
/**
 * Created by PhpStorm.
 * User: cesarmejia
 * Date: 31/07/17
 * Time: 18:35
 */

// ---------------------------------------------------------------------
// | Global Variables                                                   |
// ---------------------------------------------------------------------

/*
 * Root Id
 */
$root_id = 0;


/*
 * Us GUID
 */
$us_guid = '63BNe3m_6P';


/*
 * Services GUID
 */
$services_guid = 'WC0H2V_CTu';


/*
 * RPA GUID
 */
$rpa_guid = '3to---yEhD';


/*
 * Industries GUID
 */
$industries_guid = 'xx1BNhE2-l';


/*
 * Clients GUID
 */
$clients_guid = 'XlFM3rwVvc';


/*
 * Blog GUID
 */
$blog_guid = 'cH5tfO7Jkb';


/*
 * Contact GUID
 */
$contact_guid = 'QJ22o0nMwG';


// ---------------------------------------------------------------------
// | Fragment Helpers                                                   |
// ---------------------------------------------------------------------

/**
 * Find page by guid.
 * @param {string} $guid
 * @param {Array<Page>} $pages
 * @returns Page
 */
function find_page_by_guid($guid, $pages) {
    foreach ($pages as $page) {
        if ($guid === $page->guid)
            return $page;
    }

    return null;
}


/**
 * Find fragments by name.
 * @param $name
 * @param $fragments
 * @return Fragment
 */
function find_fragment_by_name($name, $fragments) {
    foreach ($fragments as $fragment) {
        if ($name === $fragment->name)
            return $fragment;
    }

    return null;
}


/**
 * Find fragments by name.
 * @param $key
 * @param $fragments
 * @return Fragment
 */
function find_fragment_by_key($key, $fragments) {
    foreach ($fragments as $fragment) {
        if ($key === $fragment->key)
            return $fragment;
    }

    return null;
}


/**
 * Find setting by name.
 * @param $name
 * @param $settings
 * @return Setting
 */
function find_setting_by_name($name, $settings) {
    foreach ($settings as $setting) {
        if ($name === $setting->name)
            return $setting;
    }

    return null;
}



/**
 * Get an image tag in string state.
 * @param $image
 * @return string
 */
function get_original_image($image) {
    if ($image) {
        $attrs = Fragment::elementAttributes($image);

        return "<img src='" . $attrs['data-image-original'] . "' alt='' />";
    }

    return "";
}


/**
 * Determine if current page is home.
 * @return boolean
 */
function is_home() {
    global $page, $nogalmx_guid;

    return $page->guid === $nogalmx_guid;
}


// ---------------------------------------------------------------------
// | Common variables used                                              |
// ---------------------------------------------------------------------

if ($page instanceof Page)
    $is_home = $page->guid === $nogalmx_guid;


// ---------------------------------------------------------------------
// | Common pages used                                                  |
// ---------------------------------------------------------------------


// Retrieve root pages.
$result = Page::search(array(
    'idparent'  => $root_id,
    'fragments' => array('image', 'slogan', 'intro', 'body', 'whatsapp', 'instagram', 'success-message', 'error-message'),
    'sortBy'    => 'created ASC'
));

$root_pages = $result['records'];

// Retrieve sub pages for models.
$root_pages_id = array();

foreach ($root_pages as $page) {
    if ($page->idpage !== 'home') {
        $root_pages_id[] = $page->idpage;
    }
}

$result = Page::search(array(
    'idparent' => $root_pages_id,
    'sortBy' => 'created ASC'
));


$sub_pages = $result['records'];

// Assign children to his parent.
// If you read this, the process could be seams stupid but i
// try to not make much queries to database.

foreach ($root_pages as $rp) {
    $children_pages = array();

    foreach ($sub_pages as $sp) {
        if ($rp->idpage === $sp->idparent) {
            array_push($children_pages, $sp);
        }
    }
    
    $rp->children = $children_pages;
}
