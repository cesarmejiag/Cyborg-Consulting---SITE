<?php
include_once "globals.php";
include_once "utils/fragment_helpers.php";

?>
<!doctype html>
<html amp lang="es-MX">
    <head>
        <?php include_once 'partials/head.php'; ?>
    </head>
    <body>
        <!-- Navigation -->
        <?php include_once 'partials/navigation.php'; ?>
        <!-- /.Navigation -->

        <!-- Outer wrapper -->
        <div class="outer-wrapper">
            <section class="block blog-post" id="<?= $page->key ?>">
                <div class="container-fluid">
                    <div class="description-article">
                        <div class="wrapper-holder">
                            <div class="holder">
                                <?php
                                $img_src = sprintf('background-image:url(%s)', $img['src'])
                                ?>
                                <div class="cover-bg d-flex align-items-center justify-content-center" style="<?= $img_src ?>">
                                    <div class="text-white title"><?= $page->title ?></div>
                                </div>
                                <div class="post-body">
                                    <div class="post-date">Publicado: <span><?= $page->created ?></span></div>
                                    <div><?= $post_body->value ?></div>
                                </div>
                                <div class="btns d-flex align-items-center flex-column flex-sm-row">
                                    <a href="/blog" class="blog-btn text-uppercase color-highlight-color mb-4">Regresar</a>
                                    <button class="blog-btn big-btn text-uppercase color-highlight-color mb-4" data-pl-modal-effect="pl-effect-1">¿Quieres saber más?</button>
                                </div>
                                <!-- Dummy Template -->
                                <div class="d-none">
                                    <div class="cv-form-wrapper">
                                        <?php include_once 'partials/blog-form.php'; ?>
                                    </div>
                                </div>
                                <!-- /.Dummy Template -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <?php include_once "partials/contact-buttons.php" ?>
        <?php include_once "partials/book-ad.php" ?>

        <!-- Footer -->
        <?php include_once 'partials/footer.php'; ?>
        <!-- /.Footer -->
        <?php include_once 'partials/scripts.php'; ?>
    </body>
</html>