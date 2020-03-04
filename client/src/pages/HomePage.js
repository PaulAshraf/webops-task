import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import {next, prev} from '../reducers/pageSlice'
import { useSelector, useDispatch } from 'react-redux'

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    margin: 30px auto 0;
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    position: relative;
    box-sizing: border-box;
    margin-right: 25px;
`;

const Form = styled.form`
    margin-top: 15px;
    padding-left: 6px;
    display: flex;
    flex-direction: column;
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const ClearButton = styled.a`
    background-color: #fff;
    color: #000;
    border: solid 1px #000;
    padding-right: 10px;
    padding-left: 10px;
    height: 21px;
    text-decoration: none;
`;

const ApplyButton = styled.button`
    vertical-align: middle;
    padding: 0;
    border: solid 1px #000;
    width: 55px;
    height: 21px;
    margin-left: 3px;
    font-size: 12px;
    text-align: center;

    background-color: #000;
    color: #fff;

    cursor: pointer;

    text-transform: none;

    overflow: visible;
}
`;

const SearchBarWrapper = styled.div`
    margin: 20px 0;

    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const SearchBar = styled.input`
    width: 100%;
    border: 1px solid black;
    padding: 5px;
`;

const PhotosContainer = styled.div`
    width: 70%;
    margin: 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2em;
    align-items: center;
`;

const PhotoContainer = styled.div`
    padding: 5px;
    flex-basis: 49%;

    ${media.greaterThan('768px')`
        flex-basis: 32%
    `}

    ${media.greaterThan('992px')`
        flex-basis: 24%
    `}
`;

const Link = styled.a`  
    text-decoration: none;
`;

const Photo = styled.img`
    height: 100%;
    margin: 0 auto;
    position: relative;

    height: 230px;

    object-fit: contain;
    background-size: cover !important;
    background-position: center !important;

    display: none;
`;

const Name = styled.h3`
    color: #000;
    font-size: 17.3px;
    line-height: 1.67;
    font-weight: bold;
    margin: 10px 0 15px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 25px;
    height: 50px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;



function HomePage() {

    const dispatch = useDispatch()
    const page = useSelector(state => state.page)

    const [photoData,setPhotoData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/data.json`)
            .then(response => response.json())
            .then(data => setPhotoData(data.data))

      },[]);

    return (
        <Wrapper>
            <SearchWrapper>
                <Form>
                    <Buttons>
                        <ClearButton />
                        <ApplyButton />
                    </Buttons>
                    <SearchBarWrapper>
                        <SearchBar />
                    </SearchBarWrapper>
                </Form>
            </SearchWrapper>
            <PhotosContainer>

            </PhotosContainer>
        </Wrapper>
    
    )
}

export default HomePage
