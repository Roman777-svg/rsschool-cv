/**
 * @param {MouseEvent} event
 */

const btnLogin = document.querySelector('.btn-login');

const popup_container = document.querySelector('.popup_container');

// burger menu





// parentblocListmenu.insertAdjacentHTML('beforeEnd','<div class="close-btn-menu"><img src="img/close-ic.svg" alt="close-ic"></div>')



let parentBlockMenu = document.querySelector('.top-bl-1');
const parentMenuCont = document.querySelector('.menu-col');
const btnOpenMobemu = document.querySelector('.btn-mobile-menu')
const btnCloseMobemu = document.querySelector('.close-btn-menu')

// let innerHtmlBntmynu = parentBlockMenu;

// const parentblockMenu = document.querySelector('.menu-col');


btnOpenMobemu.addEventListener('click',()=>{
    parentMenuCont.classList.toggle('hidden-menu');
});

btnCloseMobemu.addEventListener('click',()=>{
    parentMenuCont.classList.toggle('hidden-menu');
});



//POPUP

const handleClick = (event) =>{
        popup_container.classList.toggle('hidden')
}
btnLogin.addEventListener('click',handleClick)




popup_container.addEventListener('click',(event) =>{
    
    if(event.target.className === 'popup_container'){
        popup_container.classList.toggle('hidden')
    }

    // console.log(event);
 })
//POPUP


 //SLIDER

// Кнопка слайдера 
 const activeDots = document.querySelector('.active-dots');
// 


// Контейнер родителя слайдер 
 let parent = document.querySelector('#parent_container');
// 



  
 const parentDots = document.querySelector('#parentDots');

 const parentDotsLast = parentDots.lastElementChild
 const parentDotsFirst = parentDots.firstElementChild

 parentDotsFirst.addEventListener('click',()=>{
    let elemsFirst = parent.firstElementChild
    parent.append(elemsFirst); 
});

 parentDotsLast.addEventListener('click',()=>{
    let elemsLast = parent.lastElementChild

   parent.prepend(elemsLast); 
});


 
 
// for (let i = 0; i < elems.children.length; i++) {
//     console.log(elems.children[i]);
//   }