<form class="contact-form inview-bottom-top">
    <div class="status">
        <div class="icon"></div>
        <div class="text"></div>
        <div class="hidden user-messages">
            <div class="success"><?= $contact_section->fragments['success-message']->value ?></div>
            <div class="error"><?= $contact_section->fragments['error-message']->value ?></div>
        </div>
    </div>

    <div class="inputs">
        <div class="row">
            <div class="col-sm-6">
                <div class="input-container">
                    <input data-validate="notEmpty" data-clue="Introduce un nombre válido." name="Nombre" placeholder="Nombre" type="text" autocomplete="off">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="input-container">
                    <input data-validate="phone" data-clue="Introduce un teléfono válido." name="Teléfono" placeholder="Teléfono" type="text" autocomplete="off">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="input-container">
                    <input data-validate="email" data-clue="Introduce un email válido." name="Email" placeholder="Email" type="text" autocomplete="off">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="input-container">
                    <input data-validate="notEmpty" data-clue="Elige un servicio." name="Servicio" placeholder="Cuéntanos, ¿En que servicio estás interesado?" type="text" autocomplete="off">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="input-container">
                    <textarea data-validate="notEmpty" data-clue="Introduce tu mensaje" name="Mensaje" placeholder="Mensaje" autocomplete="off"></textarea>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <button class="button" type="submit">Enviar</button>
            </div>
        </div>
    </div>
</form>