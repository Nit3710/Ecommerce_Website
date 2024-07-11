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
width:40%;
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
flex-wrap:wrap;
`
const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0 0;
padding:10px;

`
const Agreement=styled.span`
font-size:12px;
margin:20px 0;
`
const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;

`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
