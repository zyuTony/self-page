import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/bio"}>Bio</Link>
        </li>
        <li>
          <Link href={"/"}>Link 3</Link>
        </li>
      </ul>
    </nav>
  );
}
