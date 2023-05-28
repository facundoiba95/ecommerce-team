import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ButtonStyled = styled(motion.button)`
  width: ${({ w }) => (w ? w : '110px')};
  min-width: ${({ w }) => (w ? w : '100px')};
  height: ${({ h }) => (h ? h : '40px')};
  border-radius: var(--radius);
  border: none;
  background: transparent;
  outline: 2px solid var(--color-ui);
  color: var(--color-dark);
  cursor: pointer;
  user-select: none;
  transition: ease 400ms;
  font-weight: var(--semibold);

  &:hover {
    transition: ease 400ms;
    box-shadow: inset 0 0 100px var(--color-ui);
    color: var(--color-light);
  }
`
