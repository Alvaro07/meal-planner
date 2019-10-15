import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  padding: 10px;
`

export const LogoText = styled.h1`
  font-size: 3.2rem;
  font-family: var(--patua);
  letter-spacing: -1px;
  padding: 5px 15px;
  background-color: var(--yellow);
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-shadow: 1px 1px rgba(255,255,255,.4);

  & > svg {
    margin-right: 10px;
    -webkit-filter: drop-shadow( 1px 1px 0 rgba(255,255,255,.4));
    filter: drop-shadow( 1px 1px 0 rgba(255,255,255,.4));
  }
`
