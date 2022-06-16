const burger = document.querySelector('.js-burger');
const nav = document.querySelector('.js-nav');
const layer = document.querySelector('.js-layer');
const drop = document.querySelector('.js-drop');

burger.addEventListener('click', function(){
  burger.classList.toggle('_active');
  nav.classList.toggle('_active');
  layer.classList.toggle('_active');
});


layer.addEventListener('click', function(){
  burger.classList.remove('_active');
  nav.classList.remove('_active');
  layer.classList.remove('_active');
});

drop.addEventListener('click', function(){
  drop.classList.toggle('_active');
});
