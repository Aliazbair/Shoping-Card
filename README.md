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
