const ProductDetailSkeleton = () => {
    return (
        <div className="h-full flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-6xl">
                <div className="flex flex-col md:flex-row gap-6 bg-white shadow-md md:shadow-2xl rounded-2xl overflow-hidden animate-pulse">
                    {/* Left: Image */}
                    <div className="md:w-1/2 w-full">
                        <div className="w-full h-full min-h-80 bg-gray-300" />
                    </div>

                    {/* Right: Details */}
                    <div className="md:w-1/2 w-full p-6 flex flex-col gap-4">
                        {/* Title */}
                        <div className="h-8 md:h-9 w-3/4 bg-gray-300 rounded" />

                        {/* Category */}
                        <div className="h-4 w-1/4 bg-gray-300 rounded" />

                        {/* Description */}
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-gray-300 rounded" />
                            <div className="h-4 w-5/6 bg-gray-300 rounded" />
                            <div className="h-4 w-4/6 bg-gray-300 rounded" />
                        </div>

                        {/* Meta (match text spacing exactly) */}
                        <div className="space-y-2">
                            <div className="h-4 w-1/2 bg-gray-300 rounded" />
                            <div className="h-4 w-1/3 bg-gray-300 rounded" />
                            <div className="h-4 w-1/4 bg-gray-300 rounded" />
                            <div className="h-4 w-1/2 bg-gray-300 rounded" />
                            <div className="h-4 w-2/3 bg-gray-300 rounded" />
                        </div>

                        {/* Button */}
                        <div className="mt-4 h-10 w-full md:w-35 bg-gray-300 rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSkeleton;
