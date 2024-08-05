import { useOrder } from '../context/OrderContext'

export const Order = () => {
  const {orderData, updateOrderData} = useOrder()

  const handleChange = (e) => {
    const { name, value } = e.target
    updateOrderData(name, value)
  }

  return (
    <section className="order">
      <div className="container">
        <h2 className="order__title">Доставка</h2>

        <form className="order__form">
          <input className="order__input" type="text" name="name" placeholder="Имя" value={orderData.name} onChange={handleChange} />
          <input className="order__input" type="tel" name="phone" placeholder="Телефон" value={orderData.phone} onChange={handleChange} />
          <input className="order__input order__input_address" type="text" name="address" placeholder="Адрес" value={orderData.address} onChange={handleChange} />

          <fieldset className="order__payment">
            {/* <legend className="order__payment-title">Оплата:</legend> */}
            <h3 className="order__payment-title">Оплата:</h3>
            <label className="order__payment-label">
              <input className="order__payment-radio" type="radio" name="payment" value={'card'} checked={orderData.payment === 'card'} onChange={handleChange} />
            Картой
            </label>
            <label className="order__payment-label">
              <input className="order__payment-radio" type="radio" name="payment" value={'cash'} checked={orderData.payment === 'cash'} onChange={handleChange} />
            Наличными
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  )
}
