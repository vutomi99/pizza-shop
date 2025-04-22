import Image from "next/image";
import styles from "./page.module.css";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <>
      <Featured />
      <ProductList />
    </>
  );
}
