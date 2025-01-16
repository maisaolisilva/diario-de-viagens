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
        </MenuItems>
      </Menu>
      <Link href="/comoTudoComecou" className={styles.botao}>Início da Jornada</Link>
    </header>
  );
}
