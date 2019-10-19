import styled from 'styled-components'

export const ListWrap = styled.ul`
  position: relative;
  background-color: white;
  padding: 20px 15px;
  margin-bottom: 20px;
  transition: .2s all ease;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(80,80,80,0.05), 
              0 1px 1px rgba(80,80,80,0.05), 
              0 2px 2px rgba(80,80,80,0.05), 
              0 4px 4px rgba(80,80,80,0.05), 
              0 8px 8px rgba(80,80,80,0.05);
`
export const SearchBox = styled.form`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px 15px;
  margin-bottom: 20px;
  transition: .2s all ease;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(80,80,80,0.05), 
              0 1px 1px rgba(80,80,80,0.05), 
              0 2px 2px rgba(80,80,80,0.05), 
              0 4px 4px rgba(80,80,80,0.05), 
              0 8px 8px rgba(80,80,80,0.05);
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
export const Error = styled.p`
  padding: 15px 0;
  color: var(--pink);
  font-weight: bold;
`
