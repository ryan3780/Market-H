import { Container } from '@mui/system';
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import axios from "axios";


export const Cart = () => {

  const getCartProducts = async () => {
    const { data } = await axios.get('http://localhost:5001/cart');
    console.log(data)
    return data;
  }

  const { isLoading, isError, data } = useQuery(['Cart_Prodcuts'], getCartProducts);

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
          flexDirection: 'column',
          m: 1,
          p: 1,
          border: 1
        }}
      >

        {data.map((product, idx) => {
          return (
            <Box sx={{ display: 'flex', backgroundColor: 'fff', mb: 1 }} key={idx}>
              <img src={product.image} alt="product image" width={50} height={50} />
              <Box sx={{ ml: 2 }}>
                <div>
                  {product.category}
                </div>
                <div>
                  {product.title}
                </div>
                <div>
                  Rp {product.price}
                </div>
              </Box>
            </Box>
          )
        })}

      </Box>
      {/* <Grid container spacing={2}>
      {data.map((product, idx) => {
        return (
          <div key={idx}>
            <img src={product.image} alt="product image" />
            {product.category}
          </div>
        )
      })}
    </Grid> */}
    </Container>
  )
}