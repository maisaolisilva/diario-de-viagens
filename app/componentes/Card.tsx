"use client";

import styled from "styled-components";
import styles from "./card.module.css";
import Menu from "./Menu";
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS do bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JS do bootstrap



const StyledCard = styled.div<{ $url: string }>`
    background-image: url(${props => props.$url});
    height: 372px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 500px) {
        max-height: 300px;
    }
`
interface CardProps {
    titulo: string;
    url: string;
}
export default function Card( {titulo, url}: CardProps ) {

    return(
        <div className={styles.conteudo}>
            <div className={styles.menu}>
                <Menu />
            </div>
            <StyledCard $url={url}>
                <h1 className={styles.titulo}>{ titulo }</h1>
            </StyledCard>
        </div>
    )
}