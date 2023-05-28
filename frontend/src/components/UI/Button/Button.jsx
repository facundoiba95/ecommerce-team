import { ButtonStyled } from './ButtonStyles.js'

const Button = ({ children, onClick, w, h }) => {
  return (
    <ButtonStyled w={w} h={h} whileTap={{ scale: 0.95 }} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}
export default Button
