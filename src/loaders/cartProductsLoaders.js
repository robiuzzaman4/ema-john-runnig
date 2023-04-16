import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoaders = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

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

    return savedCart;
};



export default cartProductsLoaders;