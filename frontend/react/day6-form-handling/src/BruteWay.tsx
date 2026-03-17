import { useState } from "react";

// We are using four useState to store four input values which is very inefficient way of handling forms. Its a brute force bcz we have to create many useStates for number of input fields which is not efficient for memory
function BruteWay() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log(name, email, password, mobile);
        console.log(typeof mobile);
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
                            onChange={(e) => setName(e.target.value)}
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
                            onChange={(e) => {
                                setEmail(e.target.value);
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
                            onChange={(e) => {
                                setPassword(e.target.value);
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
                            onChange={(e) => {
                                setMobile(e.target.value);
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

export default BruteWay;
