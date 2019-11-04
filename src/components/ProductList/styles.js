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

  position: relative;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  background: white;
  cursor: pointer;
  border: 2px solid var(--dark-grey);

  &::before {
    content: ' ';
    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    transition: all .1s;
    background: var(--dark-grey);
  }

  &:checked::before {
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
  }
`
