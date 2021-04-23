<form class="contact-form" autocomplete="off" novalidate>
    <div class="message"></div>
    <div class="wrapper displayed">
        <h1 class="title">¡Únete a nuestro equipo!</h1>
        <div class="row">
            <input name="Pagina" type="hidden" value="<?= SITE_URL . '/' . $page->key ?>">
            <div class="col-xs-12">
                <div class="input-container">
                    <input data-clue="Introduce un nombre válido." data-validate="range:3" id="contact-form-name" name="Nombre" type="text" />
                    <label for="contact-form-name">Nombre*</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="input-container">
                    <input data-clue="Introduce un E-mail válido." data-validate="email" id="contact-form-email" name="E-mail" type="email" />
                    <label for="contact-form-email">E-mail*</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="input-container">
                    <input data-clue="Introduce un teléfono válido." data-validate="phone" id="contact-form-phone" name="Teléfono" type="text" />
                    <label for="contact-form-phone">Teléfono*</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="input-container">
                    <label class="select-label" for="contact-from-cv">¿Cuál es el área de interes?*</label>
                    <select data-clue="Selecciona una opción" data-validate="notEmpty" name="Área de interés" id="contact-from-cv">
                        <option value="">Seleccionar</option>
                        <option value="Administrador del proyecto de RPA">Administrador del proyecto de RPA</option>
                        <option value="Respaldo de servicio de RPA">Respaldo de servicio de RPA</option>
                        <option value="Supervisor de RPA">Supervisor de RPA</option>
                        <option value="Analista de negocios de RPA">Analista de negocios de RPA</option>
                        <option value="Administrador de cambios de RPA">Administrador de cambios de RPA</option>
                        <option value="Desarrollador de RPA">Desarrollador de RPA</option>
                        <option value="Arquitecto de  soluciones RPA">Arquitecto de soluciones RPA</option>
                        <option value="Técnico de infraestructuras de RPA">Técnico de infraestructuras de RPA</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <label class="cv-label">¡Sube tu CV!</label>
                <button class="cv-button">Upload</button>
                <input accept=".pdf" class="d-none" name="cv" type="file">
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <input type="submit" value="Enviar">
            </div>
        </div>
    </div>
</form>