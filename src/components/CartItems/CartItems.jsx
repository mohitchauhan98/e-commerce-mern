import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import removeIcon from '../assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartItem, removeCart, getTotalCartAmount } = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
            if(cartItem[e.id] > 0){
                return <div>
                    <div className='cartitems-format cartitems-format-main'>
                    <img src = {e.image} alt = '' className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                    <p>${e.new_price * cartItem[e.id]}</p>
                    <img className = 'cartitems-remove-icon' onClick = {() => {removeCart(e.id)}} src = {removeIcon} alt =''/>
                    </div>
                    <hr />
                </div>
            }
            return null
        })}
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>Cart Totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed To Checkout</button>
            </div>
        </div>
    </div>
  )
}
export default CartItems
