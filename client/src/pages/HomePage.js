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
    font: 13.3333px;
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
    width: 250px;

    object-fit: contain;
    background-size: cover !important;
    background-position: center !important;
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

function getIds(page,photoData){
    let ids = []

    for (let i = page * 8; i < photoData.length; i++) {
        ids.push(i);
    }

    if(ids.length > 8)
        ids = ids.slice(0,8)

    return ids
}

function isSearch(query){
    if(query === null)
        return false
    else
        return true
}

function renderSearch(query,photoData){
    const searchTerm = query.split('?')[1].split('=')[1]

    let results = []

    results = photoData.filter(photo => {
        return(photo.name.includes(searchTerm) || photo.category.includes(searchTerm))
    });

    return results
    
}

function HomePage(props) {

    const dispatch = useDispatch()
    const page = useSelector(state => state.page)

    const [photoData,setPhotoData] = useState([])

    useEffect(() => { console.log(props.location.search)
        fetch(`http://localhost:8080/data.json`)
            .then(response => response.json())
            .then(data => setPhotoData(data.data))

      },[]);

    return (
        <Wrapper>
            <SearchWrapper>
                <Form action='/photos'>
                    <Buttons>
                        <ClearButton>Clear</ClearButton>
                        <ApplyButton>Apply</ApplyButton>
                    </Buttons>
                    <SearchBarWrapper>
                        <SearchBar placeholder='Search' name='name' />
                    </SearchBarWrapper>
                </Form>
            </SearchWrapper>
            <PhotosContainer>
                {isSearch(props.location.search)?
                renderSearch(props.location.search,photoData).map(photo => {return(
                    <PhotoContainer key={photo.id}>
                        <Link href={`/photos/${photo.id}`}>
                            <Photo src={`http://localhost:8080/${photo.id}.jpeg`} alt={photo.name} />
                        </Link>
                        <Name>{photo.name}</Name>
                    </PhotoContainer>
                )})
                :
                getIds(page,photoData).map(id => {return(
                    <PhotoContainer key={id}>
                        <Link href={`/photos/${id}`}>
                            <Photo src={`http://localhost:8080/${id}.jpeg`} alt={photoData[id].name} />
                        </Link>
                        <Name>{photoData[id].name}</Name>
                    </PhotoContainer>
                )})}
            </PhotosContainer>
        </Wrapper>
    
    )
}

export default HomePage
