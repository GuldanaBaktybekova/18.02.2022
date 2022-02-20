// let h1 = document.querySelector('h1');

// document.querySelector('#text').addEventListener('input', function() {
//   h1.textContent = this.value;
// });
// document.querySelector('#color').addEventListener('input', function() {
//   h1.style.color = this.value;
// });
// document.querySelector('#bg-color').addEventListener('input', function() {
//   h1.style.backgroundColor = this.value;
// });
// document.querySelector('#font-family').addEventListener('input', function() {
//   h1.style.fontFamily = this.value;
// });
// document.querySelector('#font-size').addEventListener('input', function() {
//   h1.style.fontSize = this.value + 'px';
//   this.nextSibling.textContent = h1.style.fontSize;
// });
// document.querySelector('#bold').addEventListener('input', function() {
//   if (this.checked) {
//     h1.style.fontWeight = 'bold';
//   }
//   else {
//     h1.style.fontWeight = 'normal';
//   }
// });
// document.querySelector('#italic').addEventListener('input', function() {
//   h1.style.fontStyle = this.checked ? 'italic' : 'normal';
// });
// document.querySelector('#underline').addEventListener('input', function() {
//   h1.style.textDecoration = this.checked ? 'underline' : 'none';
// });
// document.getElementsByName('border').forEach(function(input) {
//   input.addEventListener('input', function() {
//     h1.style.border = `1px ${this.value} black`;
//   });
// });
// document.querySelector('#url').addEventListener('input', function() {
//   h1.innerHTML = this.value ? `<a href="${this.value}">${h1.textContent}</a>` : h1.textContent;
// });





























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

//Short
// document.getElementsByName('border').forEach(function(input){
//   input.addEventListener('input', function(){
//     example1h1.style.border = `1px ${this.value} black`;
// });
document.querySelector('#url').addEventListener('input', function() {
  example1h1.innerHTML = this.value ? `<a href="${this.value}">${example1h1.textContent}</a>` : example1h1.textContent;
});







