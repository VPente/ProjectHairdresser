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

// mudar headr durante scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){

    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}
/*Testimonials Swiper*/
const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    pagination:{
        el:'.swiper-pagination'
    },
    mousewheel:true,
    keyboard:true,
    breakpoints:{
        767:{
            slidesPerView:2,
            setWrapperSize:true,
        }
    }
  })

  /*ScroolReveal*/
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '35px',
    duration: 700,
    reset: true
  })
  
  scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100 }
  )

  /*menu ativo*/
const sections = document.querySelectorAll('main section[id]')

  function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*='+sectionId+']')
            .classList.add('active')
        }else{
            document.querySelector('nav ul li a[href*='+sectionId+']')
            .classList.remove('active')
        }
        
    }



}


window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    activateMenuAtCurrentSection()


})