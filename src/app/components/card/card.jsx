import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
     
        <div className={styles.imageContainer}>
          <Image src="/style.png" alt="" fill className={styles.image} />
        </div>
     
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
        22/10/2024
          </span>
          <span className={styles.category}>Culture</span>
        </div>
      
          <h1 className={styles.title }>How to invest in real estate for beginners and maximize your return</h1>
      
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc}>orem ipsum dolor sit amet consectetur, adipisicing elit. Nam totam, ab quibusdam natus temporibus odit ea, maiores aliquam doloribus molestiae blanditiis. Nulla necessitatibus veniam esse, voluptatum voluptatem iure atque minima.</div>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;