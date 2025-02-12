'use client';

import Card from '@/app/componentes/Card';
import styles from '../page.module.css';
import Link from 'next/link';
import AdSense from '@/app/componentes/AdSense';

export default function Viagem() {
  return (
    <main>
      <Card titulo="Ilha Grande, RJ" url="/ilha-grande.jpg" />
      <div className={styles.texto}>
        <h2 className={styles.titulo}>Explorando Ilha Grande</h2>
        <p>
          Conhecer Ilha Grande foi uma experiência incrível. O local oferece belezas naturais de tirar o fôlego, com praias paradisíacas, trilhas e passeios de barco inesquecíveis.
        </p>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Planejamento</h3>
          <p className={styles.pergunta}>Quais são as opções para chegar em Ilha Grande?</p>
          <p>
            Há três principais pontos de partida para chegar em Ilha Grande: Angra dos Reis, Mangaratiba e Conceição de Jacareí. Conceição de Jacareí é a opção mais rápida, com travessias mais curtas e vários horários disponíveis, apesar de ter poucos estacionamentos. O valor da travessia varia entre R$50,00 e R$60,00 por pessoa.
          </p>
          <br />
          <p className={styles.pergunta}>Onde é o principal ponto de chegada na ilha?</p>
          <p>
            A maioria dos barcos desembarca na Vila do Abraão, onde há muitas pousadas, restaurantes e vida noturna. Para conhecer outros pontos da ilha, é necessário negociar transporte com marinheiros locais.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Atrações</h3>
          <p className={styles.pergunta}>Quais passeios são imperdíveis em Ilha Grande?</p>
          <p>
            Os passeios de barco são um dos principais atrativos. O roteiro de "meia Ilha" inclui paradas na Lagoa Verde e na Lagoa Azul, dois locais de águas cristalinas perfeitos para mergulho. 
          </p>
          <br />
          <p className={styles.pergunta}>O que é a Gruta do Acaiá?</p>
          <p>
            A Gruta do Acaiá é uma caverna dentro de uma propriedade particular, onde a luz do sol ilumina a água do mar criando um efeito espetacular. A entrada custa R$50,00 e o acesso é restrito a pessoas sem problemas de coluna, fobias ou obesidade, devido à descida apertada e íngreme.
          </p>
          <br />
          <p className={styles.pergunta}>Como se locomover na Ilha Grande?</p>
          <p>
            Não há veículos comuns para locomoção na ilha. O transporte é feito exclusivamente a pé ou de barco, com exceção de veículos de emergência, como ambulâncias e caminhões de lixo. Existem trilhas para diversos pontos turísticos, exigindo disposição dos visitantes.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Dicas e Observações</h3>
          <p className={styles.pergunta}>Quais são as principais dicas para aproveitar a viagem?</p>
          <p>
            É importante levar dinheiro em espécie, pois os preços na ilha são elevados e, embora aceitem cartões e Pix, alguns locais podem ter dificuldades com sinal de internet. Para economizar, considerar visitar na baixa temporada, quando os preços são mais acessíveis.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Diário de fotos</h3>
          <p className={styles.pergunta}>Quer conferir outras fotos dessa viagem? Veja no link abaixo:</p>
          <br />
          <Link href={{
          pathname: '/diarioDeFotos/ilha-grande',
          query: { nome: encodeURIComponent('Ilha Grande') },
        }} className={styles.link}>Diário de fotos</Link>
        </section>
      </div>
    </main>
  );
}
