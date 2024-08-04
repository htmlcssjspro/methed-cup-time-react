import { useState } from 'react'
import { API_URL } from '../const'
import { useCart } from '../context/CartContext'

export const CartItem = ({data}) => {
  const [quantity, setQuantity] = useState(data.quantity)
  const {updateQuantity, removeFromCart} = useCart()

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      updateQuantity(data.id, quantity - 1)
    }
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1)
    updateQuantity(data.id, quantity + 1)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(data.id)
  }

  return(
    <li className="cart__item">
      <article className="cart-item">
        <img className="cart-item__image" src={`${API_URL}${data.img}`} alt={data.title} />

        <div className="cart-item__info">
          <h3 className="cart-item__title">{data.title}</h3>
          <div className="cart-item__quantity">
            <button className="cart-item__quantity-button cart-item__quantity-button_minus" type="button" onClick={handleDecrease}></button>
            <input className="cart-item__quantity-input" type="number" name="quantity" form="cartform" value={quantity} readOnly />
            <button className="cart-item__quantity-button cart-item__quantity-button_plus" type="button" onClick={handleIncrease}></button>
            <button className="cart-item__remove-button" type="button" onClick={handleRemoveFromCart}>Удалить</button>
          </div>
          <p className="cart-item__price">{data.price}&nbsp;₽</p>
          <p className="cart-item__total">{data.price * data.quantity}&nbsp;₽</p>
        </div>
      </article>
    </li>
  )
}
