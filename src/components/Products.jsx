import { Product } from "./Product"

const products = [
  {
    id: 1,
    image: "image/photo-2.jpg",
    title: "Кокосовая матча",
    price: "390",
  },
  {
    id: 2,
    image: "image/photo-1.jpg",
    title: "Зеленый индонезийский чай",
    price: "340",
  },
  {
    id: 3,
    image: "image/photo.jpg",
    title: "Черный чай из Эфиопии",
    price: "380",
  },
  {
    id: 4,
    image: "image/photo-5.jpg",
    title: "Черный чай из Калифорнии",
    price: "360",
  },
  {
    id: 5,
    image: "image/photo-4.jpg",
    title: "Органическая веганская матча",
    price: "400",
  },
  {
    id: 6,
    image: "image/photo-3.jpg",
    title: "Чай черный Лакандона",
    price: "390",
  },
]

export const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Чай</h2>
        <ul className="products__list">
          {products.map((item) => (<Product key={item.id} data={item} />))}
        </ul>
      </div>
    </section>
  )
}
