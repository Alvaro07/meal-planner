import styled from 'styled-components'
import { mediaQueries } from '../../styles/variables'
import { TiEdit } from 'react-icons/ti'

export const CardWrap = styled.li`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(80,80,80,0.05), 
              0 1px 1px rgba(80,80,80,0.05), 
              0 2px 2px rgba(80,80,80,0.05), 
              0 4px 4px rgba(80,80,80,0.05), 
              0 8px 8px rgba(80,80,80,0.05);
  margin-bottom: 15px;

  @media (min-width: ${mediaQueries.medium}) {
    margin-bottom: 0;
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
`

export const Description = styled.h4``
