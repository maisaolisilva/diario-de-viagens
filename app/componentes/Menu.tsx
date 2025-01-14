"use client";

import styles from "./menu.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Isso só será executado no cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Retorna null durante a renderização do servidor
  }

  return (
    <div className="dropdown">
      <button className={styles.botao} type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Minhas Viagens
      </button>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" href="/">Home</Link></li>
        <li><Link className="dropdown-item" href="/viagens/santiago">Santiago</Link></li>
        <li><Link className="dropdown-item" href="/viagens/macae">Macaé</Link></li>
      </ul>
    </div>
  );
}
