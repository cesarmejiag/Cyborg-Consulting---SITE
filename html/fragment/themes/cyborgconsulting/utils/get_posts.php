<?php

/**
 * Created by PhpStorm.
 * User: developergoplek
 * Date: 23/05/18
 * Time: 12:01 PM
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

// Include Fragment.
include_once "../../../latte/releases/fragment/support/actions/fragment_init.php";

if (!isset($_POST['data'])) {
    die('Oops! The request is invalid.');
}

$data = json_decode($_POST['data'], true);

/**
 * Get blog posts paginated.
 * @param int $page
 * @param int $pageSize
 * @param array $fragments
 * @param array $settings
 * @param string $sort
 * @return PageResult
 * @throws Exception
 */
function get_posts($page = 1, $pageSize = 10, $fragments = array(), $settings = array(), $sort = 'created DESC')
{
    $id_blog = 419;
    $result = Page::search(array(
        'idparent'  => $id_blog,
        'fragments' => $fragments,
        'settings'  => $settings,
        'page'      => $page,
        'pageSize'  => $pageSize,
        'sortBy'    => $sort
    ));
    return $result;
}

$response = get_posts($data['page'], $data['pageSize'], $data['fragments'], $data['settings']);
print_r(json_encode($response));
