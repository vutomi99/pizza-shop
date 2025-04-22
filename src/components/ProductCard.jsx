import Image from "next/image";
import styles from "../app/styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.container}>
     <div className={styles.imageContainer}>
        <Image
            src="/image/pizza.jpeg"
            alt="Pizza"
            className={styles.image}
            layout="fill"
            objectFit="cover"
        />
        </div>

      <h1 className={styles.title}>Margherita</h1>
      <span className={styles.price}>R199.00</span>
      <p className={styles.desc}>
      A local favourite packed with bold flavour — loaded with creamy mozzarella, 
      juicy chicken, and our signature BBQ sauce
      </p>
    </div>
  );
};

export default ProductCard;
