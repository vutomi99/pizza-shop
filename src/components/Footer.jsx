import Image from "next/image";
import styles from "../app/styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/image/bg.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          REAL FIRE. REAL FLAVOUR. THIS ISN’T JUST PIZZA, IT’S PASSION.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
         
         <p className={styles.text}>
            45 Rivonia Road, Sandton
            <br /> Johannesburg, 2196
            <br /> (011) 456-7890
          </p>
        
          <p className={styles.text}>
            101 Steve Biko Road, Hatfield
            <br /> Pretoria, 0028
            <br /> (012) 345-6789
          </p>
        </div>
        
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY TO FRIDAY
            <br /> 08:00 – 21:00
          </p>
          <p className={styles.text}>
            SATURDAY & SUNDAY
            <br /> 10:00 – 23:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
