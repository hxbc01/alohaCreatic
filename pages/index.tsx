import type { NextPage } from 'next'
import Navbar from '../components/Header/navbar'
import Content from '../components/Home/content'
import Corousel from '../components/Home/corousel'


const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Corousel />
      <Content />
    </>
  )
}

export default Home
