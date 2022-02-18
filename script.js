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
  
});

