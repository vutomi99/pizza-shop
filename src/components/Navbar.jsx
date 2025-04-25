"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../app/styles/Navbar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "@/hooks/cart";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <div className={styles.container}>
      {/* Call section */}
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/image/telephone.png" alt="" width={32} height={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>079 700 9081</div>
        </div>
      </div>

      {/* Menu section */}
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>
              <HomeIcon style={{ marginRight: "5px" }} />
              Home
            </li>
          </Link>

          <Link href="/menu" passHref>
            <li className={styles.listItem}>
              <RestaurantMenuIcon style={{ marginRight: "5px" }} />
              Menu
            </li>
          </Link>

          <Image src="/image/logo.png" alt="Logo" width={160} height={69} />

          <Link href="/auth/login" passHref>
            <li className={styles.listItem}>
              <LoginIcon style={{ marginRight: "5px" }} />
              Login
            </li>
          </Link>
        </ul>
      </div>

      {/* Cart section */}
      <div className={styles.item}>
        <Link href="/cart" className={styles.cart}>
          <Image src="/image/cart.png" alt="Cart" width={30} height={30} />
          {cartItems.length > 0 && (
            <div className={styles.counter}>{cartItems.length}</div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
