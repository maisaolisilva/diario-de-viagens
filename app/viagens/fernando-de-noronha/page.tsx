'use client';

import Card from '@/app/componentes/Card';
import styles from '../page.module.css';
import Link from 'next/link';
import AdSense from '@/app/componentes/AdSense';

export default function Viagem() {
  return (
    <main>
      <Card titulo="Fernando de Noronha, PE" url="/fernando-de-noronha.jpg" />
      <div className={styles.texto}>
        <h2 className={styles.titulo}>Explorando Fernando de Noronha: Abril de 2021</h2>
        <p>
          Visitar Fernando de Noronha foi a realização de um sonho. A experiência foi tão marcante que, sem dúvida, pretendo voltar. Apesar dos custos altos, a beleza da ilha compensa cada centavo investido.
        </p>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Planejamento</h3>
          <p className={styles.pergunta}>O que devo saber antes de viajar para Fernando de Noronha?</p>
          <p>
            Antes de viajar, é importante pagar todas as taxas exigidas para entrada na ilha. Isso pode ser feito pela internet, garantindo mais tranquilidade ao chegar no local.
          </p>
          <br />
          <p className={styles.pergunta}>Como chegar na Vila dos Remédios?</p>
          <p>
            Após desembarcar no aeroporto de Fernando de Noronha, que é pequeno, você pode seguir para a Vila dos Remédios, onde estão localizados muitos comércios e pontos de hospedagem. Apesar de haver algumas construções abandonadas pelo caminho, a vila é muito bonita e acolhedora.
          </p>
          <br />
          <p className={styles.pergunta}>Qual a melhor forma de se locomover na ilha?</p>
          <p>
            A ilha é relativamente pequena, então você pode alugar um Buggy para facilitar a locomoção ou optar por caminhar. Ambas as opções permitem aproveitar ao máximo as paisagens de Noronha.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Atrações</h3>
          <p className={styles.pergunta}>O que esperar das praias de Fernando de Noronha?</p>
          <p>
            Cada praia em Noronha é mais linda que a anterior, com vistas de tirar o fôlego. Além disso, o pôr do sol é absolutamente espetacular e um dos momentos mais mágicos da viagem.
          </p>
          <br />
          <p className={styles.pergunta}>Como ver golfinhos em Fernando de Noronha?</p>
          <p>
            Para observar golfinhos, você pode alugar um pequeno barco na Praia do Porto. É uma experiência incrível e vale muito a pena.
          </p>
          <br />
          <p className={styles.pergunta}>O passeio de barco é obrigatório?</p>
          <p>
            O passeio de barco não é essencial. Ele oferece uma vista das praias de outro ângulo e faz apenas uma parada para banho na Praia do Sancho. Para quem busca economizar, o aluguel de um barco menor pode ser mais vantajoso.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Dicas e Observações</h3>
          <p className={styles.pergunta}>Quais são as principais dicas para quem vai pela primeira vez?</p>
          <p>
            Garanta que todas as taxas necessárias sejam pagas antes da viagem, para evitar contratempos ao chegar. A receptividade do povo local e a beleza natural tornam a experiência inesquecível, mas é importante planejar bem o orçamento devido aos valores elevados.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Diário de fotos</h3>
          <p className={styles.pergunta}>Gostaria de conferir outras fotos tiradas nessa viagem? Confira no link a seguir:</p>
          <br />
          <Link href={{
          pathname: '/diarioDeFotos/fernando-de-noronha',
          query: { nome: encodeURIComponent('Fernando de Noronha') },
        }} className={styles.link}>Diário de fotos</Link>
        </section>
      </div>
    </main>
  );
}
