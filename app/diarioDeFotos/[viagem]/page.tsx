'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './diario.module.css';

interface Image {
  id: string;
  src: string;
}

export default function Diario() {
  const pathname = usePathname(); // Captura o caminho da URL
  const searchParams = useSearchParams(); // recupera parâmetro passados no query do componente Link
  const nomeViagem = decodeURIComponent(searchParams.get('nome') || ''); // Recupera e decodifica o nome da viagem
  const viagem = pathname.split('/').pop(); // Extrai o nome da viagem da URL
  const [imagens, setImagens] = useState<Image[]>([]);

  // Log para verificar o valor do parâmetro "nome"
  console.log('Parâmetro "nome" recebido:', searchParams.get('nome'));
  console.log('Nome da viagem decodificado:', nomeViagem);

  useEffect(() => {
    if (!viagem) return;
    const fetchImages = async () => {
      const response = await fetch(`/api/getImages?folder=${viagem}`);
      const data = await response.json();
      setImagens(data);
    };
    console.log("nome: ", nomeViagem)
    fetchImages();
  }, [viagem]);

  if (!viagem) {
    return <p>Carregando...</p>;
  }
  // Log dentro do render para verificar o fluxo
  console.log('Renderizando com nome da viagem:', nomeViagem);

  return (
    <main className={styles.diario}>
      <h1 className={styles.titulo}>Diário de Fotos - {nomeViagem}</h1>
      <div className={styles.galeria}>
        {imagens.map((img) => (
          <div key={img.id} className={styles.imagem}>
            <img src={img.src}  />
          </div>
        ))}
      </div>
    </main>
  );
}
