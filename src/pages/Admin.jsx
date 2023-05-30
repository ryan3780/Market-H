import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import newClothe from '../assets/new_clothe.jpg'
import { Products } from "./Products"


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

  const navigate = useNavigate()

  const handleCreateProduct = async () => {
    const post = await axios.post('http://localhost:5001/products/', sample)
    navigate('/admin', { state: 1 })
    // window.location.reload()
  }

  const { state } = useLocation()
  console.log(state)

  return (
    <>
      Admin
      <div>
        <button onClick={handleCreateProduct}>create test product</button>
        {/* <button onClick={handleRemoveProduct}>create test product</button> */}
      </div>
      <Products />
    </>
  )

}