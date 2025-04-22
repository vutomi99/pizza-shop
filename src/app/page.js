import Image from "next/image";
import styles from "./page.module.css";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Featured />
      <ProductList />
      <Footer />
    </>
  );
}
