

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 500;

ctx.fillStyle =  "#30d03d";      
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle =  "red";
ctx.fillRect(200, 20, 150, 100);


ctx.lineWidth = 5;
ctx.strokeStyle =  "white";
ctx.strokeRect(200, 200, 150, 100);

