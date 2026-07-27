import Product from "./products.type";

interface CartProduct extends Product {
    quantity: number;
}

export default CartProduct;
