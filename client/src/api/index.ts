//export * from './user';
import categoryAPI from './category';
import productAPI from './product';
import cartAPI from './cart';

export default {
    Product() {
        return productAPI;
    },
    Category() {
        return categoryAPI;
    },
    Cart() {
        return cartAPI;
    }
}