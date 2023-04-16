import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import {deleteShoppingCart, removeFromDb} from '../../utilities/fakedb';
import './Orders.css';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFormCart = (id) => {
        const remaining = cart.filter((product) => product.id !== id);
        
        setCart(remaining);
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='orders'>
            <div className=''>
                {
                    cart.map((product) => {
                        return (
                            <ReviewItem
                                product={product}
                                key={product.id}
                                handleRemoveFormCart={handleRemoveFormCart}>
                            </ReviewItem>
                        )
                    })
                }
            </div>
            <div className='cartContainer'>
                <Cart cart={cart}
                handleClearCart={handleClearCart}>
                     <Link to='/checkout'>
                        <button className='btnProceedCheckout'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;