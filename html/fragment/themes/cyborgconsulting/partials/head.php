<?php 
  $site_title = $settings['title'] ? $settings['title'] : SITE_NAME;
  $site_name = (is_home()) ? $site_title : sprintf("%s - %s", $page->title, $site_title);
  $site_url = (is_home()) ? SITE_CANONICAL_URL : sprintf("%s/%s", SITE_CANONICAL_URL, $page->key);
  $page_description = $page->description ? $page->description : SITE_DESCRIPTION;
  $page_image = SITE_SOCIAL_IMAGE;

  if ($page->template === 'blog-post') {
    // Retrieve fragments.
    $page_fragments = $page->getFragments();

    // Find body fragment
    $post_intro = find_fragment_by_name('intro', $page_fragments);
    $post_body = find_fragment_by_name('body', $page_fragments);
    $main_image = find_fragment_by_name('main-image', $page_fragments);
    $post_modal = find_setting_by_name('modal', $page_fragments);

    $img = Fragment::elementAttributes($main_image->value);

    $page_image = SITE_CANONICAL_URL . $img['src'];
  }
?>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title><?= $site_name ?></title>
<meta name="description" content="<?= $page_description ?>">
<meta name="keywords" content="<?= SITE_KEYWORDS ?>">
<meta name="author" content="PageLab">
<meta name="robots" content="INDEX, FOLLOW, ARCHIVE">

<!-- Href lang -->
<link rel="alternate" hreflang="es" href="<?= $site_url ?>" />

<!-- Favicons -->
<link rel="icon" href="<?= FAVICONS_PATH ?>favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" sizes="72x72" href="<?= FAVICONS_PATH ?>apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="114x114" href="<?= FAVICONS_PATH ?>apple-icon-114x114.png">

<!-- Schema properties -->
<meta itemprop="name" content="<?= $site_name ?>">
<meta itemprop="description" content="<?= $page_description ?>">
<meta itemprop="url" content="<?= $site_url ?>">
<meta itemprop="image" content="<?= $page_image ?>">

<!-- Open Graph properties -->
<!-- <meta property="fb:app_id" content="app-id"> -->
<meta property="og:site_name" content="<?= SITE_NAME ?>">
<meta property="og:title" content="<?= $site_name ?>">
<meta property="og:description" content="<?= $page_description ?>">
<meta property="og:url" content="<?= $site_url ?>">
<meta property="og:image" content="<?= $page_image ?>">
<meta property="og:type" content="website">

<!-- Twitter integration -->
<meta name="twitter:title" content="<?= $site_name ?>">
<meta name="twitter:url" content="<?= $site_url ?>">
<meta name="twitter:image" content="<?= $page_image ?>">
<meta name="twitter:card" content="summary">

<!-- Web Application Manifest -->
<link rel="manifest" href="fragment/themes/cyborgconsulting/manifest.json">

<!-- Add to homescreen for Chrome on Android -->
<meta name="mobile-web-app-capable" content="yes">
<meta name="application-name" content="<?= $site_name ?>">
<link rel="icon" sizes="192x192" href="<?= FAVICONS_PATH ?>android-icon-192x192.png">

<!-- Add to homescreen for Safari on iOS -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="<?= $site_name ?>">
<link rel="apple-touch-icon" href="<?= FAVICONS_PATH ?>apple-icon-180x180.png">

<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="<?= THEME_COLOR ?>">

<!-- Disable tap highlight on IE -->
<meta name="msapplication-tap-highlight" content="no">

<!-- Color the status bar on mobile devices -->
<meta name="theme-color" content="<?= THEME_COLOR ?>">

<!-- Disable automatic detection of possible phone numbers in a webpage in Safari on iOS. -->
<meta name="format-detection" content="telephone=no">

<?php include_once "styles.php"; ?>

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-J9TVFLKFNV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J9TVFLKFNV');
</script>
