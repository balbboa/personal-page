/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top + 10
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["[Abzu@localhost ~]$ python whoami.py^2000 \n\n Olá, eu sou Arthur Balboa. Sou pesquisador e desenvolvedor web. Possuo Técnico em Redes de computadores, sou Bacharel em Ciências e Tecnologia e estudante de Engenharia da Computação pela Universidade Federal do Rio Grande do Norte (UFRN).\n\n Também faço parte do programa de residência em Tecnologia da Informação no Tribunal Regional Federal da 5ª Região (Pós-graduação).\n\n Possuo experiência nas ferramentas: HTML5, CSS3, Sass, Bootstrap, JQuery, React, Next.Js, NodeJS, Wordpress e Angular. E nas linguagens de programação: Python, JavaScript, PHP, C, C# e C++.\n\n Usuário Linux, amante do Front-end e entusiasta da segurança da informação.\n\n guaraná do amazonas, djavan e praias vazias ♥"],
      typeSpeed: 0,
      loop: false,
    }
    );
  });

  // Call the functions
  magnifPopup();

});
