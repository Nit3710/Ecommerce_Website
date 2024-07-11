import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from 'styled-components'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../Responsive';
const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})};
`

const Left = styled.div`
flex:1;
 display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin:20px 0;

`
const SocialContainer = styled.div`
display:flex;
`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;

`
const Center = styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})};
`
const Title = styled.h3`
margin-bottom:30px;

`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;

`
const Right = styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#fff8ff"})};
`
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;

`
const Payment=styled.img`
width:50%;

`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo> LOCOMOTION</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum aperiam, non quia aliquid doloribus.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3b5999'><FacebookIcon /></SocialIcon>
                    <SocialIcon color='405de6'><InstagramIcon /></SocialIcon>
                    <SocialIcon color='0077B5' >< LinkedInIcon /></SocialIcon>
                    <SocialIcon color='000000'>< XIcon /></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Read more</ListItem>
                </List>

            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <LocationOnIcon style={{marginRight:"10px"}}/>
                    137/402, Sanway Colony, Rajasthan 302040
                </ContactItem>
                <ContactItem>
                    <CallIcon style={{marginRight:"10px"}} />
                    0129-178-845
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{marginRight:"10px"}} />
                    grewsales28@gmail.com
                </ContactItem>
                <Payment src="https://www.bing.com/images/search?view=detailV2&ccid=Y0IH6MDO&id=E611664E57E68F194DB6344BA3670BF9F66C7020&thid=OIP.Y0IH6MDOsg9_zf9uWWKYUAHaEK&mediaurl=https%3a%2f%2fimages.ctfassets.net%2ffzn2n1nzq965%2f2kHRo8MeZ1JxpGCicQtNwm%2f5f6c855d24b747e45ee47f78ad885703%2fnewsroom-news-corporate-card.jpeg%3fq%3d80&exph=999&expw=1776&q=stripe+paymentcard&simid=608003048774972922&FORM=IRPRST&ck=D3F8301FACF67F0FCE31B0949AF5EF4D&selectedIndex=0&itb=0" />
            </Right>
        </Container>
    )
}

export default Footer
