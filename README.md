# React Shoping Card

# step One : create react app and make main contant and style its

1. header
1. main
1. footer

> list of task

## create filter Component

## create Card Component

## create Add Animation Component

## create Add Model Component

## create Add checkout form Component

## Make Product BackEnd

## Add Redux

## Add Redux to Products

## Add Redux to Filter

## Add Redux to Card

## Create Order

## Add Admin Section

## Publish on Heroku

| Name     | Email          |
| -------- | -------------- |
| John Doe | john@gmail.com |
| Jane Doe | jane@gmail.com |

# create product Component

- create products data.json
- import its to App.js
- make html strc
- create component folder

# create Card Component

1. create filter file
1. make section to [Count product | filter section | order section]
1. style filter file with css

### filter method

```js
//  filterproducts method
filterProducts = (e) => {
  console.log(e.target.value)
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
```

# create Card Component

1. Create branch cart-component
1. products.js
1. handle "Add To Cart" to this.props.addToCart(product)
1. app.js
1. add cartItems to state as []
1. Create addToCart(product)
1. Slice, Check product existance, add to catitems
1. Cart.js
1. define cartitems, order form this.props
1. check cartitem.lenght and show message
1. list cartitem{cartitems.lenght > 0 && (})}
1. index.css
1. style cart , cart-header, cart-item ( img,li)
1. use localsotroge on app constructor to load cart items (Josn.parse)
1. use localstorage on addToCart to save cart items

## add to card method

```js
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
}
```

## remove cart method

````js
// removeFromCart method
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice()
    this.setState({ cartItems: cartItems.filter((x) => x.id !== product.id) })
  }



## sort method

```js
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
````

## filter method

```js
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
```
