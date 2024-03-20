import Banner from '@/components/Banner'

import ProductList from '@/components/ProductList'

type Props = {}
const Home = (props: Props) => {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  )
}

export default Home
