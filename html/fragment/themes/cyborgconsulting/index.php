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

            <!-- Block  -->
            <section class="block " id="">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <!-- Block Header -->
                        </div>
                        <div class="content">
                            <!-- Block Content -->
                        </div>
                    </div>
                </div>
            </section>
            <!-- /. -->
            
            <!-- Block Contact -->
            <section class="block contact" id="contacto">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title">Contacto</h2>
                        </div>
                        <div class="content">

                            <!-- Contact Info -->
                            <div class="contact-info">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="phones">
                                            <div><a href="tel:0000000000">(000) 000 0000</a></div>
                                            <div><a href="tel:0000000000">(000) 000 0000</a></div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="address">
                                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Contact Form -->
                            <form class="contact-form">
                                <input name="Nombre" placeholder="Nombre" type="text">
                                <input name="Email" placeholder="Email" type="text">
                                <textarea name="Mensaje" placeholder="Mensaje"></textarea>

                                <input type="submit" value="Enviar">
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Contact -->

            <!-- Footer -->
            <?php include_once "partials/footer.php" ?>
        </div>

        <!-- Page Scripts -->
        <?php include_once "partials/scripts.php" ?>
    </body>
</html>
