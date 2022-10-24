/*Abrir e fechar menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle ){
   element.addEventListener('click',function(){
    nav.classList.toggle('show')
   }) 
}

/*QUando clicar em item, esconder menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click',function(){
        nav.classList.remove('show')
    })
}

/* mudar headr durante scroll*/
const header = document.querySelectorAll('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll',function(){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }

})