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
  const [imagemExpandida, setImagemExpandida] = useState<Image | null>(null);

  useEffect(() => {
    if (!viagem) return;

    const fetchImages = async () => {
      const response = await fetch(`/api/getImages?folder=${viagem}`);
      const data = await response.json();
      setImagens(data);
    };
  
    fetchImages();
  }, [viagem]);

  if (!viagem) {
    return <p>Carregando...</p>;
  }
  
  return (
    <main className={styles.diario}>
      <h1 className={styles.titulo}>Diário de Fotos</h1>
      <h2 className={styles.subtitulo}>{nomeViagem}</h2>
      <div className={styles.galeria}>
        {imagens.map((img) => (
          <div key={img.id} className={styles.imagem}>
            <img src={img.src} onClick={() => setImagemExpandida(img)} />
          </div>
        ))}
      </div>

      {/* Modal para expandir a imagem */}
      {imagemExpandida && (
        <div className={styles.overlay} onClick={() => setImagemExpandida(null)}>
          <img src={imagemExpandida.src} alt="Imagem Expandida" className={styles.imagemExpandida} />
        </div>
      )}
    </main>
  );
}
