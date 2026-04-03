import ProductCard from "../components/ProductCard";
import { useCartStore } from "../context/CartContext";

const Cart = () => {
    const { cartItems } = useCartStore();
    return cartItems.length === 0 ? (
        <div className="h-[90%] flex justify-center items-center">
            <h1 className="text-3xl font-semibold">No Items Added</h1>
        </div>
    ) : (
        <div className="pt-12 flex gap-4 flex-wrap shrink-0 justify-center">
            {cartItems.map((elem) => {
                return <ProductCard key={elem.id} product={elem} />;
            })}
        </div>
    );
};

export default Cart;
