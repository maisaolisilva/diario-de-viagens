'use client';

import Card from '@/app/componentes/Card';
import styles from '../page.module.css';
import Link from 'next/link';

export default function Viagem() {
  return (
    <main>
      <Card titulo="Rio Preguiça / Barreirinhas, MA" url="/rio-preguica.jpg" />
      <div className={styles.texto}>
        <h2 className={styles.titulo}>Explorando Rio Preguiça e Barreiras: Maio de 2023</h2>
        <p>
          Um passeio incrível pelo Rio Preguiça, seguido de uma estadia em Barreiras. Um destino que mistura tranquilidade e agito, proporcionando experiências inesquecíveis.
        </p>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Planejamento</h3>
          <br />
          <p className={styles.pergunta}>Vale a pena visitar o Farol das Preguiças?</p>
          <p>
            Sim! O farol é uma das principais atrações da região. Ele oferece uma vista panorâmica incrível e é cercado por uma vila cheia de lojinhas para comprar lembrancinhas.
          </p>
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Atrações</h3>
          <p className={styles.pergunta}>Como é o passeio pelo Rio Preguiça?</p>
          <p>
            O Rio Preguiça tem uma beleza natural impressionante. Navegar por ele proporciona uma experiência relaxante e uma visão única da paisagem local. É um passeio que vale muito a pena!
          </p>
          <br />
          <p className={styles.pergunta}>O que esperar de Barreiras?</p>
          <p>
            Diferente da tranquilidade do Rio Preguiça, Barreiras já é considerada uma cidade e tem muitas opções de hospedagens e restaurantes. É o lugar ideal para quem gosta de mais agito e infraestrutura completa.
          </p>
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Dicas e Observações</h3>
          <p className={styles.pergunta}>Onde se hospedar: Atins ou Barreirinhas?</p>
          <p>
            Se busca mais tranquilidade e contato com a natureza, Atins é a melhor opção. Agora, se prefere uma cidade com mais estrutura, Barreirinhas oferece diversas opções de hospedagem e lazer.
          </p>
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Diário de fotos</h3>
          <p className={styles.pergunta}>Quer ver mais fotos dessa viagem? Confira no link abaixo:</p>
          <br />
          <Link
            href={{
              pathname: '/diarioDeFotos/rio-preguica',
              query: { nome: 'Rio Preguiça / Barreirinhas' },
            }}
            className={styles.link}
          >
            Diário de fotos
          </Link>
        </section>
      </div>
    </main>
  );
}
