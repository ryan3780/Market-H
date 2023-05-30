import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';



export const Detail = () => {

  const { id } = useParams()

  const getDetailProduct = async () => {
    const { data } = await axios.get(`http://localhost:5001/products/${id}`);
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

  const handleAddCart = async () => {

    data.quantity = 1

    const res = await axios.get(`http://localhost:5001/cart`)

    if (res.data.length > 0) {
      try {

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].id === data.id) {
            data.quantity = res.data[i].quantity + 1
            axios.put(`http://localhost:5001/cart/${data.id}`, data)
          }
        }

        const checkExist = res.data.map((item) => {
          if (item.id !== data.id) {
            return false
          }
        })

        if (!checkExist.includes(undefined)) {
          axios.post(`http://localhost:5001/cart`, data)
        }

      } catch (e) {
        console.log(e)
      }
    } else {
      await axios.post(`http://localhost:5001/cart`, data)
    }

  }


  return (
    <Container maxWidth='md'>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          m: 1,
          p: 1,

        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            m: 1,
            p: 1,
            mr: 2
          }}
        >
          <div key={data.id}>
            <img src={data.image} alt="proudct image" width={`300px`} />
          </div>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 1,
            p: 1,
            width: '300px'
          }}
        >
          <Box sx={{ mt: 1 }}>
            {data.category}
          </Box>
          <Box sx={{ mt: 1, mb: 1, fontSize: 20 }}>
            {data.title}
          </Box>
          <Box sx={{ mt: 1, mb: 1, fontSize: 16, color: `rgba(49,46,46,0.62)` }}>
            Rp {data.price}
          </Box>
          <Box sx={{ mt: 3, mb: 3 }}>
            <Button variant="contained" onClick={handleAddCart}>ADD CART</Button>
          </Box>
          <Divider />
          <Box sx={{ mt: 3, mb: 1 }}>
            {data.description}
          </Box>
          <Box sx={{ mt: 1, mb: 1, display: 'flex' }}>
            Rating :
            <Rating
              name="simple-controlled"
              value={data.rating.rate}
              readOnly
              sx={{ ml: 2 }}
            />
          </Box>
          <Box sx={{ mt: 1, mb: 1 }}>
            Count : {" "}
            {data.rating.count}
          </Box>
        </Box>
      </Box>
    </Container >
  )
}