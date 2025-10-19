import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {

    const [cart , setCart] = useState([]);


    const bottles = use(bottlesPromise);

    // useEFFECT
    useEffect(()=> {
        const storedCardsId = getStoreCart();
        // console.log(storedCardsId , bottles);
        const storedCart = []; 
        for(const id of storedCardsId){
            console.log(id);
            const cartBottole = bottles.find(bottle => bottle.id === id);
            if(cartBottole){
                storedCart.push(cartBottole);
            }
        }
        console.log('stored cart' , storedCart); 
        setCart(storedCart);
    } , [bottles])


    const handleAddToCart = (bottle) => {
        // console.log("bottle will be added to the cart" , bottle);
        const newCart = [...cart,bottle]; 
        setCart(newCart);

        // save the bottle id in the storage
        addToStoreCart(bottle.id)
    }

    // console.log(bottles)
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to Cart: {cart.length}</p>
            <Cart cart = {cart}></Cart>
            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id}
                         bottle={bottle}
                         handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;