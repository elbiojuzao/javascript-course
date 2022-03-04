const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItens = [nav1, nav2, nav3, nav4, nav5];

//controle de animação
function navAnimation(direction1, direction2){
  navItens.forEach((nav, i) =>{
    nav.classList.replace(`slide-${direction1}-${i + 1}`,`slide-${direction2}-${i + 1}`)
  });
}

function toggleNav(){
  //togglle menu bars open close
  menuBars.classList.toggle('change');
  //togglle menu active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')){
    //animaçao in overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    //animate in - nav itens
    navAnimation('out', 'in');
  }else{
    //animaçao out overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    //animate out - nav itens
    navAnimation('in', 'out');
  }
}

//event listeners
menuBars.addEventListener('click', toggleNav);
navItens.forEach((nav) =>{
  nav.addEventListener('click', toggleNav);
});