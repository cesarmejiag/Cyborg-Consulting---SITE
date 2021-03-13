<?php
include_once "globals.php";
include_once "utils/fragment_helpers.php";
$vmv_guid = 'm7PGfV1J3c';
$vision_guid = 'UQutB-2aiq';
$mision_guid = '97EgrLScys';
$valores_guid = '8klDBjVTu6';
$cyborg_guid = 'S8EpPRgT4y';
$partners_guid = 'RyzlfdeJl4';
$team_guid = 'XyGeB9WeZI';
$join_guid = 'qyQWZGMCu7';

?>
<!DOCTYPE html>
<html itemscope itemtype="http://schema.org/Thing" lang="es-MX">
    <head>
        <?php include_once "partials/head.php" ?>
    </head>
    <body>
        <!-- Navigation -->
        <?php include_once "partials/navigation.php" ?>
        <!-- /.Navigation -->

        <?php $us_page = find_page_by_guid($us_guid, $root_pages); ?>
        <?php $services = find_page_by_guid($services_guid, $root_pages); ?>
        <?php $services_records = Page::search(array(
            'idparent' => $services->idpage,
            'fragments' => array('img', 'desc-1'),
            'sortBy' => 'created ASC'
        ));
        $services_pr = $services_records['records'];
        ?>
        <!-- Outer wrapper -->
        <div class="outer-wrapper">
            <!-- Block Cover -->
            <?php
            $imgCover = IMGS_PATH . 'cover-nosotros.jpg';
            $img_src = sprintf('background-image:url(%s)', $imgCover)
            ?>
            <section class="block us-cover" id="cover-us">
                <div class="cover-bg d-flex align-items-center  justify-content-center" style="<?= $img_src ?>">
                    <h1 class="title text-white text-uppercase"><?= $us_page->title ?></h1>
                </div>
            </section>
            <!-- /.Cover -->
            <!-- Block Us Intro -->
            <section class="block us-intro" id="us-intro">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header pb-3 pb-md-4 w-1060">
                            <div class="row d-flex align-items-center justify-content-around">
                                <div class="col-12 col-sm-6">
                                    <div class="logo text-center">
                                        <img src="<?= IMGS_PATH ?>logo.svg" alt="logo">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="text">
                                        <?= $us_page->fragments['intro']->value ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content pt-3 pt-sm-4">
                            <div class="row">
                                <?php foreach ($services_pr as $service) : ?>
                                    <div class="col-6 col-sm-3">
                                        <div class="wrapper">
                                            <?php
                                            $img_service = Fragment::elementAttributes($service->fragments['img']->value);
                                            $img_service_src = sprintf('background-image:url(%s)', $img_service['src'])
                                            ?>
                                            <div class="image" style="<?= $img_service_src ?>"></div>
                                            <div>
                                                <div class="logo text-center m-t-30">
                                                    <img class="img-fluid" src="<?= IMGS_PATH ?>icon-<?= $service->key ?>.svg" alt="<?= $service->title ?>">
                                                </div>
                                                <div class="title normal-size-title text-wrap text-uppercase text-break"><?= $service->title ?></div>
                                            </div>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                            <div class="row w-1060 pt-3 pt-sm-5 intro-content d-flex align-items-start justify-content-around">
                                <div class="col-12 col-sm-6 pb-4 pb-sm-0">
                                    <div class="text">
                                        <?= $us_page->fragments['desc-1']->value ?>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="text">
                                        <?= $us_page->fragments['desc-2']->value ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /. -->
            <!-- Block Misión, Visión y Valores -->
            <?php
            $us_result = Page::search(array(
                'idparent'  => $us_page->idpage,
                'fragments' => array('body', 'intro', 'img', 'text-1', 'text-2', 'text-3', 'title', 'desc'),
                'sortBy'    => 'created ASC'
            ));
            $us_pages = $us_result['records'];
            $vmv = find_page_by_guid($vmv_guid, $us_pages);
            $vmv_result = Page::search(array(
                'idparent'  => $vmv->idpage,
                'fragments' => array('body'),
                'sortBy'    => 'created ASC'
            ));
            $vmv_pages = $vmv_result['records'];
            $vision_page = find_page_by_guid($vision_guid, $vmv_pages);
            $mision_page = find_page_by_guid($mision_guid, $vmv_pages);
            $valores_page = find_page_by_guid($valores_guid, $vmv_pages);
            ?>
            <section class="block us-mision-vision" id="<?= $vmv->key ?>">
                <div class="holder">
                    <div class="container-fluid w-1060">
                        <!-- Mision y Visión  -->
                        <div class="header">
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="title text-start mb-4"><?= $mision_page->title ?></div>
                                    <div class="text">
                                        <?= $mision_page->fragments['body']->value ?>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="title text-start mb-4"><?= $vision_page->title ?></div>
                                    <div class="text">
                                        <?= $vision_page->fragments['body']->value ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End of Mision y Vision -->
                        <?php $valores = Page::search(array(
                            'idparent'  => $valores_page->idpage,
                            'fragments' => array('body'),
                            'sortBy'    => 'created ASC'
                        ));
                        $valores_pages = $valores['records']; ?>
                        <div class="content">
                            <div class="title mb-4">
                                <?= $valores_page->title ?>
                            </div>
                            <div class="row">
                                <?php foreach ($valores_pages as $val_page) : ?>
                                    <div class="col-12 col-sm-4">
                                        <div class="wrapper position-relative">
                                            <span><img class="img-fluid" src="<?= IMGS_PATH ?>val-<?= $val_page->key ?>.svg" alt="<?= $val_page->name ?>"></span>
                                            <div class="text text-start">
                                                <div class="color-highlight-color"><?= $val_page->title ?></div>
                                                <div><?= $val_page->fragments['body']->value ?></div>
                                            </div>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /. -->
            <!-- Block Cyborg Way -->
            <?php
            $cyborg_way = find_page_by_guid($cyborg_guid, $us_pages);
            $cw_result = Page::search(array(
                'idparent'  => $cyborg_way->idpage,
                'fragments' => array('desc', 'img'),
                'sortBy'    => 'created ASC'
            ));
            $cw_pages = $cw_result['records'];
            ?>
            <section class="block us-cyborg" id="<?= $cyborg_way->key ?>">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <div class="title"><?= $cyborg_way->title ?></div>
                        </div>
                        <div class="content d-flex justify-content-between flex-wrap">
                            <?php foreach ($cw_pages as $cw_page) : ?>
                                <?php
                                $img_cw = Fragment::elementAttributes($cw_page->fragments['img']->value);
                                $img_cw_src = sprintf('background-image:url(%s)', $img_cw['src'])
                                ?>
                                <div class="item-wrapper">
                                    <div class="item position-relative mb-4" style="<?= $img_cw_src ?>"></div>
                                    <div class="text-center m-b-20"><?= $cw_page->title ?></div>
                                    <div class="text-center"><?= $cw_page->fragments['desc']->value ?></div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /. -->
            <!-- Block Partners -->
            <?php $partners = find_page_by_guid($partners_guid, $us_pages); ?>
            <section class="block us-parners" id="<?= $partners->key ?>">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header mb-5">
                            <div class="title">
                                <?= $partners->title ?>
                            </div>
                        </div>
                        <div class="content ">
                            <div class="row partner-content w-860">
                                <div class="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                                    <?= $partners->fragments['img']->value ?>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="text">
                                        <?= $partners->fragments['intro']->value ?>
                                    </div>
                                </div>
                            </div>
                            <div class="row w-1060">
                                <div class="col-12 col-sm-4 mb-4 mb-sm-0">
                                    <div class="text">
                                        <?= $partners->fragments['text-1']->value ?>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-4 mb-4 mb-sm-0">
                                    <div class="text">
                                        <?= $partners->fragments['text-2']->value ?>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-4 mb-4 mb-sm-0">
                                    <div class="text">
                                        <?= $partners->fragments['text-3']->value ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /. -->
            <!-- Block Únete a Nuestro Equipo -->
            <?php
            $team_page = find_page_by_guid($team_guid, $us_pages);
            $team_result = Page::search(array(
                'idparent'  => $team_page->idpage,
                'fragments' => array('desc', 'img'),
                'sortBy'    => 'created ASC'
            ));
            $team_pages = $team_result['records'];
            ?>
            <section class="block us-team" id="<?= $team_page->key ?>">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <div class="title"><?= $team_page->fragments['body']->value ?></div>
                        </div>
                        <div class="content row w-1060">
                            <?php foreach ($team_pages as $t_page) : ?>
                                <div class="item col-sm-6 col-12 d-flex flex-column flex-sm-row align-sm-items-start">
                                    <?php
                                    $img_t = Fragment::elementAttributes($t_page->fragments['img']->value);
                                    $img_t_src = sprintf('background-image:url(%s)', $img_t['src'])
                                    ?>
                                    <div class="pic" style="<?= $img_t_src ?>"></div>
                                    <div class="desc text-start p-t-10">
                                        <div class="text-uppercase subtitle">
                                            <?= $t_page->title ?>
                                        </div>
                                        <div>
                                            <?= $t_page->fragments['desc']->value ?>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /. -->
            <!-- Block Únete a Nuestro Equipo -->
            <?php $join_page = find_page_by_guid($join_guid, $us_pages); ?>
            <section class="block us-join" id="<?= $join_page->key ?>">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="image img-fluid-wr">
                                    <?= $join_page->fragments['img']->value ?>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="header">
                                    <h2 class="title"><?= $join_page->fragments['title']->value ?></h2>
                                </div>
                                <div class="content">
                                    <div>
                                        <?= $join_page->fragments['desc']->value ?>
                                    </div>
                                </div>
                                <a class="button" href="#">Enviar CV</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="button btn-help" href="#">¡HOLA! ¿PODEMOS AYUDARTE?</a>
            </section>
            <!-- /. -->

        </div>

        <?php include_once "partials/contact-buttons.php" ?>
        <?php include_once "partials/book-ad.php" ?>

        <!-- Footer -->
        <?php include_once "partials/footer.php" ?>

        <!-- Page Scripts -->
        <?php include_once "partials/scripts.php" ?>
    </body>
</html>
