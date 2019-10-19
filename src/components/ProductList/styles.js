import styled, { css } from 'styled-components'

export const ListItem = styled.li`
  &:not(:last-child){
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px dotted var(--grey);
  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  font-size: 1.6rem;

  ${props => props.check && css`
    text-decoration: line-through
  `}

  & > svg {
    color: var(--green)
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`
