const UserCard = () => {
    return (
        <div className="rounded-lg bg-[#1a1025] border border-[#e94560] overflow-hidden  mt-6">
            <img
                src="imageurl"
                alt="alt"
                className="w-full h-[30vh] object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold text-[#eaeaea]">"name"</h2>
                <p className="text-sm text-[#6b7280] mb-4">"refence"</p>
                <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-lg text-sm font-semibold cursor-pointer bg-[#e94560] hover:bg-[#c73652] text-white transition">
                        Update
                    </button>
                    <button className="flex-1 py-2 rounded-lg text-sm font-semibold cursor-pointer bg-[#0a0a0f] border border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white transition">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
