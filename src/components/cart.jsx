import React, { Component } from 'react'
import formatCurrency from '../utils'

class Cart extends Component {
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
          </div>
          {cartItems.length !==0 && (
    <div className='cart'>
    <div className='total'>
      <div>
          Total:{' '}
        {formatCurrency(
          cartItems.reduce((a, c) => a + c.price * c.count, 0)
        )}
      </div>
      <button className='btn primary'>Proceed</button>
    </div>
  </div>

          )}
      
        </div>
      </div>
    )
  }
}

export default Cart
