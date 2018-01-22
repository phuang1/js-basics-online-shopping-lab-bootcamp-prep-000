var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random()*100)+1
  cart.push({[itemName]:itemPrice})
 
  console.log (`${itemName} has been added to your cart.`)
 
   return cart
}

function viewCart() {
  const l = cart.length;

  if (!l) {
    return console.log("Your shopping cart is empty.");
  }

  let viewCartString = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    viewCartString.push(`${item} at \$${price}`);
  }

  switch(viewCartString.length) {
    case 1:
      break;
    case 2:
      viewCartString = viewCartString.join(" and ");
      break;
    default:
      viewCartString[l-1] = "and ".concat(viewCartString[l-1]);
      viewCartString = viewCartString.join(", ");
  }

  console.log(`In your cart, you have ${viewCartString}.`);
}

function total() {
  
  let sum = 0
  
  for (let i=0; i<cart.length; i++){
    sum += cart[i]
  }
  
  return sum
}
  
    const priceList=[cart[i]]
  
    const add = (a, b) => a + b
    
    const priceListTotal = priceList.reduce(add)

    return priceListTotal
  }
  
}
/*
function removeFromCart(item) {
  
  var itemList = Object.keys(cart)
  
  if (!itemList.hasOwnProperty('item')){
    console.log('That item is not in your cart.')
  
  else {
    
  }
  
  }
  
  
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
*/