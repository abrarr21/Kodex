import styles from "./Card.module.css";

type data = {
    image: string;
    title: string;
    category: string;
    price: number;
    btn: string;
};

const Card = ({ image, title, category, price, btn }: data) => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.cardImg}>
                <img className={styles.itemImage} src={image} alt={image} />
            </div>

            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.category}>{category}</p>
                <p className={styles.price}>$ {price}</p>
                <button className={styles.button}>{btn}</button>
            </div>
        </div>
    );
};

export default Card;
