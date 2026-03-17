import { useState } from "react";

type Data = {
    name: string;
    email: string;
    password: string;
    mobile: string;
};

function OptimizedWay() {
    const [formValues, setFormValues] = useState<Data>({
        name: "",
        email: "",
        password: "",
        mobile: "",
    });

    let [arr, setArr] = useState<Data[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log(formValues);

        setArr([...arr, formValues]);
        console.log("arr -> ", arr);
        setFormValues({
            name: "",
            email: "",
            password: "",
            mobile: "",
        });
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
                            value={formValues.name}
                            name="name"
                            onChange={handleChange}
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
                            value={formValues.email}
                            name="email"
                            onChange={handleChange}
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
                            value={formValues.password}
                            name="password"
                            onChange={handleChange}
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
                            value={formValues.mobile}
                            name="mobile"
                            onChange={handleChange}
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

            <div>
                <div className="text-white text-2xl">Name</div>
                {arr.map((elem, index) => (
                    <h1 className="text-white" key={index}>
                        {elem.name}
                    </h1>
                ))}
            </div>
        </div>
    );
}

export default OptimizedWay;
