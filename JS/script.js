

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');






// ctx.fillStyle =  "#30d03d";      
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle =  "red";
// ctx.fillRect(200, 20, 150, 100);


// ctx.lineWidth = 5;
// ctx.strokeStyle =  "white";
// ctx.strokeRect(100, 200, 150, 100);

// ctx.clearRect(24, 24 , 140, 90 );

// ctx.font = "30px arial";
// ctx.fillStyle = "white";
// ctx.fillText('Hello world', 300, 300);


// ctx.lineWidth = 2;
// ctx.strokeStyle =  "purple  ";
// ctx.strokeText('Hello world', 400, 400);


// path


ctx.beginPath();
ctx.moveTo(50, 50);
ctx.fillStyle = "coral";
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.fill()

ctx.beginPath();
ctx.moveTo(200, 100);    
ctx.lineTo(250, 100);
ctx.stroke();
