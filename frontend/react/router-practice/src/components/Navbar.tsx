import { House, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav className="flex h-[10%] items-center justify-between bg-gray-900 px-4 text-white shadow-lg shadow-gray-400 md:px-10 lg:px-18">
            <div>
                <NavLink
                    to="/"
                    className={`text-xl font-semibold md:text-2xl lg:text-3xl`}
                >
                    <img
                        className="h-22 w-44 object-contain brightness-200 contrast-200 invert"
                        src="/amazon-nobg.png"
                        alt=""
                    />
                </NavLink>
            </div>

            <div className="flex gap-6 md:gap-16 lg:gap-36">
                <NavLink
                    to="/home"
                    className={(data) =>
                        data.isActive ? "text-red-300" : "text-white"
                    }
                >
                    <House
                        size={24}
                        className="md:h-8 md:w-8 lg:h-[38px] lg:w-[38px]"
                    />
                </NavLink>

                <NavLink
                    to="/cart"
                    className={(data) =>
                        data.isActive ? "text-red-300" : "text-white"
                    }
                >
                    <ShoppingCart
                        size={24}
                        className="md:h-8 md:w-8 lg:h-[38px] lg:w-[38px]"
                    />
                </NavLink>
            </div>

            <div>
                <button className="text-lg font-semibold md:text-xl lg:text-2xl">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
