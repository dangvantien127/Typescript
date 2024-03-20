import instance from '@/apis'
import { TProduct } from '@/interfaces/TProduct'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ProductList = () => {
  // ! Dump component va smart component
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    // Cach 1:
    // fetch('http://localhost:3000/products')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     setProducts(data)
    //   })

    // Cach 2:
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

  // ! DependencyList = Danh sách phụ thuộc
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div className='product__list'>
          <div key={product.id}>
            <Card style={{ width: '18rem', height: '30rem' }}>
              <Card.Img style={{ height: '10rem' }} variant='top' src={product.thumbnail} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
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
