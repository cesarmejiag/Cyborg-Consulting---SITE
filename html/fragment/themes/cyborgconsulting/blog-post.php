<?php
include_once "globals.php";
include_once "utils/fragment_helpers.php";

// Retrieve fragments.
$page_fragments = $page->getFragments();

// Find body fragment
$post_intro = find_fragment_by_name('intro', $page_fragments);
$post_body = find_fragment_by_name('body', $page_fragments);
$main_image = find_fragment_by_name('main-image', $page_fragments);
$post_modal = find_setting_by_name('modal', $page_fragments);

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
              $img = Fragment::elementAttributes($main_image->value);
              $img_src = sprintf('background-image:url(%s)', $img['src'])
              ?>
              <div class="cover-bg d-flex align-items-center justify-content-center" style="<?= $img_src ?>">
                <div class="text-white sub-title-size"><?= $page->title ?></div>
              </div>
              <div class="post-body"><?= $post_body->value ?></div>
              <div class="btns d-flex align-items-center flex-column flex-sm-row">
                <a href="/blog" class="blog-btn text-uppercase color-highlight-color mb-4">
                  Regresar
                </a>
                <?php if (strlen($post_modal->value) > 0) : ?>
                  <button class="blog-btn big-btn text-uppercase color-highlight-color mb-4" data-pl-modal-effect="pl-effect-1">
                    ¿Quieres saber más?
                  </button>
                <?php endif; ?>
              </div>
              <!-- Dummy Template -->
              <div class="d-none">
                <div class="dummy-template">
                  <div class="content-blog">
                    <?= $post_modal->value ?>
                  </div>
                </div>
              </div>
              <!-- /.Dummy Template -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Footer -->
  <?php include_once 'partials/footer.php'; ?>
  <!-- /.Footer -->
  <?php include_once 'partials/scripts.php'; ?>
</body>

</html>