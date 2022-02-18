let example1 = document.querySelector('#example1');
let example1h1 = document.querySelector('#example1h1');
  example1.addEventListener('keydown', function(event){
  example1h1.textContent = example1.value;
 
});
