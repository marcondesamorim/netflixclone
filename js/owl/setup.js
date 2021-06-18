$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

let mensagem = document.querySelector(".mensagem") ;

// mostra a mensagem
function showMessage(){   
   mensagem.style.display = "block";   
 }
// esconde a mensagem
function hideMessage(){
  mensagem.style.display = "none"; 
}