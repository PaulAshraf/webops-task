import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    font-family: "Arial Black", Gadget, sans-serif;
`;

const TitleWrapper = styled.div`
  padding: 2em;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2em;

`;

const Item = styled.div`
    flex-basis: 30%;
    padding: 0.5em;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`;

const TextContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0.5em
`;

const ItemTitle = styled.p`
    text-align: left;
    font-family: "Arial Black", Gadget, sans-serif;
`;

const ItemText = styled.p`
    font-size: 0.7em;
    text-align: left;
`;


function Footer() {
    return (
        <div>
            <TitleWrapper>
                <Title>WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.</Title>
            </TitleWrapper>

            <Container>
                <Item><ItemContainer>
                    <img src='http://localhost:8080/footer0.png' alt='WEDDING WEBSITE'></img>
                    <TextContainer>
                        <ItemTitle>WEDDING WEBSITE</ItemTitle>
                        <ItemText>
                            <p>Where you will save all your wedding memories forever, where you will choose your own personalized template, manage every event detail and let your guests share their pictures, videos and moments with you.</p>
                            <a href='https://weds360.com/en/build_your_website'>Create your website</a>
                        </ItemText>
                    </TextContainer>
                </ItemContainer></Item>

                <Item><ItemContainer>
                    <img src='http://localhost:8080/footer1.png' alt='BUDGETER'></img>
                    <TextContainer>
                        <ItemTitle>BUDGETER</ItemTitle>
                        <ItemText>
                            <p>Do you have a figure in mind? Place it in the budgeter and we will provide you with all the choices and possibilities you can think of.</p>
                            <a href='https://weds360.com/en/budgeter'>Create and manage your budget</a>
                        </ItemText>
                    </TextContainer>
                </ItemContainer></Item>

                <Item><ItemContainer>
                    <img src='http://localhost:8080/footer2.png' alt='CHECK LIST'></img>
                    <TextContainer>
                        <ItemTitle>CHECK LIST</ItemTitle>
                        <ItemText>
                            <p>Set your tasks, create your priority list and never forget any wedding detail.</p>
                            <a href='https://weds360.com/en/checklists'>Get your check list</a>
                        </ItemText>
                    </TextContainer>
                </ItemContainer></Item>

                <Item><ItemContainer>
                    <img src='http://localhost:8080/footer3.png' alt='GUEST LIST'></img>
                    <TextContainer>
                        <ItemTitle>GUEST LIST</ItemTitle>
                        <ItemText>
                            <p>Who is coming? Who is not? Who replied with a "Maybe"? Manage all of this while customizing your invitations. All in one place and right at your fingertips.</p>
                            <a href='https://weds360.com/en/guestlist'>Create your guest list</a>
                        </ItemText>
                    </TextContainer>
                </ItemContainer></Item>

                <Item><ItemContainer>
                    <img src='http://localhost:8080/footer4.png' alt='VENDORS'></img>
                    <TextContainer>
                        <ItemTitle>VENDORS</ItemTitle>
                        <ItemText>
                            <p>Meet your service providers, view their profiles and make all the perfect choice for your wedding night.</p>
                            <a href='https://weds360.com/en/guestlist'>Start your tour</a>
                        </ItemText>
                    </TextContainer>
                </ItemContainer></Item>

                <Item><ItemContainer>
                    <img src='http://localhost:8080/footer5.png' alt='REGISTRY LIST'></img>
                    <TextContainer>
                        <ItemTitle>REGISTRY LIST</ItemTitle>
                        <ItemText>
                            <p>Escape the awkward moments and receiving the same gift twice by listing everything you've thought of and every store you love. Let your guests choose what to get you for the wedding and say goodbye to unwanted presents.</p>
                            <a href='https://weds360.com/en/services'>Create your dream list</a>
                        </ItemText>
                    </TextContainer>
                </ItemContainer></Item>

            </Container>
        </div>
    )
}

export default Footer
