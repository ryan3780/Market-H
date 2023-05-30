import { Container } from '@mui/system';
import { useQuery } from "@tanstack/react-query";
import Box from '@mui/material/Box';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';



export const Cart = () => {

  const getCartProducts = async () => {
    const { data } = await axios.get('http://localhost:5001/cart');
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

  const handleRemoveCartProduct = async (id) => {
    await axios.delete(`http://localhost:5001/cart/${id}`)
    window.location.reload()
  }


  return (
    <Container maxWidth='xl'>

      {data.length === 0 ? <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>PLZ FILL YOUR CART </Box> : <Box
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
                <Box sx={{ mb: 1 }}>
                  {product.category}
                </Box>
                <Box sx={{ mb: 1 }}>
                  {product.title}
                </Box>
                <Box sx={{ mb: 1 }}>
                  Rp {product.price}
                </Box>
                <Box sx={{ mb: 1 }}>
                  QUANTITY :  {product.quantity}
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleRemoveCartProduct(product.id)}>
                    Delete
                  </Button>
                </Box>
              </Box>

            </Box>
          )
        })}

      </Box>

      }


    </Container>
  )
}