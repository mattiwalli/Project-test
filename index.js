const menuE1 = document.querySelector(".mobile-menu-button button")


    menuE1.addEventListener('click', ()=>{
        const mobilMenuWrapper = document.querySelector('.mobile-menu-wrapper');
        mobilMenuWrapper.classList.toggle('menu-open');
        

        console.log('click');
        
        
    });







