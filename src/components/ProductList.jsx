"use client";

import { useEffect } from "react";
import styles from "../app/styles/ProductList.module.css";
import ProductCard from "./ProductCard";
import { useGetPizzasHook } from "@/hooks/pizza";

const ProductList = () => {
  const { data: pizzas, isLoading, error } = useGetPizzasHook();

  useEffect(() => {
    console.log("Fetched pizzas:", pizzas);
    
  }, [pizzas]);

  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load pizzas</p>;

  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Whether you're into cheesy, meaty, spicy, or veggie — we've got a pizza for every craving. 
        Dive into our delicious range and find your new favorite slice today!
      </p>

      <div className={styles.wrapper}>
        {pizzas?.map((pizza, index) => (
          <ProductCard
            key={pizza.pizzaId}
            id={pizza.pizzaId}
            title={pizza.name}
            price={pizza.price}
            description={pizza.description}
            // image={pizza.image} // Uncomment this when real images are available
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
