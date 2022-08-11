/**
 * @param {MouseEvent} event
 */

const btnLogin = document.querySelector('.btn-login');

const popup_container = document.querySelector('.popup_container');

// burger menu

let parentBlockMenu = document.querySelector('.top-bl-1');
let btnMenuMobile = document.querySelector('.btn-mobile-menu');


parentBlockMenu.insertAdjacentHTML('beforeEnd','<div class="btn-mobile-menu"><img src="img/solid-icone-menu.svg" alt="close-ic"></div>')


let innerHtmlBntmynu = parentBlockMenu;

const parentblockMenu = document.querySelector('.menu-col');

innerHtmlBntmynu.addEventListener('click',()=>{
     parentblockMenu.classList.toggle('hidden')
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

 //SLIDER




 
 
// for (let i = 0; i < elems.children.length; i++) {
//     console.log(elems.children[i]);
//   }