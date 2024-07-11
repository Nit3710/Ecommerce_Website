import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { mobile } from '../Responsive'

const Container = styled.div`

`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`
const Title = styled.h1`
margin:20px;

`
const Filter = styled.div`
margin:20px;
${mobile({margin:"0 20px",display:"flex",flexDirection:"column"})};
`
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({marginRight:"0"})};
`
const Select = styled.select`
padding:10px;
margin-right:20px;
${mobile({margin:"10px 0"})};

`
const Option = styled.option`

`
const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Yellow</Option>
                        <Option>Blue</Option>
                        <Option>Gray</Option>
                        <Option>Red</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                        <Option>M</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>price</Option>
                        <Option>price (asc)</Option>
                        <Option>price (desc)</Option>
                    </Select>
                </Filter>

            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
