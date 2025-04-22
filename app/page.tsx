"use client"
import React from "react";
import styles from "./page.module.css";
import Card from "./componentes/Card";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Card titulo="Diário de Viagens" url="praia-dia.jpg" />
          <section className={styles.texto}>
            <h2 className={styles.subtitulo}>Explorando o mundo!</h2>
            <p>Seja bem-vindo ao <strong>Diário de Viagens</strong>, o lugar onde
                cada história é um convite para você desbravar novos horizontes.
                Aqui, compartilho experiências reais, dicas práticas e tudo que
                você precisa saber para transformar sua próxima viagem em uma
                aventura inesquecível.
              </p>
            <p>
              Compartilharei dicas de como se organizar para realizar suas tão sonhadas viagens,
              indicarei destinos, hóteis e muito mais.
              Também poderá encontar aqui informações que não estão disponíveis em outros sites e
              que apenas descobri vivenciando certas dificuldades na prática.
            </p>
            <h2 className={styles.subtitulo}>O Que Você Vai Encontrar Aqui</h2>
              <ul className={styles.lista}>
                <li>
                  <strong>Dicas Valiosas:</strong> Conselhos de como se organizar,
                  desde o planejamento até o retorno.
                </li>
                <li>
                  <strong>Destinos Inspiradores:</strong> Sugestões de lugares
                  incríveis para explorar.
                </li>
                <li>
                  <strong>Soluções Práticas:</strong> Truques para lidar com
                  imprevistos que só quem já viajou sabe.
                </li>
              </ul>
              <p>
                Não importa se você está planejando sua primeira viagem ou se já é
                um viajante experiente, o <strong>Diário de Viagens</strong> está
                aqui para te guiar, inspirar e preparar para cada passo da
                jornada.
              </p>
              <p>
                Então, prepare suas malas e embarque nessa jornada comigo.
                Descubra dicas exclusivas, histórias emocionantes e muito mais!
              </p>
          </section>
        </div>
      </main>
    </>
   
  );
}
