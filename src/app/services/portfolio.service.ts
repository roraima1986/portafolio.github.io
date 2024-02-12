import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getPortfolio() {
    return [
      {
        id           :33,
        photo        : "./assets/img/projects/age-calculator-design.jpg",
        title        : "Age Calculator",
        skill        : ["HTML5", "CSS3", "JavaScript"],
        date_project : "11/02/2024",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/age-calculator.github.io",
        link_website : "https://roraima1986.github.io/age-calculator.github.io/",
        is_active    : true,
      },
      {
        id           :32,
        photo        : "./assets/img/projects/newsletter-design.jpg",
        title        : "Newsletter sign-up form with success message",
        skill        : ["HTML5", "CSS3", "JavaScript"],
        date_project : "07/02/2024",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/newsletter.github.io",
        link_website : "https://roraima1986.github.io/newsletter.github.io/",
        is_active    : true,
      },
      {
        id           :31,
        photo        : "./assets/img/projects/huddle-landing-page-design.jpg",
        title        : "Huddle landing page",
        skill        : ["HTML5", "CSS3"],
        date_project : "06/02/2024",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/huddle-landing-page.github.io",
        link_website : "https://roraima1986.github.io/huddle-landing-page.github.io/",
        is_active    : true,
      },
      {
        id           :30,
        photo        : "./assets/img/projects/ping-coming-soon-page-design.jpg",
        title        : "Ping coming soon page",
        skill        : ["HTML5", "CSS3", "JavaScript"],
        date_project : "06/02/2024",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/ping-coming-soon.github.io",
        link_website : "https://roraima1986.github.io/ping-coming-soon.github.io/",
        is_active    : true,
      },
      {
        id           :29,
        photo        : "./assets/img/projects/single-price-design.jpg",
        title        : "Single price grid component",
        skill        : ["HTML5", "CSS3"],
        date_project : "05/02/2024",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/single-price.github.io-",
        link_website : "https://roraima1986.github.io/single-price.github.io-/",
        is_active    : true,
      },
      {
        id           :28,
        photo        : "./assets/img/projects/registration-form-design.jpg",
        title        : "Intro component with sign up form solution",
        skill        : ["HTML5", "CSS3", "JavaScript"],
        date_project : "05/02/2024",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/registration-form.github.io",
        link_website : "https://roraima1986.github.io/registration-form.github.io/",
        is_active    : true,
      },
      {
        id           :27,
        photo        : "./assets/img/projects/base-apparel-design.jpg",
        title        : "Base Apparel",
        skill        : ["HTML5", "CSS3", "JavaScript"],
        date_project : "04/02/2024",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/base-apparel.github.io",
        link_website : "https://roraima1986.github.io/base-apparel.github.io/",
        is_active    :  false,
      },
      {
        id           :26,
        photo        : "./assets/img/projects/web-design-layout.jpg",
        title        : "Video Games Website",
        skill        : ["HTML5", "CSS3", "JavaScript", "Método BEM"],
        date_project : "01/02/2024",
        observation  : "Master en CSS3 Avanzado",
        link_github  : "https://github.com/roraima1986/video-games-new.github.io",
        link_website : "https://roraima1986.github.io/video-games-new.github.io/",
        is_active    : true,
      },
      {
        id           :25,
        photo        : "./assets/img/projects/movies-design.jpg",
        title        : "Movies React",
        skill        : ["React"],
        date_project : "24/01/2024",
        observation  : "Master en React",
        link_github  : "https://github.com/roraima1986/movies-react.github.io",
        link_website : "https://roraima1986.github.io/movies-react.github.io/",
        is_active    : true,
      },
      {
        id           :24,
        photo        : "./assets/img/projects/develop-design.jpg",
        title        : "Web Development",
        skill        : ["HTML5", "CSS3", "JavaScript", "Método BEM"],
        date_project : "21/01/2024",
        observation  : "Master CSS3 Avanzado",
        link_github  : "https://github.com/roraima1986/web-development.github.io",
        link_website : "https://roraima1986.github.io/web-development.github.io/",
        is_active    : true,
      },
      {
        id           :23,
        photo        : "./assets/img/projects/four-card-feature-section-design.jpg",
        title        : "Four Card Feature Section",
        skill        : ["React"],
        date_project : "21/11/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/four-card-feature-section.github.io",
        link_website : "https://roraima1986.github.io/four-card-feature-section.github.io/",
        is_active    : true,
      },
      {
        id           :22,
        photo        : "./assets/img/projects/article-preview-design.jpg",
        title        : "Article Preview Design",
        skill        : ["Angular"],
        date_project : "17/11/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/article-preview.github.io",
        link_website : "https://roraima1986.github.io/article-preview.github.io/",
        is_active    : true,
      },
      {
        id           :21,
        photo        : "./assets/img/projects/social-proof-design.jpg",
        title        : "Social proof section",
        skill        : ["HTML5", "CSS3"],
        date_project : "16/11/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/social-proof.github.io",
        link_website : "https://roraima1986.github.io/social-proof.github.io/",
        is_active    : true,
      },
      {
        id           :20,
        photo        : "./assets/img/projects/portfolio2-design.jpg",
        title        : "Portfolio Design",
        skill        : ["HTML5", "CSS3", "JavaScript", "Método BEM"],
        date_project : "10/11/2023",
        observation  : "Master CSS3 Avanzado",
        link_github  : "https://github.com/roraima1986/portfolio-design.github.io",
        link_website : "https://roraima1986.github.io/portfolio-design.github.io/",
        is_active    : true,
      },
      {
        id           :19,
        photo        : "./assets/img/projects/faq-accordion-design.jpg",
        title        : "FAQ accordion card",
        skill        : ["HTML5", "CSS3", "JavaScript"],
        date_project : "03/11/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/faq-accordion.github.io",
        link_website : "https://roraima1986.github.io/faq-accordion.github.io/",
        is_active    : false,
      },
      {
        id           :18,
        photo        : "./assets/img/projects/profile-card-design.jpg",
        title        : "Profile card component",
        skill        : ["HTML5", "CSS3"],
        date_project : "29/10/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/profile-card.github.io",
        link_website : "https://roraima1986.github.io/profile-card.github.io/",
        is_active    : false,
      },
      {
        id           :17,
        photo        : "./assets/img/projects/column-preview-card-design.jpg",
        title        : "3-column preview card component",
        skill        : ["HTML5", "CSS3"],
        date_project : "25/10/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/column-preview-card.github.io",
        link_website : "https://roraima1986.github.io/column-preview-card.github.io/",
        is_active    : true,
      },
      {
        id           :16,
        photo        : "./assets/img/projects/stats-preview-design.jpg",
        title        : "Stats preview card component",
        skill        : ["HTML5", "CSS3"],
        date_project : "24/10/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/stats-preview-card.github.io",
        link_website : "https://roraima1986.github.io/stats-preview-card.github.io/",
        is_active    : false,
      },
      {
        id           :15,
        photo        : "./assets/img/projects/order-summary-card-design.jpg",
        title        : "Order Summary Card",
        skill        : ["HTML5", "CSS3"],
        date_project : "16/10/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/order-summary-card.github.io",
        link_website : "https://roraima1986.github.io/order-summary-card.github.io/",
        is_active    : true,
      },
      {
        id           :14,
        photo        : "./assets/img/projects/nft-preview-card-design.jpg",
        title        : "NFT Preview Card",
        skill        : ["HTML5", "CSS3"],
        date_project : "13/10/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/nft-preview-card.github.io",
        link_website : "https://roraima1986.github.io/nft-preview-card.github.io/",
        is_active    : true,
      },
      {
        id           :13,
        photo        : "./assets/img/projects/interactive-rating-component-design.jpg",
        title        : "Interactive Rating",
        skill        : ["HTML5", "CSS3", "JavaScript"],
        date_project : "10/10/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/interactive-rating.github.io",
        link_website : "https://roraima1986.github.io/interactive-rating.github.io/",
        is_active    : true,
      },
      {
        id           :12,
        photo        : "./assets/img/projects/product-preview-card-design.jpg",
        title        : "Product Preview Card",
        skill        : ["HTML5", "CSS3"],
        date_project : "05/10/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/productcard.github.io",
        link_website : "https://roraima1986.github.io/productcard.github.io/",
        is_active    : true,
      },
      {
        id           :11,
        photo        : "./assets/img/projects/results-summary-design.jpg",
        title        : "Results summary",
        skill        : ["HTML5", "CSS3"],
        date_project : "03/10/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/resultssummary.github.io",
        link_website : "https://roraima1986.github.io/resultssummary.github.io/",
        is_active    : false,
      },
      {
        id           :10,
        photo        : "./assets/img/projects/code-qr-design.jpg",
        title        : "QR code",
        skill        : ["HTML5", "CSS3"],
        date_project : "01/10/2023",
        observation  : "Desafio de Frontend Mentor",
        link_github  : "https://github.com/roraima1986/qrcode.github.io",
        link_website : "https://roraima1986.github.io/qrcode.github.io/",
        is_active    : false,
      },
      {
        id           :9,
        photo        : "./assets/img/projects/portafolio-design.jpg",
        title        : "Mi Portafolio",
        skill        : ["Angular"],
        date_project : "05/10/2023",
        observation  : "",
        link_github  : "https://github.com/roraima1986/portafolio",
        link_website : "",
        is_active    : true,
      },
      {
        id           :8,
        photo        : "./assets/img/projects/country-app-design.jpg",
        title        : "Country App",
        skill        : ["Angular", "Bootstrap"],
        date_project : "01/08/2023",
        observation  : "",
        link_github  : "https://github.com/roraima1986/country-app",
        link_website : "https://roraima1986.github.io/country-app/",
        is_active    : true,
      },
      {
        id           :7,
        photo        : "./assets/img/projects/avila-mood.png",
        title        : "Sistema de Inventario Avila Mood",
        skill        : ["Bootstrap", "JQuery", "Django"],
        date_project : "01/06/2023",
        observation  : "",
        link_github  : "https://github.com/roraima1986/software_peluqueria.github.io",
        link_website : "",
        is_active    : true,
      },
      {
        id           :6,
        photo        : "./assets/img/projects/panel-control-design.jpg",
        title        : "Sistema de Control de Pagos OPTICACLOUD",
        skill        : ["Bootstrap", "JQuery", "Django"],
        date_project : "01/03/2023",
        observation  : "",
        link_github  : "https://github.com/roraima1986/clientesOpticacloud",
        link_website : "",
        is_active    : true,
      },
      {
        id           :5,
        photo        : "./assets/img/projects/optiaustral-website-design.jpg",
        title        : "Página Web OptiAustral",
        skill        : ["HTML5", "CSS3", "Bootstrap", "JQuery"],
        date_project : "01/10/2022",
        observation  : "",
        link_github  : "https://github.com/roraima1986/optiaustral.github.io",
        link_website : "http://optiaustral.cl/",
        is_active    : true,
      },
      {
        id           :4,
        photo        : "./assets/img/projects/maqueta-css-flexbox-design.jpg",
        title        : "Maqueta CSS - Flexbox",
        skill        : ["HTML5", "CSS3"],
        date_project : "22/10/2022",
        observation  : "Master CSS",
        link_github  : "https://github.com/roraima1986/cssflexbox.github.io",
        link_website : "https://roraima1986.github.io/cssflexbox.github.io/",
        is_active    : false,
      },
      {
        id           :3,
        photo        : "./assets/img/projects/animaciones-css-design.jpg",
        title        : "Animaciones CSS",
        skill        : ["HTML5", "CSS3"],
        date_project : "10/08/2022",
        observation  : "Master CSS",
        link_github  : "https://github.com/roraima1986/cssanimations.github.io",
        link_website : "https://roraima1986.github.io/cssanimations.github.io/",
        is_active    : true,
      },
      {
        id           :2,
        photo        : "./assets/img/projects/jjingenieria-website-design.jpg",
        title        : "Página Web JJIngeniería",
        skill        : ["HTML5", "CSS3", "Bootstrap", "JQuery"],
        date_project : "01/04/2021",
        observation  : "",
        link_github  : "https://github.com/roraima1986/jjingenieria.github.io",
        link_website : "https://jjingenieria.cl/",
        is_active    : false,
      },
      {
        id           :1,
        photo        : "./assets/img/projects/opticacloud-website-design.jpg",
        title        : "Página Web OPTICACLOUD",
        skill        : ["HTML5", "CSS3", "Bootstrap", "JQuery"],
        date_project : "01/03/2021",
        observation  : "",
        link_github  : "https://github.com/roraima1986/opticacloud.github.io",
        link_website : "https://roraima1986.github.io/opticacloud.github.io/",
        is_active    : true,
      },
    ]
  }

  getportfolioMini() {
    return Promise.resolve(this.getPortfolio());
  }
}
