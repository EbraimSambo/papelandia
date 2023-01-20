const navbar =  document.querySelector('.navbar')
const btnMenu = document.querySelector('.bi-list')
btnMenu.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    btnMenu.classList.toggle('bi-x')
   
})