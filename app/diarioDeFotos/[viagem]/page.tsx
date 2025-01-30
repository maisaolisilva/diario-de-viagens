'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './diario.module.css';

interface Image {
  id: string;
  src: string;
}

export default function Diario() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const nomeViagem = decodeURIComponent(searchParams.get('nome') || '');
  const viagem = pathname.split('/').pop();
  const [imagens, setImagens] = useState<Image[]>([]);
  const [imagemExpandida, setImagemExpandida] = useState<Image | null>(null);
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento

  useEffect(() => {
    if (!viagem) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/getImages?folder=${viagem}`);
        const data = await response.json();
        setImagens(data);
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
      } finally {
        setLoading(false); // Finaliza carregamento independentemente do resultado
      }
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

      {/* Exibe mensagem se ainda estiver carregando */}
      {loading && <p className={styles.mensagem}>Carregando fotos...</p>}

      {/* Exibe mensagem caso não haja imagens disponíveis */}
      {!loading && imagens.length === 0 && (
        <p className={styles.mensagem}>Não há fotos disponíveis para visualização.</p>
      )}

      {/* Exibe galeria de fotos apenas se houver imagens */}
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
