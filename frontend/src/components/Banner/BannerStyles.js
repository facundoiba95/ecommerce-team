import styled from 'styled-components'
import {motion} from 'framer-motion'

export const BannerStyled = styled(motion.header)`
  width: 100%;
  padding-top: var(--h-header);
`

export const BannerContentStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 700px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  div {
    width: 100%;
    text-align: center;
  }

  div > h1 {
    font-size: clamp(1.75em, 3vw, 2em);
    margin-bottom: 0.4rem;
    font-weight: var(--bold);
  }

  img {
    height: 300px;
    object-fit: contain;
  }
`
