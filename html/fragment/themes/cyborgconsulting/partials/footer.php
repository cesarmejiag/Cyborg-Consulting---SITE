<!-- Page Footer -->
<footer class="footer">
    <div class="container-fluid">
        <div class="logo">
            <a href="/">
                <img class="img-responsive" src="<?= IMGS_PATH ?>footer-logo.svg" alt="<?= SITE_NAME ?>">
            </a>
        </div>
        <div class="d-none d-sm-block">
            <div class="row">
                <?php foreach ($root_pages as $r_page) : ?>
                    <?php if ($r_page->guid !== 'home') : ?>
                        <?php $col_classes = ($r_page->guid === $us_guid || $r_page->guid === $services_guid) ? 'col-sm-3 col-md-2' : 'col-sm-3 col-md-1'; ?>
                        <div class="<?= $col_classes ?>">
                            <div class="list">
                                <?php if ($r_page->guid === $rpa_guid) : ?>
                                    <h5>RPA</h5>
                                <?php else : ?>
                                    <h5><?= $r_page->title ?></h5>
                                <?php endif; ?>
                                <?php if ($r_page->guid === $us_guid || $r_page->guid === $services_guid || $r_page->guid === $rpa_guid): ?>
                                <ul>
                                    <?php foreach ($r_page->children as $sub_page) : ?>
                                        <li><a class="<?= $page->key === $r_page->key ? 'sub-menu' : '' ?>" href="<?= $r_page->key . '#' . $sub_page->key ?>"><?= $sub_page->title ?></a></li>
                                    <?php endforeach; ?>
                                </ul>
                                <?php endif; ?>
                            </div>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        </div>
        <div class="rights">
            <div>© 2021 Todos los derechos reservados</div>
            <div>Aviso de privacidad</div>
        </div>
    </div>
</footer>