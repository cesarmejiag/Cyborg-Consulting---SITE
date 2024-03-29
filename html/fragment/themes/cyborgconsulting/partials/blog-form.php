<form class="contact-form" autocomplete="off" novalidate>
    <div class="message"></div>
    <div class="wrapper displayed">
        <h1 class="title">¡Quiero saber más!</h1>
        <div class="row">
            <input name="Pagina" type="hidden" value="<?= SITE_URL . '/' . $page->key ?>">
            <div class="col-xs-12">
                <div class="input-container">
                    <input data-clue="Introduce un nombre válido." data-validate="range:3" id="contact-form-name" name="nombre" type="text" />
                    <label for="contact-form-name">Nombre*</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="input-container">
                    <input data-clue="Introduce un E-mail válido." data-validate="email" id="contact-form-email" name="email" type="email" />
                    <label for="contact-form-email">E-mail*</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="input-container">
                    <input data-clue="Introduce un teléfono válido." data-validate="phone" id="contact-form-phone" name="telefono" type="text" />
                    <label for="contact-form-phone">Teléfono*</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="input-container">
                    <textarea data-clue="Introduce tu mensaje." data-validate="notEmpty" id="contact-form-message" name="mensaje"></textarea>
                    <label for="contact-form-message">Mensaje*</label>
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