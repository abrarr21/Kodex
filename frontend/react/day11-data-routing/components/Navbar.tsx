import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="flex h-[10%] items-center justify-between bg-gray-950 px-4 py-2 text-white">
            <div>
                <h1>Logo</h1>
            </div>

            <div className="flex gap-10 text-lg">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={() => navigate("/auth")}
                    className="cursor-pointer rounded-md bg-red-100 p-2 text-black"
                >
                    Login
                </button>
                <button
                    onClick={() => navigate("/auth")}
                    className="cursor-pointer rounded-md bg-red-100 p-2 text-black"
                >
                    Signup
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
