
import React from 'react'
import { mobile } from '../Responsive'
import  styled from 'styled-components'
import { Link } from 'react-router-dom'
const Container=styled.div`

flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height:"30vh"})};
`
const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Title=styled.h1`
color:white;
margin-bottom:20px;

`
const Button=styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;

`
const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} alt="" />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
