import styled from 'styled-components'

export const FormWrap = styled.form`
  position: relative;
  display: block;
  width: 100%;
  max-width: 420px;
  position: relative;
  padding: 30px;
  border-radius: 5px;
`

export const LogoText = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 4.8rem;
  letter-spacing: -2px;
  font-family: var(--patua);
  color: var(--dark-grey);
  line-height: 1;
  
  padding-bottom: 30px;
  text-shadow: 2px 2px white;
  border-bottom: 1px solid var(--grey);


  & > svg {
    margin-bottom: 10px;
    -webkit-filter: drop-shadow( 2px 2px 0 white);
    filter: drop-shadow( 2px 2px 0 white);
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 10px;
  text-shadow: 2px 2px white;

  padding-top: 30px;
  border-top: 1px solid white;
`

export const SubTitle = styled.p`
  font-size: 14px;
  display: block;
  padding-bottom: 20px;
  text-shadow: 1px 1px white;
`

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 100%;
  margin-bottom: 10px;
  padding: 12px 8px;
  border-radius: 2px;
  border: 1px solid var(--grey);

  &:focus {
    outline-color: var(--blue);
  }
`

export const Actions = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ErrorMessage = styled.p`
  padding-top: 15px;
  color: var(--pink);
  text-align: center;
`
