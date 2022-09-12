import React from "react";
function M(){

    document.querySelector('.fa-bars-staggered').addEventListener('click', mobileMenu)
    document.querySelector('.fa-bars').addEventListener('click', hideMobileMenu)
    
    function mobileMenu (){
        document.querySelector('.fa-bars-staggered').classList.add('hidden')
        document.querySelector('.fa-bars').classList.toggle('hidden')
        document.querySelector('.hamburgerMenuNav').classList.add('show');
        document.querySelector('header').classList.add('grow');
    }
    
    function hideMobileMenu(){
        document.querySelector('.fa-bars').classList.add('hidden')
        document.querySelector('.fa-bars-staggered').classList.toggle('hidden')
        document.querySelector('.hamburgerMenuNav').classList.toggle('show');
        document.querySelector('header').classList.toggle('grow')
    }
}

export default M;