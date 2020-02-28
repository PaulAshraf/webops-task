import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    flex-basis: 30%;
    flex-shrink: 2;
    padding: 0.5em;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    height: auto;
`;

const TextContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0.5em;
`;

const ItemTitle = styled.p`
    text-align: left;
    font-size: 0.8em;
    font-family: "Arial Black", sans-serif;
`;

const ItemText = styled.p`
    font-size: 0.7em;
    text-align: left;
`;


function FooterCard(props) {
    return (
            <Item><ItemContainer>
                    <img src={props.icon} alt={props.title}></img>
                    <TextContainer>
                        <ItemTitle>{props.title}</ItemTitle>
                        <ItemText>
                            {props.text + ' '}
                            <a href={props.link}>{props.linkText}</a>
                        </ItemText>
                    </TextContainer>
            </ItemContainer></Item>
    )
}

export default FooterCard
