import styles from "../../styles/Nav.module.css";
import Link from "next/link";
import { Header } from "..";

const Nav = () => {
  console.log(styles.nav);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
