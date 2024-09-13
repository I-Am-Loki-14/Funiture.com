// Menu bar 
const navmenuimgbar =document.getElementById('nav-menu-img-bar');
console.log(navmenuimgbar);
const navlists =document.getElementById('nav-list');
console.log(navlists);

navmenuimgbar.addEventListener('click',()=>{
   navlists.classList.toggle('show');

   if (navlists.classList.contains('show')) {
          navmenuimgbar.src='./img/Close2.svg';
   } else {
          navmenuimgbar.src='./img/Menu.svg';
   }
})
// show more 
const mainrightdescriptiondeliveryimg = document.getElementById('main-right-description-delivery-img');
const mainrightdescriptiondeliveryspan=document.getElementById('main-right-description-delivery-span');

mainrightdescriptiondeliveryimg.addEventListener('click',()=>{
       mainrightdescriptiondeliveryspan.classList.toggle('showmore');

       if (mainrightdescriptiondeliveryspan.classList.contains('showmore')) {
              mainrightdescriptiondeliveryimg.src="img/ArrowBackward.svg";
       } else {
              mainrightdescriptiondeliveryimg.src="img/ArrowForward.svg";
       }

})




const mainleftuprbutton = document.querySelectorAll('.main-left-up-r button');
console.log(mainleftuprbutton);

mainleftuprbutton.forEach(button => {

       button.addEventListener('click', () => {
              console.log('button clicked');
              mainleftuprbutton.forEach(button => {
                     button.style.border = 'none';
              
              });
              button.style.border = '2px solid black';
              
       });
});



