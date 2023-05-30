import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const Detail = () => {

  const { id } = useParams()

  const getDetailProduct = async () => {
    const { data } = await axios.get(`http://localhost:5001/products/${id}`);
    console.log(data)
    return data;
  }

  const { isLoading, isError, data } = useQuery(['Detail_Prodcut'], getDetailProduct);

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

      <div key={data.id}>
        <img src={data.image} alt="proudct image" width={`300px`} />

      </div>

    </>
  )
}