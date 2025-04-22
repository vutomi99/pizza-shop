import styles from "../app/styles/ProductList.module.css";
import ProductCard from "./ProductCard";


const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
  Whether you're into cheesy, meaty, spicy, or veggie — we've got a pizza for every craving. 
  Dive into our delicious range and find your new favorite slice today!
</p>

      <div className={styles.wrapper}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
      </div>
    </div>
  );
};

export default ProductList;
