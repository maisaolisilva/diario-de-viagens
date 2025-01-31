'use client';

import Script from 'next/script'; // Script para Google AdSense
import Card from '@/app/componentes/Card';
import styles from '../page.module.css';
import Link from 'next/link';

export default function Viagem() {
  return (
    <main>
      {/* Script do Google AdSense */}
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3489210929203210"
        crossOrigin="anonymous"
      />

      <Card titulo="Rio Preguiça / Barreirinhas, MA" url="/rio-preguica.jpg" />
      <div className={styles.texto}>
        <h2 className={styles.titulo}>Explorando Rio Preguiça e Barreirinhas: Maio de 2023</h2>
        <p>
          Um passeio incrível pelo Rio Preguiça, seguido de uma estadia em Barreirinhas. 
          Um destino que mistura tranquilidade e agito, proporcionando experiências inesquecíveis.
        </p>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Planejamento</h3>
          <p className={styles.pergunta}>Quanto tempo dura o passeio pelo Rio Preguiça?</p>
          <p>O passeio dura aproximadamente 6 horas, com várias paradas ao longo do percurso.</p>
          <br />
          <p className={styles.pergunta}>É necessário reservar o passeio com antecedência?</p>
          <p>Sim! É recomendável reservar com antecedência para garantir disponibilidade.</p>
          <br />
          <p className={styles.pergunta}>Quais são as melhores épocas do ano para visitar a região?</p>
          <p>O período ideal para visitar é entre maio e a primeira quinzena de setembro.</p>
          <br />
          <p className={styles.pergunta}>O que levar para o passeio?</p>
          <p>É essencial levar protetor solar e repelente. Nas paradas, os estabelecimentos aceitam cartão, Pix e dinheiro.</p>
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Atrações</h3>
          <p className={styles.pergunta}>Além do Farol das Preguiças, há outras paradas no passeio pelo Rio Preguiça?</p>
          <p>Sim! O passeio conta com três paradas principais ao longo do trajeto.</p>
          <br />
          <h4 className={styles.subtitulo}>Roteiro do passeio saindo de Barreirinhas:</h4>
          <p className={styles.pergunta}>1ª Parada - Vassouras</p>
          <p>
            A primeira parada acontece na lojinha de Vassouras, onde as dunas e lagoas dos Pequenos Lençóis são as principais atrações. 
            Os visitantes podem tomar banho no rio ou fazer uma caminhada entre as montanhas de areia.  
            Um dos momentos mais divertidos da parada é a presença dos saguis, que chegam bem perto dos turistas em busca de comida.
          </p>
          <br />
          <p className={styles.pergunta}>2ª Parada - Mandacaru</p>
          <p>
            A segunda parada acontece no povoado de Mandacaru, onde está localizado o famoso Farol das Preguiças.  
            O farol tem 35 metros de altura e oferece uma vista deslumbrante do rio e do mar.  
            No local, há várias lojinhas para comprar lembrancinhas e quiosques vendendo sorvetes e bebidas.
          </p>
          <br />
          <p className={styles.pergunta}>3ª Parada - Praia de Caburé</p>
          <p>
            A última parada é na Praia de Caburé, um cenário paradisíaco onde uma estreita faixa de areia separa o Rio Preguiça do mar.  
            Essa é a parada mais longa do passeio e o local onde os turistas almoçam.  
            Há algumas opções de quiosques e restaurantes para a refeição.
          </p>
          <br />
          <p className={styles.pergunta}>Algum momento inesquecível?</p>
          <p>O passeio de quadriciclo foi uma experiência incrível e cheia de aventura!</p>
          <br />
          <p className={styles.pergunta}>É possível nadar no Rio Preguiça?</p>
          <p>Sim! Durante as paradas, há trechos do rio onde é possível nadar e se refrescar.</p>
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Dicas e Observações</h3>
          <p className={styles.pergunta}>É fácil se locomover por Barreirinhas sem carro? Tem transporte público ou aplicativos como Uber?</p>
          <p>Sim! É possível se locomover sem carro, e há opções de transporte público e aplicativos como Uber.</p>
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
