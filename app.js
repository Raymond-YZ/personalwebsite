const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#navbar');
    const navLinks = document.querySelectorAll('#navbar li');

    burger.addEventListener('click', () => {
        //toggle navbar
        nav.classList.toggle('nav-active');
        //link animation
        navLinks.forEach((link, index) => {
            console.log(index);
            if (link.style.animation) {
                link.style.animation = '';
            }
            else
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        });

        //burger animation
        burger.classList.toggle('toggle');


    });

  
}

navSlide();