'use client';

import Card from '@/app/componentes/Card';
import styles from '../page.module.css';
import Link from 'next/link';

export default function Viagem() {
  return (
    <main>
      <Card titulo="Caraíva, BA" url="/caraiva.jpg" />
      <div className={styles.texto}>
        <h2 className={styles.titulo}>Explorando Caraíva, BA: Maio de 2024</h2>
        <p>
          Caraíva é o destino ideal para quem busca descanso e tranquilidade. O local oferece uma atmosfera relaxante com muitas opções de lazer, seja de dia ou à noite.
        </p>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Planejamento</h3>
          <p className={styles.pergunta}>Como chegar a Caraíva?</p>
          <p>
            Se você pretende se hospedar em Caraíva, não é recomendado alugar um carro, pois as ruas são de areia e não há trânsito regular para automóveis. A melhor opção é chegar de táxi, Uber ou ônibus. Vale lembrar que a estrada até Caraíva é de terra e possui alguns buracos.
          </p>
          <br />
          <p className={styles.pergunta}>O que levar para Caraíva?</p>
          <p>
            Por conta das ruas de areia, é essencial levar chinelos e sapatilhas de trilha para maior conforto. Assim, você poderá explorar o local sem dificuldades.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Atrações</h3>
          <p className={styles.pergunta}>Quais atividades estão disponíveis?</p>
          <p>
            Caraíva oferece diversas atividades para todos os gostos. Há passeios de barco e Buggy, além de várias trilhas para caminhadas. Seja qual for sua escolha, a beleza do lugar é garantida.
          </p>
          <br />
          <p className={styles.pergunta}>Como é a vida noturna em Caraíva?</p>
          <p>
            À noite, Caraíva conta com restaurantes e mercadinhos, mas também oferece lugares animados para dançar e se divertir. É uma experiência para todos os gostos e bolsos.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Dicas e Observações</h3>
          <p className={styles.pergunta}>Qual é a principal característica das ruas de Caraíva?</p>
          <p>
            Todas as ruas de Caraíva são de areia, o que dá ao local um charme único e um clima aconchegante. É um convite para relaxar e caminhar sem pressa.
          </p>
        </section>
        <section>
          <h3 className={styles.subtitulo}>Diário de fotos</h3>
          <p className={styles.pergunta}>Gostaria de conferir outras fotos tiradas nessa viagem? Confira no link a seguir:</p>
          <br />
          <Link href={{
          pathname: '/diarioDeFotos/caraiva',
          query: { nome: encodeURIComponent('Caraíva') },
        }} className={styles.link}>Diário de fotos</Link>
        </section>
      </div>
    </main>
  );
}
