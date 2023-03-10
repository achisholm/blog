(function () {
  const root = document.querySelector(':root');
  root.style.setProperty(
    '--base-hue', 
    Math.floor(Math.random() * 360) + 1
  )
  
})();
