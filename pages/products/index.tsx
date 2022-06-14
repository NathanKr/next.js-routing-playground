import Link from "next/link";
import React from "react";

const Products = () => {
  const ids = [1, 2, 3];
  const elems = ids.map((id) => (
    <div key={id}>
      <h2>Product{id}</h2>
      <Link href={`/products/${id}`}>
        <a>Go to pages/products/[productId].js with productId : {id}</a>
      </Link>
    </div>
  ));
  return <div>{elems}</div>;
};

export default Products;
