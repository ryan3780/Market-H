import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Products = () => {


  const getProducts = async () => {
    const { data } = await axios.get('http://localhost:5001/products');
    console.log(data)
    return data;
  }

  const { isLoading, isError, data } = useQuery(['All_Prodcuts'], getProducts);

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if (isError) {
    return (
      <div>Error...</div>
    )
  }


  return (
    <>
      {data.map((product, idx) => {
        return (
          <div key={idx}>
            <img src={product.image} alt="product image" width={`300px`} />
            {product.category}
          </div>
        )
      })}
    </>
  )

}