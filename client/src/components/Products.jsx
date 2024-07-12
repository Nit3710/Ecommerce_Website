import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import axios from 'axios'
import { popularProducts } from '../data'
const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between:
`
const Products = ({ cat, filter, sort }) => {
    const[products,setProducts]=useState([]);
    const[filteredProducts,setFilteredProducts]=useState([]);
    console.log(cat, filter, sort);
    useEffect(()=>{
        const getProducts=async()=>{
            try{
                const res=await axios.get("http://127.0.0.1:5000/api/products");
                console.log(res);

            }catch(error){
                console.log(error);
            }

        }
        getProducts();


    },[cat])
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
