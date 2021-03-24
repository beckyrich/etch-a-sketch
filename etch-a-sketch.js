// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Setup canvas for drawing
const { width, height } = canvas; // make a variable called height and width from the same properties on our canvas
const x = Math.floor(Math.random() * width);

// create random x and y starting points on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, 200);
ctx.lineTo(x, 200);
ctx.stroke();

// write a draw function

// wite a handler for the keys

// clear /shake function

// listen for arrow keys
