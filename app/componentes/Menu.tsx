import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './menu.module.css';

export default function Menu() {
  const router = useRouter();

  return (
    <div className="dropdown">
      <button className={styles.botao} type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Minhas Viagens
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/viagens/santiago">Santiago</Link>
        </li>
        <li>
          <Link href="/viagens/macae">Macaé</Link>
        </li>
      </ul>
    </div>
  );
}