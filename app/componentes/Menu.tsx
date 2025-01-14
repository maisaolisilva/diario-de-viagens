"use client";

import styles from "./menu.module.css";

export default function Menu() {
  return (
    <div className="dropdown">
  <button className={styles.botao} type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Minhas Viagens
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">Home</a></li>
    <li><a className="dropdown-item" href="/viagens/santiago">Santiago</a></li>
    <li><a className="dropdown-item" href="/viagens/macae">Macaé</a></li>
  </ul>
</div>
  );
}
