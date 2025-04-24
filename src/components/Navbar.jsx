"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../app/styles/Navbar.module.css";


import HomeIcon from "@mui/icons-material/Home";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/image/telephone.png" alt="" width={32} height={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>079 700 9081</div>
        </div>
      </div>

     
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

          <Image src="/image/logo.png" alt="" width={160} height={69} />

          <Link href="/auth/login" passHref>
            <li className={styles.listItem}>
              <LoginIcon style={{ marginRight: "5px" }} />
              Login
            </li>
          </Link>
        </ul>
      </div>

      {/* Right Section: Cart */}
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/image/cart.png" alt="" width={30} height={30} />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
