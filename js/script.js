const burger = document.getElementById('menuBar')
      menu = document.querySelector('.burguer_list')
let menuClick = 0

burger.addEventListener('click', function(){
  menu.classList.toggle('moveIn')
  menuClick++
  if(menuClick%2 != 0){
    burger.src = 'img/Close.png'
  }
  else {
    burger.src = 'img/Menu.png'
    menuClick = 0
  }
})

menu.addEventListener('click', function(){
  menu.classList.remove('moveIn')
  burger.src = 'img/Menu.png'
  menuClick = 0
})
