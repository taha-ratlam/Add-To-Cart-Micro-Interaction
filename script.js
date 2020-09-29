const button = document.querySelector('.btn');
const cart = document.querySelector('.add');

button.addEventListener('click' , () => { 
          cart.classlist.add('active');
})