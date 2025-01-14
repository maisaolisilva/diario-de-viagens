"use client";

import styled from "styled-components";
import styles from "./card.module.css";

const StyledCard = styled.div<{ $url: string }>`
    background-image: url(${props => props.$url});
    height: 372px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

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
        <StyledCard $url={url}>
            <h1 className={styles.titulo}>{ titulo }</h1>
        </StyledCard>
    )
}