import { createContext, useContext, useEffect, useState } from 'react';
import { API_URL } from '../const';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext)

export const ProductProvider = ({ children }) => {
  const [category, setCategory] = useState('')
  const [products, setProducts] = useState([])

  const categories = {
    tea: 'Чай',
    coffee: 'Кофе',
    teapots: 'Чайники',
    cezves: 'Турки',
    other: 'Прочее',
  }

  useEffect(() => {
    if (category) {
      fetch(`${API_URL}/api/products/${category}`)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error=>console.error('Error fetching products: ', error))

    }
  }, [category])

  return(
    <ProductContext.Provider value={{products, setCategory, categories}} >
      {children}
    </ProductContext.Provider>
  )
};
