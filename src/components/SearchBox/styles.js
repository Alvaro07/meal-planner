import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Input = styled.input.attrs({ type: 'text' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 100%;
  flex: 1;
  margin-right: 15px;
  padding: 10px 8px;
  border-radius: 3px;
  border: 1px solid var(--grey);
  font-size: 1.4rem;

  &:focus {
    outline-color: var(--blue);
  }
`

export const Error = styled.p`
  flex-basis: 100%;
  padding-top: 15px;
  color: var(--pink);
  font-weight: bold;
`

export const ValidateMessage = styled.p`
  flex-basis: 100%;
  padding-top: 15px;
  color: var(--green);
  font-weight: 700;
`
