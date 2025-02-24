'use client';

import Card from '@/app/componentes/Card';
import styles from '../page.module.css';
import Link from 'next/link';
import AdSense from '@/app/componentes/AdSense';

export default function Viagem() {
  return (
    <main>
      <Card titulo="Visconde de Mauá, RJ" url="/visconde-maua.jpg" />
      <div className={styles.texto}>
        <h2 className={styles.titulo}>Explorando Visconde de Mauá</h2>
        <p>
          Nossa terra natal! Visconde de Mauá, ou "Viscochuva" e "Viscofrio" para os íntimos, é um lugar de belezas naturais, águas limpas e um clima único, onde se pode experimentar todas as estações do ano em um só dia.
        </p>
        <p>
          É o destino ideal para quem busca aventura, descanso na natureza e a tranquilidade do "barulho do nada". Há cachoeiras incríveis, trilhas para todos os níveis e opções de acesso a pé, de carro ou de moto.
        </p>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Principais Cachoeiras</h3>
          <p className={styles.pergunta}>Cachoeira do Escorrega</p>
          <p>
            Perfeita para quem gosta de aventura e belas fotos. Tem boa acessibilidade, com estacionamento particular próximo.
          </p>
          <br />
          <p className={styles.pergunta}>Cachoeira do Poço dos 7 Metros</p>
          <p>
            Ideal para aventureiros! O acesso exige uma descida por uma trilha um pouco íngreme.
          </p>
          <br />
          <p className={styles.pergunta}>Cachoeira da Santa Clara</p>
          <p>
            Boa opção para famílias com crianças. O acesso é por uma escada, mas o estacionamento é limitado.
          </p>
          <br />
          <p className={styles.pergunta}>Cachoeira dos Macacos e Santuário</p>
          <p>
            Entrada paga, mas há estacionamentos particulares disponíveis.
          </p>
          <br />
          <p className={styles.pergunta}>Cachoeira do Alcantilado</p>
          <p>
            Um conjunto de 9 quedas d'água. Entrada paga, com a primeira queda ideal para crianças. Não aceita animais de estimação, mas oferece estacionamento gratuito.
          </p>
          <br />
          <p className={styles.pergunta}>Cachoeira do Marimbondo</p>
          <p>
            Localizada no Vale do Pavão. Acesso recomendado para carros altos, 4x4 e motos, pois a descida é íngreme e o espaço para estacionar é reduzido.
          </p>
          <br />
          <p className={styles.pergunta}>Cachoeira das Esmeraldas</p>
          <p>
            Também no Vale do Pavão. Entrada custa R$15,00, com estacionamento e um bar no local.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Diário de fotos</h3>
          <p className={styles.pergunta}>Quer conferir outras fotos dessa viagem? Veja no link abaixo:</p>
          <br />
          <Link href={{
          pathname: '/diarioDeFotos/visconde-maua',
          query: { nome: encodeURIComponent('Visconde de Mauá') },
        }} className={styles.link}>Diário de fotos</Link>
        </section>
      </div>
    </main>
  );
}
