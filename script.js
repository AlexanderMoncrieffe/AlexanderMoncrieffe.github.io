document.addEventListener("DOMContentLoaded",()=>{

const hero=document.querySelector(".hero");
const image=document.querySelector(".hero-image");

if(!hero || !image) return;


let mouseX=0;
let mouseY=0;

let moveX=0;
let moveY=0;


hero.addEventListener("mousemove",(e)=>{

if(window.innerWidth < 769) return;

mouseX=(e.clientX/window.innerWidth-0.5)*70;
mouseY=(e.clientY/window.innerHeight-0.5)*70;

});


function animate(){

moveX += (mouseX-moveX)*0.08;
moveY += (mouseY-moveY)*0.08;


image.style.transform =
`translate(${-moveX}px,${-moveY}px) scale(1.12)`;


requestAnimationFrame(animate);

}


animate();


hero.addEventListener("mouseleave",()=>{

mouseX=0;
mouseY=0;

});


});
