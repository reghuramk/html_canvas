

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


// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.fillStyle = "coral";
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.closePath();
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(150, 50);
// ctx.lineTo(200, 200);
// ctx.moveTo(200, 200);
// ctx.lineTo(100, 200);
// ctx.stroke();


//circle

// const centreX = canvas.width / 2;
// const centreY = canvas.height / 2;
// ctx.beginPath();
// ctx.arc(centreX, centreY, 200, 0, Math.PI * 2);

//move to mouth

// ctx.moveTo(centreX + 100, centreY )

//draw the mouth

// ctx.arc( centreX, centreY, 100, 0, Math.PI, false );
// ctx.stroke();

//left eye

// ctx.moveTo(centreX - 60, centreY - 80);

// ctx.arc(centreX - 80, centreY - 80 , 20, 0, Math.PI * 2);

// ctx.stroke();

//right eye


// project

const centreX = canvas.width / 2;
const centreY = canvas.height / 2;

//start circle

ctx.beginPath();
ctx.arc(centreX, centreY - 290 , 60, 0, Math.PI * 2);
ctx.fillStyle = "green";
ctx.fill();

//text

ctx.font = "25px Gotham";
ctx.fillStyle = "white";
ctx.fillText('Start', 375, 112);

//===========================================================

//line_left

ctx.beginPath();
ctx.moveTo(357, 150);
ctx.lineTo(310, 200);
ctx.stroke();

//line_right

ctx.beginPath();
ctx.moveTo(445, 150);
ctx.lineTo(495, 205);
ctx.stroke();

//arrow_line_left

ctx.beginPath();
ctx.moveTo(310, 200);
ctx.lineTo(310, 218);
ctx.stroke();


//arrow_head_left

ctx.beginPath();
ctx.moveTo(310, 218);
ctx.lineTo(300, 218);
ctx.moveTo(300, 218);
ctx.lineTo(310, 228);
ctx.moveTo(310, 228);
ctx.lineTo(320, 218);
ctx.moveTo(320, 218);
ctx.lineTo(310, 218);
ctx.stroke();


//arrow_line_right

ctx.beginPath();
ctx.moveTo(495, 205);
ctx.lineTo(495, 220);
ctx.stroke();

//arrow_head_right

ctx.beginPath();
ctx.fillStyle =  "red";
ctx.moveTo(495, 220);
ctx.lineTo(485, 220);
ctx.moveTo(485, 220);
ctx.lineTo(495, 230);
ctx.moveTo(495, 230);
ctx.lineTo(505, 220);
ctx.moveTo(505, 220);
ctx.lineTo(495, 220);
ctx.stroke();

//===========================================================


//new paygroup circle

ctx.beginPath();
ctx.fillStyle =  "black";
ctx.arc(centreX - 90, centreY - 121 , 50, 0, Math.PI * 2);
ctx.fill();

//new paygroup text

ctx.font = "20px arial";
ctx.fillStyle =  "white";
ctx.fillText("New", 290, 270);
ctx.fillText("Paygroup", 270, 290);

//new paycode cirlce

ctx.beginPath();
ctx.fillStyle =  "black";
ctx.arc(centreX + 95 , centreY - 119 , 50, 0, Math.PI * 2);
ctx.fill();

//new paycode text

ctx.font = "20px arial";
ctx.fillStyle =  "white";
ctx.moveTo(310, 228);
ctx.fillText("New", 478, 270);
ctx.fillText("Paycode", 458, 290);

//===========================================================


//paygroup and general info line

ctx.beginPath();
ctx.moveTo(310, 329);
ctx.lineTo(310, 345);
ctx.stroke();

//paygroup and general info line arrow_head

ctx.beginPath();
ctx.moveTo(310, 345);
ctx.lineTo(300, 345);
ctx.moveTo(300, 345);
ctx.lineTo(310, 355);
ctx.moveTo(310, 355);
ctx.lineTo(320, 345);
ctx.moveTo(320, 345);
ctx.lineTo(310, 345);
ctx.stroke();

//paygroup and general info rect

