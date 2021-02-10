<?php
$listOpts = "";
$navClasses = array();

if (!is_home()) {
    array_push($navClasses, 'navigation-small');
}

// region List
foreach ($root_pages as $option) {
    if ($create_guid === $option->guid) {
        continue;
    }

    $classes = "";
    $href = "";

    // region Personalize href.
    if ($team_guid === $option->guid) {
        $href .= $option->key;
    } else if ($services_guid === $option->guid) {
        $create_section = find_page_by_guid($create_guid, $root_pages);
        $href .= $create_section->key;
    } else {
        if (is_home()) {
            $classes = 'scroll-to';
            $href .= '#' . $option->key;
        } else {
            $href .= '/#' . $option->key;
        }
    }
    // endregion

    // region Personalize title.
    $title = $option->title;

    if ($services_guid === $option->guid) {
        $title = str_replace("Nuestros ", "", $title);
    }
    // endregion

    $listOpts .= '<li><a class="' . $classes . '" href="' . $href . '">' . $title . '</a></li>';
}

// endregion

?>

<nav class="navigation <?= implode(" ", $navClasses) ?>">
    <div class="container-fluid">
        <!-- Logo -->
        <a class="logo <?= (is_home()) ? "no-visible" : "" ?>" href="/">
            <img alt="<?= SITE_NAME ?>" class="img-responsive" src="<?= IMGS_PATH ?>logo.svg">
        </a>

        <!-- List Wrapper -->
        <div class="list-wrapper">
            <ul class="list clearfix">
                <?= $listOpts ?>
            </ul>

            <div class="nav-contact visible-xs">
                <div class="logo">
                    <img alt="<?= SITE_NAME ?>" class="img-responsive" src="<?= IMGS_PATH ?>logo.svg">
                </div>

                <?php include "social.php"; ?>
            </div>
        </div>

        <!-- Toggle Button -->
        <button class="toggle-btn visible-xs">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
    </div>
</nav>