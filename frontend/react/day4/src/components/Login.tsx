const Login = ({
    fn,
}: {
    fn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
    };
    return (
        <div className="w-full max-w-md mx-auto p-5 bg-blue-50 rounded-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                >
                    Login
                </button>
                <p className="mt-4 text-center text-gray-700">
                    If you are new,{" "}
                    <button
                        onClick={() => fn((prev) => !prev)}
                        className="text-black font-semibold border-b-2 border-blue-300 cursor-pointer"
                    >
                        Register
                    </button>
                </p>
            </form>
        </div>
    );
};
export default Login;
