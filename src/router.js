import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./layout/Layout"
import { NotFound } from "./components/NotFound"
import { Admin } from './pages/Admin'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import { Detail } from "./pages/Detail"


const routerInfo = [
  {
    label: 'Main',
    path: '/',
    element: <Layout />,
    children: [
      {
        label: 'Products',
        path: '/products',
        element: <Products />,
      },
      {
        label: 'Detail',
        path: '/products/:id',
        element: <Detail />
      },

      {
        label: 'Cart',
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <NotFound />,

  },
  {
    label: 'admin',
    path: '/admin',
    element: <Admin />
  },

]

export const routers = createBrowserRouter(
  routerInfo
)