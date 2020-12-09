const container = document.querySelector('.container');
const circle = document.querySelector('.circle')
const closeBtn = document.getElementById('close');
const openBtn = document.getElementById('open');

closeBtn.addEventListener('click', () => {
    container.classList.remove('show-nav');
})
openBtn.addEventListener('click', () => {
    container.classList.add('show-nav');
})