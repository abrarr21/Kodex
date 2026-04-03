import { useNavigate, useParams } from "react-router";
import type { ProductDataType } from "./Home";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetailSkeleton from "./ProductDetailSkeleton";

type ExtendedProductFields = ProductDataType & {
    rating: number;
    warrantyInformation: string;
    availabilityStatus: string;
    brand: string;
};

export const ProductDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState<ExtendedProductFields>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            (async () => {
                try {
                    const res = await axios.get(
                        `https://dummyjson.com/products/${id}`,
                    );
                    console.log(res.data);
                    setSingleProduct(res.data);
                } catch (error) {
                    console.log("Error while fetching single product");
                } finally {
                    setLoading(false);
                }
            })();
        }
    }, [id]);

    if (loading) {
        return <ProductDetailSkeleton />;
    }

    if (!singleProduct) {
        return <div>No data in single product</div>;
    }

    return (
        <div className="h-full flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-6xl">
                <div className="flex flex-col md:flex-row gap-6 bg-white shadow-md md:shadow-2xl rounded-2xl overflow-hidden">
                    {/* Left: Image */}
                    <div className="md:w-1/2 w-full">
                        <img
                            src={singleProduct.images[0]}
                            alt={singleProduct.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right: Details */}
                    <div className="md:w-1/2 w-full p-6 flex flex-col gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            {singleProduct.title}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {singleProduct.category}
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            {singleProduct.description}
                        </p>

                        <div className="space-y-2 text-gray-700">
                            <p>
                                <span className="font-semibold">Brand:</span>{" "}
                                {singleProduct.brand}
                            </p>
                            <p>
                                <span className="font-semibold">Price:</span> ₹
                                {singleProduct.price}
                            </p>
                            <p>
                                <span className="font-semibold">Rating:</span>{" "}
                                ⭐ {singleProduct.rating}
                            </p>
                            <p>
                                <span className="font-semibold">Warranty:</span>{" "}
                                {singleProduct.warrantyInformation}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Availability:
                                </span>{" "}
                                {singleProduct.availabilityStatus}
                            </p>
                        </div>

                        <button
                            onClick={() => navigate("/home")}
                            className="mt-4 w-full md:w-fit px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
