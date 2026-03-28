import { useState } from "react";
import { SessionProvider } from "./context/SessionContext";
import SessionForm from "./components/SessionForm";
import SessionList from "./components/SessionList";

type View = "add" | "sessions";

export default function App() {
    const [view, setView] = useState<View>("add");

    const navBtnClass = (active: boolean) =>
        `px-4 py-1.5 rounded-lg text-sm font-display font-semibold transition-all duration-200 ${
            active
                ? "bg-ink-100 text-ink-900"
                : "text-ink-400 hover:text-ink-200"
        }`;

    return (
        <SessionProvider>
            <div className="grain-overlay min-h-screen">
                {/* Ambient blobs */}
                <div className="fixed top-0 left-0 w-96 h-96 bg-ink-700/10 rounded-full blur-3xl pointer-events-none" />
                <div className="fixed bottom-0 right-0 w-80 h-80 bg-sage-500/5 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <header className="border-b border-ink-800/80 backdrop-blur-sm sticky top-0 z-50 bg-ink-900/60">
                    <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-ink-100 rounded-lg flex items-center justify-center">
                                <span className="text-ink-900 text-xs font-display font-black">
                                    S
                                </span>
                            </div>
                            <h1 className="font-display font-bold text-ink-100 text-sm tracking-wide">
                                Study Planner
                            </h1>
                        </div>

                        {/* Toggle */}
                        <div className="flex items-center gap-1 bg-ink-800/60 border border-ink-700 rounded-xl p-1">
                            <button
                                onClick={() => setView("add")}
                                className={navBtnClass(view === "add")}
                            >
                                Add Session
                            </button>
                            <button
                                onClick={() => setView("sessions")}
                                className={navBtnClass(view === "sessions")}
                            >
                                Sessions
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main */}
                <main className="max-w-2xl mx-auto px-6 py-10">
                    {view === "add" ? (
                        <div className="bg-ink-800/30 border border-ink-700/60 rounded-2xl p-6 backdrop-blur-sm">
                            <SessionForm />
                        </div>
                    ) : (
                        <SessionList />
                    )}
                </main>

                {/* Footer */}
                <footer className="border-t border-ink-800/60 mt-16">
                    <div className="max-w-2xl mx-auto px-6 py-4">
                        <p className="font-mono text-xs text-ink-700">
                            Study Session Planner
                        </p>
                    </div>
                </footer>
            </div>
        </SessionProvider>
    );
}
