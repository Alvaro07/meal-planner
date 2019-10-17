import styled from 'styled-components'

export const Form = styled.form`
  padding: 15px;
  width: 100%;
  max-width: 768px;
  border: 1px dotted var(--grey);
`

export const Title = styled.h3`
  font-size: 2.4rem;
  font-family: var(--patua);
  padding-bottom: 10px;

`

export const Subtitle = styled.p`
  font-size: 1.4rem;
  padding-bottom: 20px;

`

export const ButtonsMeal = styled.div`
  display: flex;
  padding-bottom: 20px;
`

export const Textarea = styled.textarea`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 100%;
  margin-bottom: 20px;
  padding: 12px 8px;
  border-radius: 2px;
  border: 1px solid var(--grey);
  min-height: 150px;

  &:focus {
    outline-color: var(--blue);
  }
`

export const Footer = styled.footer`
  display: flex;
  
`
