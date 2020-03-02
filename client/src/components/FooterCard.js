import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import '../App.css'

const Item = styled.div`
    padding: 0.5em;

    ${media.greaterThan('750px')`
        flex-basis: 49%;
    `}

    ${media.greaterThan('1000px')`
        flex-basis: 32%;
    `}
`;

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: auto;
`;

const TextContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0.5em;
`;

const ItemTitle = styled.span`
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
            <Item><ItemContainer className="t" >
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
