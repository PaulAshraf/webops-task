import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const HeaderWrapper = styled.div`
    width: 100%;
    padding-top: 40px;
    z-index: 9998;
`;




const Container = styled.div`

    transition: all cubic-bezier(0.56, -0.22, 0.25, 1) 0.1s;
    margin: auto;
    width: 92%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
`;

const SubContainer = styled.div`
    border-top: solid 1px #000;
    border-bottom: solid 1px #000;
    position: relative;
    padding: 0 15px;
    width: 43%;
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Dropdown = styled.div`
    visibility: hidden;

    min-width: 100% !important;
    top: 39px;
    left: 0;
    z-index: 9999;
    position: absolute;
    background-color: rgba(200,200,200,0.7);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

    ${media.greaterThan('1200px')`
        top: 44px;
    `}
    

`;
const DropdownItem = styled.a`
    text-transform: uppercase;
    display: block;
    border-top: solid 1px #fff;
    text-align: center;
    font-size: 13.6px;
    color: #fff;
    padding: 10px 15px;

    color: #000;
    border-top: solid 1px #000;

    text-decoration: none;

    ${media.lessThan('1200px')`
        font-size: 10px;
    `}
`;


const Item = styled.li`
    position: relative;
    padding: 12px 7px;
    text-align: center;

    list-style-type: none;

    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-size: 13.4px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    text-decoration: none;

    &:hover ${Dropdown}{
        visibility: visible;
    }

    ${media.lessThan('1200px')`
        font-size: 10px;
    `}

`;

const Logo = styled.img`
    max-height: 78px;
    display: block;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
`;



function Header() {
    return (
        <HeaderWrapper><Container>
            <SubContainer>
                <Item>360 Planner 
                    <Dropdown>
                        <DropdownItem href='https://weds360.com/en/checklists'>Check List</DropdownItem>
                        <DropdownItem href='https://weds360.com/en/budgeter'>Budgeter</DropdownItem>
                        <DropdownItem href='https://weds360.com/en/registry'>Registry list</DropdownItem>
                        <DropdownItem href='https://weds360.com/en/guestlist'>Guest list</DropdownItem>
                        <DropdownItem href='https://weds360.com/en/build_your_website'>Wedding Website</DropdownItem>
                    </Dropdown>
                </Item>
                <Item>Her</Item>
                <Item>Him</Item>
                <Item>The Wedding</Item>
            </SubContainer>
            <Logo src="http://localhost:8080/logo.png" alt="logo" />
            <SubContainer>
                <Item>Vendors</Item>
                <Item>Gallery</Item>
                <Item>Ideas & More</Item>
            </SubContainer>
        </Container></HeaderWrapper>
    )
}

export default Header
