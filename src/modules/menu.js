const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')
    
    const handleMenu = ()=>{
    //     if(!menu.style.transform){
    //         menu.style.transform = 'translateX(0)'
    //     }
    //     else {
    //         menu.style.transform = ''
    //     }
        menu.classList.toggle('active-menu')        
    }
    
    
    menuBtn.addEventListener('click', handleMenu)
    // closeBtn.addEventListener('click', handleMenu)

    // // for(let i=0; i < menuItems.length; i++){
    // //     menuItems[i].addEventListener('click', handleMenu)
    // // }
    // menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))

    menu.addEventListener('click',(e)=>{
        
        if(!e.target.classList.contains('active-menu') )
        {
          menu.classList.toggle('active-menu')=== false
        }
        menuItems.forEach(menuItem => menuItem.classList.toggle('ul>li>a'))        
    })
}

export default menu