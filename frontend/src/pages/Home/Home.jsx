import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../../api/axios'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <>
      <div>
        <h1>CATEGORIAS</h1>
      </div>
    </>
  )
}

export default Home
