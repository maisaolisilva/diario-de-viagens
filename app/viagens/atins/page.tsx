'use client';

import Card from '@/app/componentes/Card';
import styles from '../page.module.css';
import Link from 'next/link';

export default function Viagem() {
  return (
    <main>
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
          <p className={styles.pergunta}>Qual é a melhor forma de chegar a Atins?</p>
          <p>
            A melhor maneira de chegar é com guias locais em carros 4x4, garantindo um trajeto mais seguro e confortável.
          </p>
          <br />
          <p className={styles.pergunta}>O trajeto é tranquilo ou tem desafios?</p>
          <p>
            A viagem até Atins é cheia de desafios, com terrenos arenosos e travessias que tornam a experiência ainda mais emocionante.
          </p>
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Atrações</h3>
          <p className={styles.pergunta}>Vale a pena fazer o passeio de quadriciclo?</p>
          <p>
            Sim! Esse passeio é imperdível para quem gosta de aventura. Entre os momentos mais emocionantes estão: pegar chuva durante o trajeto, atravessar rios e até rampas nas dunas.
          </p>
          <br />
          <p className={styles.pergunta}>Quais outras atividades além do quadriciclo são imperdíveis?</p>
          <p>
            Além do quadriciclo, os passeios de 4x4 são uma ótima forma de explorar a região. 
          </p>
          <br />
        </section>
        <br />

        <section>
          <h3 className={styles.subtitulo}>Dicas e Observações</h3>
          <p className={styles.pergunta}>Tem comida típica que vale a pena experimentar?</p>
          <p>
            Não experimentei nada muito diferente, mas os pratos à base de peixe e camarão são muito saborosos e uma ótima escolha na região.
          </p>
          <br />
          <p className={styles.pergunta}>Os passeios são indicados para todas as idades?</p>
          <p>
            Sim, desde que o transporte seja feito em carros 4x4, garantindo conforto e segurança para todos.
          </p>
          <br />
          <p className={styles.pergunta}>Qual foi o maior perrengue ou desafio da viagem?</p>
          <p>
            O maior perrengue foi chegar na pousada e descobrir que a piscina estava interditada e suja. Além disso, os quartos não tinham TV (o que não foi um grande problema), e a água da pousada era escura e com mau cheiro.
          </p>
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
