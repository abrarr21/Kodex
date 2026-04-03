import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { ProductDataType } from "../screens/Home";

type CartContext = {
    cartItems: CartItem[];
    addToCart: (product: ProductDataType) => void;
    removeFromCart: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
};

type CartItem = ProductDataType & {
    quantity: number;
};

const CartStore = createContext<CartContext | null>(null);

export const useCartStore = () => {
    const context = useContext(CartStore);
    if (!context) {
        throw new Error("useCartStore must be within a CardProvider");
    }

    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: ProductDataType) => {
        setCartItems((prev) => {
            const existing = prev.find((p) => p.id === product.id);

            if (existing) {
                return prev.map((p) =>
                    p.id === product.id
                        ? { ...p, quantity: p.quantity + 1 }
                        : p,
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCartItems((prev) => prev.filter((p) => p.id !== productId));
    };

    const increaseQuantity = (productId: number) => {
        setCartItems((prev) =>
            prev.map((p) =>
                p.id === productId ? { ...p, quantity: p.quantity + 1 } : p,
            ),
        );
    };

    const decreaseQuantity = (productId: number) => {
        setCartItems(
            (prev) =>
                prev
                    .map((p) =>
                        p.id === productId
                            ? { ...p, quantity: p.quantity - 1 }
                            : p,
                    )
                    .filter((p) => p.quantity > 0), // removes when 0
        );
    };

    return (
        <CartStore.Provider
            value={{
                cartItems,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
            }}
        >
            {children}
        </CartStore.Provider>
    );
};
