const navElement = document.querySelector('.nav-container')
const hamburgerElement = document.querySelector('.hamburger-btn')
const navListElements = document.querySelector('.nav-list')

hamburgerElement.addEventListener('click', () => {
  navElement.classList.toggle('nav-open')
  hamburgerElement.classList.toggle('hamburger-btn-open')
})

navListElements.addEventListener('click', () => {
  navElement.classList.remove('nav-open')
  hamburgerElement.classList.remove('hamburger-btn-open')
})
