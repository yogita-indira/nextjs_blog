import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
        22/10
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
      
          <h1>{item.title}</h1>
      
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam totam, ab quibusdam natus temporibus odit ea, maiores aliquam doloribus molestiae blanditiis. Nulla necessitatibus veniam esse, voluptatum voluptatem iure atque minima.</div>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;