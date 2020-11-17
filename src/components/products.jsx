import React, { Component } from 'react'
import formatCurrency from '../utils'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productsActions'

class products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null,
    }
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  // openModal method
  openModal = (product) => {
    this.setState({ product })
  }

  // closeModal
  closeModal = () => {
    this.setState({ product: null })
  }
  render() {
    const { product } = this.state
    return (
      <div>
        <Fade bottom cascade={true}>
          {!this.props.products ? (
            <div>loading...</div>
          ) : (
            <ul className='products'>
              {this.props.products.data.map((product) => (
                <li key={product._id}>
                  <div className='product'>
                    <a
                      href={'#' + product._id}
                      onClick={() => this.openModal(product)}>
                      <img src={product.image} alt={product.title} />
                      <p>{product.title}</p>
                    </a>
                    <div className='product-price'>
                      <div>{formatCurrency(product.price)}</div>
                      <button
                        onClick={() => this.props.addToCart(product)}
                        className='btn primary'>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Fade>
        {/* show modal product */}
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className='close-modal' onClick={this.closeModal}>
                x
              </button>
              <div className='product-details'>
                <img src={product.image} alt={product.title} />
                <div className='product-details-dsc'>
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>
                    <strong>{product.description}</strong>
                  </p>
                  <p>
                    Avaiable Sizes:{' '}
                    {product.availableSizes.map((x) => (
                      <span key={x}>
                        {' '}
                        <button className='btn'>{x} </button>
                      </span>
                    ))}
                  </p>
                  <div className='product-price'>
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      className='btn primary'
                      onClick={() => {
                        this.props.addToCart(product)
                        this.closeModal()
                      }}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    )
  }
}

export default connect((state) => ({ products: state.products.items }), {
  fetchProducts,
})(products)
