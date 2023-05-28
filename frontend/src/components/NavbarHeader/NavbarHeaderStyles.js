import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarContainerStyles = styled.header`
  width: 100%;
  max-width: var(--max-w);
  margin-inline: auto;
  height: var(--h-header);
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: thin solid var(--color-dark);

  .barsIcon,
  .closeIcon {
    display: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  @media (max-width: 850px) {
    .barsIcon {
      display: ${(props) => (props.isOpenMenu ? 'none' : 'block')};
    }

    .closeIcon {
      display: ${(props) => (props.isOpenMenu ? 'block' : 'none')};
    }
  }
`

export const NavbarListStyles = styled.ul`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 850px) {
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: ${(props) => (props.isOpenMenu ? '200px' : '0')};
    opacity: ${(props) => (props.isOpenMenu ? '1' : '0')};
    visibility: ${(props) => (props.isOpenMenu ? 'visible' : 'hidden')};
    backdrop-filter: blur(10px);
    background-color: #f5f5f520;
    top: 80px;
    left: 0;
    transition: all 0.2s ease-in-out;
  }
`

export const NavbarItemStyle = styled(NavLink)`
  font-weight: var(--regular);
  cursor: pointer;
  transition: ease 0.3s;
  position: relative;
  transition: all ease 0.3s;

  &.active {
    color: var(--color-ui);
  }

  @media (min-width: 768px) {
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0%;
      height: 2px;
      transition: all ease 0.3s;
    }

    &:hover {
      color: var(--color-ui);
      transition: all ease 0.3s;
    }

    &:hover::after {
      background: var(--color-ui);
      width: 100%;
      transition: all ease 0.3s;
    }

    &.active {
      &::after {
        background: var(--color-ui);
        width: 100%;
      }
    }
  }
`

export const IconsHeaderContainerStyles = styled.span`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .iconHeader {
    font-size: var(--icon-size);
    cursor: pointer;
    transition: ease 300ms;
    &:hover {
      transition: ease 300ms;
      color: var(--color-ui);
    }
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`

export const LogoHeaderStyle = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
`
