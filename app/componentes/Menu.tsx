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
          <h3 className={styles.subtitulo}>Informações Gerais</h3>
          <p>
            Visconde de Mauá está localizada na Serra da Mantiqueira e faz divisa entre dois estados: Rio de Janeiro e Minas Gerais. A região abrange três municípios: Resende e Itatiaia, no Rio de Janeiro, e Bocaina de Minas, em Minas Gerais. As vilas de Mauá, Maringá e Maromba são cortadas pelo Rio Preto, que serve como divisa natural entre os estados.
          </p>
          <p>
            A infraestrutura viária apresenta contrastes. Embora a rua principal seja quase totalmente asfaltada, facilitando o acesso às principais atrações, algumas estradas secundárias ainda são de terra e podem apresentar trechos esburacados, especialmente após períodos de chuva. Recomenda-se que os visitantes estejam atentos às condições das vias e, se possível, utilizem veículos adequados para trafegar em terrenos irregulares.
          </p>
          <p>
            A região conta com diversas pousadas e hotéis, oferecendo opções para todos os perfis de viajantes. No entanto, em alta temporada, é altamente recomendável fazer reservas com antecedência para garantir acomodações.
          </p>
          <p>
            Visconde de Mauá possui temperaturas mais baixas ao longo do ano, especialmente durante o inverno, quando o frio atrai muitos turistas que desejam aproveitar o clima aconchegante da serra. Além disso, a região tem um alto índice de chuvas, o que contribui para a exuberância da vegetação e a beleza das cachoeiras.
          </p>
        </section>
        <br />
        <section>
          <h3 className={styles.subtitulo}>Alameda Gastronômica</h3>
          <p>
            Visconde de Mauá também é conhecida por sua rica cena gastronômica, concentrada principalmente na Alameda Gastronômica, localizada na Vila de Maringá. O local abriga diversos restaurantes que oferecem desde pratos típicos da região até opções internacionais sofisticadas.
          </p>
          <p>
            Entre as especialidades, destacam-se trutas frescas, fondues, pratos à base de pinhão e deliciosos doces artesanais. O ambiente charmoso e acolhedor torna a experiência ainda mais especial, sendo uma parada obrigatória para os amantes da boa culinária.
          </p>
        </section>
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
            É uma boa opção para famílias com crianças. O acesso é por uma escada, mas o estacionamento é limitado.
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
          <h3 className={styles.subtitulo}>Festa do Pinhão</h3>
          <p>
            Um dos eventos mais aguardados em Visconde de Mauá é a tradicional Festa do Pinhão, realizada anualmente no mês de maio. Em 2024, a festa ocorreu entre os dias 17 e 19 de maio, oferecendo uma programação diversificada que incluiu shows musicais, cavalgadas, concursos e uma praça de alimentação com pratos típicos à base de pinhão.
          </p>
          <p>
            O evento, com entrada gratuita, atrai tanto moradores locais quanto turistas, movimentando a economia e celebrando a cultura regional. Além disso, valoriza a agricultura familiar, destacando o pinhão como um ingrediente tradicional na culinária local.
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
