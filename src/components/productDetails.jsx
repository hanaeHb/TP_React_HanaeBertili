import { Link, useParams } from "react-router-dom"
import { products } from "../data/products"

function productDetails() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) return <p>Produit introuvable</p>
  return (
    <div className="details">
      <img src={product.images} alt={product.title} className="details-image" />
      <h2 className="title">{product.title}</h2>
      <p className="product-des">{product.description}</p>
      <p className="product-des">Price: {product.price} MAD</p>
      <Link className="product-button">Add To Cart</Link>
    </div>
  )
}

export default productDetails
