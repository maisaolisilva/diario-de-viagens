"use client";

import styles from "./menu.module.css";
import { usePathname } from "next/navigation";

export default function Menu() {

  //hook para não gerar erros nos caminhos dos links do menu em ambiente de produção
  const pathname = usePathname();

  return (
    <div className="dropdown">
      <button className={styles.botao} type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Minhas Viagens
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href={pathname === "/" ? "#" : "/"}>Home</a></li>
        <li><a className="dropdown-item" href={pathname === "/viagens/santiago" ? "#" : "/viagens/santiago"}>Santiago</a></li>
        <li><a className="dropdown-item" href={pathname === "/viagens/macae" ? "#" : "/viagens/macae"}>Macaé</a></li>
      </ul>
    </div>
  );
}
