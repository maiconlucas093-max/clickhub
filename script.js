(() => {
  "use strict";
  
  // Menu de navegação para celulares
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-navigation");
  
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded =
        toggle.getAttribute("aria-expanded") === "true";
      
      toggle.setAttribute(
        "aria-expanded",
        String(!expanded)
      );
      
      nav.classList.toggle("is-open", !expanded);
    });
    
    // Fecha o menu depois que um link é selecionado
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        
        toggle.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });
  }
  
  // Atualiza automaticamente o ano do rodapé
  document
    .querySelectorAll("[data-current-year]")
    .forEach((element) => {
      element.textContent = new Date().getFullYear();
    });
  
})();