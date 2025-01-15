
import styles from "./menu.module.css";
import { useEffect, useState } from "react";

export default function Menu() {
  const [pathname, setPathname] = useState("");

  //garante que o código que acessa o document seja acessado apenas ao lado do cliente já que document não é disponível do lado do servidor
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

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
