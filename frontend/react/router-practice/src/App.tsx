import Navbar from "./components/Navbar";
import AppRoute from "./routes/AppRoute";

const App = () => {
    return (
        <div className=" h-screen">
            <Navbar />
            <div className="h-[90%]">
                <AppRoute />
            </div>
        </div>
    );
};

export default App;
