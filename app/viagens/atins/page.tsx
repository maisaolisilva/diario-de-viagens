'use client';

import Card from '@/app/componentes/Card';
import styles from '../page.module.css';
import Link from 'next/link';
import Script from 'next/script';

export default function Viagem() {
  return (
    <main>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3489210929203210"
     crossOrigin="anonymous"></Script>
      <Card titulo="Atins, MA" url="/atins.jpg" />
      <div className={styles.texto}>
        <h2 className={styles.titulo}>Explorando Atins, MA: Maio de 2023</h2>
        <p>
          Para chegar a Atins, você já começa a viagem com uma aventura inesquecível. 
          O destino é charmoso, com ruas de areia, poucas opções de restaurantes e pousadas, mas muitas paisagens deslumbrantes e experiências incríveis.
        </p>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Planejamento</h3>
          <p className={styles.pergunta}>Como chegar a Atins?</p>
          <p>
            O trajeto para Atins já é uma experiência única. O acesso pode ser feito de barco ou por estradas de areia, tornando a viagem uma verdadeira aventura. A melhor opção é verificar as condições climáticas antes de ir.
          </p>
          <br />
          <p className={styles.pergunta}>É necessário ir com guias locais?</p>
          <p>
            Sim! Para aproveitar ao máximo a região e evitar contratempos, a melhor escolha é contratar guias locais. Eles conhecem os melhores caminhos e pontos turísticos.
          </p>
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Atrações</h3>
          <p className={styles.pergunta}>Vale a pena fazer o passeio de quadriciclo?</p>
          <p>
            Se você gosta de aventura, esse passeio é imperdível! O roteiro dura o dia todo e passa por rios, lagoas, dunas e a famosa Cachoeirinha. A experiência inclui momentos de sol, chuva e um pôr do sol mágico.
          </p>
          <br />
          <p className={styles.pergunta}>O que esperar das paisagens?</p>
          <p>
            Atins é um lugar mágico e cheio de beleza natural. As dunas de areia, lagoas e rios formam um cenário impressionante, tornando cada momento especial.
          </p>
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Dicas e Observações</h3>
          <br />
          <p className={styles.pergunta}>Contato dos melhores guias</p>
          <p>
            Abaixo, você encontrará os contatos dos guias mais recomendados para o passeio de quadriciclo:
          </p>
          <p><a href="https://www.instagram.com/luistouratins?igsh=MXA0NGxibGl5MXFlOQ==" className={styles.link}>Contato</a></p>
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Diário de fotos</h3>
          <p className={styles.pergunta}>Quer ver mais fotos dessa viagem? Confira no link abaixo:</p>
          <br />
          <Link
            href={{
              pathname: '/diarioDeFotos/atins',
              query: { nome: 'Atins' },
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