ctx.beginPath();
ctx.fillStyle =  "yellow";
ctx.fillRect(200, 356, 170, 90);
ctx.fill();

//paygroup and general info text

ctx.font = "17px arial";
ctx.fillStyle =  "black";
ctx.moveTo(310, 228);
ctx.fillText("Paygroup and", 230, 390);
ctx.fillText("General Information", 208, 415);

//===========================================================

//basic details line

ctx.beginPath();
ctx.moveTo(498, 329);
ctx.lineTo(498, 345);
ctx.stroke();

//basic details arrow_head

ctx.beginPath();
ctx.moveTo(498, 345);
ctx.lineTo(488, 345);
ctx.moveTo(488, 345);
ctx.lineTo(498, 355);
ctx.moveTo(498, 355);
ctx.lineTo(508, 345);
ctx.moveTo(508, 345);
ctx.lineTo(498, 345);
ctx.stroke();


//basic details rect

ctx.beginPath();
ctx.fillStyle =  "yellow";
ctx.fillRect(420, 356, 170, 90);
ctx.fill();

//basic details text

ctx.font = "17px arial";
ctx.fillStyle =  "black";
ctx.moveTo(310, 228);
ctx.fillText("Basic Details", 450, 405);

//===========================================================

//dept,fed info line

ctx.beginPath();
ctx.moveTo(310, 446);
ctx.lineTo(310, 460);
ctx.stroke();

//dept,fed info arrow_head

ctx.beginPath();
ctx.moveTo(310, 460);
ctx.lineTo(300, 460);
ctx.moveTo(300, 460);
ctx.lineTo(310, 470);
ctx.moveTo(310, 470);
ctx.lineTo(320, 460);
ctx.moveTo(320, 460);
ctx.lineTo(310, 460);
ctx.stroke();

//dept,fed info rect

ctx.beginPath();
ctx.fillStyle =  "yellow";
ctx.fillRect(200, 471, 170, 90);
ctx.fill();

//dept,fed info text

ctx.font = "17px arial";
ctx.fillStyle =  "black";
ctx.fillText("Department, Federal", 208, 500);
ctx.fillText("Info and Bank", 235, 520);
ctx.fillText("Deposit", 260, 540);

//===========================================================

//add accumulators line

ctx.beginPath();
ctx.moveTo(498, 444);
ctx.lineTo(498, 458);
ctx.stroke();

//add accumulators arrow_head

ctx.beginPath();
ctx.moveTo(498, 458);
ctx.lineTo(488, 458);
ctx.moveTo(488, 458);
ctx.lineTo(498, 468);
ctx.moveTo(498, 468);
ctx.lineTo(508, 458);
ctx.moveTo(508, 458);
ctx.lineTo(498, 458);
ctx.stroke();

//add accumulators rect

ctx.beginPath();
ctx.fillStyle =  "yellow";
ctx.fillRect(420, 469, 170, 90);
ctx.fill();

//add accumulators text

ctx.font = "17px arial";
ctx.fillStyle =  "black";
ctx.fillText("Add Acumulators", 445, 515);

//===========================================================


//Payrole Schedule line

ctx.beginPath();
ctx.moveTo(310, 561);
ctx.lineTo(310, 577);
ctx.stroke();

//payrole Schedule arrow_head

ctx.beginPath();
ctx.moveTo(310, 345);
ctx.lineTo(300, 345);
ctx.moveTo(300, 345);
ctx.lineTo(310, 355);
ctx.moveTo(310, 355);
ctx.lineTo(320, 345);
ctx.moveTo(320, 345);
ctx.lineTo(310, 345);
ctx.stroke();

//Payrole Schedule rect

ctx.beginPath();
ctx.fillStyle =  "yellow";
ctx.fillRect(200, 650, 170, 90);
ctx.fill();

//Payrole Schedule text

ctx.font = "17px arial";
ctx.fillStyle =  "black";
ctx.moveTo(310, 228);
ctx.fillText("Payrole Schedule", 230, 390);
ctx.fillText("And Frequency", 208, 415);