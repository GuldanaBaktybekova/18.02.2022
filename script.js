let example1 = document.querySelector('#example1');
let example1h1 = document.querySelector('#example1h1');
  example1.addEventListener('input', function(event){
  example1h1.textContent = example1.value;
 
});
let example2 = document.querySelector('#example2');
let example3 = document.querySelector('#example3');
  example2.addEventListener('input', function(event){
  example1h1.style.color = example2.value;
  example1h1.style.backgroundColor = example3.value;
});


let font = document.querySelector('#font');

  font.addEventListener('input', function(event){
  example1h1.style.fontFamily = font.value;
  
});
let range = document.querySelector('#font-size');

  range.addEventListener('input', function(event){
  example1h1.style.fontSize = range.value + 'px';
  // range.nextSibling.textContent = example1h1.style.fontSize;
});



let bold = document.querySelector('#bold');
let italic = document.querySelector('#italic');
let underline = document.querySelector('#underline');

  bold.addEventListener('input', function(event){
  example1h1.style.fontWeight = bold.checked ? 'bold' : 'normal';
 
  
});
  italic.addEventListener('input', function(event){
  example1h1.style.fontStyle = italic.checked ? 'italic' : 'normal';
 
  
});

underline.addEventListener('input', function(event){
  example1h1.style.textDecoration = underline.checked ? 'underline' : 'none';

 
  
});


document.querySelector('#none').addEventListener('input', function(){
  example1h1.style.borderStyle = "none";

});
document.querySelector('#solid').addEventListener('input', function(){
  example1h1.style.borderStyle = "solid";

});
document.querySelector('#dashed').addEventListener('input', function(){
  example1h1.style.borderStyle = "dashed";

});
document.querySelector('#dotted').addEventListener('input', function(){
  example1h1.style.borderStyle = "dotted";

});








