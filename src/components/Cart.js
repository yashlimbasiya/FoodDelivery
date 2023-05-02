import React from 'react'
import { useSelector } from 'react-redux';
import FoodCard from './FoodCard';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';



const Cart = () => {
 
const cartItems = useSelector(store => store.cart.items);
const dispatch =useDispatch()
const handleClearCart =() =>{
      dispatch(clearCart())
}
  return (
    <div className="cart">
      <h1>Cart items.. ({cartItems.length}) </h1>
    <button onClick={()=>handleClearCart()}>Clear cart</button>
      {cartItems.map((item) => <FoodCard key={item.id} {...item}/>)}
      
    </div>
  )
}

export default Cart;
