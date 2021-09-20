calculateTotal();

function calculateTotal(){
  var itemPrices = document.getElementsByClassName('cart_item_price');
  var itemQuantity = document.getElementsByClassName('quantity');
  var total = 0;
  for (var i = 0; i < itemPrices.length; i++) {
    var price = parseFloat(itemPrices[i].innerText);
    var quantity = itemQuantity[i].value;
    total = total + (price * quantity);
  }
  document.getElementsByClassName('total')[0].innerText = total;
}

/*  Checks if the dish to be added is already in the cart.
    If already in cart, its item quantity is increased by one.*/
function isInCart(dishName){
  var currCartItems = document.getElementsByClassName('cart_item_name');
  var itemQuantities = document.getElementsByClassName('quantity');
  for (var i = 0; i < currCartItems.length; i++) {
    if (currCartItems[i].innerText == dishName) {
      var count = parseInt(itemQuantities[i].value);
      itemQuantities[i].value = count + 1;
      calculateTotal();
      return true;
    }
  }
}

/*  Removes item from cart then re-calculates total*/
function removeItem(event){
  var removeButton = event.target;
  removeButton.parentElement.parentElement.remove();
  calculateTotal();
}

/*  Checks if quantity is at least 1 then re-calculates total.*/
function changeQuantity(event){
  var itemQuantity = event.target;
  if (itemQuantity.value <= 0) {
    itemQuantity.value = 1;
  }
  calculateTotal();
}

/*  Adds selected item to cart*/
var addItemButtons = document.getElementsByClassName('cartButton');
for (var i = 0; i < addItemButtons.length; i++) {
  var button = addItemButtons[i];
  button.addEventListener('click',function(event){
    var addButton = event.target;

    // Get values e.g. Name, Price
    var dishItem = addButton.parentElement;
    var dishName = dishItem.getElementsByClassName('dish_name')[0].innerText;
    var dishPrice = dishItem.getElementsByClassName('price')[0].innerText;

    //  Checks if already in cart
    if (isInCart(dishName)) {
      return;
    }

    // Get table
    var cartTable = document.getElementsByClassName('cart_table')[0];
    var cartRow = cartTable.insertRow();
    cartRow.className = "cart_item";

    // Make new cells
    var cartItemName = cartRow.insertCell(0);
    var cartItemPrice = cartRow.insertCell(1);
    var cartItemQuantity = cartRow.insertCell(2);

    // Add HTML code with values of the item added to cart e.g. dishName
    cartItemName.innerHTML = '<td><div class="cart_item_name">' + dishName + '</div><button type="button" class="removeItem">(Remove)</button></td>';
    cartItemPrice.innerHTML = '<td><div class="cart_item_price">' + dishPrice + '</div></td>';
    cartItemQuantity.innerHTML = '<td><input class="quantity" type="number" value="1"></td>';

    // Add Event Listener to the new remove button
    cartRow.getElementsByClassName('removeItem')[0].addEventListener('click',removeItem);

    // Add Event Listener to the new quantiy input
    cartRow.getElementsByClassName('quantity')[0].addEventListener('change',changeQuantity);

    calculateTotal();
  });
}

/*  Adds event listener that listens for clicks on remove button in cart which
    removes item from cart.*/
var removeItemButtons = document.getElementsByClassName('removeItem');
for (var i = 0; i < removeItemButtons.length; i++) {
  var button = removeItemButtons[i];
  button.addEventListener('click',removeItem);
}

/*  Adds event listener that listens for changes in value of item quantity in cart.*/
var itemQuantities = document.getElementsByClassName('quantity');
for (var i = 0; i < itemQuantities.length; i++) {
  var quantity = itemQuantities[i];
  quantity.addEventListener('change',changeQuantity);
}
