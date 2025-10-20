import React from 'react';
import './Cart.css'

const Cart = ({cart , handleremoveFromCart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map(bottle=> <div key={bottle.id}> 
                    <img src={bottle.img} alt="" />
                    <button onClick={handleremoveFromCart}>x</button>
                </div>)
            }
        </div>
    );
};

export default Cart;