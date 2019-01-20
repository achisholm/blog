const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
const baseColor = rootStyles.getPropertyValue('--base-color');


//let root = document.documentElement;
root.style.setProperty('--base-color-h', Math.floor(Math.random() * 360) + 1);


const menuBtn = document.getElementById('menu-button');
const menuItems = document.querySelectorAll('.js-menu-item');

menuBtn.addEventListener("click", event => {
  document.body.classList.toggle("menu-active");
});

// menuItems.forEach(item => {
//   item.addEventListener("click", event => {
//     let xhttp = new XMLHttpRequest();
//     let href = item.getAttribute("href");

//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {

//         let el = (domstring) => {
//           let stuff = new DOMParser().parseFromString(domstring, 'text/html');
//           return stuff.querySelector('.container__content').innerHTML;
//         }
//         document.querySelector(".container__content").innerHTML = el(this.response);
//         history.pushState(null, null, href);
//       }
//     };


//     xhttp.open("GET", href, true);
//     xhttp.send();




//     event.preventDefault();
//     event.stopPropagation();
//     return false;
//   });



// })



// document.addEventListener("DOMContentLoaded", function () {

// });
