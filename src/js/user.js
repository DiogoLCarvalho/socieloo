const icon = document.querySelector('.user-icon'),
    menuDropdown = document.querySelector('.menu-dropdown')

icon.addEventListener('click', () => {
    menuDropdown.classList.toggle('show-menu')
})

const buttonsAnswers = document.querySelectorAll('.question-dropdown'),
    questionsAnswers = document.querySelectorAll('.question-answer')

let question = function (buttonClick) {
    buttonsAnswers[buttonClick].classList.toggle('show-dropdown')
}

buttonsAnswers.forEach((buttonAnswer, i) => {
    buttonAnswer.addEventListener('click', () => {
        question(i)
    })
})

const images = document.querySelectorAll('.select-image .images img'),
    fileImg = document.querySelector('.fileImg'),
    circle = document.querySelector('.circle'),
    deletePhoto = document.querySelector('#delete-photo')


images.forEach(image => {
    image.addEventListener('click', () => {
        fileImg.src = image.src
        circle.classList.add('small-border')
    })
})

deletePhoto.addEventListener('click', () => {
    fileImg.src = "../assets/camera.svg"
})


const buttonSwitch = document.querySelector('.button-switch')

buttonSwitch.addEventListener('click', () => {
    buttonSwitch.classList.toggle('active-switch')
})