(function () {
  const root = document.querySelector(':root');
  root.style.setProperty('--base-color-h', Math.floor(Math.random() * 360) + 1);

  var isMenuActive = localStorage.getItem("isMenuActive");

    const menuBtn = document.getElementById("menu-button");
    menuBtn.addEventListener("click", (event) => {
        menuToggle();
      }
    );

    const menuOpen = function () {
      document.body.classList.add("menu-active");
      localStorage.setItem("isMenuActive", true);
    };

    const menuClose = function () {
      document.body.classList.remove("menu-active");
      localStorage.setItem("isMenuActive", false);
    };

    const menuToggle = function () {
      isMenuActive = localStorage.getItem("isMenuActive");
      if (isMenuActive == "true") {
        menuClose();
      } else {
        menuOpen();
      }
    };
  
  if (isMenuActive) {
    menuOpen();
  }
  
})();
