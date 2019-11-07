import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
`

export const Input = styled.input.attrs({ type: 'text' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 100%;
  margin-right: 15px;
  padding: 10px 8px;
  border-radius: 3px;
  border: 1px solid var(--grey);
  font-size: 1.4rem;

  &:focus {
    outline-color: var(--blue);
  }
`
