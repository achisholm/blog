(function () {
  const root = document.querySelector(':root');
  const rootStyles = getComputedStyle(root);
  const baseColor = rootStyles.getPropertyValue('--base-color');

  root.style.setProperty('--base-color-h', Math.floor(Math.random() * 360) + 1);

  const menuBtn = document.getElementById('menu-button');
  const menuItems = document.querySelectorAll('.js-menu-item');

  menuBtn.addEventListener("click", event => {
    document.body.classList.toggle("menu-active");
  });

})();
