"use client";

import Card from "@/app/componentes/Card";
import styles from "../page.module.css";
import Link from "next/link";
import AdSense from "@/app/componentes/AdSense";

export default function Viagem() {
    return (
        <main>
            <AdSense />
            <Card titulo="Santiago, Chile" url="/santiago2.jpg" />
            <div className={styles.texto}>
                <h2 className={styles.titulo}>Explorando Santiago, Chile: Agosto de 2024</h2>
                <p>Em Santiago, você encontrará um povo muito educado, além de uma cidade limpa e organizada. Se o seu desejo é ver a neve, não irá se arrepender!</p>
                <br />
                <section>
                    <h3 className={styles.subtitulo}>Planejamento</h3>
                    <p className={styles.pergunta}>Preciso de passaporte para visitar o Chile?</p>
                    <p>Se você é brasileiro, pode visitar o Chile apenas com o RG atualizado. Certifique-se de que o documento esteja em boas condições e com foto recente para evitar problemas na imigração.</p>
                    <br />
                    <p className={styles.pergunta}>Onde devo trocar meu dinheiro?</p>
                    <p>O aeroporto é a melhor opção para trocar seu dinheiro, garantindo que você tenha pesos chilenos logo na chegada. Isso facilita pagamentos imediatos, como transporte e alimentação.</p>
                    <br />
                    <p className={styles.pergunta}>É melhor viajar por conta própria ou com agência de viagens?</p>
                    <p>Se for sua primeira vez, recomendo ir por uma agência de viagens.</p>
                </section>
                <br />
                <br />
                <section>
                    <h3 className={styles.subtitulo}>Atrações</h3>
                    <p className={styles.pergunta}>O que esperar de Farellones?</p>
                    <p>Farellones é um parque para passar o dia inteiro. Tudo lá é muito caro, então leve seu próprio lanche e água. Compre o ingresso pelo site para obter um desconto considerável.</p>
                    <br />
                    <p className={styles.pergunta}>Vale Nevado é uma boa opção?</p>
                    <p>Vale a pena apenas se você planeja esquiar.</p>
                    <br />
                    <p className={styles.pergunta}>Quais cuidados devo ter ao visitar Portillo?</p>
                    <p>Leve dinheiro em espécie para pagar o uso do banheiro. Embora existam lugares para lanchar, é bom levar seus próprios lanches também.</p>
                    <br />
                    <p className={styles.pergunta}>Vale a pena ir ao Parque Metropolitano?</p>
                    <p>Sim, vale muito a pena! Suba de bondinho e aprecie as vistas. Recomendo a compra do ingresso online.</p>
                    <br />
                    <p className={styles.pergunta}>Como é visitar o Sky Costanera?</p>
                    <p>O preço para admirar a vista do prédio mais alto da América do Sul é bastante alto, mas o passeio de bondinho no Parque Metropolitano é mais barato e oferece vários ângulos incríveis da cidade. O shopping no Sky Costanera também é lindo e vale a visita.</p>
                </section>
                <br />
                <br />
                <section>
                    <h3 className={styles.subtitulo}>Culinária</h3>
                    <p className={styles.pergunta}>Qual prato típico devo experimentar?</p>
                    <p>Não deixe de experimentar as empanadas. Elas parecem um pastel assado e são encontradas em vários lugares.</p>
                </section>
                <br />
                <br />
                <section>
                    <h3 className={styles.subtitulo}>Dicas e Observações</h3>
                    <p className={styles.pergunta}>Qual é a melhor época do ano para visitar Santiago?</p>
                    <p>Minha intenção era conhecer a neve, então fui no inverno, que ocorre entre junho e setembro.</p>
                    <br />
                    <p className={styles.pergunta}>Qual a melhor forma de se locomover por lá?</p>
                    <p>Para os passeios, é melhor utilizar uma agência de turismo. Para conhecer a cidade, o metrô é uma boa opção. Não se esqueça de ter dinheiro em espécie.</p>
                    <br />
                    <p className={styles.pergunta}>Quais são os preços aproximados de refeições nos restaurantes da cidade?</p>
                    <p>Quando fui, o custo médio era de R$80,00 por pessoa. No parque Farellones, os preços eram mais altos: uma coxinha custava cerca de R$25,00 e um prato feito, R$90,00.</p>
                    <br />
                    <p className={styles.pergunta}>Há algo que faria diferente se voltasse ao Chile?</p>
                    <p>Sim, alugaria um carro para conhecer o litoral e ficaria mais dias no parque Farellones, caso fosse no inverno.</p>
                    <br />
                </section>
                <br />
                <section>
                    <h3 className={styles.subtitulo}>Diário de fotos</h3>
                    <p className={styles.pergunta}>Quer ver mais fotos dessa viagem? Confira no link abaixo:</p>
                    <br />
                    <Link
                        href={{
                        pathname: '/diarioDeFotos/chile',
                        query: { nome: 'Santiago, Chile' },
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
