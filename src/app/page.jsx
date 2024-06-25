import Link from "next/link";
import styles from "./homepage.module.css"
import Featured from "./components/Featured/Featured";
import Menu from "./components/Menu/Menu";

import CategoryList from "./components/CategoryList/CategoryList";
import CardList from "./components/CardList/CardList";
export default function Home() {
  return (
    <div className="style.container">
<Featured/>
<CategoryList/>     <div className={styles.content}>
        <CardList/>
        <Menu />
      </div>
    </div>
  );
}