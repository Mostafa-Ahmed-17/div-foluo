





var btttn = document.getElementById("btttn");


window.onscroll = function()
{
if (window.scrollY >= 350){

    btttn.style.display = "block"
}
else{
    btttn.style.display = "none"
}
}

let body = document.querySelector("body")

let lod = document.querySelector(".lodin")

let nav = document.querySelector(".navbar")

let cont = document.querySelector(".lodin h2")


window.addEventListener("load" , function() {

    lod.style.display = "flex"
    lod.style.justifyContent = "center"
    lod.style.alignItems = "center"
    body.style.overflowY = "hidden"

    nav.style.display = "none"

    setTimeout(function(){
        body.style.overflowY = "auto"
        lod.style.display = "none"
        nav.style.display = "block"
    } , 4000)
})


function timeload()  {
    cont.innerHTML -= 1

    if (cont.innerHTML == "0") {
        clearInterval(clrinrl)
    }

    if ( cont.innerHTML == "2" || cont.innerHTML == "1" || cont.innerHTML == "0") {

        cont.style.color = "red"
    }
}



let clrinrl = setInterval(timeload , 700)






let active = document.querySelectorAll(`.collapse ul li a`)

active.forEach( function (elm) {

    elm.addEventListener(`click` , function() {
        active.forEach(function (elm) {
            elm.classList.remove(`active`)
        })
        elm.classList.add(`active`)
    })
} )




