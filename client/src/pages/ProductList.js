import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Products from '../components/Products';
import { mobile } from '../Responsive';
import { useLocation } from 'react-router-dom';

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
${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })};
`
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({ marginRight: "0" })};
`
const Select = styled.select`
padding:10px;
margin-right:20px;
${mobile({ margin: "10px 0" })};

`
const Option = styled.option`

`
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filter, setFilters] = useState({});
    const [sort, setSorts] = useState("newest");

    const handleFilter = (e)=>{
        const value = e.target.value;
        setFilters({
            ...filter,
            [e.target.name]: value,
            });
    }

    console.log(filter);

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select onChange={handleFilter} name="color">
                        <Option disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Yellow</Option>
                        <Option>Blue</Option>
                        <Option>Gray</Option>
                        <Option>Red</Option>
                    </Select>
                    <Select onChange={handleFilter} name="size">
                        <Option disabled>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                        <Option>M</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={e => setSorts(e.target.value)}>
                        <Option disabled selected>Newest</Option>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">price (asc)</Option>
                        <Option value="desc">price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filter={filter} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;