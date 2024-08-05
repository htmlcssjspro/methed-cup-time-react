import { createContext, useContext, useState } from 'react'


const OrderContext = createContext()

export const useOrder = () => useContext(OrderContext)

export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'cash',
  })

  const updateOrderData = (field, value) => {
    setOrderData(
      (prevOrderData) => ({
        ...prevOrderData,
        [field]: value
      })
    )
  }

  const resetOrderData = () => {
    setOrderData({
      name: '',
      phone: '',
      address: '',
      payment: 'cash',
    })
  }

  return (
    <OrderContext.Provider value={{orderData, updateOrderData, resetOrderData}}>
      {children}
    </OrderContext.Provider>
  )
}
