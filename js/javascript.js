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
