import styled, { css } from 'styled-components'

export const ButtonTag = styled.button`
  display: inline-flex;
  align-items: center;

  width: ${props => (props.fullWidth ? '100%' : null)};
  padding: 10px 15px;

  font-size: 1.4rem;
  font-weight: 700;
  color: white;

  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s all ease;
  background-color: var(--blue);
  
  &:hover {
    background-color: var(--light-blue);
  }

  & svg:not(:last-child) {
    margin-right: 10px;
  }

  /*
   * Secondary styles
   */
  
  ${props =>
    props.small &&
    css`
      padding: 0 10px;
      height: 3.7rem;
  `}

  ${props =>
    props.big &&
    css`
      padding: 10px 20px;
      font-size: 1.6rem;
  `}


  ${props =>
    props.secondary &&
    css`
      background-color: var(--green);
      &:hover {
        background-color: var(--light-green);
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



  /*
   * Disabled styles
   */

  ${props =>
    props.disabled &&
    css`
      cursor: default;
      pointer-events: none;
      background-color: var(--grey);

      &:focus {
        background-color: var(--grey);
      }
    `}


`
