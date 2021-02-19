<?php
include_once "globals.php";
include_once "utils/fragment_helpers.php";
$CMS_ACTIVE = false;


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
            <section class="block cover" id="home">
                <h1 class="title">Leading The<br />HYPERAUTOMATIZATION REVOLUTION!</h1>
                <video autoplay muted loop>
                    <source src="<?= TEMPLATE_PATH ?>videos/cover-home.mp4" type="video/mp4">
                    <!-- Add image as fallback -->
                </video>
            </section>
            <!-- /.Cover -->

            <!-- Block Us -->
            <section class="block us" id="nosotros">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="content">
                            <div class="row flex-column-reverse flex-md-row">
                                <div class="col-12 col-md-6">
                                    <div class="images">
                                        <?php
                                        $imgNosotros = IMGS_PATH . 'nosotros1.jpg';
                                        $img_src = sprintf('background-image:url(%s)', $imgNosotros)
                                        ?>
                                        <div class="main-image position-relative" style="<?= $img_src ?>">
                                            <div class="side-image d-none d-lg-block position-absolute">
                                                <img src="<?= IMGS_PATH ?>nosotros2.jpg" alt="nosotros2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div>
                                        <div class="pb-3 pt-0 py-sm-4">
                                            <h2 class="text-start title mt-sm-4">Nosotros</h2>
                                        </div>
                                        <div>
                                            <p>
                                                Somos una consultoría boutique de TI, con amplia experiencia en hiperautomatización
                                                de procesos clave, los que impulsan a las organizaciones de las diversas industrias
                                                a alcanzar sus objetivos, mejorando su eficiencia, reduciendo costos y aumentando su
                                                productividad.
                                            </p>
                                            <p>
                                                Contamos con las siguientes divisiones de negocio:
                                            </p>
                                        </div>
                                        <div class="row align-items-start m-t-45">
                                            <div class="col-6 col-lg-3 text-center">
                                                <div class="img m-b-26">
                                                    <img class="img-fluid" src="<?= IMGS_PATH ?>icon-chip.svg" alt="chip">
                                                </div>
                                                <div class="title normal-size-title text-wrap text-break">
                                                    TECNOLOGIA
                                                </div>
                                            </div>
                                            <div class="col-6 col-lg-3 text-center">
                                                <div class="img m-b-26">
                                                    <img class="img-fluid" src="<?= IMGS_PATH ?>icon-gear.svg" alt="gear">
                                                </div>
                                                <div class="title normal-size-title text-wrap text-break">
                                                    CONSULTORIA ESPECIALIZADA
                                                </div>
                                            </div>
                                            <div class="col-6 col-lg-3 text-center">
                                                <div class="img m-b-26">
                                                    <img class="img-fluid" src="<?= IMGS_PATH ?>icon-arm.svg" alt="arm">
                                                </div>
                                                <div class="title normal-size-title text-wrap text-break">
                                                    IMPLEMENTACIONES
                                                </div>
                                            </div>
                                            <div class="col-6 col-lg-3 text-center">
                                                <div class="img m-b-26">
                                                    <img class="img-fluid" src="<?= IMGS_PATH ?>icon-gears.svg" alt="gears">
                                                </div>
                                                <div class="title title normal-size-title text-wrap text-break">
                                                    OPERACIONES Y
                                                    MANTENIMIENTO
                                                </div>
                                            </div>
                                        </div>
                                        <div class="btn-mas m-t-30 mb-4 mb-md-0">
                                            <button class="btn btn-primary button d-block text-uppercase text-white">
                                                <a  href="/nosotros">Ver Más</a>   
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Us -->

            <!-- Block Services -->
            <?php if($CMS_ACTIVE): ?>
            <?php $services = find_page_by_guid($services_guid, $root_pages); ?>
            <?php $services = Page::search(array(
                'idparent' => $services->idpage,
                'fragments' => array('img'),
                'sortBy' => 'created ASC'
                ));
            $services_pr = $services['records'];
            ?>
            <section class="block services" id="servicios">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title">
                                Servicios
                            </h2>
                        </div>
                        <div class="content">
                            <div class="row">
                                <?php foreach ($services_pr as $service): ?>
                                <div class="col-6 col-md-3">
                                    <?php
                                    $imgNosotros = IMGS_PATH . 'nosotros1.jpg'; // placeholder antes de Fragment
                                    $image_nosotros_attrs = Fragment::elementAttributes($service->fragments['img']->value);
                                    $image_nosotros_bg = $image_nosotros_attrs['src'];

                                    empty($image_nosotros_bg)
                                    ? $img_src = sprintf('background-image:url(%s)', $imgNosotros)
                                    : $img_src = sprintf('background-image:url(%s)', $image_nosotros_bg);

                                    ?>
                                    <a class="d-block mb-3" href="<?= $service->key ?>">
                                        <div class="item d-flex align-items-center text-white text-center position-relative"
                                            style="<?= $img_src ?>"
                                        >
                                            <div class="label w-100 text-uppercase"><?= $service->title ?></div>
                                            <div class="mask position-absolute"></div>
                                        </div>
                                    </a>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <?php endif; ?>
            <?php if(!$CMS_ACTIVE): ?>
                <section class="block services" id="servicios">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title">
                                Servicios
                            </h2>
                        </div>
                        <div class="content">
                            <div class="row">
                                <?php 
                                    $imgNosotros = IMGS_PATH . 'tecnologia-boton.jpg'; // placeholder antes de Fragment
                                    $img_src = sprintf('background-image:url(%s)', $imgNosotros) 
                                ?>
                                <div class="col-6 col-md-3">
                                    <a class="d-block mb-3" href="<?= $service->key ?>">
                                        <div class="item d-flex align-items-center text-white text-center position-relative"
                                            style="<?= $img_src ?>"
                                        >
                                            <div class="label w-100 text-uppercase">Tecnología</div>
                                            <div class="mask position-absolute"></div>
                                        </div>
                                    </a>
                                </div>
                                <?php 
                                    $imgNosotros = IMGS_PATH . 'consultoria-boton.jpg'; // placeholder antes de Fragment                                    
                                    $img_src = sprintf('background-image:url(%s)', $imgNosotros) 
                                ?>
                                <div class="col-6 col-md-3">
                                    <a class="d-block mb-3" href="<?= $service->key ?>">
                                        <div class="item d-flex align-items-center text-white text-center position-relative"
                                            style="<?= $img_src ?>"
                                        >
                                            <div class="label w-100 text-uppercase">Consultoría Especializada</div>
                                            <div class="mask position-absolute"></div>
                                        </div>
                                    </a>
                                </div>
                                <?php 
                                    $imgNosotros = IMGS_PATH . 'implementaciones-boton.jpg'; // placeholder antes de Fragment                                    
                                    $img_src = sprintf('background-image:url(%s)', $imgNosotros) 
                                ?>
                                <div class="col-6 col-md-3">
                                    <a class="d-block mb-3" href="<?= $service->key ?>">
                                        <div class="item d-flex align-items-center text-white text-center position-relative"
                                            style="<?= $img_src ?>"
                                        >
                                            <div class="label w-100 text-uppercase">Implementaciones</div>
                                            <div class="mask position-absolute"></div>
                                        </div>
                                    </a>
                                </div>
                                <?php 
                                    $imgNosotros = IMGS_PATH . 'operaciones-y-mantenimiento-boton.jpg'; // placeholder antes de Fragment                                    
                                    $img_src = sprintf('background-image:url(%s)', $imgNosotros) 
                                ?>                                
                                <div class="col-6 col-md-3">
                                    <a class="d-block mb-3" href="<?= $service->key ?>">
                                        <div class="item d-flex align-items-center text-white text-center position-relative"
                                            style="<?= $img_src ?>"
                                        >
                                            <div class="label w-100 text-uppercase">Operaciones y Mantenimiento</div>
                                            <div class="mask position-absolute"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <?php endif; ?>
            <!-- /.Services -->

            <!-- Block Ribbon -->
            <section class="block ribbon" id="cintillo">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="content">
                            <div class="info">
                                 <p>Aceleramos tu camino</p>
                                 <p>hacia la transformación digital.</p>
                            </div>
                            <div class="image">
                                <img class="img-fluid" src="<?= IMGS_PATH ?>high.jpg" alt="ribbon">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Ribbon -->

            <!-- Block RPA & Automatization -->
            <?php if($CMS_ACTIVE): ?>
            <?php $rpa = find_page_by_guid($rpa_guid, $root_pages); ?>
            <?php $rpaPage = Page::search(array(
                'idparent' => $rpa->idpage,
                'fragments' => array('img','content'),
                'sortBy' => 'created ASC'
                ));
            $rpa_pr = $rpaPage['records'];
            ?>
            <section class="block rpa-automatization m-t-50" id="rpa-and-hiperautomatizacion">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title mt-0"><?= $rpa->title ?></h2>
                        </div>
                    </div>
                </div>
                <div class="content bg-highlight-color">
                    <div class="holder">
                        <div class="container-fluid text-white">
                            <div class="row justify-content-center pt-4 py-sm-0">
                                <?php foreach($rpa_pr as $item): ?>
                                <div class="col-12 col-sm-4">
                                    <div class="item">
                                        <?php
                                        $imgPlaceHolder = IMGS_PATH . 'rpa.jpg'; // placeholder antes de Fragment
                                        $imgRPA = Fragment::elementAttributes($item->fragments['img']->value);
                                        ?>
                                        <div class="img">
                                            <?php if(empty($imgRPA)): ?>
                                                <img src="<?= $imgPlaceHolder ?>" class="img-fluid" alt="rpa">
                                            <?php else: ?>
                                                <img src="<?= $imgRPA['src'] ?>" class="img-fluid" alt="<?= $imgRPA['alt'] ?>">
                                            <?php endif; ?>
                                        </div>
                                        <div class="info">
                                            <h5 class="m-t-35 m-b-35 mx-0"><?= $item->title ?></h3>
                                            <div class="text-justify">
                                                <?= $item->fragments['content']->value ?>
                                            </div>
                                        </div>
                                        <a class="text-end text-white text-uppercase d-block" href="<?= $item->key ?>">Ver más ></a>
                                    </div>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <?php endif; ?>
            <?php if(!$CMS_ACTIVE): ?>
                <section class="block rpa-automatization m-t-50" id="rpa-and-hiperautomatizacion">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="title mt-0">RPA & Hiperautomatización</h2>
                        </div>
                    </div>
                </div>
                <div class="content bg-highlight-color">
                    <div class="holder">
                        <div class="container-fluid text-white">
                            <div class="row justify-content-center pt-4 py-sm-0">
                                <div class="col-12 col-sm-4">
                                    <div class="item">
                                        <?php
                                        $imgPlaceHolder = IMGS_PATH . 'rpa.jpg'; // placeholder antes de Fragment
                                        $imgRPA = Fragment::elementAttributes($item->fragments['img']->value);
                                        ?>
                                        <div class="img">
                                            <img src="<?= $imgPlaceHolder ?>" class="img-fluid" alt="rpa">
                                        </div>
                                        <div class="info">
                                            <h5 class="m-t-35 m-b-35 mx-0">RPA</h3>
                                            <div class="text-justify">
                                                Consiste en crear un “trabajador virtual o robot” con
                                                el fin de que pueda imitar y mejorar las tareas de la 
                                                misma forma en la que una persona, hoy en día, realiza una tarea o 
                                                actividad.
                                            </div>
                                        </div>
                                        <a class="text-end text-white text-uppercase d-block" href="<?= $item->key ?>">Ver más ></a>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-4">
                                    <div class="item">
                                        <?php
                                        $imgPlaceHolder = IMGS_PATH . 'robots.jpg'; // placeholder antes de Fragment
                                        $imgRPA = Fragment::elementAttributes($item->fragments['img']->value);
                                        ?>
                                        <div class="img">
                                            <img src="<?= $imgPlaceHolder ?>" class="img-fluid" alt="robots">
                                        </div>
                                        <div class="info">
                                            <h5 class="m-t-35 m-b-35 mx-0">Robots</h3>
                                            <div class="text-justify">
                                                El software llamado “Bot” recoge e interpreta los datos de una determinada aplicación,
                                                para proceder a tareas tales como el procesamiento de transac- ciones o la 
                                                manipulación simple de datos.
                                            </div>
                                        </div>
                                        <a class="text-end text-white text-uppercase d-block" href="<?= $item->key ?>">Ver más ></a>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-4">
                                    <div class="item">
                                        <?php
                                        $imgPlaceHolder = IMGS_PATH . 'hiperautomatizacion.jpg'; // placeholder antes de Fragment
                                        $imgRPA = Fragment::elementAttributes($item->fragments['img']->value);
                                        ?>
                                        <div class="img">
                                            <img src="<?= $imgPlaceHolder ?>" class="img-fluid" alt="hiperautomatizacion">
                                        </div>
                                        <div class="info">
                                            <h5 class="m-t-35 m-b-35 mx-0">Hiperautomatizacion</h3>
                                            <div class="text-justify">
                                            Automatiza todo los posibles procesos de negocio, punta a punta. 
                                            La hiperautomatización es la combinación de Machine Learning (ML), 
                                            software empaquetado y herramientas de automatización para entregar trabajo.
                                            </div>
                                        </div>
                                        <a class="text-end text-white text-uppercase d-block" href="<?= $item->key ?>">Ver más ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
            <?php endif; ?>
            <!-- /.RPA & Automatization -->

            <!-- Block Industries -->
            <?php if($CMS_ACTIVE): ?>            
            <?php $industries = find_page_by_guid($industries_guid, $root_pages); ?>
            <?php $industries_page = Page::search(array(
                'idparent' => $industries->idpage,
                'fragments' => array('img','content'),
                'sortBy' => 'created ASC'
                ));
            $industries_r = $industries_page['records'];
            ?>
            <section class="block industries" id="industrias">
                <div class="holder">
                    <div class="container-fluid">
                        <?php
                            $imgIndutries = IMGS_PATH . 'industrias-background.jpg'; // Si no se cuenta con fragment
                            $imgIndustriesAtts = Fragment::elementAttributes($industries->fragments['image']->value);
                            $imgIndutries_src = sprintf('background-image:url(%s)', $imgIndustriesAtts['src'])
                        ?>
                        <div class="header d-flex justify-content-center align-items-center" style="<?= $imgIndutries_src ?>">
                            <h2 class="title mx-0 text-white text-center"><?= $industries->fragments['intro']->value ?></h2>
                        </div>
                        <div class="content position-relative d-flex justify-content-between flex-wrap">
                            <?php foreach ($industries_r as $page):
                                $imgPageAtts = Fragment::elementAttributes($page->fragments['img']->value);
                                $imgPage_src = sprintf('background-image:url(%s)', $imgPageAtts['src'])
                            ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        <?= $page->title ?>
                                    </div>
                                    <div class="item-info text-center text-white">
                                        <?= $page->fragments['content']->value ?>
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </section>
            <?php endif; ?>
            <?php if(!$CMS_ACTIVE): ?>
                <section class="block industries" id="industrias">
                <div class="holder">
                    <div class="container-fluid">
                        <?php 
                            $imgIndutries = IMGS_PATH . 'industrias-background.jpg'; // Si no se cuenta con fragment 
                            $imgIndutries_src = sprintf('background-image:url(%s)', $imgIndutries)
                        ?>
                        <div class="header d-flex justify-content-center align-items-center" style="<?= $imgIndutries_src ?>">
                            <h2 class="title mx-0 text-white text-center">
                                Nuestras Industrias
                            </h2>
                        </div>
                        <div class="content position-relative d-flex justify-content-between flex-wrap">
                            <?php $imgPage_src = sprintf('background-image:url(%s)', IMGS_PATH . 'retail-boton.jpg') ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        Retail and Distribution
                                    </div>
                                    <div class="item-info text-center text-white">
                                        Servicios integrados que le ayudan a gestionar el
                                         cambio e impulsar el valor.
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>
                            <?php $imgPage_src = sprintf('background-image:url(%s)', IMGS_PATH . 'servicios-financieros.jpg') ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        Servicios Financieros
                                    </div>
                                    <div class="item-info text-center text-white">
                                        Construyendo el futuro de los servicios financieros con soluciones con visión de futuro.
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>
                            <?php $imgPage_src = sprintf('background-image:url(%s)', IMGS_PATH . 'salud-y-farma.jpg') ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        Salud y Farma
                                    </div>
                                    <div class="item-info text-center text-white">
                                        Asesoramiento de especialistas independientes para ayudar a ofrecer resultados de salud mejores y más justos.
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>
                            <?php $imgPage_src = sprintf('background-image:url(%s)', IMGS_PATH . 'industrial.jpg') ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        Salud y Farma
                                    </div>
                                    <div class="item-info text-center text-white">
                                        Asesoramiento de especialistas independientes para ayudar a ofrecer resultados de salud mejores y más justos.
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>
                            <?php $imgPage_src = sprintf('background-image:url(%s)', IMGS_PATH . 'turismo-y-ocio.jpg') ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        Salud y Farma
                                    </div>
                                    <div class="item-info text-center text-white">
                                        Asesoramiento de especialistas independientes para ayudar a ofrecer resultados de salud mejores y más justos.
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>
                            <?php $imgPage_src = sprintf('background-image:url(%s)', IMGS_PATH . 'sector-publico-y-social.jpg') ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        Salud y Farma
                                    </div>
                                    <div class="item-info text-center text-white">
                                        Asesoramiento de especialistas independientes para ayudar a ofrecer resultados de salud mejores y más justos.
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>
                            <?php $imgPage_src = sprintf('background-image:url(%s)', IMGS_PATH . 'tecnologia-medios-y-comunicacion.jpg') ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        Salud y Farma
                                    </div>
                                    <div class="item-info text-center text-white">
                                        Asesoramiento de especialistas independientes para ayudar a ofrecer resultados de salud mejores y más justos.
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>                            
                            <?php $imgPage_src = sprintf('background-image:url(%s)', IMGS_PATH . 'transporte-y-logistica.jpg') ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        Salud y Farma
                                    </div>
                                    <div class="item-info text-center text-white">
                                        Asesoramiento de especialistas independientes para ayudar a ofrecer resultados de salud mejores y más justos.
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>
                            <?php $imgPage_src = sprintf('background-image:url(%s)', IMGS_PATH . 'energia-y-utilities.jpg') ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        Salud y Farma
                                    </div>
                                    <div class="item-info text-center text-white">
                                        Asesoramiento de especialistas independientes para ayudar a ofrecer resultados de salud mejores y más justos.
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>
                            <?php $imgPage_src = sprintf('background-image:url(%s)', IMGS_PATH . 'automotriz.jpg') ?>
                            <a class="item position-relative" style="<?= $imgPage_src ?>" href="/<?= $industries->key . '#' . $page->key ?> ">
                                <div class="item-content">
                                    <div class="item-title text-center text-white text-uppercase">
                                        Salud y Farma
                                    </div>
                                    <div class="item-info text-center text-white">
                                        Asesoramiento de especialistas independientes para ayudar a ofrecer resultados de salud mejores y más justos.
                                    </div>
                                    <div class="item-more text-center text-white text-uppercase">Ver más</div>
                                </div>
                            </a>
                        </div>                        
                    </div>
                </div>
            </section>
            
            <?php endif; ?>
            <!-- /.Industries -->

            <!-- Block Parners -->
            <section class="block partners py-0" id="socios-estrategicos">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="text-center title">Socios Estratégicos</h2> 
                        </div>
                        <div class="content">
                            <div class="carrousel">
                                <div class="util-carrousel gallery-thumb">
                                    <div class="thumb align-top">
                                        <div class="image">
                                            <div class="content">
                                                <div class="img-content">
                                                <img src="<?= IMGS_PATH ?>carrusel-ui-path.jpg" alt="carrusel" class="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="thumb align-top">
                                        <div class="image">
                                            <div class="content">
                                                <div class="img-content">
                                                    <img src="<?= IMGS_PATH ?>carrusel-serverware.jpg" alt="carrusel" class="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="thumb align-top">
                                        <div class="image">
                                            <div class="content">
                                                <div class="img-content">
                                                    <img src="<?= IMGS_PATH ?>carrusel-team.jpg" alt="carrusel" class="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Parners -->

            <!-- Block Clients -->
            <section class="block clients py-0" id="clientes">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header">
                            <h2 class="text-center title">Nuestros Clientes</h2> 
                        </div>
                        <div class="content">
                            <div class="carrousel">
                                <div class="util-carrousel gallery-thumb">
                                    <div class="thumb align-top">
                                        <div class="image">
                                            <div class="content">
                                                <div class="img-content">
                                                    <img src="<?= IMGS_PATH ?>carrusel-ui-path.jpg" alt="carrusel" class="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="thumb align-top">
                                        <div class="image">
                                            <div class="content">
                                                <div class="img-content">
                                                    <img src="<?= IMGS_PATH ?>carrusel-serverware.jpg" alt="carrusel" class="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="thumb align-top">
                                        <div class="image">
                                            <div class="content">
                                                <div class="img-content">
                                                    <img src="<?= IMGS_PATH ?>carrusel-team.jpg" alt="carrusel" class="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="thumb align-top">
                                        <div class="image">
                                            <div class="content">
                                                <div class="img-content">
                                                    <img src="<?= IMGS_PATH ?>carrusel-serverware.jpg" alt="carrusel" class="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="thumb align-top">
                                        <div class="image">
                                            <div class="content">
                                                <div class="img-content">
                                                    <img src="<?= IMGS_PATH ?>carrusel-serverware.jpg" alt="carrusel" class="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Clients -->

            <!-- Block Contact -->
            <section class="block contact" id="contacto">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="header"></div>
                        <div class="content">
                            
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Contact -->

            <!-- Block Ebook -->
            <section class="block ebook" id="ebook">
                <div class="holder">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="image img-fluid-wr">
                                    <img src="<?= IMGS_PATH ?>ebook-image.jpg" alt="">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="header">
                                    <h2 class="title">¡Solicita tu ebook de la hiperautomatización!</h2>
                                </div>
                                <div class="content">
                                    <div><b>Completa el siguiente formulario y recibe tu ebook acerca de la hiperautomatización.</b></div>
                                </div>
                                <a class="button" href="#">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.Ebook -->
        </div>

        <!-- Footer -->
        <?php include_once "partials/footer.php" ?>

        <!-- Page Scripts -->
        <?php include_once "partials/scripts.php" ?>
    </body>
</html>
