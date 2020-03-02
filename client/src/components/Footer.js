import React from 'react'
import styled from 'styled-components'
import FooterCard from './FooterCard'
import FooterBar from './FooterBar';

const FooterContainer = styled.div`
    padding: 0;
    margin-top: 100px;
    max-width: 1100px;
    position: relative;
`;

const Title = styled.h3`
    margin: 0;
    text-align: center;
    font-size: 24px;
    line-height: 1.25;
    text-align: center;
    color: #000000;
    text-transform: uppercase;
    font-weight: 900;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2em;
    align-items: center;

`;

function Footer() {
    return (
        <FooterContainer>
            <Title>WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.</Title>

            <Container>

                <FooterCard
                    icon = 'http://localhost:8080/footer0.png'
                    title = 'WEDDING WEBSITE'
                    text = 'Where you will save all your wedding memories forever, where you will choose your own personalized template, manage every event detail and let your guests share their pictures, videos and moments with you.'
                    link = 'https://weds360.com/en/build_your_website'
                    linkText = 'Create your website' />

                <FooterCard
                    icon = 'http://localhost:8080/footer1.png'
                    title = 'BUDGETER'
                    text = 'Do you have a figure in mind? Place it in the budgeter and we will provide you with all the choices and possibilities you can think of.'
                    link = 'https://weds360.com/en/budgeter'
                    linkText = 'Create and manage your budget' />
                   
                <FooterCard
                    icon = 'http://localhost:8080/footer2.png'
                    title = 'CHECK LIST'
                    text = 'Set your tasks, create your priority list and never forget any wedding detail.'
                    link = 'https://weds360.com/en/checklists'
                    linkText = 'Get your check list' />

                <FooterCard
                    icon = 'http://localhost:8080/footer3.png'
                    title = 'GUEST LIST'
                    text = 'Who is coming? Who is not? Who replied with a "Maybe"? Manage all of this while customizing your invitations. All in one place and right at your fingertips.'
                    link = 'https://weds360.com/en/guestlists'
                    linkText = 'Create your guest list' />

                <FooterCard
                    icon = 'http://localhost:8080/footer4.png'
                    title = 'VENDORS'
                    text = 'Meet your service providers, view their profiles and make all the perfect choice for your wedding night.'
                    link = 'https://weds360.com/en/services'
                    linkText = 'Start your tour' />

                <FooterCard
                    icon = 'http://localhost:8080/footer5.png'
                    title = 'REGISTRY LIST'
                    text = "Escape the awkward moments and receiving the same gift twice by listing everything you've thought of and every store you love. Let your guests choose what to get you for the wedding and say goodbye to unwanted presents."
                    link = 'https://weds360.com/en/registry'
                    linkText = 'Create your dream list.' />

            </Container>

            <FooterBar />

        </FooterContainer>
    )
}

export default Footer
