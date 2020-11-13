import React, { Component } from 'react'
import formatCurrency from '../utils'
import  Fade  from 'react-reveal/Fade'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', address: '', showCheckout: false }
  }

  // handleInout mehtod
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // crateOrder method
  createOrder=(e)=>{
    e.preventDefault()
    // create order object
    const order={
       name:this.state.name,
       email:this.state.email,
       address:this.state.address,
       cartItems:this.props.cartItems
    }

    // send order to create order func
    this.props.createOrder(order)

  }
  render() {
    // get the items from props
    const { cartItems } = this.props
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className='cart cart-header'>cart is empty</div>
        ) : (
          <div className='cart cart-header'>
            you have {cartItems.length} in the cart{' '}
          </div>
        )}
        <div>
          <div className='cart'>
            <Fade left cascade>
            <ul className='cart-items'>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className='right'>
                      {/* show count and price */}
                      {formatCurrency(item.price)} x {item.count}{' '}
                      <button
                        className='btn primary'
                        onClick={() => this.props.removeFromCart(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </Fade>
          </div>
          {cartItems.length !== 0 && (
            <div>
              <div className='cart'>
                <div className='total'>
                  <div>
                    Total:{' '}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>
                  <button
                    onClick={() => this.setState({ showCheckout: true })}
                    className='btn primary'>
                    Proceed
                  </button>
                </div>
              </div>

              {this.state.showCheckout && (
                <div className='cart'>
                  <Fade right cascade>
                  <form onSubmit={this.createOrder}>
                    <ul className='form-container'>
                      <li>
                        <label htmlFor='email'>Email</label>
                        <input
                          type='email'
                          required
                          name='email'
                          onChange={this.handleInput}
                        />
                      </li>
                      <li>
                        <label htmlFor='name'>Name</label>
                        <input
                          type='text'
                          required
                          name='name'
                          onChange={this.handleInput}
                        />
                      </li>
                      <li>
                        <label htmlFor='addrees'>Address</label>
                        <input
                          type='text'
                          required
                          name='address'
                          onChange={this.handleInput}
                        />
                      </li>
                      <li>
                        <button className='btn primary' type='submit'>
                          CheckOut
                        </button>
                      </li>
                    </ul>
                  </form>
                  </Fade>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Cart
