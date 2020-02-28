import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    font-family: "Arial Black", Gadget, sans-serif,
`;

const TitleWrapper = styled.div`
  padding: 2em;
`;

const Container = styled.div`
    display: flex,
    flex-wrap: wrap,
    justify-content: space-evenly;
`;

const Item = styled.div`
    width: 200px,
    height: 150px;
`;




function Footer() {
    return (
        <div>
            <TitleWrapper>
                <Title>WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.</Title>
            </TitleWrapper>
            
            <Container>
                <Item>
                    <p>Meet your service providers, view their profiles and make all the perfect choice for your wedding night.
Start your tour</p>
                </Item>

                <Item>
                <p>Meet your service providers, view their profiles and make all the perfect choice for your wedding night.
Start your tour</p>
                </Item>

                <Item>
                <p>Meet your service providers, view their profiles and make all the perfect choice for your wedding night.
Start your tour</p>
                </Item>

                <Item>
                <p>Meet your service providers, view their profiles and make all the perfect choice for your wedding night.
Start your tour</p>
                </Item>

                <Item>
                <p>Meet your service providers, view their profiles and make all the perfect choice for your wedding night.
Start your tour</p>
                </Item>

                <Item>
                <p>Meet your service providers, view their profiles and make all the perfect choice for your wedding night.
Start your tour</p>
                </Item>

            </Container>
        </div>
    )
}

export default Footer
