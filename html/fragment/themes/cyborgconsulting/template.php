<?php
include_once "globals.php";
include_once "utils/fragment_helpers.php";
$is_industries_page = false;
if ($page->guid === $industries_guid) {
    $is_industries_page = true;
}
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
            <?php $template_page = find_page_by_guid($page->guid, $root_pages); ?>
            <section class="block template-cover" id="template-cover">
                <?php
                $img = Fragment::elementAttributes($template_page->fragments['image']->value);
                $img_src = sprintf('background-image:url(%s)', $img['src'])
                ?>
                <div class="cover-bg d-flex align-items-center  justify-content-center">
                    <div class="parallax" style="<?= $img_src ?>"></div>
                    <h1 class="title text-white text-uppercase"><?= $template_page->fragments['intro']->value ?></h1>
                </div>
            </section>
            <!-- /.Cover -->
            <?php $results = Page::search(array(
                'idparent' => $template_page->idpage,
                'fragments' => array('title', 'info', 'img'),
                'sortBy' => 'created ASC'
            ));
            $records = $results['records'];
            ?>
            <section class="block wrapper-template d-flex py-0" id="wrapper-template">
                <div class="sidebar-menu d-none d-md-block">
                    <?php foreach ($records as $record) : ?>
                        <a href="#<?= $record->key ?>" class="sub-menu"><?= $record->fragments['title']->value ?></a>
                    <?php endforeach; ?>
                </div>
                <div class="wrapper-sections">
                    <!-- Block general section -->
                    <?php foreach ($records as $record) : ?>
                        <section class="block general-section" id="<?= $record->key ?>">
                            <div class="holder">
                                <div class="container-fluid">
                                    <div class="content">
                                        <div class="header text-start text-uppercase color-highlight-color">
                                            <b><?= $record->fragments['title']->value ?></b>
                                        </div>
                                        <div class="content">
                                            <?= $record->fragments['info']->value ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php if ($is_industries_page) : ?>
                                <div class="image">
                                    <?= $record->fragments['img']->value ?>
                                </div>
                            <?php endif; ?>
                        </section>
                    <?php endforeach; ?>
                    <!-- /.general section -->
                </div>
            </section>

            <?php if ($page->guid === $industries_guid) : ?>
                <!-- Block Carrusel industrias -->
                <section class="block industries-carrusel" id="carrusel-industrias">
                    <div class="holder">
                        <div class="container-fluid">
                            <div class="content">
                                <div class="el-slider">
                                    <div class="slides">
                                        <div class="slide active" data-key="rrhh-y-nomina">
                                            <div class="wrapper">
                                                <h3>RRHH Y NÓMINA</h3>
                                                <img class="d-none d-sm-block" src="<?= IMGS_PATH ?>slider/01-RRHH.svg" alt="">
                                                <img class="d-block d-sm-none" src="<?= IMGS_PATH ?>slider/mobile/01-RRHH.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="slide" data-key="it">
                                            <div class="wrapper">
                                                <h3>IT</h3>
                                                <img class="d-none d-sm-block" src="<?= IMGS_PATH ?>slider/02-ITsvg.svg" alt="">
                                                <img class="d-block d-sm-none" src="<?= IMGS_PATH ?>slider/mobile/02-IT.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="slide" data-key="servicios-al-cliente">
                                            <div class="wrapper">
                                                <h3>SERVICIO AL CLIENTE</h3>
                                                <img class="d-none d-sm-block" src="<?= IMGS_PATH ?>slider/03-servicio-al-cliente.svg" alt="">
                                                <img class="d-block d-sm-none" src="<?= IMGS_PATH ?>slider/mobile/03-servicio-al-cliente.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="slide" data-key="finanzas-y-contabilidad">
                                            <div class="wrapper">
                                                <h3>FINANZAS Y CONTABILIDAD</h3>
                                                <img class="d-none d-sm-block" src="<?= IMGS_PATH ?>slider/04-finanzas.svg" alt="">
                                                <img class="d-block d-sm-none" src="<?= IMGS_PATH ?>slider/mobile/04-finanzas.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="slide" data-key="fabricacion-y-logistica">
                                            <div class="wrapper">
                                                <h3>FABRICACION Y LOGISTICA</h3>
                                                <img class="d-none d-sm-block" src="<?= IMGS_PATH ?>slider/05-fabricacion.svg" alt="">
                                                <img class="d-block d-sm-none" src="<?= IMGS_PATH ?>slider/mobile/05-fabricacion.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="slide" data-key="salud-y-farmacia">
                                            <div class="wrapper">
                                                <h3>SALUD Y FARMACIA</h3>
                                                <img class="d-none d-sm-block" src="<?= IMGS_PATH ?>slider/06-salud.png" alt="">
                                                <img class="d-block d-sm-none" src="<?= IMGS_PATH ?>slider/mobile/06-salud.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="slide" data-key="gobierno">
                                            <div class="wrapper">
                                                <h3>GOBIERNO</h3>
                                                <img class="d-none d-sm-block" src="<?= IMGS_PATH ?>slider/07-gobierno.svg" alt="">
                                                <img class="d-block d-sm-none" src="<?= IMGS_PATH ?>slider/mobile/07-gobierno.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="slide" data-key="seguros">
                                            <div class="wrapper">
                                                <h3>SEGUROS</h3>
                                                <img class="d-none d-sm-block" src="<?= IMGS_PATH ?>slider/08-seguros.svg" alt="">
                                                <img class="d-block d-sm-none" src="<?= IMGS_PATH ?>slider/mobile/08-seguros.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="slide" data-key="banca-y-servicios-fin">
                                            <div class="wrapper">
                                                <h3>BANCA Y SERVICIOS FINANCIEROS</h3>
                                                <img class="d-none d-sm-block" src="<?= IMGS_PATH ?>slider/09-banca.svg" alt="">
                                                <img class="d-block d-sm-none" src="<?= IMGS_PATH ?>slider/mobile/09-banca.svg" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <button class="active" data-key="rrhh-y-nomina">
                                            <span class="img"><?php include_once 'partials/svg/rrhh-icon-rrhh-y-nomina.php' ?></span>
                                            <span class="txt">RRHH y nómina</span>
                                        </button>
                                        <button data-key="it">
                                            <span class="img"><?php include_once 'partials/svg/rrhh-icon-it.php' ?></span>
                                            <span class="txt">IT</span>
                                        </button>
                                        <button data-key="servicios-al-cliente">
                                            <span class="img"><?php include_once 'partials/svg/rrhh-icon-servicios-al-cliente.php' ?></span>
                                            <span class="txt">Servicios al cliente</span>
                                        </button>
                                        <button data-key="finanzas-y-contabilidad">
                                            <span class="img"><?php include_once 'partials/svg/rrhh-icon-finanzas-y-contabilidad.php' ?></span>
                                            <span class="txt">Finanzas y contabilidad</span>
                                        </button>
                                        <button data-key="fabricacion-y-logistica">
                                            <span class="img"><?php include_once 'partials/svg/rrhh-icon-fabricacion-y-logistica.php' ?></span>
                                            <span class="txt">Fabricación y logistica</span>
                                        </button>
                                        <button data-key="salud-y-farmacia">
                                            <span class="img"><?php include_once 'partials/svg/rrhh-icon-salud-y-farmacia.php' ?></span>
                                            <span class="txt">Salud y farmacia</span>
                                        </button>
                                        <button data-key="gobierno">
                                            <span class="img"><?php include_once 'partials/svg/rrhh-icon-gobierno.php' ?></span>
                                            <span class="txt">Gobierno</span>
                                        </button>
                                        <button data-key="seguros">
                                            <span class="img"><?php include_once 'partials/svg/rrhh-icon-seguros.php' ?></span>
                                            <span class="txt">Seguros</span>
                                        </button>
                                        <button data-key="banca-y-servicios-fin">
                                            <span class="img"><?php include_once 'partials/svg/rrhh-icon-banca-y-servicios-fin.php' ?></span>
                                            <span class="txt">Banca y servicios fin</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- /.Carrusel industrias -->
            <?php endif; ?>

            <?php if ($page->guid === $industries_guid) : ?>
                <!-- Block Industries Form -->
                <section class="block contact industries-form" id="formulario-industrias">
                    <div class="content">
                        <div class="holder">
                            <div class="container-fluid">
                                <?php include_once 'partials/industries-form.php'; ?>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- /.Industries Form -->
            <?php else : ?>
                <section class="block contact demo-form" id="solicita-tu-demostracion">
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
            <?php endif; ?>
        </div>

        <?php include_once "partials/contact-buttons.php" ?>
        <?php include_once "partials/book-ad.php" ?>

        <!-- Footer -->
        <?php include_once "partials/footer.php" ?>

        <!-- Page Scripts -->
        <?php include_once "partials/scripts.php" ?>
    </body>
</html>