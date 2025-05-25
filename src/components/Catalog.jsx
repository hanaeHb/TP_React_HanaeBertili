import { Link } from "react-router-dom"

function Catalog({ product }) {
  return (
    <div className="product-card">
      <img src={product.images} alt={product.title} className="product-image" />
      <h2 className="title">{product.title}</h2>
      <p className="product-des">Price: {product.price} MAD</p>
      <Link to={`/product/${product.id}`} className="product-button">See Details</Link>
    </div>
  )
}

export default Catalog
