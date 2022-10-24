import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const productsList = require("../../data/data.json");
import Image from 'next/image'

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(
    productsList.find((product) => product.id === parseInt(id))
  );
  // setProduct(productsList.filter(product => product.id !== id)[0])
  return (
    <>
      <h1>Product {id}</h1>
      {product && 
      <div>
          <img src={product.image} width="400px" height="400px" alt="imagenbvwiu"/>
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
