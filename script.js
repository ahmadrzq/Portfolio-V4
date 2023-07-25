// Show Menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
// menu show
// validate if content exist
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Add blur to header
const blurHeader = () => {
    const header = document.getElementById('header')
    // when the blur is greater than 50 viewport height, add the blur header class
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// Email JS
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_99gzwv6', 'template_xsgkw7j', '#contact-form', 'iPbfNXO2Lb2H6o1Y7')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent succesfully ✔'

            // Remove message after 5s
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // clear input fields
            contactForm.reset();
        }, () => {
            contactMessage.textContent = 'Message not sent (services error) ❌'
        })

}
contactForm.addEventListener('submit', sendEmail)

// Show scrol up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Scroll section active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// Scrol reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, { origin: 'bottom' })
sr.reveal(`.about__data, .skills__data`, { origin: 'left' })
sr.reveal(`.about__image, .skills__content`, { origin: 'right' })
sr.reveal(`.services__card, .projects__card`, {interval: 100})