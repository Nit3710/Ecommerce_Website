import React from 'react'
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
`
const Arrow = styled.div`
width:50px;
height:50px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
background-color:#fff7f7;
position :absolute;
top:0;
bottom:0;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
margin:auto;
`
const Wrapper = styled.div`
height:100%;
display:flex;

`
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
`
const ImageContainer = styled.div`
height:100%;
flex:1;

`
const Image = styled.img`
height:80%;
`
const InfoContainer = styled.div`
flex:1;
padding:50px;
`

const Title = styled.h1`
font-size:70px;
`
const Desc = styled.p`
margin:50px 0;
font-size:20px;
font-weight:500;
letter-spacing :3px;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">

                <ArrowBackIosNewOutlinedIcon />
            </Arrow>
            <Wrapper>
                <Slide bg="f5fa5d">
                    <ImageContainer>
                        <Image src='https://www.pexels.com/photo/handsome-men-sitting-on-chairs-6615607/' />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>this product is widely saled product hurry up</Desc>
                        <Button>shop now</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="f5fa5d">
                    <ImageContainer>
                        <Image src='https://images.pexels.com/photos/10948501/pexels-photo-10948501.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Desc>this product is widely saled product hurry up</Desc>
                        <Button>shop now</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="f5fa5d">
                    <ImageContainer>
                        <Image src='https://images.pexels.com/photos/10948501/pexels-photo-10948501.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>POPULAR SALE</Title>
                        <Desc>This product is widely saled product hurry up</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">

                <ArrowForwardIosOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider
