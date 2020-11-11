import React, { Component } from 'react'
import Filter from './components/filter'
import Products from './components/products'
import data from './data.json'

class App extends Component {
  constructor() {
    super()

    this.state = {
      products: data.products,
      size: '',
      sort: '',
    }
  }
  //  sortproducts method
  sortProducts = (e) => {
    const sort = e.target.value
    this.setState(
      (state)=>({
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
      })
    )
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
                <Products products={this.state.products} />
              </div>
              <div className='sidebar'>card items</div>
            </div>
          </main>
          <footer>All right is reserved.</footer>
        </div>
      </>
    )
  }
}

export default App
