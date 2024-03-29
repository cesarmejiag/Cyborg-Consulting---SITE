<form class="contact-form" autocomplete="off" novalidate>
    <div class="message"></div>
    <div class="wrapper displayed">
        <div class="row">
            <input name="Pagina" type="hidden" value="<?= SITE_URL . '/' . $page->key ?>">
            <div class="col-xs-12 col-sm-6">
                <div class="input-container">
                    <input data-clue="Introduce un nombre válido." data-validate="range:3" id="contact-form-name" name="nombre" type="text" />
                    <label for="contact-form-name">Nombre*</label>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <div class="input-container">
                    <input data-clue="Introduce un E-mail válido." data-validate="email" id="contact-form-email" name="email" type="email" />
                    <label for="contact-form-email">E-mail*</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <div class="input-container">
                    <input data-clue="Introduce un teléfono válido." data-validate="phone" id="contact-form-phone" name="telefono" type="text" />
                    <label for="contact-form-phone">Teléfono*</label>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <div class="input-container">
                    <input id="contact-form-company" name="empresa" type="text" />
                    <label for="contact-form-company">Empresa</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <input type="submit" value="Enviar">
            </div>
        </div>
    </div>
</form>