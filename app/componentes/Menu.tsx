'use client';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import styles from './menu.module.css';

export default function Dropdown() {
  
  return (
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
          <Link className={styles.item} href="/viagens/macae">Macae</Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
