import React, { Component } from 'react'
import {Provider} from 'react-redux'
import Cart from './components/cart'
import Filter from './components/filter'
import Products from './components/products'
import data from './data.json'
import store from './store'

class App extends Component {
  constructor() {
    super()
  
    this.state = {
      products:[],
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
      size: '',
      sort: '',
    }
  }

 

  // createOrder
  createOrder = (order) => {
    alert('need to save order for ' + order.name)
  }

  // add to cart method
  addToCart = (product) => {
    // init cartitems array
    const cartItems = this.state.cartItems.slice() // clone arr
    let alreadyIncart = false
    // loop through items carts
    cartItems.forEach((item) => {
      // check the product exist
      if (item.id === product.id) {
        // incerment the count
        item.count++
        alreadyIncart = true
      }
    })

    // if not exsit in cart add its
    if (!alreadyIncart) {
      cartItems.push({ ...product, count: 1 })
    }
    this.setState({ cartItems })

    // set to localstorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }

  // removeFromCart method
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice()
    this.setState({ cartItems: cartItems.filter((x) => x.id !== product.id) })
    // set to localstorage
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems.filter((x) => x.id !== product.id))
    )
  }

  //  sortproducts method
  sortProducts = (e) => {
    const sort = e.target.value
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === 'lowset'
            ? a.price > b.price
              ? 1
              : -1
            : sort === 'hightes'
            ? a.price < b.price
              ? 1
              : -1
            : a.id < b.id
            ? 1
            : -1
        ),
    }))
  }

  //  filterproducts method
  filterProducts = (e) => {
    // check the value
    if (e.target.value === '') {
      this.setState({ size: e.target.value, product: data.products })
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(e.target.value) >= 0
        ),
      })
    }
  }

  render() {
    return (
      <Provider store={store}>
        <>
          <div className='grid-container'>
            <header>
              <a href='/'>React Shoping Cart</a>
            </header>
            <main>
              <div className='content'>
                <div className='main'>
                  <Filter
                    count={this.state.products.length}
                    size={this.state.size}
                    sort={this.state.sort}
                    filterProducts={this.filterProducts}
                    sortProducts={this.sortProducts}
                  />
                  <Products
                    products={this.state.products}
                    addToCart={this.addToCart}
                  />
                </div>
                <div className='sidebar'>
                  <Cart
                    cartItems={this.state.cartItems}
                    removeFromCart={this.removeFromCart}
                    createOrder={this.createOrder}
                  />
                </div>
              </div>
            </main>
            <footer>All right is reserved.</footer>
          </div>
        </>
      </Provider>
    )
  }
}

export default App
