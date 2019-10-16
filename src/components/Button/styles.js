import styled, { css } from 'styled-components'

export const ButtonTag = styled.button`
  display: inline-flex;
  align-items: center;

  width: ${props => (props.fullWidth ? '100%' : null)};
  padding: 0 15px;
  height: 37px;

  font-size: 14px;
  font-weight: 700;
  color: white;

  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s all ease;
  background-color: var(--orange);

  &:hover {
    background-color: var(--light-orange);
  }

  & svg:not(:last-child) {
    margin-right: 10px;
  }

  /*
   * Secondary styles
   */

  ${props =>
    props.secondary &&
    css`
      background-color: var(--blue);
      &:hover {
        background-color: var(--light-blue);
      }
    `}
  
  ${props =>
    props.terciary &&
    css`
      background-color: var(--pink);
      &:hover {
        background-color: var(--light-pink);
      }
    `}

  ${props =>
    props.round &&
    css`
      border-radius: 50%;
      padding: 10px;
    `}

  /*
   * Disabled styles
   */

  ${props =>
    props.disabled &&
    css`
      cursor: default;
      pointer-events: none;
      background-color: var(--grey);
    `}


`
