const button = document.querySelector('#button')
const right = document.querySelector('#right')

button.addEventListener('click', function () {
    right.classList.toggle('right-show')
})