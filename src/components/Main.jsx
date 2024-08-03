import { Route, Routes } from "react-router-dom"
import { Promo } from "./Promo"
import { Products } from "./Products"
import { Cart } from "./Cart"
import { Order } from "./Order"

export const Main = () => {
  return(
    <main id="main" className="main">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Promo />
              <Products />
            </>
          } />
        <Route
          path="/cart"
          element={
            <>
              <Cart />
              <Order />
            </>
          } />
      </Routes>

    </main>
  )
}
