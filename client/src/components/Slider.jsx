import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from '../data';
import { mobile } from '../Responsive';
const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
${mobile({display:"none"})};
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
transform:translateX(${props=>props.slideIndex*-100}vw);
transition:all 1.5s ease;

`
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props => props.bg};
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
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>

                <ArrowBackIosNewOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>shop now</Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>

                <ArrowForwardIosOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider
