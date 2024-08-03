export const CartItem = ({data}) => {
  return(
    <li className="cart__item">
      <article className="cart-item">
        <img className="cart-item__image" src={data.image} alt={data.title} />

        <div className="cart-item__info">
          <h3 className="cart-item__title">{data.title}</h3>
          <div className="cart-item__quantity">
            <button className="cart-item__quantity-button cart-item__quantity-button_minus" type="button"></button>
            <input className="cart-item__quantity-input" type="number" min="1" name="quantity" form="cartform" value="1" />
            <button className="cart-item__quantity-button cart-item__quantity-button_plus" type="button"></button>
          </div>
          <p className="cart-item__price">{data.price}&nbsp;₽</p>
          <p className="cart-item__total">{data.price}&nbsp;₽</p>
        </div>
      </article>
    </li>
  )
}
