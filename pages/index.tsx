import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Products from './products'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>/products for products</p>
      <p>/products/1 for product with id 1</p>
    </div>
  )
}

export default Home
