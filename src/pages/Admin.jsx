import axios from "axios"
import newClothe from '../assets/new_clothe.jpg'
import { useQuery } from "@tanstack/react-query";
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export const Admin = () => {

  const sample = {
    "title": "New Product from Admin",
    "price": 999,
    "description": "Neat for Women",
    "category": "women's clothing",
    "image": newClothe,
    "rating": {
      "rate": 5.0,
      "count": 0
    }
  }


  const handleCreateProduct = async () => {
    const post = await axios.post('http://localhost:5001/products/', sample)
    window.location.reload()
  }

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
      <div>
        <Button color="success" variant="contained" onClick={handleCreateProduct}>create test product</Button>
        {/* <button onClick={handleRemoveProduct}>create test product</button> */}
      </div>
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

                <img src={product.image} alt="product image" width={300} height={300} />


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
    </>
  )

}