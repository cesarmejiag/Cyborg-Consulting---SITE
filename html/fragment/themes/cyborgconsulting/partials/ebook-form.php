<?php
$text = file_get_contents('https://www.cyborgconsulting.com.mx/fragment/themes/cyborgconsulting/countries.json');
$countries = [];
if ($text) {
    $countries = json_decode($text, true);
}
?>
<form class="ebook-form contact-form" autocomplete="off" novalidate>
    <div class="message"></div>
    <div class="wrapper displayed">
        <div class="mb-4">
            <div class="row">
                <input name="Pagina" type="hidden" value="<?= SITE_URL . '/' . $page->key ?>">
                <div class="col-xs-12 col-sm-6">
                    <div class="input-container">
                        <input data-clue="Introduce un nombre válido." data-validate="range:3" id="contact-form-name" name="nombre" type="text" />
                        <label for="contact-form-name">Nombre Completo*</label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="input-container">
                        <input id="contact-form-company" name="empresa" type="text" />
                        <label for="contact-form-company">Empresa</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <div class="row">
                <div class="col-xs-12 col-sm-4">
                    <div class="input-container">
                        <select data-clue="Selecciona una opción" data-validate="notEmpty" name="intereses" id="contact-from-cv">
                            <option value="">País</option>
                            <?php foreach ($countries as $country) : ?>
                                <option value="<?= $country['name'] ?>"><?= $country['name'] ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                    <div class="input-container">
                        <input data-clue="Introduce un teléfono válido." data-validate="phone" id="contact-form-phone" name="telefono" type="text" />
                        <label for="contact-form-phone">Teléfono*</label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                    <div class="input-container">
                        <input data-clue="Introduce un E-mail válido." data-validate="email" id="contact-form-email" name="email" type="email" />
                        <label for="contact-form-email">E-mail*</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <div class="row">
                <div class="col-xs-12 col-sm-3 offset-sm-7">
                    <fieldset class="input-group">
                        <div class="input-container">
                            <input class="d-inline" id="terms" name="terminos-y-condiciones" type="checkbox" value="Sí" />
                            <label class="d-inline" for="terms">Acepto términos y condiciones</label>
                        </div>
                    </fieldset>
                </div>
                <div class="col-xs-12 col-sm-2">
                    <input type="submit" value="Descargar">
                </div>
            </div>
        </div>
    </div>
</form>