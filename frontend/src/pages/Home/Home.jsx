import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getCategories } from '../../api/axios'
import { Banner } from '../../components'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getCategories())
  }, [dispatch])

  return (
    <>
      <Banner />
    </>
  )
}

export default Home
