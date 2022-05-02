const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

//Display mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//Display 'Soumis' when button is clicked
function myFunction() {
    var x = document.getElementById("soumis");
    if (x.style.display === "none") {
        console.log("display was none")
      x.style.display = "block";
    } else {
        console.log("display was none")
      x.style.display = "none";
    }
  }
