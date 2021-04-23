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
                                    <div class="slides"></div>
                                    <ul class="buttons">
                                        <li>
                                            <button data-key="rrhh-y-nomina">
                                                <img src="<?= IMGS_PATH ?>rrhh-icon-rrhh-y-nomina.svg" alt="RRHH y nómina icono">
                                                <span>RRHH y nómina</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button data-key="it">
                                                <img src="<?= IMGS_PATH ?>rrhh-icon-it.svg" alt="IT icono">
                                                <span>IT</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button data-key="servicios-al-cliente">
                                                <img src="<?= IMGS_PATH ?>rrhh-icon-servicios-al-cliente.svg" alt="Servicios al cliente icono">
                                                <span>Servicios al cliente</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button data-key="finanzas-y-contabilidad">
                                                <img src="<?= IMGS_PATH ?>rrhh-icon-finanzas-y-contabilidad.svg" alt="Finanzas y contabilidad icono">
                                                <span>Finanzas y contabilidad</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button data-key="fabricacion-y-logistica">
                                                <img src="<?= IMGS_PATH ?>rrhh-icon-fabricacion-y-logistica.svg" alt="Fabricación y logistica icono">
                                                <span>Fabricación y logistica</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button data-key="salud-y-farmacia">
                                                <img src="<?= IMGS_PATH ?>rrhh-icon-salud-y-farmacia.svg" alt="Salud y farmacia icono">
                                                <span>Salud y farmacia</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button data-key="gobierno">
                                                <img src="<?= IMGS_PATH ?>rrhh-icon-gobierno.svg" alt="Gobierno icono">
                                                <span>Gobierno</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button data-key="seguros">
                                                <img src="<?= IMGS_PATH ?>rrhh-icon-seguros.svg" alt="Seguros icono">
                                                <span>Seguros</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button data-key="banca-y-servicios-fin">
                                                <img src="<?= IMGS_PATH ?>rrhh-icon-banca-y-servicios-fin.svg" alt="Banca y servicios fin icono">
                                                <span>Banca y servicios fin</span>
                                            </button>
                                        </li>
                                    </ul>
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