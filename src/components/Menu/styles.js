import styled from 'styled-components'
import { mediaQueries } from '../../styles/variables'
import { Link } from '@reach/router'

export const Wrap = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${mediaQueries.medium}) {
    flex-direction: initial;
  }
`

export const BoxLink = styled(Link)`
  display: inline-block;
  padding: 30px;
  margin: 0 0 15px 0;
  color: white;
  font-family: var(--patua);
  font-size: 2.6rem;
  border-radius: 5px;
  text-decoration: none;
  transition: .2s all ease;
  background-color: var(--pink);
  
  /* For icons */
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (min-width: ${mediaQueries.medium}) {
    margin: 0 0 0 15px;
  }
  
  &:hover {
    background-color: var(--light-pink);
  }

  &:last-child {
    background-color: var(--blue);
    
    @media (min-width: ${mediaQueries.medium}) {
      margin-left: 15px;
    } 

    &:hover {
      background-color: var(--light-blue);
    }
  }


  





`
