import type { Product } from "../App";

type ItemProps = {
    data: Product;
    deleteArr: (id: number) => void;
};

const Cards = ({ data, deleteArr }: ItemProps) => {
    return (
        <div className="w-[20vw] h-[45vh] bg-gray-300 rounded-xl flex flex-col shrink-0  items-center justify-around">
            <div className="h-[50%] w-[90%]  rounded-xl">
                <img
                    className="w-full h-full object-contain"
                    src={data.image}
                    alt={data.image && data.title}
                />
            </div>

            <div className="text-black px-4">
                <h1 className="text-lg font-semibold line-clamp-1">
                    {data.title}
                </h1>
                <h3>{data.category}</h3>
                <h2 className="text-md font-bold text-green-600">
                    ${data.price}
                </h2>
            </div>
            <button
                onClick={() => {
                    deleteArr(data.id);
                }}
                className="py-2 px-4 bg-blue-300 text-black hover:bg-blue-400 cursor-pointer rounded-md font-semibold"
            >
                Remove
            </button>
        </div>
    );
};

export default Cards;
