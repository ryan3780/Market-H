import axios from "axios"
import newClothe from '../assets/new_clothe.jpg'
import { useQuery } from "@tanstack/react-query";
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { Header } from "../components/Header";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


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
    await axios.post('http://localhost:5001/products/', sample)
    window.location.reload()
  }

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

  const handleRemoveCartProduct = async (id) => {
    await axios.delete(`http://localhost:5001/products/${id}`)
    window.location.reload()
  }

  return (
    <>
      <Header />
      <Box sx={{ position: 'fixed', backgroundColor: 'white', mt: 1 }}>
        <IconButton color="primary" aria-label="add to shopping cart" onClick={handleCreateProduct}>
          <AddShoppingCartIcon /> CREATE SAMPLE PRODCUT
        </IconButton>
        {/* <button onClick={handleRemoveProduct}>create test product</button> */}
      </Box>
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
                <img src={product.image} alt="product" width={300} height={300} />
                <Button sx={{ mt: 2 }} variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleRemoveCartProduct(product.id)}>
                  Delete
                </Button>
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