//1..

document.addEventListener("DOMContentLoaded", function(){

particlesJS("particles-js", {

particles:{
number:{value:90},

size:{value:3},

line_linked:{
enable:true,
distance:150,
color:"#ffffff"
},

move:{speed:2}
}

});

});




//2..

// particlesJS("particles-js", {

// particles:{
// number:{value:90},

// color:{value:"#00c2ff"},

// shape:{type:"circle"},

// size:{value:3},

// line_linked:{
// enable:true,
// distance:150,
// color:"#00c2ff",
// opacity:0.4,
// width:1
// },

// move:{
// enable:true,
// speed:1
// }

// },

// interactivity:{
// events:{
// onhover:{
// enable:true,
// mode:"grab"
// },
// onclick:{
// enable:true,
// mode:"push"
// }
// }
// }

// });


//3.. 

// particlesJS("particles-js",{

// particles:{

// number:{value:90},

// // color:{value:"#00c2ff"},
// color:{value:["#00c2ff","#00ff6a","#9b59ff"]},

// shape:{type:"circle"},

// opacity:{value:0.7},

// size:{value:3},

// line_linked:{
// enable:true,
// distance:150,
// color:"#00c2ff",
// opacity:0.4,
// width:1
// },

// move:{
// enable:true,
// speed:2
// }

// },

// interactivity:{
// events:{
// onhover:{
// enable:true,
// mode:"grab"
// },
// onclick:{
// enable:true,
// mode:"push"
// }
// }
// }

// });


//4....

// particlesJS("particles-js", {

// particles: {

// number: {
// value: 120,
// density: {
// enable: true,
// value_area: 900
// }
// },

// color: {
// value: "#00c2ff"
// },

// shape: {
// type: "circle"
// },

// opacity: {
// value: 0.6
// },

// size: {
// value: 3,
// random: true
// },

// line_linked: {
// enable: true,
// distance: 150,
// color: "#00c2ff",
// opacity: 0.4,
// width: 1
// },

// move: {
// enable: true,
// speed: 1.5,
// direction: "none",
// random: false,
// straight: false,
// out_mode: "out"
// }

// },

// interactivity: {

// detect_on: "canvas",

// events: {

// onhover: {
// enable: true,
// mode: "grab"
// },

// onclick: {
// enable: true,
// mode: "push"
// },

// resize: true
// },

// modes: {

// grab: {
// distance: 180,
// line_linked: {
// opacity: 1
// }
// },

// push: {
// particles_nb: 4
// }

// }

// },

// retina_detect: true

// });

const canvas = document.getElementById("projects-bg");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<100;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.8,
vy:(Math.random()-0.5)*0.8
});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0 || p.x>canvas.width) p.vx*=-1;
if(p.y<0 || p.y>canvas.height) p.vy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#00c2ff";
ctx.fill();

particles.forEach(p2=>{

let dx=p.x-p2.x;
let dy=p.y-p2.y;
let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<120){

ctx.beginPath();
ctx.moveTo(p.x,p.y);
ctx.lineTo(p2.x,p2.y);
ctx.strokeStyle="rgba(0,194,255,0.15)";
ctx.stroke();

}

});

});

requestAnimationFrame(animate);

}

animate();

}