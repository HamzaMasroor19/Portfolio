const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-times');
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-times');
    });
});

const texts = ["Web Developer","Web Designer", "Front End Developer"];
const typingElement = document.querySelector('.typing');
let index = 0;
let textIndex = 0;
let isDeleting = false;
let speed = 150;

function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, index - 1);
        index--;
        speed = 100;
    } else {
        typingElement.textContent = currentText.substring(0, index + 1);
        index++;
        speed = 150;
    }

    if (!isDeleting && index === currentText.length) {
        isDeleting = true;
        speed = 2000;
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, speed);
}

setTimeout(type, 1000);
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    alert('Thank you for your message! I will get back to you soon.');
    
    contactForm.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
