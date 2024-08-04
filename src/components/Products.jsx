import { useEffect } from 'react'
import { useProducts } from '../context/ProductContext'
import { Product } from './Product'
import { useSearchParams } from 'react-router-dom'
import { SkeletonLoader } from './SkeletonLoader'


export const Products = () => {
  const [searchParams] = useSearchParams()
  const { products, setCategory } = useProducts()
  const category = searchParams.get('category')

  const titles = {
    coffee: 'Кофе',
    tea: 'Чай',
    teapots: 'Чайники',
    cezves: 'Турки',
    other: 'Прочее',
  }

  const title = titles[category]

  useEffect(() => {
    setCategory(category)
  }, [category, setCategory])

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">{title}</h2>
        <ul className="products__list">
          {
            products.length
              ? products.map((item) => <Product key={item.id} data={item} />)
              : (<SkeletonLoader />)
          }
        </ul>
      </div>
    </section>
  )
}
