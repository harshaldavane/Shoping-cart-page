let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('#navbar .logo .navigation-links');
let bgBackground = document.querySelector('body');
let cart =document.querySelector('.onclick-btn');
let pop_box =document.querySelector('.profile-cart .modal');
let plus=document.querySelector(".sign-plus");
let minus=document.querySelector('.sign-minus');
let calculation=document.querySelector("#num");
// let border =document.querySelector('.profile-cart .modal .border');

menu.onclick = () => {
     menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    // bgBackground.classList.toggle('');
}

cart.onclick = () => {
    pop_box.classList.toggle('popup');
    
}

// logic for calculation card

plus.onclick = () => { 
         let counts = document.querySelector(".num").innerHTML;
         let total = parseInt(counts) + 1;         
         document.querySelector(".num").innerHTML=total;
         document.querySelector(".cart-num-ad").innerHTML=total;
};

minus.onclick = () => { 
    let counts = document.querySelector(".num").innerHTML;
    if(counts <= 0){
    let total = parseInt(counts);         
    document.querySelector(".num").innerHTML=total;
    }
    else{
        let total = parseInt(counts) - 1;         
        document.querySelector(".num").innerHTML=total;
        document.querySelector(".cart-num-ad").innerHTML=total;
    }
};

$(function () {
    "use strict";    
    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });   
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });
    
});

$(".cart-product").hide();
$(".plus").click(() => {
     if($(".num").text() == 0)
      {  
      $(".cart-product").hide();
      }
     else
      {
        $(".cart-product").show();    
      }
    });

