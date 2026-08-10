const toggle = document.getElementById("toggle-theme");

const savedTheme = localStorage.getItem("jp-theme");


/* ==============================
   TEMA
============================== */

if (savedTheme === "light") {

  document.body.classList.add("light");

  toggle.textContent = "🌙";

}


toggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const light =
    document.body.classList.contains("light");

  localStorage.setItem(
    "jp-theme",
    light ? "light" : "dark"
  );

  toggle.textContent =
    light ? "🌙" : "☀️";

});


/* ==============================
   ANIMAÇÃO AO ROLAR
============================== */

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },

    {
      threshold: 0.08
    }

  );


document
  .querySelectorAll(".section, .contact")
  .forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(18px)";

    element.style.transition =
      "opacity .65s ease, transform .65s ease";

    observer.observe(element);

  });


/* ==============================
   CLASSE DE ANIMAÇÃO
============================== */

const style =
  document.createElement("style");

style.textContent = `

.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

`;

document.head.appendChild(style);