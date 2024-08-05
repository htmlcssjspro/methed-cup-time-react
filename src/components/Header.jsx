import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useProducts } from '../context/ProductContext'

export const Header = () => {
  const location = useLocation()
  const {cart} = useCart()
  const {categories} = useProducts()

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get('category')
    return category === currentCategory ? 'active' : ''
  }

  return (
    <header id="header" className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src="image/logo.svg" alt="Логотип Cup Time" />
        </Link>

        <nav className="header__nav">
          <ul className="header__menu">
            {Object.entries(categories).map(([category, title]) => (
              <li className="header__menu-item" key={category}>
                <Link to={`/products?category=${category}`} className={`header__menu-link ${getActiveClass(category)}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/cart" className="header__cart-link">
          {cart ? cart.length : 0}
        </Link>
      </div>
    </header>
  )
}
