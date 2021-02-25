<?php
include_once "globals.php";
include_once "utils/fragment_helpers.php";
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

            <?php $home_page = find_page_by_guid('home', $root_pages); ?>
            <!-- Block Cover -->
            <section class="block cover" id="<?= $home_page->key ?>">
                <h1 class="title"><?= $home_page->fragments['slogan']->value ?></h1>
                <video autoplay muted loop>
                    <source src="<?= TEMPLATE_PATH ?>videos/cover-home.mp4" type="video/mp4">
                    <!-- Add image as fallback -->
                </video>
            </section>
            <!-- /.Cover -->

            <!-- Block Us -->
            <?php $nosotros_page = find_page_by_guid($us_guid, $root_pages); ?>
            <?php $services = find_page_by_guid($services_guid, $root_pages); ?>
            <?php $services_records = Page::search(array(
                'idparent' => $services->idpage,
                'fragments' => array('img'),
                'sortBy' => 'created ASC'
                ));
                $services_pr = $services_records['records'];
            ?>
            <section class="block us" id="<?= $nosotros_page->key ?>">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="content">
                            <div class="row flex-column-reverse flex-md-row">
                                <div class="col-12 col-md-6">
                                    <div class="images">
                                        <?php
                                            $image_main_attrs = Fragment::elementAttributes($nosotros_page->fragments['main-image']->value);
                                            $image_small_attrs = Fragment::elementAttributes($nosotros_page->fragments['small-image']->value);
                                            $img_main_src = sprintf('background-image:url(%s)', $image_main_attrs['src']);
                                        ?>
                                        <div class="main-image position-relative" style="<?= $img_main_src ?>">
                                            <div class="side-image d-none d-lg-block position-absolute">
                                                <img src="<?= $image_small_attrs['src'] ?>" alt="<?= $image_small_attrs['alt'] ?>">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div>
                                        <div class="pb-3 pt-0 py-sm-4">
                                            <h2 class="text-start title mt-sm-4"><?= $nosotros_page->title ?></h2>
                                        </div>
                                        <div>
                                            <p>
                                                <?= $nosotros_page->fragments['intro']->value ?>
                                            </p>
                                            <p class="mt-4">
                                                Contamos con las siguientes divisiones de negocio:
                                            </p>
                                        </div>
                                        <div class="row align-items-start m-t-45">
                                        <?php foreach ($services_pr as $service): ?>
                                            <div class="col-6 col-lg-3 text-center">
                                                <div class="img m-b-26">
                                                    <img class="img-fluid" src="<?= IMGS_PATH ?>icon-<?= $service->key ?>.svg" alt="<?= $service->title ?>">
                                                </div>
                                                <div class="title normal-size-title text-wrap text-break text-uppercase">
                                                    <?= $service->title ?>
                                                </div>
                                            </div>
                                        <?php endforeach; ?>
                                        </div>
                                        <div class="btn-mas m-t-30 mb-4 mb-md-0">
                                            <a class="btn btn-primary button d-block text-uppercase text-white" href="/<?= $nosotros_page->key ?>">Ver Más</a>                                               
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Us -->

            <!-- Block Services -->
            <section class="block services" id="<?= $services->key ?>">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title">
                                <?= $services->title ?>
                            </h2>
                        </div>
                        <div class="content">
                            <div class="row">
                                <?php foreach ($services_pr as $service): ?>
                                <div class="col-6 col-md-3">
                                    <?php
                                    $imgNosotros = IMGS_PATH . 'nosotros1.jpg'; // placeholder antes de Fragment
                                    $image_nosotros_attrs = Fragment::elementAttributes($service->fragments['img']->value);
                                    $image_nosotros_bg = $image_nosotros_attrs['src'];

                                    empty($image_nosotros_bg)
                                    ? $img_src = sprintf('background-image:url(%s)', $imgNosotros)
                                    : $img_src = sprintf('background-image:url(%s)', $image_nosotros_bg);

                                    ?>
                                    <a class="d-block mb-3" href="javascript:void(0)">
                                        <div class="item d-flex align-items-center text-white text-center position-relative"
                                            style="<?= $img_src ?>"
                                        >
                                            <div class="label w-100 text-uppercase"><?= $service->title ?></div>
                                            <div class="mask position-absolute"></div>
                                        </div>
                                    </a>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Services -->

            <!-- Block Ribbon -->
            <section class="block ribbon" id="cintillo">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="content">
                            <div class="info">
                                 <?= $home_page->fragments['ribbon']->value ?>
                            </div>
                            <div class="image">
                                <?= $home_page->fragments['ribbon-image']->value ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Ribbon -->

            <!-- Block RPA & Automatization -->
            <?php $rpa = find_page_by_guid($rpa_guid, $root_pages); ?>
            <?php $rpaPage = Page::search(array(
                'idparent' => $rpa->idpage,
                'fragments' => array('img','content'),
                'sortBy' => 'created ASC'
                ));
            $rpa_pr = $rpaPage['records'];
            ?>
            <section class="block rpa-automatization m-t-50" id="rpa-and-hiperautomatizacion">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title mt-0"><?= $rpa->title ?></h2>
                        </div>
                    </div>
                </div>
                <div class="content bg-highlight-color">
                    <div class="holder">
                        <div class="container-fluid text-white">
                            <div class="row justify-content-center pt-4 py-sm-0">
                                <?php foreach($rpa_pr as $item): ?>
                                <div class="col-12 col-sm-4">
                                    <div class="item">
                                        <?php
                                        $imgPlaceHolder = IMGS_PATH . 'rpa.jpg'; // placeholder antes de Fragment
                                        $imgRPA = Fragment::elementAttributes($item->fragments['img']->value);
                                        ?>
                                        <div class="img">
                                            <?php if(empty($imgRPA)): ?>
                                                <img src="<?= $imgPlaceHolder ?>" class="img-fluid" alt="rpa">
                                            <?php else: ?>
                                                <img src="<?= $imgRPA['src'] ?>" class="img-fluid" alt="<?= $imgRPA['alt'] ?>">
                                            <?php endif; ?>
                                        </div>
                                        <div class="info">
                                            <h5 class="m-t-35 m-b-35 mx-0"><?= $item->title ?></h3>
                                            <div class="text-justify">
                                                <?= $item->fragments['content']->value ?>
                                            </div>
                                        </div>
                                        <a class="text-end text-white text-uppercase d-block" href="<?= $item->key ?>">Ver más ></a>
                                    </div>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.RPA & Automatization -->

            <!-- Block Industries -->
            <?php $industries = find_page_by_guid($industries_guid, $root_pages); ?>
            <?php $industries_page = Page::search(array(
                'idparent' => $industries->idpage,
                'fragments' => array('img','content'),
                'sortBy' => 'created ASC'
                ));
            $industries_r = $industries_page['records'];
            ?>
            <section class="block industries" id="industrias">
                <div class="holder">
                    <div class="container-fluid">
                        <?php
                            $imgIndutries = IMGS_PATH . 'industrias-background.jpg'; // Si no se cuenta con fragment
                            $imgIndustriesAtts = Fragment::elementAttributes($industries->fragments['image']->value);
                            $imgIndutries_src = sprintf('background-image:url(%s)', $imgIndustriesAtts['src'])
                        ?>
                        <div class="header d-flex justify-content-center align-items-center" style="<?= $imgIndutries_src ?>">
                            <h2 class="title mx-0 text-white text-center"><?= $industries->fragments['intro']->value ?></h2>
                        </div>
                        <div class="content position-relative d-flex justify-content-between flex-wrap">
                            <?php foreach ($industries_r as $page):
                                $imgPageAtts = Fragment::elementAttributes($page->fragments['img']->value);
                                $imgPage_src = sprintf('background-image:url(%s)', $imgPageAtts['src'])
                            ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        <?= $page->title ?>
                                    </div>
                                    <div class="item-info text-center text-white">
                                        <?= $page->fragments['content']->value ?>
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Industries -->

            <?php $partners = find_page_by_guid($clients_guid, $root_pages); 
                  $imgs_gallery_1 = Fragment::findTagsIn('img',$partners->fragments['gallery-1']->value);
                  $imgs_gallery_2 = Fragment::findTagsIn('img',$partners->fragments['gallery-2']->value); ?>
            <!-- Block Partners -->
            <section class="block partners py-0" id="socios-estrategicos">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="text-center title"><?= $partners->fragments['title-gallery-1']->value ?></h2> 
                        </div>
                        <div class="content">
                            <div class="carrousel">
                                <div class="util-carrousel gallery-thumb">
                                    <?php foreach($imgs_gallery_1 as $img_gallery): ?>
                                    <div class="thumb align-top">
                                        <div class="image">
                                            <div class="content">
                                                <div class="img-content">
                                                <?php $image_attrs= Fragment::elementAttributes($img_gallery); ?>
                                                <img src="<?= $image_attrs['data-image-url'] ?>" alt="<?= $image_attrs['alt'] ?>"  class="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Partners -->

            <!-- Block Clients -->
            <section class="block clients py-0" id="<?= $partners->key ?>">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="text-center title"><?= $partners->fragments['title-gallery-2']->value ?></h2> 
                        </div>
                        <div class="content">
                            <div class="carrousel">
                                <div class="util-carrousel gallery-thumb">
                                        <?php foreach($imgs_gallery_2 as $img_gallery): ?>
                                        <div class="thumb align-top">
                                            <div class="image">
                                                <div class="content">
                                                    <div class="img-content">
                                                    <?php $image_attrs= Fragment::elementAttributes($img_gallery); ?>
                                                    <img src="<?= $image_attrs['data-image-url'] ?>" alt="<?= $image_attrs['alt'] ?>"  class="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Clients -->

            <!-- Block Contact -->
            <section class="block contact" id="contacto">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content">
                            
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Contact -->

            <!-- Block Ebook -->
            <section class="block ebook" id="ebook">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="image img-fluid-wr">
                                    <img src="<?= IMGS_PATH ?>ebook-image.jpg" alt="">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="header">
                                    <h2 class="title">¡Solicita tu ebook de la hiperautomatización!</h2>
                                </div>
                                <div class="content">
                                    <div><b>Completa el siguiente formulario y recibe tu ebook acerca de la hiperautomatización.</b></div>
                                </div>
                                <a class="button" href="#">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Ebook -->
        </div>

        <!-- Footer -->
        <?php include_once "partials/footer.php" ?>

        <!-- Page Scripts -->
        <?php include_once "partials/scripts.php" ?>
    </body>
</html>
