import { Home } from "lucide-react";

const WelcomePage = () => {
    return (
        <div className="h-[90%] flex justify-center items-center">
            <h1 className="text-5xl font-semibold whitespace-nowrap">
                Welcome to the Main page, press{" "}
                <span className="inline-flex items-center">
                    <Home className="inline w-8 h-8" />
                </span>{" "}
                to get started
            </h1>
        </div>
    );
};

export default WelcomePage;
