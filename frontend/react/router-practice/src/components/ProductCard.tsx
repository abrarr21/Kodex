import { useNavigate } from "react-router";
import { useCartStore } from "../context/CartContext";
import type { ProductDataType } from "../screens/Home";

type ProductCardProps = {
    product: ProductDataType;
};

const ProductCard = ({ product }: ProductCardProps) => {
    const {
        addToCart,
        removeFromCart,
        cartItems,
        increaseQuantity,
        decreaseQuantity,
    } = useCartStore();

    const navigate = useNavigate();

    let isInCart = cartItems.find((p) => p.id === product.id);

    return (
        <div className="flex max-w-sm flex-col overflow-hidden rounded-2xl bg-slate-300 shadow-md transition hover:shadow-lg">
            <div
                onClick={() => navigate(`/product/${product.id}`)}
                // onClick={() => console.log(product.id)}
                className="h-48 w-full cursor-pointer overflow-hidden bg-gray-200"
            >
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="truncate text-lg font-semibold">
                    {product.title}
                </h2>
                <p className="line-clamp-3 text-sm text-gray-600">
                    {product.description}
                </p>
                <div className="text-xs text-gray-500">
                    Category: {product.category}
                </div>
                <div className="text-lg font-bold text-gray-900">
                    ₹{product.price}
                </div>

                {/* Buttons */}
                <div className="mt-3 flex gap-2">
                    {isInCart ? (
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => decreaseQuantity(product.id)}
                                className="cursor-pointer rounded bg-red-500 px-3 text-white"
                            >
                                -
                            </button>

                            <p>{isInCart.quantity}</p>

                            <button
                                onClick={() => increaseQuantity(product.id)}
                                className="cursor-pointer rounded bg-green-500 px-3 text-white"
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => addToCart(product)}
                            className="flex-1 cursor-pointer rounded-lg bg-green-500 py-1 text-white"
                        >
                            Add to Cart
                        </button>
                    )}

                    {isInCart && (
                        <button
                            onClick={() => removeFromCart(product.id)}
                            className="flex-1 cursor-pointer rounded-lg bg-red-500 py-1 text-white"
                        >
                            Remove
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
