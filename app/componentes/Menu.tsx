'use client';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import styles from './menu.module.css';

export default function Dropdown() {
  
  return (
    <header className={styles.cabecalho}>
      <Menu>
        <MenuButton className={styles.botao}>Minhas Viagens</MenuButton>
        <MenuItems anchor="bottom" className={styles.lista}>
          <MenuItem >
            <Link className={styles.item} href="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link className={styles.item} href="/viagens/santiago">Chile</Link>
          </MenuItem>
          <MenuItem>
            <Link className={styles.item} href="/viagens/macae">Macaé</Link>
          </MenuItem>
          <MenuItem>
            <Link className={styles.item} href="/viagens/caraiva">Caraíva</Link>
          </MenuItem>
          <MenuItem>
            <Link className={styles.item} href="/viagens/fernando-de-noronha">Fernado de Noronha</Link>
          </MenuItem>
          <MenuItem>
            <Link className={styles.item} href="/viagens/rio-preguica">Rio Preguiça</Link>
          </MenuItem>
          <MenuItem>
            <Link className={styles.item} href="/viagens/atins">Atins</Link>
          </MenuItem>
          <MenuItem>
            <Link className={styles.item} href="/viagens/ilha-grande">Ilha Grande</Link>
          </MenuItem>
          <MenuItem>
            <Link className={styles.item} href="/viagens/visconde-de-maua">Visconde de Mauá</Link>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Link href="/comoTudoComecou" className={styles.botao}>Início da Jornada</Link>
      <Link href="/planoDeHospedagem" className={styles.botao}>Plano de Hospedagem</Link>
    </header>
  );
}