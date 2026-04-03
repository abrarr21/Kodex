import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

export type ProductDataType = {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    category: string;
};

const Home = () => {
    const [products, setProducts] = useState<ProductDataType[]>([]);
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products");
                setProducts(res.data.products);
            } catch (error) {
                console.log("Error while fetching products: ", error);
            }
        })();
    }, []);

    // console.log("data in products -> ", products);
    return (
        <div className="pt-12 flex gap-4 flex-wrap shrink-0 justify-center">
            {products.map((elem) => {
                return <ProductCard key={elem.id} product={elem} />;
            })}
        </div>
    );
};

export default Home;
