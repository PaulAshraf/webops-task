import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {next, prev, goto} from '../reducers/pageSlice'
import { useSelector, useDispatch } from 'react-redux'

const Wrapper = styled.div`
    display: block;
    text-align: center;
`;

const Container = styled.ul`
    margin-bottom: 0;

    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
`;

const Item = styled.li`
    display: inline;
`;

const ItemLink = styled.button`
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.428571429;
    text-decoration: none;
    border: 1px solid;
    margin-left: -1px;
    cursor: default;
   
    background-color: ${props => props.curr ? '#024d4c':'#fff'};
    border-color:${props => props.curr ? '#024d4c':'#ddd'};
    color: ${props => props.curr ? '#fff':'#024d4c'};
}
`;

function getNumberOfPages(photoData){
    if(!photoData)
        return [1]
    else{
        let res = []
        for(let i = 0; i < Math.ceil(photoData.length/8); i++){
            res.push(i)
        }
        console.log(res)
        return res
        
    }
}


function PageSelect() {

    useEffect(() => { 
        fetch(`http://localhost:8080/data.json`)
            .then(response => response.json())
            .then(data => setPhotoData(data.data))

    },[]);

    const dispatch = useDispatch()
    const page = useSelector(state => state.page)

    const [photoData,setPhotoData] = useState([])


    return (
        <Wrapper>
            <Container>
                <Item><ItemLink onClick={() => dispatch(prev())}>← Previous</ItemLink></Item>
                {getNumberOfPages(photoData).map(num => {
                    if(num === page){
                        return(
                            <Item key={num}><ItemLink curr onClick={() => { dispatch(goto(num));}}>{num}</ItemLink></Item>
                        )
                    }
                    else{
                        return(
                            <Item key={num}><ItemLink onClick={() => { dispatch(goto(num));}}>{num}</ItemLink></Item>
                        )
                    }       
                })}
                <Item><ItemLink onClick={() => dispatch(next())}>Next →</ItemLink></Item>
            </Container>
        </Wrapper>
    )
}

export default PageSelect
