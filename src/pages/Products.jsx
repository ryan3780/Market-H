import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

export const Products = () => {


  const getProducts = async () => {
    const { data } = await axios.get('http://localhost:5001/products');

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

    <Container maxWidth='xl'>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          m: 1,
          p: 1,

        }}
      >
        {data.map((product, idx) => {
          return (
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 1,
              p: 1,

            }} key={idx}>
              <Link to={`${product.id}`} >
                <img src={product.image} alt="product image" width={300} height={300} />

              </Link>
              <Box sx={{ width: '300px', mt: 2 }}>
                {product.title}
              </Box>
              <Box>
                Rp {product.price}
              </Box>
            </Box>
          )
        })}
      </Box>
    </Container>

  )

}