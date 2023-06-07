const icon = document.querySelector('#icon');
const menuContainer = document.querySelector('.menu-container');
const clickMenu = document.querySelectorAll('#click-menu')

if (icon.classList.contains('fa-bars')) {
 
  menuContainer.classList.remove('show')
  menuContainer.classList.add('hide')
} 
  


icon.addEventListener('click',()=>{
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')

        menuContainer.classList.remove('hide')
        menuContainer.classList.add('show')
    } else {
        icon.classList.add('fa-bars')
        icon.classList.remove('fa-close')

        menuContainer.classList.add('hide')
        menuContainer.classList.remove('show')
        
    }
})


clickMenu.forEach(function(element) {
    element.addEventListener('click', function() {
      if(icon.classList.contains('fa-close')) {
        icon.classList.remove('fa-close');
        icon.classList.add('fa-bars');
  
        menuContainer.classList.add('hide');
        menuContainer.classList.remove('show');
      } else {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-close');
  
        menuContainer.classList.add('show');
        menuContainer.classList.remove('hide');
      }
    });
  });






