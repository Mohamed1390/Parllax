const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains_behind = document.getElementById('mountains_behind');
const mountains_front = document.getElementById('mountains_front');
const text = document.getElementById('text');
const btn = document.getElementById('btn');

window.addEventListener('scroll' , function(){
   let value = window.scrollY;

   moon.style.top = value * .75 + 'px';
   stars.style.left = value * 3 + 'px';
   mountains_behind.style.top = value * 2 + 'px';
   mountains_front.top = value * 1 + 'px';
   text.style.left = value * 1.5 + 'px';
   btn.style.translate = value * 0.2 + 'px';
})