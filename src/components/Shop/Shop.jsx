import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get the id number
        for (const id in storedCart) {
            // step 2: get added product by id 
            const addedProduct = products.find((product) => product.id === id);

            if (addedProduct) {
                // step 3: get quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product in the saved cart
                savedCart.push(addedProduct);
            }

        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])


    const addToCart = (product) => {
        let newCart = [];
        const exists = cart.find((pd) => pd.id === product.id);

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter((pd) => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop'>
            <div className='productsContainer'>
                {
                    products.map((product) => {
                        return (
                            <Product
                                product={product}
                                key={product.id}
                                addToCart={addToCart}>
                            </Product>
                        )
                    })
                }
            </div>
            <div className='cartContainer'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;