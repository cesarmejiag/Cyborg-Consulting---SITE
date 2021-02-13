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
            <section class="block cover" id="home">
                <h1 class="title">Leading The<br />HYPERAUTOMATIZATION REVOLUTION!</h1>
                <video autoplay muted loop>
                    <source src="<?= TEMPLATE_PATH ?>videos/cover-home.mp4" type="video/mp4">
                    <!-- Add image as fallback -->
                </video>
            </section>
            <!-- /.Cover -->

            <!-- Block Us -->
            <section class="block us" id="nosotros">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="content">
                            <div class="row flex-column-reverse flex-md-row">
                                <div class="col-12 col-md-6">
                                    <div class="images">
                                        <?php
                                        $imgNosotros = IMGS_PATH . 'nosotros1.jpg';
                                        $img_src = sprintf('background-image:url(%s)', $imgNosotros)
                                        ?>
                                        <div class="main-image position-relative" style="<?= $img_src ?>">
                                            <div class="side-image d-none d-lg-block position-absolute">
                                                <img src="<?= IMGS_PATH ?>nosotros2.jpg" alt="nosotros2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div>
                                        <div class="pb-3 pt-0 py-sm-4">
                                            <h2 class="text-start title mt-sm-4">Nosotros</h2>
                                        </div>
                                        <div>
                                            <p>
                                                Somos una consultoría boutique de TI, con amplia experiencia en hiperautomatización
                                                de procesos clave, los que impulsan a las organizaciones de las diversas industrias
                                                a alcanzar sus objetivos, mejorando su eficiencia, reduciendo costos y aumentando su
                                                productividad.
                                            </p>
                                            <p>
                                                Contamos con las siguientes divisiones de negocio:
                                            </p>
                                        </div>
                                        <div class="row align-items-start m-t-45">
                                            <div class="col-6 col-lg-3 text-center">
                                                <div class="img m-b-26">
                                                    <img class="img-fluid" src="<?= IMGS_PATH ?>icon-chip.svg" alt="chip">
                                                </div>
                                                <div class="title normal-size-title text-wrap text-break">
                                                    TECNOLOGIA
                                                </div>
                                            </div>
                                            <div class="col-6 col-lg-3 text-center">
                                                <div class="img m-b-26">
                                                    <img class="img-fluid" src="<?= IMGS_PATH ?>icon-gear.svg" alt="gear">
                                                </div>
                                                <div class="title normal-size-title text-wrap text-break">
                                                    CONSULTORIA ESPECIALIZADA
                                                </div>
                                            </div>
                                            <div class="col-6 col-lg-3 text-center">
                                                <div class="img m-b-26">
                                                    <img class="img-fluid" src="<?= IMGS_PATH ?>icon-arm.svg" alt="arm">
                                                </div>
                                                <div class="title normal-size-title text-wrap text-break">
                                                    IMPLEMENTACIONES
                                                </div>
                                            </div>
                                            <div class="col-6 col-lg-3 text-center">
                                                <div class="img m-b-26">
                                                    <img class="img-fluid" src="<?= IMGS_PATH ?>icon-gears.svg" alt="gears">
                                                </div>
                                                <div class="title title normal-size-title text-wrap text-break">
                                                    OPERACIONES Y
                                                    MANTENIMIENTO
                                                </div>
                                            </div>
                                        </div>
                                        <div class="btn-mas m-t-30 mb-4 mb-md-0">
                                            <button class="btn btn-primary button d-block text-uppercase text-white">
                                                Ver Más
                                            </button>
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
            <section class="block services" id="servicios">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content">
                            
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Services -->

            <!-- Block Ribbon -->
            <section class="block ribbon" id="cintillo">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content">
                            
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Ribbon -->

            <!-- Block RPA & Automatization -->
            <section class="block rpa-automatization" id="rpa-automatization">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content">
                            
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.RPA & Automatization -->

            <!-- Block Industries -->
            <section class="block industries" id="industrias">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content">
                            
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Industries -->

            <!-- Block Parners -->
            <section class="block partners" id="socios-estrategicos">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content">
                            
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Parners -->

            <!-- Block Clients -->
            <section class="block clients" id="clientes">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content">
                            
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
