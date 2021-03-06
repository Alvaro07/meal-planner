import styled from 'styled-components'
import { FaAlignJustify } from 'react-icons/fa'
import { mediaQueries } from '../../styles/variables'

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 9;
  box-shadow: 0 1px 1px rgba(150,150,150,0.05), 
              0 1px 1px rgba(150,150,150,0.05), 
              0 2px 2px rgba(150,150,150,0.05), 
              0 4px 4px rgba(150,150,150,0.05), 
              0 8px 8px rgba(150,150,150,0.05);
`

export const HeaderWrap = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`

export const LogoText = styled.h2`
  font-size: 2.4rem;
  font-family: var(--patua);
  letter-spacing: -1px;

  @media (min-width: ${mediaQueries.large}) {
    font-size: 2.8rem;
  }
`

export const BurguerIcon = styled(FaAlignJustify)`
  font-size: 2.4rem;
  margin-right: 15px;
  transition: .2s all ease;
  cursor: pointer;

  &:hover {
    color: var(--pink)
  }
`
