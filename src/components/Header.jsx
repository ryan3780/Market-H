import { Link } from "react-router-dom";

export const Header = () => {

  const headerContents = [
    {
      label: 'Main',
      path: '/'
    },
    {
      label: 'ALL Products',
      path: '/products'
    },
    {
      label: 'Cart',
      path: '/cart'
    },
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