<?php
include_once "globals.php";
include_once "utils/fragment_helpers.php";

?>
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
        <!-- Block Cover -->
        <?php
        $imgCover = IMGS_PATH . 'cover-nosotros.jpg';
        $img_src = sprintf('background-image:url(%s)', $imgCover)
        ?>
        <section class="block rpa-cover" id="cover-rpa">
            <div class="cover-bg d-flex align-items-center  justify-content-center" style="<?= $img_src ?>">
                <h1 class="title text-white text-uppercase">RPA & HIPERAUTOMATIZACIÓN</h1>
            </div>
        </section>
        <!-- /.Cover -->
        <!-- Block ¿Qué es RPA? -->
        <section class="block rpa-intro">
            <div class="holder w-860">
                <div class="container-fluid">
                    <div class="header">
                        <h2 class="title text-start text-uppercase sub-title-size">¿Qué es RPA?</h2>
                    </div>
                    <div class="content">
                        Consiste en crear un “trabajador virtual o robot” con el fin de que pueda imitar y mejorar las tareas de la misma forma en la que una persona, hoy en día, realiza una tarea o actividad

                        El día a día de cualquier empresa está lleno de procesos y flujos de trabajo que requieren interactuar con varios entornos diferenciados. Esto obliga a realizar acciones manuales para importar registros y datos entre distintas plataformas.

                        Automatizar las tareas repetitivas y mecánicas que se llevan a cabo en un entorno digital permite aumentar la eficiencia, reducir recursos, mejorar la calidad del trabajo y ahorrar tiempo y dinero. Estos son los principales beneficios:
                    </div>
                </div>
            </div>
        </section>
        <!-- /.¿Qué es? -->
        <!-- Block RPA Cards -->
        <section class="block rpa-cards">
            <div class="bg"></div>
            <div class="holder w-860">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="item">
                                <div class="icon">
                                    <img src="<?= IMGS_PATH ?>rpa-ahorro.svg" class="img-fluid" alt="ahorro">
                                </div>
                                <div class="wrapper text-center">
                                    <div class="color-highlight-color mb-4">
                                        Reducción de costos operativos 30% - 60%
                                    </div>
                                    <div>
                                        La sustitución de robot sen procesos le generará ahorros importantes.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="item">
                                <div class="icon">
                                    <img src="<?= IMGS_PATH ?>rpa-normativa.svg" class="img-fluid" alt="normativa">
                                </div>
                                <div class="wrapper text-center">
                                    <div class="color-highlight-color mb-4">
                                        Cumplimiento en normativa 100%
                                    </div>
                                    <div>
                                        Registro de actividades con registros auditables.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="item">
                                <div class="icon">
                                    <img src="<?= IMGS_PATH ?>rpa-escalable.svg" class="img-fluid" alt="escalable">
                                </div>
                                <div class="wrapper text-center">
                                    <div class="color-highlight-color mb-4">
                                        Escalabilidad y mejor capacidad 30%
                                    </div>
                                    <div>
                                        Rápido y fácil de implementar según las necesidades del negocio.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="item">
                                <div class="icon">
                                    <img src="<?= IMGS_PATH ?>rpa-productividad.svg" class="img-fluid" alt="ahorro">
                                </div>
                                <div class="wrapper text-center">
                                    <div class="color-highlight-color mb-4">
                                        Incremento de la productividad y eficiencia 80%
                                    </div>
                                    <div>
                                        Procesos + rápidos, de calidad y precisión donde el error humano es cero.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="item">
                                <div class="icon">
                                    <img src="<?= IMGS_PATH ?>rpa-satisfaccion.svg" class="img-fluid" alt="satisfaccion">
                                </div>
                                <div class="wrapper text-center">
                                    <div class="color-highlight-color mb-4">
                                        Incremento de la satisfacción de sus empleados 100%
                                    </div>
                                    <div>
                                        Reteniendo el talento de su empresa.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="item">
                                <div class="icon">
                                    <img src="<?= IMGS_PATH ?>rpa-experiencia.svg" class="img-fluid" alt="experiencia">
                                </div>
                                <div class="wrapper text-center">
                                    <div class="color-highlight-color mb-4">
                                        Mejora la experiencia del cliente 57%
                                    </div>
                                    <div>
                                        Respuestas ágiles 24/7 potenciarán sus ventas.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /.RPA Cards -->
        <!-- Block ¿Qué Procesos? -->
        <section class="block rpa-process">
            <div class="holder w-860">
                <div class="container-fluid">
                    <div class="header">
                        <h2 class="title text-start text-uppercase sub-title-size">
                            ¿Qué procesos se pueden automatizar con RPA?
                        </h2>
                    </div>
                    <div class="content">
                        Con RPA puede automatizar tareas repetitivas que los empleados llevan a cabo muchas veces al día dentro de un ciclo de trabajo

                        Procesos manuales y repetitivos: Con RPA puede automatizar tareas repetitivas que los empleados llevan a cabo muchas veces al día dentro de un ciclo de trabajo.

                        Procesos basados en reglas específicas:. Procesos que tienen en su forma de ejecución unas directrices específicas para llevarse a cabo, es decir, instrucciones de procesamiento claras.

                        Procesos con tipos de entrada estándar legibles de manera electrónica:

                        Procesos que sean estándar, homogéneos y electrónicamente legibles, como Excel, correo electrónico, Word, PDF, PPT, XML, etc Procesos estables y maduros: Procesos de los que se conozca su ejecución, la tasa de errores y que tengan un recorrido de uso dentro de la organización.

                        Método de procesamiento modificable o cambio de sistema: Procesos que puedan modificarse para adaptarlos a la automatización.
                    </div>
                    <div class="images position-relative">
                        <div class="main-image">
                            <img src="<?= IMGS_PATH ?>rpa-img1.jpg" class="img-fluid" alt="proceso">
                        </div>
                        <div class="small-image d-none d-sm-block">
                            <img src="<?= IMGS_PATH ?>rpa-manual.jpg" class="img-fluid" alt="proceso manual">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /- -->
        <!-- Block Robots -->
        <section class="block rpa-robots" id="rpa-robots">
            <div class="holder">
                <div class="container-fluid">
                    <div class="header">
                        <h2 class="title text-center text-uppercase sub-title-size">
                            Robots
                        </h2>
                    </div>
                    <div class="content">
                        <div class="row">
                            <div class="col-12 col-sm-4">
                                <div class="item">
                                    <div class="icon position-relative">
                                        <img src="<?= IMGS_PATH ?>robots-soft.png" class="img-fluid" alt="robots">
                                    </div>
                                    <div class="wrapper position-relative text-white text-center normal-size-title">
                                        <div class="mb-4 text-uppercase">
                                            Soft Robots
                                        </div>
                                        <div>
                                            El software llamado “Bot” se usa para imitar la gestión de tareas repetitivas y de gran volumen que, anteriormente, eran ejecutadas por un ser humano.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4">
                                <div class="item">
                                    <div class="icon position-relative">
                                        <img src="<?= IMGS_PATH ?>robots-soft.png" class="img-fluid" alt="robots">
                                    </div>
                                    <div class="wrapper position-relative text-white text-center normal-size-title">
                                        <div class="mb-4 text-uppercase">
                                            Soft Robots
                                        </div>
                                        <div>
                                            El software llamado “Bot” se usa para imitar la gestión de tareas repetitivas y de gran volumen que, anteriormente, eran ejecutadas por un ser humano.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4">
                                <div class="item">
                                    <div class="icon position-relative">
                                        <img src="<?= IMGS_PATH ?>robots-automatizacion.png" class="img-fluid" alt="automatizacion">
                                    </div>
                                    <div class="wrapper position-relative text-white text-center normal-size-title">
                                        <div class="mb-4 text-uppercase">
                                            automatización
                                        </div>
                                        <div>
                                            La aplicacion o robot del típico software de RPA funciona en la interfaz de usuario (IU), de forma similar a como trabajamos las personas. Puede ejecutar automáticamente las transacciones que le han sido asignadas y colaborar con otros sistemas cuándo y cómo sea necesatio,
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="video position-relative text-center w-860">
                        <img src="<?= IMGS_PATH ?>mac.jpg" class="img-fluid" alt="rpa-video">
                        <video controls muted poster="https://via.placeholder.com/645x360/000000/000000">
                            <source src="<?= TEMPLATE_PATH ?>videos/cover-home.mp4" type="video/mp4">
                            <!-- Add image as fallback -->
                        </video>
                    </div>
                    <div class="btn-wrapper text-center m-t-50">
                        <button class="btn button btn-demo">Solicitar Demo</button>
                    </div>
                </div>
            </div>
        </section>
        <!-- /- -->
        <!-- Block Hiperautomatización -->
        <section class="block rpa-hiper" id="rpa-hiper">
            <div class="holder w-860">
                <div class="container-fluid">
                    <div class="header">
                        <h2 class="title text-start text-uppercase sub-title-size">
                            Hiperautomatización
                        </h2>
                    </div>
                    <div class="content">
                        Hiperautomatización es la suma de distintas aplicaciones y software, así como un cambio de mentalidad, que se implementa en la parte estratégica del negocio, y que tiene el potencial de crear nuevas oportunidades. ¿Cómo? Combinando la tecnología RPA (Robotic Process Automation), con Inteligencia Artificial, aprendizaje automático (Machine Learning), la minería de procesos y el procesamiento de lenguaje natural (NLP).

                        Para poder entender mejor todas la ventajas de la hiperautomatización en su empresa, vamos a desgranar algunas de sus características esenciales:

                        Más coordinación: al aplicar sistemas de automatización de procesos, como RPA, la parte del trabajo más repetitiva y tediosa pasa a ser llevada a cabo por un software, así como el procesamiento de ciertos datos. La tecnología RPA permite que diferentes departamentos estén interconectados y que la información se procese para mejorar la coordinación entre los trabajadores y tener una visión global del negocio.

                        Automatización de tareas más complejas: la hiperautomatización es un paso más dentro de la automatización de procesos, ya que permite que se roboticen tareas más complejas. Todo esto es posible gracias a la incorporación de la Inteligencia Artificial a los robots de software de RPA, tal y como hizo UiPath en una de sus últimas actualizaciones.

                        Mejora la toma de decisiones estratégicas: al tener una visión de conjunto de la empresa se pueden tomar mejores decisiones, ya que se dispone de todos los datos en tiempo real. Además, se agiliza el tratamiento de la información, por lo que la compañía está más preparada para gestionar y solucionar cualquier circunstancia adversa.

                        Más productividad, menos errores y mejor calidad del trabajo: los trabajadores podrán dedicar su tiempo a tareas que sean más productivas para la empresa, que tengan un mayor valor añadido.
                        Esto trae consigo una mejora de la calidad del trabajo, por ejemplo, preparación de reuniones, estudio de potenciales clientes, análisis de la competencia, búsqueda de nuevos mercados, etc. Así, se incrementa la productividad del recurso más importante con el que cuentan las compañías: la fuerza laboral.

                        Por otro lado, se reducirá la tasa de errores que se producen al estar mucho tiempo realizando la misma tarea de forma manual, aumentando la calidad y precisión en la ejecución de tareas.
                        Automatiza todos los posibles procesos de negocio punta a punta. Descubre, analiza, diseña, automatizar, medir, monitorear y reevaluar.

                    </div>
                </div>
            </div>
        </section>
        <!-- / -->
        <!-- Block Hiperautomatización -->
        <section class="block rpa-gartner" id="rpa-gartner">
            <div class="holder w-1060">
                <div class="container-fluid">
                    <div class="header">
                        <div class="text-center text-uppercase color-highlight-color">
                            Gartner, Top 10 Strategic Technology Trends for 2021
                        </div>
                        <div class="diagram d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-between">
                            <div class="circle text-white text-uppercase bg-highlight-color position-relative">
                                RPA <span class="d-none d-lg-block arrow"><img src="<?= IMGS_PATH ?>arrow.svg" class="img-fluid" alt=""></span>
                            </div>
                            <div class="column-wrapper d-flex justify-content-between">
                                <div class="column-1 text-center color-highlight-color">
                                    <div>
                                        <p>IA</p>
                                        <p>(NLP, AI Computer Vision, intelligent Optical Reconognition)</p>
                                    </div>
                                    <div>
                                        <p>Process Mining</p>
                                    </div>
                                    <div>
                                        <p>Integraciones Nativas</p>
                                    </div>
                                </div>
                                <div class="column-2 text-center position-relative">
                                    <div>
                                        <p> Machine Learning</p>
                                    </div>
                                    <div>
                                        <p> Lone-running workflows</p>
                                    </div>
                                    <div>
                                        <p> Advanced Analytics</p>
                                    </div>
                                    <span class="arrow arrow-last d-none d-lg-block"><img src="<?= IMGS_PATH ?>arrow.svg" class="img-fluid" alt=""></span>
                                </div>
                            </div>
                            <div class="last text-white text-uppercase bg-highlight-color text-center">
                                HIPERAUTOMATIZACIÓN
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <h2 class="text-center title text-uppercase mb-3">¿EN QUÉ NOS APOYAMOS?</h2>
                        <div class="text-center sub-title-size text-uppercase color-highlight-color mb-5">Plataforma para la hiperautomatización punta a punta.</div>
                        <div class="image-wrapper position-relative">
                            <div class="main-image text-center">
                                <img src="<?= IMGS_PATH ?>rpa-infografia.svg" alt="rpa-infografia" class="img-fluid">
                            </div>
                            <div class="small-image position-absolute d-none d-lg-block">
                                <img src="<?= IMGS_PATH ?>uipath.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- / -->




    </div>

    <!-- Footer -->
    <?php include_once "partials/footer.php" ?>

    <!-- Page Scripts -->
    <?php include_once "partials/scripts.php" ?>
</body>

</html>