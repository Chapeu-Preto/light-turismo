/* =========================================================
   LIGHT TURISMO
   JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  const navLinks = document.querySelectorAll(".nav-list a");


  /* =======================================================
     HEADER AO ROLAR
  ======================================================= */

  function updateHeader() {

    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  }

  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );


  /* =======================================================
     ABRIR / FECHAR MENU
  ======================================================= */

  function toggleMenu() {

    const isOpen =
      menuToggle.classList.toggle("active");

    nav.classList.toggle(
      "active",
      isOpen
    );

    document.body.classList.toggle(
      "menu-open",
      isOpen
    );

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Fechar menu"
        : "Abrir menu"
    );

  }


  menuToggle.addEventListener(
    "click",
    toggleMenu
  );


  /* =======================================================
     FECHAR MENU AO CLICAR NO LINK
  ======================================================= */

  navLinks.forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        menuToggle.classList.remove("active");

        nav.classList.remove("active");

        document.body.classList.remove(
          "menu-open"
        );

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menu"
        );

      }
    );

  });


  /* =======================================================
     FECHAR MENU AO CLICAR FORA
  ======================================================= */

  document.addEventListener(
    "click",
    (event) => {

      const clickedInsideHeader =
        header.contains(event.target);

      if (
        !clickedInsideHeader &&
        nav.classList.contains("active")
      ) {

        menuToggle.classList.remove(
          "active"
        );

        nav.classList.remove(
          "active"
        );

        document.body.classList.remove(
          "menu-open"
        );

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menu"
        );

      }

    }
  );


  /* =======================================================
     ESC FECHA O MENU
  ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        nav.classList.contains("active")
      ) {

        menuToggle.classList.remove(
          "active"
        );

        nav.classList.remove(
          "active"
        );

        document.body.classList.remove(
          "menu-open"
        );

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menu"
        );

      }

    }
  );


  /* =======================================================
     RESPONSIVIDADE
     
     Se o usuário abrir o menu no celular e depois
     aumentar a tela, o menu é resetado.
  ======================================================= */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 850) {

        menuToggle.classList.remove(
          "active"
        );

        nav.classList.remove(
          "active"
        );

        document.body.classList.remove(
          "menu-open"
        );

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menu"
        );

      }

    }
  );

});