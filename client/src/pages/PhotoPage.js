import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const PhotoAreaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 92.5%;
    max-width: 1100px;
    margin: 15px auto 50px;

    font-family: "Lato", sans-serif;

    ${media.lessThan('768px')`
        flex-direction: column;
        margin-top: 10px;
    `}
`;

const PhotoWrapper = styled.div`
    width: 63%;

    ${media.lessThan('768px')`
        padding: 0 10px;
        width: 100%;
    `}
`;

const Photo = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
`;

const PhotoDiscription = styled.div`
    width: 37%;
    padding: 15px 20px;

    ${media.lessThan('768px')`
        padding-right: 10px;
        padding-left: 10px;
        width: 100%;
    `}
`;

const Title = styled.h2`
    margin: 0;
    margin-bottom: 35px;
    font-size: 35.1px;
    font-weight: bold;
    color: #000;
    line-height: 1.2;
`;

const SubTitle = styled.h5`
    display: block;
    margin: 0;
    margin-bottom: 20px;
    font-size: 23.6px;
    line-height: 1.42;
    color: #000;
`;

const Link = styled.a`
    color: #337ab7;
    text-decoration: none;
`;

// const Social = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
// `;

const RelatedWrapper = styled.div`
    width: 92.5%;
    margin: 0 auto;
    max-width: 1100px;
`;

const RelatedTitle = styled.h2`
    font-size: 35.1px;
    line-height: 0.92;
    font-weight: bold;
    color: #000;
    margin-bottom: 35px;
`;

const RelatedPhotoSectionContainer = styled.div`
    margin: 0 -5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2em;
    align-items: center;
}
`;

const RelatedPhotoContainer = styled.div`
    padding: 0 10px;
    flex-basis: 49%
    position: relative;
    min-height: 1px;

    ${media.greaterThan('768px')`
        flex-basis: 32%
    `}

    ${media.greaterThan('992px')`
        flex-basis: 24%
    `}

`;

const RealtedPhotoLink = styled.a`
    color: #337ab7;
    text-decoration: none;
`;

const RelatedPhotoInnerContainer = styled.div`
    height: 100%;
    width: 300px;
    margin: 0 auto;
    position: relative;
`;

const RealtedPhoto = styled.img`
    height: 230px;
    width: 300px;
    object-fit: contain;
    background-size: cover !important;
    background-position: center !important;

`;

const RelatedSubTitle = styled.h3`
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

function getRelatedPhotosIds(id) {
    return [1,2,3,4,5,6,7,8];
}


function PhotoPage(props) {

    const [photoData,setPhotoData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/data.json`)
            .then(response => response.json())
            .then(data => setPhotoData(data.data))

            
        if(photoData.length !== 0)
            document.title = `Weds360 | ${photoData[props.match.params.id].name}`

      },[]);


    return (
        <div>
        <PhotoAreaWrapper>
            <PhotoWrapper>
                {photoData.length === 0?<div />: <Photo src={`http://localhost:8080/${props.match.params.id}.jpeg`} alt={photoData[props.match.params.id].name}></Photo>}
            </PhotoWrapper>
            <PhotoDiscription>
                <Title>{photoData.length === 0?'': photoData[props.match.params.id].name}</Title>
                <SubTitle>{photoData.length === 0?'': photoData[props.match.params.id].desc}</SubTitle>
                <Link></Link>
            </PhotoDiscription>
        </PhotoAreaWrapper>
        <RelatedWrapper>
            <RelatedTitle>Related Photos</RelatedTitle>
            <RelatedPhotoSectionContainer>
                {getRelatedPhotosIds(props.match.params.id).map((id) => {
                return(
                    <RelatedPhotoContainer key={id}><RealtedPhotoLink href={`/photos/${id}`}><RelatedPhotoInnerContainer>
                        {photoData.length === 0?<div />:<RealtedPhoto src={`http://localhost:8080/${id}.jpeg`} alt={photoData[id].name}></RealtedPhoto>}
                        <RelatedSubTitle>{photoData.length === 0?'': photoData[id].name}</RelatedSubTitle>
                    </RelatedPhotoInnerContainer></RealtedPhotoLink></RelatedPhotoContainer>
                );})} 
            </RelatedPhotoSectionContainer>
        </RelatedWrapper>
        </div>
    )
}

export default PhotoPage
