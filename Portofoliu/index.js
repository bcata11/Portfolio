const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    } )
}


/*-------------remove menu mobile------------*/

const navLink = document.querySelectorAll('.nav_link')


function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))



/*----------------SKILLS---------------- */
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content sclose'
    }
    if(itemClass === 'skills_content sclose') {
        this.parentNode.className = 'skills_content sopen'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*----------------Qualification---------------- */
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualiactive')
        })
        target.classList.add('qualiactive')

        tabs.forEach(tab =>{
            tab.classList.remove('qualiactive')
        })
        tab.classList.add('qualiactive')
    })
})

/*----------------Services---------------- */

const modalViews = document.querySelectorAll('.servmodal'),
      modalBtns = document.querySelectorAll('.servbutton'),
      modalCloses = document.querySelectorAll('.servmodalclose')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('activemodal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
} )

modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('activemodal')
        })
    })
})

/*----------------Portfolio swiper---------------- */

let swiper = new Swiper(".portcontainer", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });


  /*-----------------SCROLL--------------------*/

  const sections = document.querySelectorAll('section[id]')

  function scrollActive(){
    const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
            })
    }
  window.addEventListener('scroll', scrollActive)


    /*-----------------change background header--------------------*/
function scrollHeader(){
    const nav= document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*-----------------show scoll up--------------------*/

function scrollUp(){
    const scrollUp = document.getElementById('scrollup');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)


/*-----------------dark light theme--------------------*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())


})


/*-------------emailjs--------------- */

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_wruc8ff";
    const templateID = "template_mirahhq";

    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("SENT")
        }
    ).catch((err) => console.log(err))

}



