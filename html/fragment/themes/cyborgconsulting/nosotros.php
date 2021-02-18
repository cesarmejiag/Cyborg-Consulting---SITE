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
            <!-- Block Cover -->
            <?php
            $imgCover = IMGS_PATH . 'cover-nosotros.jpg';
            $img_src = sprintf('background-image:url(%s)', $imgCover)
            ?>
            <section class="block us-cover" id="cover-us">
                <div class="cover-bg d-flex align-items-center  justify-content-center" style="<?= $img_src ?>">
                    <h1 class="title text-white">Nosotros</h1>
                </div>
            </section>
            <!-- /.Cover -->
            <!-- Block Us Intro -->
            <section class="block us-intro" id="us-intro">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header pb-3 pb-md-4">
                            <div class="row intro-content d-flex align-items-center justify-content-around">
                                <div class="col-12 col-sm-6">
                                    <div class="logo text-center">
                                        <img src="<?= IMGS_PATH ?>logo.svg" alt="logo">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="text">
                                        Somos una consultoría boutique de TI con amplia experiencia en hiperautomatización
                                        de procesos clave que impulsan a las organizaciones de las diversas industrias a
                                        alcanzar sus objetivos, mejorando su eficiencia, reduciendo costos y aumentando su
                                        productividad.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content pt-3 pt-sm-4">
                            <div class="row">
                                <div class="col-6 col-sm-3">
                                    <div class="wrapper">
                                        <?php
                                            $imgNosotros = IMGS_PATH . 'tecnologia-boton.jpg';
                                            $img_src = sprintf('background-image:url(%s)', $imgNosotros);
                                        ?>
                                        <div class="image" style="<?= $img_src ?>"></div>
                                        <div>
                                            <div class="logo text-center m-t-30">
                                                <img class="img-fluid" src="<?= IMGS_PATH ?>icon-chip.svg" alt="chip">
                                            </div>
                                            <div class="title normal-size-title text-wrap text-uppercase text-break">Tecnología</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-3">
                                    <div class="wrapper">
                                        <?php
                                            $imgNosotros = IMGS_PATH . 'consultoria-boton.jpg';
                                            $img_src = sprintf('background-image:url(%s)', $imgNosotros);
                                        ?>
                                        <div class="image" style="<?= $img_src ?>"></div>
                                        <div>
                                            <div class="logo text-center m-t-30">
                                                <img class="img-fluid" src="<?= IMGS_PATH ?>icon-gear.svg" alt="chip">
                                            </div>
                                            <div class="title title normal-size-title text-wrap text-uppercase text-break">CONSULTORIA ESPECIALIZADA</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-3">
                                    <div class="wrapper">
                                        <?php
                                            $imgNosotros = IMGS_PATH . 'implementaciones-boton.jpg';
                                            $img_src = sprintf('background-image:url(%s)', $imgNosotros);
                                        ?>
                                        <div class="image" style="<?= $img_src ?>"></div>
                                        <div>
                                            <div class="logo text-center m-t-30">
                                                <img class="img-fluid" src="<?= IMGS_PATH ?>icon-arm.svg" alt="chip">
                                            </div>
                                            <div class="title title normal-size-title text-wrap text-break text-uppercase">
                                                IMPLEMENTACIONES
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-3">
                                    <div class="wrapper">
                                        <?php
                                            $imgNosotros = IMGS_PATH . 'operaciones-y-mantenimiento-boton.jpg';
                                            $img_src = sprintf('background-image:url(%s)', $imgNosotros);
                                        ?>
                                        <div class="image" style="<?= $img_src ?>"></div>
                                        <div>
                                            <div class="logo text-center m-t-30">
                                                <img class="img-fluid" src="<?= IMGS_PATH ?>icon-gears.svg" alt="chip">
                                            </div>
                                            <div class="title title normal-size-title text-wrap text-uppercase text-break">
                                            OPERACIONES Y MANTENIMIENTO
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3 pt-sm-5 intro-content d-flex align-items-start justify-content-around">
                                <div class="col-12 col-sm-6 pb-4 pb-sm-0">
                                    <div class="text">
                                        Acompañamos a nuestros clientes, desde la elaboración del diagnóstico, 
                                        la generación de alternativas, su evaluación, el diseño de la solución y 
                                        su instrumentación con la puesta en marcha de cada transformación digital.
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="text">
                                        Nuestro equipo de trabajo está altamente capacitado y certificado, 
                                        lo cual nos permite cumplir con los requerimientos de nuestros clientes, 
                                        logrando la continuidad de sus negocios.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /. -->
            <!-- Block Misión y Visión -->
            <section class="block us-mision-vision" id="us-mision-vision">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content"></div>
                    </div>
                </div>
            </section>
            <!-- /. -->
            <!-- Block Valores -->
            <section class="block us-values" id="us-values">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content"></div>
                    </div>
                </div>
            </section>
            <!-- /. -->
            <!-- Block Cyborg Way -->
            <section class="block us-cyborg" id="us-cyborg">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content"></div>
                    </div>
                </div>
            </section>
            <!-- /. -->
            <!-- Block Conoce a Nuestro Equipo -->
            <section class="block us-team" id="us-team">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content"></div>
                    </div>
                </div>
            </section>
            <!-- /. -->
            <!-- Block Únete a Nuestro Equipo -->
            <section class="block us-join" id="us-join">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content"></div>
                    </div>
                </div>
            </section>
            <!-- /. -->

        </div>

        <!-- Footer -->
        <?php include_once "partials/footer.php" ?>

        <!-- Page Scripts -->
        <?php include_once "partials/scripts.php" ?>
    </body>

</html>