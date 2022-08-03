/**
 * @param {MouseEvent} event
 */

const btnLogin = document.querySelector('.btn-login');

const popup_container = document.querySelector('.popup_container');




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