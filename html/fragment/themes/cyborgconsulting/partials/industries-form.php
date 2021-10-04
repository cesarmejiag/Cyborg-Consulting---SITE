<form class="industries-form contact-form" autocomplete="off" novalidate>
    <div class="message"></div>
    <div class="wrapper displayed">
        <div class="mb-4">
            <div class="row">
                <input name="Pagina" type="hidden" value="<?= SITE_URL . '/' . $page->key ?>">
                <div class="col-xs-12 col-sm-3">
                    <div class="input-container">
                        <input data-clue="Introduce un nombre válido." data-validate="range:3" id="contact-form-name" name="Nombre" type="text" />
                        <label for="contact-form-name">Nombre*</label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <div class="input-container">
                        <input data-clue="Introduce un E-mail válido." data-validate="email" id="contact-form-email" name="E-mail" type="email" />
                        <label for="contact-form-email">E-mail*</label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <div class="input-container">
                        <input data-clue="Introduce un teléfono válido." data-validate="phone" id="contact-form-phone" name="Tel&eacute;fono" type="text" />
                        <label for="contact-form-phone">Teléfono*</label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <div class="input-container">
                        <input id="contact-form-company" name="Empresa" type="text" />
                        <label for="contact-form-company">Empresa</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <fieldset class="input-group">
                <legend>¿Qué industra(s) te interesan?</legend>
                <div class="row d-flex">
                    <div class="col-xs-2 col-sm-3">
                        <div class="input-container">
                            <input id="interests-retail" name="Industria de interes" type="checkbox" value="Retail y distribucion" />
                            <label for="interests-retail">Retail y distribucion</label>
                        </div>
                    </div>
                    <div class="col-xs-2 col-sm-3">
                        <div class="input-container">
                            <input id="interests-industrial" name="Industria de interes" type="checkbox" value="Música" />
                            <label for="interests-industrial">Industrial</label>
                        </div>
                    </div>
                    <div class="col-xs-2 col-sm-3">
                        <div class="input-container">
                            <input id="interests-tecnologia" name="Industria de interes" type="checkbox" value="Tecnología, medios y comunicación" />
                            <label for="interests-tecnologia">Tecnología, medios y comunicación</label>
                        </div>
                    </div>
                    <div class="col-xs-2 col-sm-3">
                        <div class="input-container">
                            <input id="interests-servicios" name="Industria de interes" type="checkbox" value="Servicios financieros" />
                            <label for="interests-servicios">Servicios financieros</label>
                        </div>
                    </div>
                    <div class="col-xs-2 col-sm-3">
                        <div class="input-container">
                            <input id="interests-turismo" name="Industria de interes" type="checkbox" value="Turismo y ocio" />
                            <label for="interests-turismo">Turismo y ocio</label>
                        </div>
                    </div>
                    <div class="col-xs-2 col-sm-3">
                        <div class="input-container">
                            <input id="interests-transporte" name="Industria de interes" type="checkbox" value="Transporte y logistica" />
                            <label for="interests-transporte">Transporte y logistica</label>
                        </div>
                    </div>
                    <div class="col-xs-2 col-sm-3">
                        <div class="input-container">
                            <input id="interests-salud" name="Industria de interes" type="checkbox" value="Salud y farma" />
                            <label for="interests-salud">Salud y farma</label>
                        </div>
                    </div>
                    <div class="col-xs-2 col-sm-3">
                        <div class="input-container">
                            <input id="interests-sector" name="Industria de interes" type="checkbox" value="Sector público y social" />
                            <label for="interests-sector">Sector público y social</label>
                        </div>
                    </div>
                    <div class="col-xs-2 col-sm-3">
                        <div class="input-container">
                            <input id="interests-energia" name="Industria de interes" type="checkbox" value="Energia y utilities" />
                            <label for="interests-energia">Energia y utilities</label>
                        </div>
                    </div>
                    <div class="col-xs-2 col-sm-3">
                        <div class="input-container">
                            <input id="interests-automotriz" name="Industria de interes" type="checkbox" value="Automotriz" />
                            <label for="interests-automotriz">Automotriz</label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
        <div class="mb-4">
            <div class="row">
                <div class="col-xs-12">
                    <input type="submit" value="Enviar">
                </div>
            </div>
        </div>
    </div>
</form>