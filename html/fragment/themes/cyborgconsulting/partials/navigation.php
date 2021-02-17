<?php
$listOpts = "";
$navClasses = array();

if (!is_home()) {
    array_push($navClasses, 'navigation-small');
}

// region List
foreach ($root_pages as $option) {

    // Remove Home option from menu
    if ($option->key === 'home') {
        continue;
    }

    $classes = "";
    $href = "";
    $submenu = '';

    // region Personalize href.
    if ($team_guid === $option->guid) {
        $href .= $option->key;
    } else {
        if (is_home()) {
            $classes = 'scroll-to';
            $href .= '#' . $option->key;
        } else {
            $href .= '/#' . $option->key;
        }
    }
    // endregion

    // region Personalize submenu
    if ($option->guid === $us_guid || $option->guid === $services_guid || $option->guid === $rpa_guid || $option->guid === $industries_guid) {
        $submenu = '<ul class="submenu-list list">';
        foreach ($option->children as $option_sub) {
            $submenu .= '<li class="d-block li-submenu w-100"><a href="/' . $option->key . '/#' . $option_sub->key . '" class="">' . $option_sub->title . '</a></li>';
        }
        $submenu .= '</ul>';        
        $classes .= ' with-submenu ';
    }

    // endregion

    // region Personalize title.
    $title = $option->title;

    if ($services_guid === $option->guid) {
        $title = str_replace("Nuestros ", "", $title);
    }
    // endregion

    $listOpts .= '<li class="li-menu"><a class="' . $classes . '" href="' . $href . '">' . $title . '</a>' . $submenu . '</li>';
}

// endregion

?>

<nav class="navigation <?= implode(" ", $navClasses) ?>">
    <div class="container-fluid d-flex justify-content-between align-items-center">
        <!-- Logo -->
        <a class="logo <?= (is_home()) ? "no-visible" : "" ?>" href="/">
            <img alt="<?= SITE_NAME ?>" class="img-fluid" src="<?= IMGS_PATH ?>logo.svg">
        </a>

        <!-- List Wrapper -->
        <div class="list-wrapper">
            <ul class="list clearfix">
                <?= $listOpts ?>
            </ul>

            <!-- <div class="nav-contact d-block d-lg-none">
                <div class="logo">
                    <img alt="<?= SITE_NAME ?>" class="img-fluid" src="<?= IMGS_PATH ?>logo.svg">
                </div>
                
            </div> -->
        </div>

        <!-- Toggle Button -->
        <button class="toggle-btn d-block d-lg-none">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
    </div>
</nav>