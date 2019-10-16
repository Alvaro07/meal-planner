import styled from 'styled-components'
import { mediaQueries } from '../../styles/variables'

export const List = styled.ul`
  @media (min-width: ${mediaQueries.medium}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }

  @media (min-width: ${mediaQueries.large}) {
    grid-template-columns: repeat(4, 1fr);
  }

`
