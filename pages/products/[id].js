import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//const productsList = require("../../data/data.json");
import Image from 'next/image'

import {handler} from '../../helpers/FetchData'


export default function ProductPage({product}) {
  //const [product, setProduct] = useState();
  // setProduct(productsList.filter(product => product.id !== id)[0])
  return (
    <>
      <h1>Product Details</h1>
      {product && 
      <div>
          <Image src={product.image} width="400px" height="400px" alt="imagenbvwiu"/>
          <div>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <span>{product.rating.rate}</span>
          </div>

      </div>
      }
    </>
  );
}

export async function getServerSideProps(context) {
  
  const { id } = context.query;
  console.log(id);
  const url = `https://fakestoreapi.com/products/${id}`;
  // const response = await getProduct('//';
  // const data = await response.json()
  const product = await handler(url)
  return {
    props:{
      product
    }
  }
}
