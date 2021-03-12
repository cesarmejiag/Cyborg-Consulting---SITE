<?php
include_once "globals.php";
include_once "utils/fragment_helpers.php";
$is_industries_page = false;
if($page->guid === $industries_guid ) {
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
            <?php $results= Page::search(array(
                'idparent' => $template_page->idpage,
                'fragments' => array('title','info','img'),
                'sortBy' => 'created ASC'
                ));
                $records = $results['records'];
            ?>
            <section class="block wrapper-template d-flex py-0" id="wrapper-template">
                <div class="sidebar-menu d-none d-md-block">
                    <?php foreach($records as $record): ?>
                        <a href="#<?= $record->key ?>" class="scroll-to"><?= $record->fragments['title']->value ?></a>                    
                    <?php endforeach; ?>
                </div>
                <div class="wrapper-sections" >
                    <!-- Block general section -->
                    <?php foreach($records as $record): ?>
                    <section class="block general-section position-relative" id="<?= $record->key ?>">
                        <div class="holder">
                            <div class="container-fluid">
                                <div class="content">
                                    <div class="header text-start text-uppercase color-highlight-color">
                                        <?= $record->fragments['title']->value ?>
                                    </div>
                                    <div class="content">
                                        <?= $record->fragments['info']->value ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php if($is_industries_page): ?>
                            <div class="image position-absolute">
                                <?= $record->fragments['img']->value ?>
                            </div>
                        <?php endif; ?>
                    </section>
                    <?php endforeach; ?>
                    <!-- /.general section -->
                </div>
            </section>
        </div>
        <!-- Footer -->
        <?php include_once "partials/footer.php" ?>

        <!-- Page Scripts -->
        <?php include_once "partials/scripts.php" ?>
    </body>
</html>
