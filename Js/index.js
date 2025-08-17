let slidenumber = 0
const slides = document.querySelector('.slides')
const allslides = document.querySelectorAll('.slide').length


function nextslide(){

    slidenumber = (slidenumber+1)%allslides
    changeslide()
}

function changeslide(){
    let width1 = slides.clientWidth
    console.log(width1)
    slides.style.transform = `translatex(${width1*slidenumber}px)`
}


setInterval(nextslide,3000)
