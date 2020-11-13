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

# create Add checkout form Component

## Check form

1.create branch chechout-form

1. Cart.js
   1.make cart items presisten
1. use localstorage on app constructor to load cart items
1. use localstroge on addTocart to save cart items
   1.handle click on process
1. update showCheckout state to ture on click
1. conditional rendering checkout form
1. get email, name and address required input
1. define handleInput function
1. add checkout button
1. handle onSubmit form event by this.createOrder
1. create order object and pass to parent to handle it
1. publish changes

## Add modal and animation

1.create branch animation-modal

1. show Animation
1. create fade effect from bottom for products
1. create fade left for add to cart
1. create fade right for show checkout form
1. open modal by click on produc image
1. install react-modal
   1.product.js
   1.import modal
1. set state for product to null
1. define openModal and closemodal
   1.show modal if product exist
1. create modal
1. create zoom effect for modal
   1.index.js
