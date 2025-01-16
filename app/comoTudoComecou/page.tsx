'use client';

import { useState, useEffect } from 'react';
import Card from '../componentes/Card';
import styles from './page.module.css';

export default function comoTudoComecou() {
  const [url, setUrl] = useState('colagem2.png'); // Imagem padrão para telas maiores

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 800) {
        setUrl('colagem.png'); // Imagem para telas menores
      } else {
        setUrl('colagem2.png'); // Imagem para telas maiores
      }
    };

    updateImage(); // Define a imagem inicial com base no tamanho da tela
    window.addEventListener('resize', updateImage); // Escuta mudanças de tamanho da janela

    return () => {
      window.removeEventListener('resize', updateImage); // Remove o listener ao desmontar
    };
  }, []);

  return (
    <main>
      <Card titulo="Como Tudo Começou" url={url} />
      <h2 className={styles.titulo}>Minha Paixão por Viagens</h2>
      <div className={styles.texto}>
        <p>
          Tudo começou na minha infância, quando meus pais me levavam para viajar. Era emocionante conhecer cada lugar,
          experimentar coisas diferentes, conversar com pessoas novas e me divertir com cada experiência.
        </p>
        <p>
          Conforme fui crescendo, meu amor por viagens só aumentou. Claro, nem todos os anos eu tinha condições de viajar,
          mas, ultimamente, tenho feito o possível para explorar o máximo que consigo. Além disso, proporcionar viagens
          para meus amigos tornou-se uma grande paixão. Gostaria que todos pudessem compartilhar dessa experiência comigo.
        </p>
        <p>
          Tudo começa com a escolha do destino. Pesquiso para saber o que há para fazer, os melhores passeios e os lugares
          mais incríveis para visitar, tanto de dia quanto de noite. A partir daí, decido minha próxima aventura.
        </p>
        <p>
          Depois da escolha do destino, se for para um lugar próximo, já procuro pelas melhores rotas. Se for uma viagem mais
          distante, começo a acompanhar promoções de voos. Quando encontro uma boa oferta, compro as passagens e, em seguida,
          começo a planejar onde ficar e quais serão os passeios. Também decido quantos dias pretendo passar em cada local.
        </p>
        <p>
          Com o roteiro definido, pesquiso as melhores opções de hospedagem. Após escolher onde vou ficar, planejo como farei
          os passeios: se contratarei uma agência de turismo ou se vou por conta própria. Em algumas viagens, prefiro alugar
          um carro; em outras, uso táxis, Uber, ônibus ou vans. Essas questões geralmente resolvo depois de definir a hospedagem.
        </p>
        <p>
          Se eu optar por uma agência de turismo, sempre procuro verificar se ela é confiável. Existem muitas maneiras de fazer
          isso hoje em dia: checar avaliações no Google, no Facebook ou no Instagram, e observar os comentários de outras
          pessoas que já utilizaram os serviços. Se um amigo ou conhecido já viajou pela agência e a indica, é ainda melhor,
          pois traz mais segurança.
        </p>
        <p>
          Nos destinos que recomendo, às vezes não cito agências de turismo. Isso ocorre porque, em alguns casos, não gostei do
          serviço e, por isso, prefiro não indicar. No entanto, se tiverem dúvidas, podem me perguntar. Há outras agências que
          conheci e que considero confiáveis, e terei prazer em compartilhar essas informações.
        </p>
        <p>
          Minha paixão por viajar vai muito além do momento da viagem em si: começa com a escolha do destino e o planejamento
          de cada detalhe. Fico muito empolgada em todo o processo. E, claro, quando o dia chega, é pura diversão! E o melhor
          de tudo é que, ao voltar, já fico ansiosa para planejar a próxima aventura.
        </p>
      </div>
    </main>
  );
}
