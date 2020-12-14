(function () {
  const root = document.querySelector(':root');
  root.style.setProperty('--base-color-h', Math.floor(Math.random() * 360) + 1);

  var isMenuActive = localStorage.getItem("isMenuActive");

  var menuBtn = document.getElementById("menu-button");
  menuBtn.addEventListener("click", (event) => {
      menuToggle();
    }
  );

  var menuOpen = function () {
    document.body.classList.add("menu-active");
    localStorage.setItem("isMenuActive", true);
  };

  var menuClose = function () {
    document.body.classList.remove("menu-active");
    localStorage.setItem("isMenuActive", false);
  };

  var menuToggle = function () {
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
