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
            $home_page = find_page_by_guid($blog_guid, $root_pages);
            $h_result = Page::search(array(
                'idparent'  => $home_page->idpage,
                'fragments' => array('body', 'image', 'intro', 'slogan', 'main-image', 'small-image', 'title'),
                'sortBy'    => 'created ASC'
            ));
            $home_pages = $h_result['records'];
            ?>
            <section class="block blog-cover" id="blog-ebook">
                <?php
                $img = Fragment::elementAttributes($home_page->fragments['image']->value);
                $img_src = sprintf('background-image:url(%s)', $img['src'])
                ?>
                <div class="cover-bg d-flex align-items-center justify-content-center">
                    <div class="parallax" style="<?= $img_src ?>"></div>
                    <h1 class="title text-white text-uppercase"><?= $home_page->title ?></h1>
                </div>
            </section>
            <!-- /.Cover -->
            <!-- Block Blog Internal -->
            <section class="block blog-posts" id="<?= $page->key ?>">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="content">
                            <div class="grid"></div>
                            <!-- <button class="load-more d-block d-md-none">Cargar más</button> -->
                            <button class="load-more">Cargar más</button>
                        </div>
                    </div>
                </div>
                <!-- <div class="scroll-indication">
                        <img src="<?= IMGS_PATH ?>scroll-arrow.svg" alt="">
                        <span>scroll</span>
                    </div> -->
            </section>
            <!-- /.Blog Internal -->
        </div>

        <?php include_once "partials/contact-buttons.php" ?>
        <?php include_once "partials/book-ad.php" ?>

        <!-- Footer -->
        <?php include_once "partials/footer.php" ?>

        <!-- Page Scripts -->
        <?php include_once "partials/scripts.php" ?>
    </body>
</html>