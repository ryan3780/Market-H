import { Link } from "react-router-dom";

export const Header = () => {

  const headerContents = [
    {
      label: 'MAIN',
      path: '/'
    },
    {
      label: 'ALL PRODUCTS',
      path: '/products'
    },
    {
      label: 'CART',
      path: '/cart'
    },
    {
      label: 'ADMIN',
      path: '/admin'
    }
  ]

  return (

    <nav>
      {headerContents.map((item, idx) => {
        return (
          <li key={idx}>
            <Link to={item.path} >
              {item.label}
            </Link>
          </li>
        )
      })}
    </nav>

  )
}