import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Products from './Products'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <Products/>
    </div>
  )
}

export default Home
