import Card from "./components/Cards/Card";

const cardData = [
    {
        image: "https://cdn.mos.cms.futurecdn.net/NtgamzDpR5aAymF3K6S7UN.jpg",
        title: "Laptop",
        category: "Electronics",
        price: 599.99,
        btn: "Add to Cart",
    },
    {
        image: "https://sm.ign.com/ign_in/news/s/sony-offic/sony-officially-reveals-ps5-pro-during-playstation-5-technic_qw2k.jpg",
        title: "Play Station 5",
        category: "Gaming",
        price: 389.99,
        btn: "Add to Cart",
    },
    {
        image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/26487736/2025/4/28/deba81e3-e402-4dd7-9835-9db3fd7816e21745835205600-NISARA-Men-Blue-Seduction-Long-Lasting-Eau-De-Parfum---100ml-1.jpg",
        title: "Long lasting perfume",
        category: "Grooming",
        price: 149.99,
        btn: "Add to Cart",
    },
];

function App() {
    return (
        <main>
            <h1>Our Products</h1>
            <div className="mainContainer">
                {cardData.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        btn={item.btn}
                    />
                ))}
            </div>
        </main>
    );
}

export default App;
