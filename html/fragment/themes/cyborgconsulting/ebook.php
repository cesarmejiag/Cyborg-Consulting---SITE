<?php
include_once "globals.php";
include_once "utils/fragment_helpers.php";
$ebook_guid = 'eCZ8LJw7BP'
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
            $home_page = find_page_by_guid('home', $root_pages);
            $h_result = Page::search(array(
                'idparent'  => $home_page->idpage,
                'fragments' => array('body', 'image', 'intro', 'slogan', 'main-image', 'small-image', 'title'),
                'sortBy'    => 'created ASC'
            ));
            $home_pages = $h_result['records'];
            ?>
            <?php $ebook_page = find_page_by_guid($ebook_guid, $home_pages); ?>
            <section class="block rpa-cover" id="cover-ebook">
                <?php
                $img = Fragment::elementAttributes($ebook_page->fragments['image']->value);
                $img_src = sprintf('background-image:url(%s)', $img['src'])
                ?>
                <div class="cover-bg d-flex align-items-center  justify-content-center">
                    <div class="parallax" style="<?= $img_src ?>"></div>
                    <h1 class="title text-white text-uppercase"><?= $ebook_page->fragments['title']->value ?></h1>
                </div>
            </section>
            <!-- /.Cover -->
            <section class="block intro-ebook" id="intro-ebook">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <div class="row w-1060">
                                <div class="col-12 col-sm-6">
                                    <div class="text">
                                        <?= $ebook_page->fragments['intro']->value ?>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="img">
                                        <?php $img_book = Fragment::elementAttributes($ebook_page->fragments['small-image']->value); ?>
                                        <img src="<?= $img_book['src'] ?>" alt="<?= $img_book['alt']  ?>" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <div class="body">
                                <h2 class="text-center color-highlight-color"><?= $ebook_page->fragments['slogan']->value ?></h2>
                            </div>
                            <?php include_once 'partials/ebook-form.php'; ?>
                        </div>
                    </div>
                </div>
            </section>

        </div>

        <?php include_once "partials/contact-buttons.php" ?>
        <?php include_once "partials/book-ad.php" ?>

        <!-- Footer -->
        <?php include_once "partials/footer.php" ?>

        <!-- Page Scripts -->
        <?php include_once "partials/scripts.php" ?>
    </body>
</html>