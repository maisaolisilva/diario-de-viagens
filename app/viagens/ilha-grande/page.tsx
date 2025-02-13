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
          <p className={styles.pergunta}>É necessário reservar hospedagem com antecedência?</p>
          <p>
            Na alta temporada, sim. As pousadas costumam lotar rapidamente, então é melhor garantir sua reserva com antecedência.
          </p>
          <br />
          <p className={styles.pergunta}>Qual a melhor forma de chegar em Ilha Grande?</p>
          <p>
            Há três principais pontos de partida para chegar na ilha: Angra dos Reis, Mangaratiba e Conceição de Jacareí. Conceição de Jacareí é a opção mais rápida, com travessias curtas e vários horários disponíveis, apesar de ter poucos estacionamentos. O valor da travessia varia entre R$50,00 e R$60,00 por pessoa.
          </p>
          <br />
          <p className={styles.pergunta}>É fácil encontrar transporte na ilha ou precisa agendar com antecedência?</p>
          <p>
            Não precisa agendar. Os barcos saem com frequência, e a locomoção pode ser feita a pé ou com transporte marítimo.
          </p>
          <br />
          <p className={styles.pergunta}>As trilhas são bem sinalizadas para quem quer explorar a pé?</p>
          <p>
            Sim, há boa sinalização para os principais trajetos da ilha.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Atrações</h3>
          <p className={styles.pergunta}>Além das praias, há outras atividades imperdíveis na ilha?</p>
          <p>
            Sim! Além das praias paradisíacas, a ilha conta com belas cachoeiras e a famosa Gruta do Acaiá.
          </p>
          <br />
          <p className={styles.pergunta}>Qual foi o momento mais inesquecível da viagem?</p>
          <p>
            A visita à Gruta do Acaiá foi incrível. Em um momento, a água subiu com a onda dentro da gruta, criando um efeito mágico.
          </p>
          <br />
          <p className={styles.pergunta}>Quais passeios são imperdíveis em Ilha Grande?</p>
          <p>
            Os passeios de barco são um dos principais atrativos. O roteiro de "meia Ilha" inclui paradas na Lagoa Verde e na Lagoa Azul, dois locais de águas cristalinas perfeitos para mergulho.
          </p>
          <br />
          <p className={styles.pergunta}>O que é a Gruta do Acaiá?</p>
          <p>
            A Gruta do Acaiá é uma caverna dentro de uma propriedade particular, onde a luz do sol ilumina a água do mar criando um efeito espetacular. A entrada custa R$50,00 e o acesso é restrito a pessoas sem problemas de coluna, fobias ou obesidade, devido à descida apertada e íngreme.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Hospedagem e Alimentação</h3>
          <p className={styles.pergunta}>Tem algum restaurante ou prato típico que recomendaria?</p>
          <p>
            Sim! Na praia, uma boa pedida é comer peixe. Algumas ótimas opções de restaurantes são:
          </p>
          <ul>
            <li>Lua e Mar</li>
            <li>Rei da Moqueca</li>
            <li>Pizza na Praça</li>
          </ul>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Dicas e Observações</h3>
          <p className={styles.pergunta}>Quais erros um turista de primeira viagem pode cometer?</p>
          <p>
            Ir na alta temporada sem reservas ou sem dinheiro suficiente para aproveitar a viagem.
          </p>
          <br />
          <p className={styles.pergunta}>O que levar na mala para curtir a ilha da melhor forma?</p>
          <p>
            Roupas leves, sapatilhas de trilha e chinelo são indispensáveis para aproveitar as trilhas e as praias com conforto.
          </p>
          <br />
          <p className={styles.pergunta}>Há algum costume ou regra local que os visitantes devem respeitar?</p>
          <p>
            Assim como em qualquer outro destino, é fundamental não deixar lixo nas praias e trilhas. Além disso, há um respeito pelo silêncio noturno. Um exemplo disso foi o ensaio da bateria à noite, que terminou pontualmente às 22h, mantendo a tranquilidade do local.
          </p>
          <br />
          <p className={styles.pergunta}>O que faria diferente se voltasse à Ilha Grande?</p>
          <p>
            Conheceria as praias que ainda não tive a chance de visitar.
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
