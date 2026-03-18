import { useRef } from "react";

type Data = {
    name?: HTMLInputElement | null;
    password?: HTMLInputElement | null;
    email?: HTMLInputElement | null;
    mobile?: HTMLInputElement | null;
};

function UseRef() {
    console.log("app rendering");

    let inpRef = useRef<Data>({});
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log(inpRef.current.name?.value);
        console.log(inpRef.current.email?.value);
        console.log(inpRef.current.password?.value);
        console.log(inpRef.current.mobile?.value);
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-slate-900 px-4">
            <div className="w-full max-w-md mx-auto p-5 bg-blue-50 rounded-lg">
                <h1 className="text-4xl font-semibold text-center mb-4">
                    Create Account
                </h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor=""
                            className="block text-sm font-medium text-gray-900 mb-1"
                        >
                            Name
                        </label>
                        <input
                            name="name"
                            ref={(e) => {
                                inpRef.current.name = e;
                            }}
                            type="text"
                            placeholder="John Wick"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor=""
                            className="block text-sm font-medium text-gray-900 mb-1"
                        >
                            Email
                        </label>
                        <input
                            name="email"
                            ref={(e) => {
                                inpRef.current.email = e;
                            }}
                            type="email"
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor=""
                            className="block text-sm font-medium text-gray-900 mb-1"
                        >
                            Password
                        </label>
                        <input
                            name="password"
                            ref={(e) => {
                                inpRef.current.password = e;
                            }}
                            type="password"
                            placeholder="••••••••"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor=""
                            className="block text-sm font-medium text-gray-900 mb-1"
                        >
                            Mobile
                        </label>
                        <input
                            name="mobile"
                            ref={(e) => {
                                inpRef.current.mobile = e;
                            }}
                            type="number"
                            placeholder="123456789"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg text-md font-semibold hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                    <p className="mt-4 text-center text-gray-700">
                        Already have an account,{" "}
                        <button className="text-black font-semibold border-b-2 border-blue-300 cursor-pointer">
                            Login
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default UseRef;
