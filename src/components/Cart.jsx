import { useState } from 'react';
import { useCart } from '../context/CartContext'
import { CartItem } from './CartItem'
import { SkeletonLoader } from './SkeletonLoader';
import { useOrder } from '../context/OrderContext';
import Modal from 'react-modal';
import { API_URL } from '../const';

Modal.setAppElement('#root')

export const Cart = () => {
  const [orderStatus, setOrderStatus] = useState(null)
  const [orderId, setOrderId] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const {cart, resetCart} = useCart()
  const {orderData, resetOrderData} = useOrder()

  const handleSubmit = async () => {
    const orderPostData = {
      ...orderData,
      items: cart.map(item => ({id: item.id, quantity: item.quantity}))
    }
    try {
      const response = await fetch(
        `${API_URL}/api/orders`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderPostData)
        })

      if (!response.ok) {
        throw new Error('Failed to send order')
      }

      const result = await response.json()
      setOrderStatus('success')
      setOrderId(result.order.id)
      resetCart()
      resetOrderData()
    } catch (error) {
      setOrderStatus('error')
      console.error(error);
    } finally {
      setModalIsOpen(true)
    }
  }

  const closeModal = () => setModalIsOpen(false)

  const cartTotal = cart ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0

  return (
    <section className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Корзина ({cart ? cart.length : 0})</h2>

        <ul className="cart__list">
          {cart
            ? (cart.map((item) => (
              <CartItem key={item.id} data={item} />
            )))
            : (<SkeletonLoader />)
          }
        </ul>

        <div className="cart__summary">
          <h3 className="cart__summary-title">Итого:</h3>
          <p className="cart__total">{cartTotal}&nbsp;₽</p>
          <button className="cart__order-button" onClick={handleSubmit}>Заказать</button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-cart"
        overlayClassName="modal-cart__overlay"
      >
        <h2 className='modal-cart__title'>
          {orderStatus === 'success'
            ? `Заказ успешно отправлен! Номер заказа: ${orderId}`
            : 'Произошла ошибка при оформлении заказа'}
        </h2>
        <button className="modal-cart__button" onClick={closeModal}>Закрыть</button>
      </Modal>
    </section>
  )
}
