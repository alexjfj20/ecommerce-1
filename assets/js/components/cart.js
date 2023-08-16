function cart (db, printProducts) {
  let cart = []

  function printCart () {
    console.log('Carrito')
    console.log(cart)
  }

  function addToCart(id, qty = 1) {
    const itemFinded = cart.find(i => i.id === id)

    if (itemFinded) {
      console.log('El producto con el id ' + id + ' ya está')
      itemFinded.qty += qty
    } else {
      console.log('El producto con el id ' + id + ' no está')
      cart.push({id, qty})
    }

    printCart()
  }

  function removeFromCart (id, qty = 1) {
    const itemFinded = cart.find(i => i.id === id)
    const result = itemFinded.qty - qty

    if (result > 0) {
      console.log('Quedan productos con el id ' + id)
      itemFinded.qty -= qty
    } else {
      console.log('No quedan productos con el id ' + id)
      cart = cart.filter(i => i.id !== id)
    }
    
    printCart()
  }

  addToCart(1)
  addToCart(2)
  addToCart(2)

  removeFromCart(2)
  removeFromCart(2)
}

export default cart