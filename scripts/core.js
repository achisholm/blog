(function () {
  const root = document.querySelector(':root');
  root.style.setProperty(
    '--base-color-h', 
    Math.floor(Math.random() * 360) + 1
  )
  
})();
