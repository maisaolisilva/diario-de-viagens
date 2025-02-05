"use client";

import Card from "@/app/componentes/Card";
import styles from "../page.module.css";
import Link from "next/link";
import AdSense from "@/app/componentes/AdSense";

export default function Viagem() {
    return (
        <main>
            <Card titulo="Macaé, RJ" url="/macae.jpg" />
            <div className={styles.texto}>
                <h2 className={styles.titulo}>Explorando Macaé, RJ: Novembro de 2024</h2>
                <p>Se você procura um lugar tranquilo para descansar, Macaé é uma ótima escolha. Durante minha estadia, fiquei próximo à Praia do Pecado e à Lagoa Imboassica, onde desfrutei de belas paisagens e momentos de paz.</p>
                <br />
                <section>
                    <h3 className={styles.subtitulo}>Planejamento</h3>
                    <p className={styles.pergunta}>Quais são as melhores áreas para se hospedar em Macaé?</p>
                    <p>Recomendo ficar próximo à Praia do Pecado ou à Lagoa Imboassica, locais ideais para quem busca tranquilidade e contato com a natureza.</p>
                    <br />
                    <p className={styles.pergunta}>O que devo saber sobre os custos da viagem?</p>
                    <p>No período que visitei, os valores estavam acessíveis, talvez por ser um ponto turístico ainda pouco explorado. Acredito que os preços continuem razoáveis, especialmente fora da alta temporada.</p>
                    <p className={styles.pergunta}>Quais meios de transportes para chegar lá?</p>
                    <p>Fui de carro próprio. Tem aeroporto em Cabo frio e no Rio de Janeiro, podem alugar um carro e seguir a melhor opção pelo GPS.</p>
                    <p className={styles.pergunta}>É necessário levar dinheiro em espécie?</p>
                    <p>Todos os estabelecimentos aceitam cartão. Sem necessidade de levar dinheiro em espécie.</p>
                </section>
                <br />
                <br />
                <section>
                    <h3 className={styles.subtitulo}>Atrações</h3>
                    <p className={styles.pergunta}>O que fazer na Praia do Pecado?</p>
                    <p>Na Praia do Pecado, você pode relaxar nos quiosques, alugar bicicletas ou até mesmo praticar stand-up paddle. É um lugar tranquilo, ideal para descansar e aproveitar a natureza.</p>
                    <br />
                    <p className={styles.pergunta}>Como é a Praia dos Cavaleiros?</p>
                    <p>Se você procura algo mais agitado, a Praia dos Cavaleiros é o destino certo. Lá, você encontrará bares, restaurantes e lojas para todos os gostos e bolsos. É um ótimo lugar para socializar e explorar.</p>
                    <br />
                    <p className={styles.pergunta}>As praias de Macaé são seguras para banho?</p>
                    <p>Algumas praias têm avisos de perigo devido às condições do mar, então é importante prestar atenção à sinalização. Mesmo assim, o visual é lindo e vale a visita.</p>
                    <br />
                    <p className={styles.pergunta}>Há atividades para quem gosta de esportes ao ar livre?</p>
                    <p>Sim, Macaé é um lugar plano, o que facilita caminhadas e passeios de bicicleta. Para quem gosta de explorar a natureza de forma ativa, é uma ótima pedida.</p>
                </section>
                <br />
                <br />
                <section>
                    <h3 className={styles.subtitulo}>Dicas e Observações</h3>
                    <p className={styles.pergunta}>Qual é a melhor época do ano para visitar Macaé?</p>
                    <p>Visitei Macaé no final de novembro, no dia que cheguei estava chovendo. Mas teve dias de sol também, o que me permitiu aproveitar bastante o lugar.</p>
                    <br />
                </section>
                <br />
                <section>
                    <h3 className={styles.subtitulo}>Diário de fotos</h3>
                    <p className={styles.pergunta}>Quer ver mais fotos dessa viagem? Confira no link abaixo:</p>
                    <br />
                    <Link
                        href={{
                        pathname: '/diarioDeFotos/macae',
                        query: { nome: 'Macaé' },
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
