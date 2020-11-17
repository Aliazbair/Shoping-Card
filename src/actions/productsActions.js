import { FETCH_PRODUCTS } from '../types'

export const fetchProducts = () => async (dispatch) => {
  // get products form api

  const res = await fetch('/api/v1/products')
  const data= await res.json()
  
  
  console.log(data.data)

  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  })
}
