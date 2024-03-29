import instance from '@/apis'
import { TProduct } from '@/interfaces/TProduct'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const ProductList = () => {
  // ! Dump component va smart component
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div className='product__list'>
          <div key={product.id}>
            <Card style={{ width: '18rem', height: '30rem' }}>
              <Link to={`/shop/${product.id}`}>
                <Card.Img style={{ height: '10rem' }} variant='top' src={product.thumbnail} alt={product.title} />
              </Link>
              <Card.Body>
                <Link to={`/shop/${product.id}`}>
                  <Card.Title>{product.title}</Card.Title>
                </Link>
                <Card.Text>{product.description} </Card.Text>
                <Card.Text>{product.price} </Card.Text>
              </Card.Body>
            </Card>
            {/* <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img width={100} src={product.thumbnail} alt={product.title} /> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
