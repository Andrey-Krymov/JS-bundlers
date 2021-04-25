const apps = {
    app1: 'datecalc',
    app2: 'appTimer',
};

let appEl = document.querySelector('.apps');

let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.addEventListener('click', clickHandler);
});

function clickHandler(event) {
   changeApps(event);
   changeActiveClass(event);
}

function changeActiveClass(event) {
   document.querySelector('.active').classList.remove('active');
   event.target.classList.add('active');
}

function changeApps(event) {
   switch (event.target.textContent) {
       case "Калькулятор дат":
           appEl.textContent = apps.app1;
           break;
       case "Таймер":
           appEl.textContent = apps.app2;
           break;
   }
}