'use client';

import Card from '@/app/componentes/Card';
import styles from '../page.module.css';
import Link from 'next/link';

export default function Jalapao() {
  return (
    <main>
      <Card titulo="Jalapão, TO" url="/jalapao.jpg" />
      <div className={styles.texto}>
        <h2 className={styles.titulo}>Explorando o Jalapão, TO: Maio de 2026</h2>
        <p>
          O Jalapão é o destino perfeito para quem busca uma verdadeira expedição. Ao longo de cinco dias de aventura, 
          a viagem é marcada por cachoeiras deslumbrantes, cânions, dunas e os famosos fervedouros, exigindo disposição 
          para explorar paisagens inesquecíveis.
        </p>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Planejamento</h3>
          <p className={styles.pergunta}>Como funcionou a contratação do transporte?</p>
          <p>
            O ideal é fechar um pacote com guia, já que o trajeto é complexo. Para essa viagem, foi contratado um "pacote médio" que já incluía o roteiro e a logística da expedição em carro 4x4.
          </p>
          <br />
          <p className={styles.pergunta}>A viagem é acessível para crianças, idosos ou pessoas com mobilidade reduzida?</p>
          <p>
            Acredite, eles podem ter bastante dificuldade. Devido aos longos percursos em estradas de terra e acessos com escadas íngremes em algumas atrações, a viagem exige muita disposição física. O terceiro dia da expedição, por exemplo, foi o mais cansativo fisicamente, justamente pelo maior tempo gasto nas estradas de chão com muitas ondulações.
          </p>
          <br />
          <p className={styles.pergunta}>Existem taxas extras durante a expedição?</p>
          <p>
            Sim, algumas atrações possuem cobranças específicas não inclusas nos pacotes. Na Lagoa do Japonês, a taxa extra para entrar na gruta e fazer a sessão de fotos foi de R$ 65,00 por pessoa. Já na Cachoeira da Formiga, a taxa ambiental cobrada foi de R$ 30,00.
          </p>
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Atrações</h3>
          <p className={styles.pergunta}>Como são os Fervedouros? Enfrentou muita fila?</p>
          <p>
            Os fervedouros são encantadores e muitos possuem excelente infraestrutura, como o Fervedouro Bela Vista. Durante a expedição, visitamos também os fervedouros Macaúbas, Beija Flor, Capão Grande e Alecrim. Porém, é preciso paciência: é comum enfrentar filas, pois há um limite rigoroso de preservação que permite a entrada de apenas 10 pessoas por vez, com um tempo máximo de 20 minutos na água para cada grupo.
          </p>
          <br />
          <p className={styles.pergunta}>Vale a pena esperar o pôr do sol nas Dunas?</p>
          <p>
            As Dunas são lindas, mas o cansaço dita o ritmo. No nosso caso, chegamos cerca de 1h30 antes do pôr do sol e, como estávamos exaustos do balanço nas estradas e ainda tínhamos mais ou menos uma hora de estrada ondulada pela frente até a pousada, decidimos não esperar.
          </p>
          <br />
          <p className={styles.pergunta}>Quais são os outros destaques imperdíveis da viagem?</p>
          <p>
            O roteiro é riquíssimo! Destacam-se as cachoeiras (Escorrega Macaco, Roncadeira, das Araras, da Formiga e no Vale Encantado), a impressionante Pedra Furada e o Cânion Sussuapara. A Lagoa do Japonês é um ótimo local para passar o dia, assim como a Praia do Rio Novo.
          </p>
          <br />
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Dicas e Observações</h3>
          <p className={styles.pergunta}>Tem comida ou bebida típica que vale a pena experimentar? Qual a média de preços?</p>
          <p>
            Não deixem de provar o chá de gengibre na cachoeira da Roncadeira, é uma delícia! Na volta da Lagoa do Japonês, também vale a pena parar nas barraquinhas no caminho para comprar doces. Para as refeições principais, os restaurantes Mandala, Quilombola e Sabores do Jalapão oferecem comida maravilhosa, com um custo médio de R$ 60,00 por pessoa.
          </p>
          <br />
          <p className={styles.pergunta}>Como é a infraestrutura das hospedagens no trajeto?</p>
          <p>
            As hospedagens costumam surpreender positivamente. A expectativa que nos passaram era de que ficaríamos em pousadas bem simples e sem piscina. Porém, a Pousada Fazenda Vitória, por exemplo, surpreendeu com uma piscina excelente e suítes completas, equipadas com ar-condicionado e TV, além de um ótimo jantar e café da manhã. O roteiro também passa por ótimas pousadas em cidades base, como Mateiros (Pousada Panela de Ferro) e São Félix (Pousada Vereda Encantada).
          </p>
          <br />
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Diário de fotos</h3>
          <p className={styles.pergunta}>Quer ver mais fotos dessa viagem? Confira no link abaixo:</p>
          <br />
          <Link
            href={{
              pathname: '/diarioDeFotos/jalapao',
              query: { nome: 'Jalapao' },
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