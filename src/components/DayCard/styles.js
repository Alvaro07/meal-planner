import styled from 'styled-components'
import { mediaQueries } from '../../styles/variables'
import { TiEdit } from 'react-icons/ti'

export const CardWrap = styled.li`
  position: relative;
  background-color: white;
  padding: 15px;
  margin-bottom: 15px;
  transition: .2s all ease;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(80,80,80,0.05), 
              0 1px 1px rgba(80,80,80,0.05), 
              0 2px 2px rgba(80,80,80,0.05), 
              0 4px 4px rgba(80,80,80,0.05), 
              0 8px 8px rgba(80,80,80,0.05);
  

  @media (min-width: ${mediaQueries.medium}) {
    flex-direction: column;
    display: flex;

    margin-bottom: 0;
    &:nth-child(6) {
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }

  @media (min-width: ${mediaQueries.large}) {
    grid-column-start: span 2;
    &:nth-child(5) {
      grid-column-start: 2;
      grid-column-end: 4;
    }
    &:nth-child(6) {
      grid-column-start: 4;
      grid-column-end: 6;
    }
  }
`

export const DayTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--pink);
  font-family: var(--patua);
  display: flex;
  align-items: center;

  & + article {
    margin-top: 15px;
  }
`

export const EditIcon = styled(TiEdit)`
  margin-left: auto;
  font-size: 3.2rem;
  cursor: pointer;
  transition: .2s ease all;
  color: var(--dark-grey);

  &:hover {
    color: var(--pink)
  }
`

export const Meal = styled.article`
  padding: 15px 0px;
  border-top: 1px dotted var(--grey);
`

export const Type = styled.h3`
  font-size: 1.8rem;
  font-family: var(--patua);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DeleteBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  color: var(--pink);
  cursor: pointer;
  font-size: 1.1rem;
  font-family: var(--open-sans);
  font-weight: 700;
  transition: .2s all ease;

  &:hover {
    color: var(--light-pink)
  }

`

export const Description = styled.h4``

export const NoMeal = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px dotted var(--grey);
  margin-top: 15px;

  flex: 1;
`
