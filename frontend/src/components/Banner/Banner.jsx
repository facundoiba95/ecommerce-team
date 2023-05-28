import { BannerStyled, BannerContentStyled } from './BannerStyles'
//others
import Woman from '../../../public/woman.png'
import Button from '../UI/Button/Button'

const Banner = () => {
  return (
    <BannerStyled
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <BannerContentStyled>
        <div>
          <h1>50% on most of our products</h1>
          <Button>See Products</Button>
        </div>
        <img src={Woman} alt='banner picture' />
      </BannerContentStyled>
    </BannerStyled>
  )
}
export default Banner
