let appHeader = `
    <header>
        <div class="menu-btn">
            <span class="menu-btn_burger"> </span>
        </div>
            <nav class="nav">
                <ul class="menu-nav">
                    <li class="menu-nav_item">
                        <a href="index.html" class="menu-nav_link">
                            Kezdőlap
                        </a>
                    </li>
                    <li class="menu-nav_item">
                        <a href="about.html" class="menu-nav_link">
                            Rólam
                        </a>
                    </li>
                    <li class="menu-nav_item">
                        <a href="studies.html" class="menu-nav_link">
                            Tanulmányok
                        </a>
                    </li>
                    <li class="menu-nav_item">
                        <a href="projects.html" class="menu-nav_link">
                            Munkáim
                        </a>
                    </li>
                    <li class="menu-nav_item">
                        <a href="contact.html" class="menu-nav_link">
                            Kapcsolat
                        </a>
                    </li>
                </ul>
            </nav>       
    </header>`;

document.getElementById("app-header").innerHTML = appHeader;

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        showMenu = true;
        navItems.forEach(item => item.classList.add('open'));
    }
    else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}

menuBtn.addEventListener('click', toggleMenu);


const links = document.querySelectorAll('.menu-nav_link');
links.forEach((link) => {
    
        link.addEventListener('click', (e) => {
          links.forEach((link) => {
              link.classList.remove('active');    
              console.log(link);         
          });  
          link.classList.add('active');
          console.log(link);    
        });
      });

// if (links.length) {
//   links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//       links.forEach((link) => {
//           link.classList.remove('active');
//       });
//       e.preventDefault();
//       link.classList.add('active');
//     });
//   });
// }