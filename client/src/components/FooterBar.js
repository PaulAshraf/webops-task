import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 200%;
    background-color: black;
`;

const Item = styled.div`
    color: white;
`;

function FooterBar() {
    return (
        <Container>
            <Item>Weds360 Facebook Instagram</Item>
            <Item>© Copyright Plus360. All Rights Reserved</Item>
            <Item>Terms Conditions Privacy Policy</Item>
        </Container>
    )
}

export default FooterBar
