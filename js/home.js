const icon = document.querySelector('#icon');
const menuContainer = document.querySelector('.menu-container');

icon.addEventListener('click',()=>{
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')

        menuContainer.classList.remove('hide')
        menuContainer.classList.add('whow')
    } else {
        icon.classList.add('fa-bars')
        icon.classList.remove('fa-close')

        menuContainer.classList.add('hide')
        menuContainer.classList.remove('whow')
        
    }
})
