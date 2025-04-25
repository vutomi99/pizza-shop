import Image from "next/image";
import Link from "next/link";
import styles from "../app/styles/ProductCard.module.css";

const ProductCard = ({ id, title, price, description }) => {
  return (
    <Link href={`/product/${id}`} className={styles.container}>
      <div className={styles.imageContainer}>
      <Image
      src="/image/pizza.jpeg"
      alt={`Image of ${title} pizza`}
      className={styles.image}
      layout="fill"
      objectFit="cover"
    />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.price}>R{price}</span>
      <p className={styles.desc}>{description}</p>
    </Link>
  );
};

export default ProductCard;
