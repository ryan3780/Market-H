import { Outlet, useLocation } from "react-router-dom"
import { Header } from "../components/Header"
import Box from '@mui/material/Box';



export const Layout = () => {

  const location = useLocation()

  return (
    <div >
      <Header />
      {location.pathname === '/' ? <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>MAIN PAGE</Box> : <Outlet />}
    </div>
  )

}