import { Activity, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="min-h-screen flex justify-center items-center bg-slate-900 px-4">
            {/* {toggle ? <Login fn={setToggle} /> : <Register fn={setToggle} />} */}
            <Activity mode={toggle ? "visible" : "hidden"}>
                <Login fn={setToggle} />
            </Activity>
            <Activity mode={toggle ? "visible" : "hidden"}>
                <Register fn={setToggle} />
            </Activity>
        </div>
    );
}
export default App;
