import { products } from "../data/products"
import Catalog from "../components/Catalog"

function Home() {
  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="grid">
        {products.map((product) => (
          <Catalog key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home 