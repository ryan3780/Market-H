import { createBrowserRouter } from "react-router-dom"


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