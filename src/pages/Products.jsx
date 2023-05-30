import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Container } from '@mui/system';
import Box from '@mui/material/Box';


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
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            m: 1,
            p: 1,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            border: '1px solid',
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
          }}
        >
          {data.map((product, idx) => {
            return (
              <div key={idx}>
                <img src={product.image} alt="product image" width={300} height={300} />
                {product.category}
              </div>
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
    </>
  )

}