import { Navigate, Route, Routes } from 'react-router-dom'
import { Promo } from './Promo'
import { Products } from './Products'
import { Cart } from './Cart'
import { Order } from './Order'

export const Main = () => {
  return(
    <main id="main" className="main">
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/products?category=tea" />
          }
        />

        <Route
          path="/products"
          element={
            <>
              <Promo />
              <Products />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Cart />
              <Order />
            </>
          }
        />
      </Routes>

    </main>
  )
}
