import { useForm } from "react-hook-form";
import type { LoginData } from "./Login";
import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export type RegisterData = LoginData & {
    name: string;
};

const Register = () => {
    const { setRegisteredUsers, registeredUser } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<RegisterData>({
        mode: "onChange",
    });

    const handleSubmitForm = (data: RegisterData) => {
        const newUser = [...registeredUser, data];
        setRegisteredUsers(newUser);
        localStorage.setItem("registeredUser", JSON.stringify(newUser));
        reset();
        toast.success("User created", {
            position: "bottom-right",
            duration: 2000,
        });
    };
    return (
        <div className="bg-bg-primary flex h-screen items-center justify-center">
            <form
                onSubmit={handleSubmit(handleSubmitForm)}
                className="w-full max-w-md space-y-6 rounded-xl bg-white p-5 shadow-2xl"
            >
                <h2 className="text-primary mb-8 text-center text-2xl font-semibold">
                    New Account
                </h2>
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-1 block font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            {...register("name", {
                                required: "Name is required",
                            })}
                            id="name"
                            type="text"
                            className="input-field placeholder:text-muted w-full rounded-lg px-4 py-3 text-base"
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p className="mt-2 text-xs text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1 block font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            id="email"
                            type="email"
                            className="input-field placeholder:text-muted w-full rounded-lg px-4 py-3 text-base"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="mt-2 text-xs text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-1 block font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is require",
                                minLength: {
                                    value: 6,
                                    message: "Minimum 6 characters",
                                },
                            })}
                            id="password"
                            type="password"
                            className="input-field placeholder:text-muted w-full rounded-lg px-4 py-3 text-base"
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <p className="mt-2 text-xs text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                </div>
                <button
                    disabled={!isValid}
                    type="submit"
                    className="mt-6 w-full cursor-pointer rounded-lg bg-indigo-500 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-indigo-600"
                >
                    Sign In
                </button>

                <div className="pt-4 text-center">
                    <p className="text-muted">
                        Already have an account?{" "}
                        <NavLink
                            to="/auth"
                            className="cursor-pointer font-medium text-indigo-400 hover:text-indigo-300"
                        >
                            Login
                        </NavLink>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;
