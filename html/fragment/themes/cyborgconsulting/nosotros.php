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
                        <div class="header"></div>
                        <div class="content"></div>
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