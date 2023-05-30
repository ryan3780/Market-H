

export const Header = () => {

  const headerContents = [
    'Main',
    'ALL Products',
    'Cart'
  ]

  return (

    <>
      {headerContents.map((item, idx) => {
        return (
          <li key={idx}>
            {item}
          </li>
        )
      })}
    </>

  )
}