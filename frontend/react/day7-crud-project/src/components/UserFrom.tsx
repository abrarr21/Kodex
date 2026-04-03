function UserForm() {
    return (
        <div className="min-h-screen flex justify-center items-center px-4 bg-[#0a0a0f]">
            <div className="w-full max-w-md mx-auto p-5 rounded-lg bg-[#1a1025] border border-[#e94560]">
                <h1 className="text-4xl font-semibold text-center mb-8 text-[#e94560]">
                    Join the Club
                </h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-[#eaeaea]">
                            Villain Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Joker"
                            className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e94560] bg-[#0a0a0f] border border-[#6b7280] text-[#eaeaea]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-[#eaeaea]">
                            Movie / Anime Reference
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. The Dark Knight"
                            className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e94560] bg-[#0a0a0f] border border-[#6b7280] text-[#eaeaea]"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2 text-[#eaeaea]">
                            Image URL
                        </label>
                        <input
                            type="url"
                            placeholder="https://example.com/villain.jpg"
                            className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e94560] bg-[#0a0a0f] border border-[#6b7280] text-[#eaeaea]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 cursor-pointer rounded-lg text-md font-semibold transition bg-[#e94560] hover:bg-[#c73652] text-white"
                    >
                        Add Villain
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserForm;
