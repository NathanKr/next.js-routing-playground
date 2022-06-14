import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();

  return (
    <div>
      <p>detaild about a product. productId : {router.query.productId}</p>
    </div>
  );
};

export default ProductDetails;
