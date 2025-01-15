import Link from 'next/link';
import styles from './menu.module.css';

export default function Menu() {

  return (
    <div className="dropdown">
      <button className={styles.botao} type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Minhas Viagens
      </button>
      <ul className="dropdown-menu menu" >
        <li className={styles.item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link href="/viagens/santiago">Santiago</Link>
        </li>
        <li className={styles.item}>
          <Link href="/viagens/macae">Macaé</Link>
        </li>
      </ul>
    </div>
  );
}