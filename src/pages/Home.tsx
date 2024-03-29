import Banner from '@/components/Banner'

import ProductList from '@/components/ProductList'
import { TProduct } from '@/interfaces/TProduct'

type Props = {
  products: TProduct[]
}
const Home = ({ products }: Props) => {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  )
}

export default Home
