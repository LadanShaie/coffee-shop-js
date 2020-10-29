"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};

// CODE FOR LAB

// Add Item to cart
$('.add-to-order').on('click', () => {
  // adding item to cart with the name of coffee
  addItemToCart('coffee');
  // adding $1.50 to cart total
  incrementCartTotal(1.50);
});

// Place Order Button - add to coffee sold and reset your cart
$('#place-order').on('click', () => {
  // Get the amount of items in the cart items
  let amountSold = $('#cart-items').children().length
  // Change # of coffee's sold in HTML
  incrementCoffeeSold(amountSold);
  // Reset Cart
  resetCart();
})