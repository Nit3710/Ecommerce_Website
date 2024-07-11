import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container=styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("https://th.bing.com/th?id=OIP.ccZM3sCxKWcYQDT1Gu6wJwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2");
background-repeat:no-repeat;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper=styled.div`
width:25%;
padding:20px;
background-color:white;
${mobile({width:"75%"})};

`
const Title=styled.h1

`
font-size:24px;
font-weight:300;
`
const Form=styled.form`
display:flex;
flex-direction:column;
`
const Input=styled.input`
flex:1;
min-width:40%;
margin:10px 0;
padding:10px;

`


const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;

`
const Link=styled.a`
margin:5px 0;
font-size:12px;
text-decoration:underline;
cursor:pointer;


`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN </Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DONT YOU REMEMBER THE PASSWORD</Link>
                    <Link>CREATE NEW ACCOUNT</Link>
                </Form>
            </Wrapper>

        </Container>
    )
}

export default Login
