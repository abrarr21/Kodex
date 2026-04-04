import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "../context/AuthContext.tsx";
import AppRoutes from "../routes/AppRoutes.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
    <AuthProvider>
        <AppRoutes />
        <Toaster />
    </AuthProvider>,
);
