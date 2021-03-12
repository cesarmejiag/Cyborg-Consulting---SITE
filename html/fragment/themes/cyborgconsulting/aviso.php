<?php
include_once "globals.php";
include_once "utils/fragment_helpers.php";
$aviso_guid = '0Zi3-3tvvj';
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
                'fragments' => array('body','img'),
                'sortBy'    => 'created ASC'
            ));
            $home_pages = $h_result['records'];
            ?>
            <?php $aviso_page = find_page_by_guid($aviso_guid,$home_pages);?>
            <section class="block rpa-cover" id="cover-ebook">
                <?php
                $img = Fragment::elementAttributes($aviso_page->fragments['img']->value);
                $img_src = sprintf('background-image:url(%s)', $img['src'])
                ?>
                <div class="cover-bg d-flex align-items-center  justify-content-center">
                    <div class="parallax" style="<?= $img_src ?>"></div>
                    <h1 class="title text-white text-uppercase"><?= $aviso_page->title ?></h1>
                </div>
            </section>
            <!-- /.Cover -->
            <section class="block intro-ebook" id="intro-ebook">
                <div class="holder">
                    <div class="container-fluid">
                        <?= $aviso_page->fragments['body']->value ?>
                    </div>
                </div>
            </section>
        </div>
        <!-- Footer -->
        <?php include_once "partials/footer.php" ?>

        <!-- Page Scripts -->
        <?php include_once "partials/scripts.php" ?>
    </body>
</html>
