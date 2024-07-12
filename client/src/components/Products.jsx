import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://127.0.0.1:5000/api/products?category=${cat}`
            : `http://127.0.0.1:5000/api/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (cat) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [products, cat, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => {
          return a.createdAt - b.createdAt
        })
      })
    }
    if (sort === "asc") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => {
          return a.price - b.price
        })
      })
    }
    else {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => {
          return b.price - a.price
        })
      })
    }
  }, [sort, filteredProducts])

  return (
    <Container>
      {
        cat ? filteredProducts.map((item) => <Product item={item} key={item.id} />) : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)
      }
    </Container>
  );
};

export default Products;