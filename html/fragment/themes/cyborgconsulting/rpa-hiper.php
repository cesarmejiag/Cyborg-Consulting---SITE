<?php
include_once "globals.php";
include_once "utils/fragment_helpers.php";
$rpa_info_guid = 'vzmB-OasR-';
$robots_guid = '7neekUcqHu';
$hiper_guid = 'YVEr65sESM';
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

        <!-- Outer wrapper -->
        <div class="outer-wrapper">
            <!-- Block Cover -->
            <?php
            $rpa_page = find_page_by_guid($rpa_guid, $root_pages);
            $rpa_result = Page::search(array(
                'idparent'  => $rpa_page->idpage,
                'fragments' => array('body', 'intro', 'desc', 'main-image', 'small-image'),
                'sortBy'    => 'created ASC'
            ));
            $rpa_pages = $rpa_result['records'];
            ?>
            <section class="block rpa-cover" id="cover-rpa">
                <?php
                $img_rpa = Fragment::elementAttributes($rpa_page->fragments['image']->value);
                $img_src = sprintf('background-image:url(%s)', $img_rpa['src'])
                ?>
                <div class="cover-bg d-flex align-items-center  justify-content-center">
                    <div class="parallax" style="<?= $img_src ?>"></div>
                    <h1 class="title text-white text-uppercase"><?= $rpa_page->title ?></h1>
                </div>
            </section>
            <!-- /.Cover -->

            <!-- Block ¿Qué es RPA? -->
            <?php $rpa_info_page = find_page_by_guid($rpa_info_guid, $rpa_pages); ?>
            <section class="block rpa-intro" id="<?= $rpa_info_page->key ?>">
                <div class="holder w-860">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title text-start text-uppercase sub-title-size">¿Qué es RPA?</h2>
                        </div>
                        <div class="content">
                            <?= $rpa_info_page->fragments['intro']->value ?>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.¿Qué es? -->

            <!-- Block RPA Cards -->
            <?php $cards_result = Page::search(array(
                'idparent'  => $rpa_info_page->idpage,
                'fragments' => array('body'),
                'sortBy'    => 'created ASC'
            ));
            $cards = $cards_result['records'];
            ?>
            <section class="block rpa-cards">
                <div class="bg"></div>
                <div class="holder w-860">
                    <div class="container-fluid">
                        <div class="row">
                            <?php foreach ($cards as $card) : ?>
                                <div class="col-12 col-sm-6 col-md-4">
                                    <div class="item">
                                        <div class="icon">
                                            <img src="<?= IMGS_PATH ?>rpa-<?= $card->key ?>.svg" class="img-fluid" alt="<?= $card->name ?>">
                                        </div>
                                        <div class="wrapper text-center">
                                            <div class="color-highlight-color mb-4">
                                                <?= $card->title ?>
                                            </div>
                                            <div>
                                                <?= $card->fragments['body']->value ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.RPA Cards -->

            <!-- Block ¿Qué Procesos? -->
            <section class="block rpa-process">
                <div class="holder w-860">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title text-start text-uppercase sub-title-size">
                                ¿Qué procesos se pueden automatizar con RPA?
                            </h2>
                        </div>
                        <div class="content">
                            <?= $rpa_info_page->fragments['desc']->value ?>
                        </div>
                        <div class="images position-relative">
                            <?php
                            $main_image = Fragment::elementAttributes($rpa_info_page->fragments['main-image']->value);
                            $small_image = Fragment::elementAttributes($rpa_info_page->fragments['small-image']->value);
                            ?>
                            <div class="main-image">
                                <img src="<?= $main_image['src'] ?>" class="img-fluid" alt="<?= $main_image['alt'] ?>">
                            </div>
                            <div class="small-image d-none d-sm-block">
                                <img src="<?= $small_image['src'] ?>" class="img-fluid" alt="<?= $small_image['alt'] ?>">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /- -->

            <!-- Block Robots -->
            <?php 
            $robots = find_page_by_guid($robots_guid, $rpa_pages);
            $robots_result = Page::search(array(
                'idparent'  => $robots->idpage,
                'fragments' => array('body', 'img'),
                'sortBy'    => 'created ASC'
            ));
            $robots_pages = $robots_result['records'];
            ?>
            <section class="block rpa-robots" id="<?= $robots->key ?>">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title text-center text-uppercase sub-title-size">
                                <?= $robots->title ?>
                            </h2>
                        </div>
                        <div class="content">
                            <div class="row">
                                <?php foreach ($robots_pages as $robot) : ?>
                                    <div class="col-12 col-sm-4">
                                        <div class="item">
                                            <div class="icon position-relative">
                                                <?php $robot_image_atts = Fragment::elementAttributes($robot->fragments['img']->value) ?>
                                                <img src="<?= $robot_image_atts['src'] ?>" class="img-fluid" alt="<?= $robot_image_atts['alt'] ?>">
                                            </div>
                                            <div class="wrapper position-relative text-white text-center normal-size-title">
                                                <div class="mb-4 text-uppercase"><b><?= $robot->title ?></b></div>
                                                <div><?= $robot->fragments['body']->value ?></div>
                                            </div>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                        <div class="video position-relative text-center w-860">
                            <img src="<?= IMGS_PATH ?>mac.jpg" class="img-fluid" alt="rpa-video">
                            <video controls muted poster="https://via.placeholder.com/645x360/000000/000000">
                                <source src="<?= TEMPLATE_PATH ?>videos/rpa.mp4" type="video/mp4">
                                <!-- Add image as fallback -->
                            </video>
                        </div>
                        <div class="btn-wrapper text-center m-t-50">
                            <button class="btn button btn-demo" data-id="demo-form">Solicitar Demo</button>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /- -->

            <!-- Block Hiperautomatización -->
            <?php $hiper_page = find_page_by_guid($hiper_guid, $rpa_pages); ?>
            <section class="block rpa-hiper" id="<?= $hiper_page->key ?>">
                <div class="holder w-860">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title text-start text-uppercase sub-title-size">
                                Hiperautomatización
                            </h2>
                        </div>
                        <div class="content"><?= $hiper_page->fragments['body']->value ?></div>
                    </div>
                </div>
            </section>
            <!-- / -->

            <!-- Block Hiperautomatización -->
            <section class="block rpa-gartner" id="rpa-gartner">
                <div class="holder w-1060">
                    <div class="container-fluid">
                        <div class="header">
                            <div class="text-center text-uppercase color-highlight-color">
                                Gartner, Top 10 Strategic Technology Trends for 2021
                            </div>
                            <div class="diagram d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-between">
                                <div class="circle text-white text-uppercase bg-highlight-color position-relative">
                                    RPA <span class="d-none d-lg-block arrow"><img src="<?= IMGS_PATH ?>arrow.svg" class="img-fluid" alt=""></span>
                                </div>
                                <div class="column-wrapper d-flex justify-content-between">
                                    <div class="column-1 text-center color-highlight-color">
                                        <div>
                                            <p>IA</p>
                                            <p>(NLP, AI Computer Vision, intelligent Optical Reconognition)</p>
                                        </div>
                                        <div>
                                            <p>Process Mining</p>
                                        </div>
                                        <div>
                                            <p>Integraciones Nativas</p>
                                        </div>
                                    </div>
                                    <div class="column-2 text-center position-relative">
                                        <div>
                                            <p> Machine Learning</p>
                                        </div>
                                        <div>
                                            <p> Lone-running workflows</p>
                                        </div>
                                        <div>
                                            <p> Advanced Analytics</p>
                                        </div>
                                        <span class="arrow arrow-last d-none d-lg-block"><img src="<?= IMGS_PATH ?>arrow.svg" class="img-fluid" alt=""></span>
                                    </div>
                                </div>
                                <div class="last text-white text-uppercase bg-highlight-color text-center">
                                    HIPERAUTOMATIZACIÓN
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <h2 class="text-center title text-uppercase mb-3">¿EN QUÉ NOS APOYAMOS?</h2>
                            <div class="text-center sub-title-size text-uppercase color-highlight-color mb-5">Plataforma para la hiperautomatización punta a punta.</div>
                            <div class="image-wrapper position-relative">
                                <div class="small-image">
                                    <img src="<?= IMGS_PATH ?>uipath.png" alt="" class="img-fluid">
                                </div>
                                <div class="main-image text-center">
                                    <img src="<?= IMGS_PATH ?>rpa-infografia.svg" alt="rpa-infografia" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- / -->
            
            <!-- Contact -->
            <section class="block contact demo-form" id="demo-form">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title">¡Solicita tu demostración hoy mismo!</h2>
                        </div>
                        <div class="content">
                            <?php include_once 'partials/demo-form.php'; ?>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Contact -->
        </div>

        <?php include_once "partials/contact-buttons.php" ?>
        <?php include_once "partials/book-ad.php" ?>

        <!-- Footer -->
        <?php include_once "partials/footer.php" ?>

        <!-- Page Scripts -->
        <?php include_once "partials/scripts.php" ?>
    </body>
</html>