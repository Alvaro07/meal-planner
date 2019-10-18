import styled from 'styled-components'
import { mediaQueries } from '../../styles/variables'

export const ModalContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  overflow: auto;
  
  background-color: white;
  padding: 20px;
  z-index: 10;

  @media (min-width: ${mediaQueries.medium}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }


`

export const CloseButton = styled.button`
  display: inline-block;
  position: fixed;
  right: 20px;
  top: 10px;

  background: none;
  border: none;
  padding: 0;

  font-size: 4.5rem;
  font-family: var(--open-sans);
  font-weight: 300;
  line-height: 0.8;
  cursor: pointer;
  transition: 0.2s all ease;
  outline: none;

  @media (min-width: ${mediaQueries.medium}) {
    font-size: 6rem;
  }

  &:hover {
    color: var(--pink);
  }
  
`
