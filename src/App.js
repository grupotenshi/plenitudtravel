import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

   <div className="page">

       <header className="section page-header">

           <div className="rd-navbar-wrap rd-navbar-corporate">
               <nav className="rd-navbar rd-navbar-original rd-navbar-static" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fullwidth" data-xl-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-fixed" data-xl-device-layout="rd-navbar-static" data-md-stick-up-offset="130px" data-lg-stick-up-offset="100px" data-stick-up="true" data-sm-stick-up="true" data-md-stick-up="true" data-lg-stick-up="true" data-xl-stick-up="true">
                   <div className="rd-navbar-collapse-toggle" data-rd-navbar-toggle=".rd-navbar-collapse"><span></span></div>
                   <div className="rd-navbar-top-panel rd-navbar-collapse novi-background">
                       <div className="rd-navbar-top-panel-inner">
                           <ul className="list-inline">
                               <li className="box-inline list-inline-item"><span className="icon novi-icon icon-md-smaller icon-secondary mdi mdi-phone"></span>
                                   <ul className="list-comma">
                                       <li><a href="tel:#">1-800-1234-567</a></li>
                                       <li><a href="tel:#">1-800-6780-345</a></li>
                                   </ul>
                               </li>
                               <li className="box-inline list-inline-item"><span className="icon novi-icon icon-md-smaller icon-secondary mdi mdi-map-marker"></span><a href="#">2130 Fulton Street, San Diego, CA 94117-1080 USA</a></li>
                               <li className="box-inline list-inline-item"><span className="icon novi-icon icon-md-smaller icon-secondary mdi mdi-email"></span><a href="mailto:#">mail@demolink.org</a></li>
                           </ul>
                           <ul className="list-inline">
                               <li className="list-inline-item"><a className="icon novi-icon icon-sm-bigger icon-gray-1 mdi mdi-facebook" href="#"></a></li>
                               <li className="list-inline-item"><a className="icon novi-icon icon-sm-bigger icon-gray-1 mdi mdi-twitter" href="#"></a></li>
                               <li className="list-inline-item"><a className="icon novi-icon icon-sm-bigger icon-gray-1 mdi mdi-instagram" href="#"></a></li>
                               <li className="list-inline-item"><a className="icon novi-icon icon-sm-bigger icon-gray-1 mdi mdi-google-plus" href="#"></a></li>
                               <li className="list-inline-item"><a className="icon novi-icon icon-sm-bigger icon-gray-1 mdi mdi-linkedin" href="#"></a></li>
                           </ul>
                       </div>
                       <div className="rd-navbar-top-panel-inner"></div>
                   </div>
                   <div className="rd-navbar-inner">

                       <div className="rd-navbar-panel">

                           <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>

                           <div className="rd-navbar-brand m-auto mt-lg-2 paddingNavBar">
                             <a className="brand-name">
                                <img className="logo-default d-none d-lg-block" src="images/logo-default-208x46.png" alt="" width="208" height="46" />
                                <img className="logo-default d-lg-none m-auto" src="images/logonav-resp.png" alt="" width="208" height="46" />
                             </a>
                           </div>
                       </div>
                       <div className="rd-navbar-aside-center">
                           <div className="rd-navbar-nav-wrap">

                               <ul className="rd-navbar-nav">
                                   <li className="active"><a href="index.html">Home</a>
                                   </li>
                                   <li><a>Nosotros</a>
                                   </li>
                                   <li><a>Contactanos</a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                       <div className="rd-navbar-aside-right"><a className="button button-sm button-secondary button-nina" href="#">Agenda tu viaje</a></div>
                   </div>
               </nav>
           </div>
       </header>
       <section className="section">
           <div className="swiper-form-wrap">

               <div className="swiper-container swiper-slider swiper-slider_height-1 swiper-align-left swiper-align-left-custom context-dark bg-gray-darker" data-loop="false" data-autoplay="5500" data-simulate-touch="false" data-slide-effect="fade">
                   <div className="swiper-wrapper">
                       <div className="swiper-slide" data-slide-bg="images/swiper-slide-1.jpg">
                           <div className="swiper-slide-caption">
                               <div className="container container-bigger swiper-main-section">
                                   <div className="row row-fix justify-content-sm-center justify-content-md-start">
                                       <div className="col-md-6 col-lg-5 col-xl-4 col-xxl-5">
                                           <h3>Destinos Maravillosos</h3>
                                           <div className="divider divider-decorate"></div>
                                           <p className="text-spacing-sm">Ofrecemos increibles planes, desde los destinos más exóticos a los más extremos. Ciudades populares como Paris, Rio de Janeiro, Cairo y muchas otras.</p><a className="button button-default-outline button-nina button-sm" href="#">Quiero saber más</a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="swiper-slide" data-slide-bg="images/swiper-slide-2.jpg">
                           <div className="swiper-slide-caption">
                               <div className="container container-bigger swiper-main-section">
                                   <div className="row row-fix justify-content-sm-center justify-content-md-start">
                                       <div className="col-md-6 col-lg-5 col-xl-4 col-xxl-5">
                                           <h3>El viaje de tus sueños</h3>
                                           <div className="divider divider-decorate"></div>
                                           <p className="text-spacing-sm">Nuestra equipo está listo para ofrecerte unas vacaciones excitantes con un plan de viaje diseñado por ti mismo. Ya sea un crucero exótico o un viaje a su resort favorito, seguramente será una de las mejores experiencias de tu vida.</p><a className="button button-default-outline button-nina button-sm" href="#">Quiero saber más</a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="swiper-slide" data-slide-bg="images/swiper-slide-3.jpg">
                           <div className="swiper-slide-caption">
                               <div className="container container-bigger swiper-main-section">
                                   <div className="row row-fix justify-content-sm-center justify-content-md-start">
                                       <div className="col-md-6 col-lg-5 col-xl-4 col-xxl-5">
                                           <h3>La mejor información para un viaje único</h3>
                                           <div className="divider divider-decorate"></div>
                                           <p className="text-spacing-sm">Nuestro equipo está listo para proporcionarle información de viaje semanal única. Incluye fotos, videos y artículos sobre rutas turísticas que aún no descubres. ¡Sabemos todo sobre los lugares en los que nunca has estado!</p><a className="button button-default-outline button-nina button-sm" href="#">Quiero saber más</a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div className="swiper-pagination-wrap">
                       <div className="container container-bigger">
                           <div className="row">
                               <div className="col-sm-12">
                                   <div className="swiper-pagination"></div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="container container-bigger form-request-wrap form-request-wrap-modern">
                   <div className="row row-fix justify-content-sm-center justify-content-lg-end">
                       <div className="col-lg-6 col-xxl-5">
                           <div className="form-request form-request-modern bg-gray-lighter novi-background">
                               <h4>Busca tu tour</h4>

                               <form className="rd-mailform form-fix">
                                   <div className="row row-20 row-fix">
                                       <div className="col-sm-12">
                                           <label className="form-label-outside">Origen</label>
                                           <div className="form-wrap form-wrap-inline">
                                               <select className="form-input select-filter" data-placeholder="All" data-minimum-results-for-search="Infinity" name="city">
                                                   <option value="1">New York</option>
                                                   <option value="2">Lisbon</option>
                                                   <option value="3">Stockholm</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="col-sm-12">
                                           <label className="form-label-outside">Destino</label>
                                           <div className="form-wrap form-wrap-inline">
                                               <select className="form-input select-filter" data-placeholder="All" data-minimum-results-for-search="Infinity" name="city">
                                                   <option value="1">Chicago</option>
                                                   <option value="2">Madrid</option>
                                                   <option value="3">Paris</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="col-sm-12 col-lg-6">
                                           <label className="form-label-outside">Fecha</label>
                                           <div className="form-wrap form-wrap-validation">

                                               <input className="form-input datepicker" id="dateForm" name="date" type="text" data-time-picker="date"/>
                                               <label className="form-label" htmlFor="dateForm">¿Cuando viajas?</label>

                                           </div>
                                       </div>
                                       <div className="col-sm-12 col-lg-6">
                                           <label className="form-label-outside">Duración</label>
                                           <div className="form-wrap form-wrap-validation">

                                               <select className="form-input select-filter" data-placeholder="All" data-minimum-results-for-search="Infinity" name="city">
                                                   <option value="1">¿Cuántos días?</option>
                                                   <option value="2">2 días</option>
                                                   <option value="3">3 días</option>
                                                   <option value="4">4 días</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="col-lg-6">
                                           <label className="form-label-outside">Adultos</label>
                                           <div className="form-wrap form-wrap-modern">
                                               <input className="form-input input-append" id="form-element-stepper" type="number" min="0" max="300" defaultValue="2"/>
                                           </div>
                                       </div>
                                       <div className="col-lg-6">
                                           <label className="form-label-outside">Niños</label>
                                           <div className="form-wrap form-wrap-modern">
                                               <input className="form-input input-append" id="form-element-stepper-1" type="number" min="0" max="300" defaultValue="0"/>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="form-wrap form-button">
                                       <button className="button button-block button-secondary" type="submit">Buscar</button>
                                   </div>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       <section className="section section-variant-1 bg-default novi-background bg-cover">
           <div className="container container-wide">
               <div className="row row-fix justify-content-xl-end row-30 text-center text-xl-left">
                   <div className="col-xl-8">
                       <div className="parallax-text-wrap">
                           <h3>Los Mejores Destinos</h3><span className="parallax-text">del mundo</span>
                       </div>
                       <hr className="divider divider-decorate"/>
                   </div>
                   <div className="col-xl-3 text-xl-right"><a className="button button-secondary button-nina" href="#">Más destinos fabulosos</a></div>
               </div>
               <div className="row row-50">
                   <div className="col-md-6 col-xl-4">
                       <article className="event-default-wrap">
                           <div className="event-default">
                               <figure className="event-default-image"><img src="images/landing-private-airlines-01-570x370.jpg" alt="" width="570" height="370" />
                               </figure>
                               <div className="event-default-caption"><a className="button button-xs button-secondary button-nina" href="#">Quiero saber más</a></div>
                           </div>
                           <div className="event-default-inner">
                               <h5><a className="event-default-title" href="#">France, Paris</a></h5><span className="heading-5">Desde 280€</span>
                           </div>
                       </article>
                   </div>
                   <div className="col-md-6 col-xl-4">
                       <article className="event-default-wrap">
                           <div className="event-default">
                               <figure className="event-default-image"><img src="images/landing-private-airlines-02-570x370.jpg" alt="" width="570" height="370" />
                               </figure>
                               <div className="event-default-caption"><a className="button button-xs button-secondary button-nina" href="#">Quiero saber más</a></div>
                           </div>
                           <div className="event-default-inner">
                               <h5><a className="event-default-title" href="#">USA, Boston</a></h5><span className="heading-5">Desde 480€</span>
                           </div>
                       </article>
                   </div>
                   <div className="col-md-6 col-xl-4">
                       <article className="event-default-wrap">
                           <div className="event-default">
                               <figure className="event-default-image"><img src="images/landing-private-airlines-03-570x370.jpg" alt="" width="570" height="370" />
                               </figure>
                               <div className="event-default-caption"><a className="button button-xs button-secondary button-nina" href="#">Quiero saber más</a></div>
                           </div>
                           <div className="event-default-inner">
                               <h5><a className="event-default-title" href="#">Italy, Venice</a></h5><span className="heading-5">Desde 350€</span>
                           </div>
                       </article>
                   </div>
                   <div className="col-md-6 col-xl-4">
                       <article className="event-default-wrap">
                           <div className="event-default">
                               <figure className="event-default-image"><img src="images/landing-private-airlines-04-570x370.jpg" alt="" width="570" height="370" />
                               </figure>
                               <div className="event-default-caption"><a className="button button-xs button-secondary button-nina" href="#">Quiero saber más</a></div>
                           </div>
                           <div className="event-default-inner">
                               <h5><a className="event-default-title" href="#">Spain, Benidorm</a></h5><span className="heading-5">Desde 350€</span>
                           </div>
                       </article>
                   </div>
                   <div className="col-md-6 col-xl-4">
                       <article className="event-default-wrap">
                           <div className="event-default">
                               <figure className="event-default-image"><img src="images/landing-private-airlines-05-570x370.jpg" alt="" width="570" height="370" />
                               </figure>
                               <div className="event-default-caption"><a className="button button-xs button-secondary button-nina" href="#">Quiero saber más</a></div>
                           </div>
                           <div className="event-default-inner">
                               <h5><a className="event-default-title" href="#">Egypt, Sharm El Sheikh</a></h5><span className="heading-5">Desde 520€</span>
                           </div>
                       </article>
                   </div>
                   <div className="col-md-6 col-xl-4">
                       <article className="event-default-wrap">
                           <div className="event-default">
                               <figure className="event-default-image"><img src="images/landing-private-airlines-06-570x370.jpg" alt="" width="570" height="370" />
                               </figure>
                               <div className="event-default-caption"><a className="button button-xs button-secondary button-nina" href="#">Quiero saber más</a></div>
                           </div>
                           <div className="event-default-inner">
                               <h5><a className="event-default-title" href="#">UK, London</a></h5><span className="heading-5">Desde 600€</span>
                           </div>
                       </article>
                   </div>
               </div>
           </div>
       </section>

       <section className="section section-lg bg-gray-lighter novi-background bg-cover text-center">
           <div className="container container-wide">
               <h3>Nuestros Servicios</h3>
               <div className="divider divider-decorate"></div>
               <div className="row row-50 justify-content-sm-center text-left">
                   <div className="col-sm-10 col-md-6 col-xl-3">
                       <article className="box-minimal box-minimal-border">
                           <div className="box-minimal-icon novi-icon mdi mdi-airplane"></div>
                           <p className="big box-minimal-title">Boletos de avión</p>
                           <hr/>
                           <div className="box-minimal-text text-spacing-sm">En nuestra agencia de viajes, puede reservar boletos aéreos a cualquier destino mundial. También proporcionamos reserva de boletos en línea a través de nuestro sitio web en solo un par de pasos.</div>
                       </article>
                   </div>
                   <div className="col-sm-10 col-md-6 col-xl-3">
                       <article className="box-minimal box-minimal-border">
                           <div className="box-minimal-icon novi-icon mdi mdi-map"></div>
                           <p className="big box-minimal-title">Viajes & cruceros</p>
                           <hr/>
                           <div className="box-minimal-text text-spacing-sm">Además de los tours y excursiones regulares, también ofrecemos una variedad de cruceros y viajes por mar para diferentes clientes que buscan experiencias increíbles.</div>
                       </article>
                   </div>
                   <div className="col-sm-10 col-md-6 col-xl-3">
                       <article className="box-minimal box-minimal-border">
                           <div className="box-minimal-icon novi-icon mdi mdi-city"></div>
                           <p className="big box-minimal-title">Reservas de hotel</p>
                           <hr/>
                           <div className="box-minimal-text text-spacing-sm">Ofrecemos una amplia selección de hoteles que van desde hoteles de 5 estrellas hasta pequeñas propiedades ubicadas en todo el mundo para que pueda reservar el hotel que desee.</div>
                       </article>
                   </div>
                   <div className="col-sm-10 col-md-6 col-xl-3">
                       <article className="box-minimal box-minimal-border">
                           <div className="box-minimal-icon novi-icon mdi mdi-beach"></div>
                           <p className="big box-minimal-title">Tours de verano a medida</p>
                           <hr/>
                           <div className="box-minimal-text text-spacing-sm">Nuestra agencia ofrece recorridos a medida para clientes que buscan unas vacaciones exclusivas y memorables.</div>
                       </article>
                   </div>
               </div>
           </div>
       </section>

       <section className="section section-lg novi-background bg-cover bg-default text-center">
           <div className="container-wide">
               <div className="row row-50">
                   <div className="col-sm-12">
                       <h3>Lo Último</h3>
                       <div className="divider divider-decorate"></div>

                       <div className="owl-carousel owl-carousel-team owl-carousel-inset" data-items="1" data-md-items="2" data-xl-items="3" data-stage-padding="15" data-loop="true" data-margin="30" data-mouse-drag="false" data-dots="true" data-autoplay="true">
                           <article className="post-blog"><a className="post-blog-image" href="#"><img src="images/landing-private-airlines-7-570x415.jpg" alt="" width="570" height="415" /></a>
                               <div className="post-blog-caption">
                                   <div className="post-blog-caption-header">
                                       <ul className="post-blog-tags">
                                           <li><a className="button-tags" href="#">Hoteles</a></li>
                                       </ul>
                                       <ul className="post-blog-meta">
                                           <li><span>Yo</span>&nbsp;<a href="#">Quiero Ir</a></li>
                                       </ul>
                                   </div>
                                   <div className="post-blog-caption-body">
                                       <h5><a className="post-blog-title" href="#">Los 10 mejores hoteles en los que alojarse: calificación exclusiva de expertos en viajes de Sealine</a></h5>
                                   </div>
                                   <div className="post-blog-caption-footer">
                                       <time dateTime ="2019">Feb 27, 2019 at 6:53 pm</time><a className="post-comment" href="#"><span className="icon novi-icon icon-md-middle icon-gray-1 mdi mdi-comment"></span><span>12</span></a>
                                   </div>
                               </div>
                           </article>
                           <article className="post-blog"><a className="post-blog-image" href="#"><img src="images/landing-private-airlines-8-570x415.jpg" alt="" width="570" height="415" /></a>
                               <div className="post-blog-caption">
                                   <div className="post-blog-caption-header">
                                       <ul className="post-blog-tags">
                                           <li><a className="button-tags" href="#">Tips</a></li>
                                       </ul>
                                       <ul className="post-blog-meta">
                                           <li><span>Yo</span>&nbsp;<a href="#">Quiero Ir</a></li>
                                       </ul>
                                   </div>
                                   <div className="post-blog-caption-body">
                                       <h5><a className="post-blog-title" href="#">Cómo planificar sus vacaciones por adelantado y por qué es beneficioso</a></h5>
                                   </div>
                                   <div className="post-blog-caption-footer">
                                       <time dateTime ="2019">Feb 27, 2019 at 6:53 pm</time><a className="post-comment" href="#"><span className="icon novi-icon icon-md-middle icon-gray-1 mdi mdi-comment"></span><span>12</span></a>
                                   </div>
                               </div>
                           </article>
                           <article className="post-blog"><a className="post-blog-image" href="#"><img src="images/landing-private-airlines-9-570x415.jpg" alt="" width="570" height="415" /></a>
                               <div className="post-blog-caption">
                                   <div className="post-blog-caption-header">
                                       <ul className="post-blog-tags">
                                           <li><a className="button-tags" href="#">Viajar</a></li>
                                       </ul>
                                       <ul className="post-blog-meta">
                                           <li><span>Yo</span>&nbsp;<a href="#">Quiero Ir</a></li>
                                       </ul>
                                   </div>
                                   <div className="post-blog-caption-body">
                                       <h5><a className="post-blog-title" href="#">Su guía personal de los 5 mejores lugares para visitar en la Tierra</a></h5>
                                   </div>
                                   <div className="post-blog-caption-footer">
                                       <time dateTime ="2019">Feb 27, 2019 at 6:53 pm</time><a className="post-comment" href="#"><span className="icon novi-icon icon-md-middle icon-gray-1 mdi mdi-comment"></span><span>12</span></a>
                                   </div>
                               </div>
                           </article>
                       </div>
                   </div>
                   <div className="col-12"><a className="button button-secondary button-nina button-offset-lg" href="#">Más Ofertas</a></div>
               </div>
           </div>
       </section>

       <section className="section section-md text-center text-md-left bg-gray-700 novi-background bg-cover">
           <div className="container container-wide">
               <div className="row row-fix row-50 justify-content-sm-center">
                   <div className="col-xxl-8">
                       <div className="box-cta box-cta-inline">
                           <div className="box-cta-inner">
                               <h3 className="box-cta-title">Agenda ahora mismo tu viaje sin salir de casa</h3>
                               <p>Usando nuestra página web, puedes hacerlo con solo un click.</p>
                           </div>
                           <div className="box-cta-inner"><a className="button button-secondary button-nina" href="#">Agendar ahora</a></div>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       <footer className="section page-footer page-footer-minimal novi-background bg-cover text-center bg-gray-darker">
           <div className="container container-wide">
               <div className="row row-fix justify-content-sm-center align-items-md-center row-30">
                   <div className="col-md-10 col-lg-7 col-xl-4 text-xl-left"><a href="index.html"><img className="inverse-logo" src="images/logo-inverse-208x46.png" alt="" width="208" height="46" /></a></div>
                   <div className="col-md-10 col-lg-7 col-xl-4">
                       <p className="right">&#169;&nbsp;2019 All Rights Reserved. Powered&nbsp;by&nbsp;<a href="https://grupotenshi.com">Grupo Tenshi</a></p>
                   </div>
                   <div className="col-md-10 col-lg-7 col-xl-4 text-xl-right">
                       <ul className="group-xs group-middle">
                           <li><a className="icon novi-icon icon-md-middle icon-circle icon-secondary-5-filled mdi mdi-facebook" href="#"></a></li>
                           <li><a className="icon novi-icon icon-md-middle icon-circle icon-secondary-5-filled mdi mdi-twitter" href="#"></a></li>
                           <li><a className="icon novi-icon icon-md-middle icon-circle icon-secondary-5-filled mdi mdi-instagram" href="#"></a></li>
                           <li><a className="icon novi-icon icon-md-middle icon-circle icon-secondary-5-filled mdi mdi-google" href="#"></a></li>
                           <li><a className="icon novi-icon icon-md-middle icon-circle icon-secondary-5-filled mdi mdi-linkedin" href="#"></a></li>
                       </ul>
                   </div>
               </div>
           </div>
       </footer>
   </div>
  );
}

export default App;
