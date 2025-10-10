function solve() {
   const addButtons = document.querySelectorAll('.add-product');
   const textarea = document.querySelector('textarea');
   const checkoutButton = document.querySelector('.checkout');
   
   const cart = [];
   let totalPrice = 0;
   
   for (let button of addButtons) {
      button.addEventListener('click', function(event) {
         const productElement = event.target.closest('.product');
         const productTitle = productElement.querySelector('.product-title').textContent;
         const productPrice = Number(productElement.querySelector('.product-line-price').textContent);
         
         textarea.value += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
         
         if (!cart.includes(productTitle)) {
            cart.push(productTitle);
         }
         
         totalPrice += productPrice;
      });
   }
   
   checkoutButton.addEventListener('click', function() {
      const productList = cart.join(', ');
      textarea.value += `You bought ${productList} for ${totalPrice.toFixed(2)}.`;
      
      for (let button of addButtons) {
         button.disabled = true;
      }
      checkoutButton.disabled = true;
   });
}