import styled, { createGlobalStyle } from 'styled-components'
import { Link } from '@reach/router'

export const ResetStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

export const GlobalStyle = createGlobalStyle`
  :root {
    --light-yellow: #fed330;
    --yellow: #f7b731;

    --light-orange: #fd9644;
    --orange: #fa8231;

    --light-pink: #fc5c65;
    --pink: #eb3b5a;
    
    --light-green: #26de81;
    --green: #20bf6b;

    --light-blue: #45aaf2;
    --blue: #2d98da;

    --light-purple: #a55eea;
    --purple: #8854d0;

    --light-grey: #E7EFF3;
    --grey: #d2d2d2;
    --dark-grey: #333;

    --open-sans: 'Open Sans', sans-serif;
    --patua: 'Patua One', cursive;

    --bg-body: linear-gradient(112.5deg, rgba(232, 232, 232, 0.03) 0%, rgba(232, 232, 232, 0.03) 2%,rgba(231, 231, 231, 0.03) 2%, rgba(231, 231, 231, 0.03) 4%,rgba(231, 231, 231, 0.03) 4%, rgba(231, 231, 231, 0.03) 11%,rgba(2, 2, 2, 0.03) 11%, rgba(2, 2, 2, 0.03) 67%,rgba(231, 231, 231, 0.03) 67%, rgba(231, 231, 231, 0.03) 90%,rgba(111, 111, 111, 0.03) 90%, rgba(111, 111, 111, 0.03) 100%),linear-gradient(157.5deg, rgba(210, 210, 210, 0.03) 0%, rgba(210, 210, 210, 0.03) 17%,rgba(254, 254, 254, 0.03) 17%, rgba(254, 254, 254, 0.03) 18%,rgba(96, 96, 96, 0.03) 18%, rgba(96, 96, 96, 0.03) 44%,rgba(159, 159, 159, 0.03) 44%, rgba(159, 159, 159, 0.03) 70%,rgba(24, 24, 24, 0.03) 70%, rgba(24, 24, 24, 0.03) 82%,rgba(16, 16, 16, 0.03) 82%, rgba(16, 16, 16, 0.03) 100%),linear-gradient(22.5deg, rgba(47, 47, 47, 0.03) 0%, rgba(47, 47, 47, 0.03) 32%,rgba(124, 124, 124, 0.03) 32%, rgba(124, 124, 124, 0.03) 40%,rgba(200, 200, 200, 0.03) 40%, rgba(200, 200, 200, 0.03) 42%,rgba(16, 16, 16, 0.03) 42%, rgba(16, 16, 16, 0.03) 64%,rgba(243, 243, 243, 0.03) 64%, rgba(243, 243, 243, 0.03) 94%,rgba(93, 93, 93, 0.03) 94%, rgba(93, 93, 93, 0.03) 100%),linear-gradient(90deg, #FFF,#FFF)
    }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    min-width: 360px;
    height: 100%;
    min-height: 100%;
    font-size: 1.4rem;
    line-height: normal;
    font-family: var(--open-sans);
    color: var(--dark-grey);
    background: var(--bg-body);
    background-attachment: fixed;
  }

  input, button, textarea {
    font-family: var(--open-sans);
    color: var(--dark-grey);
  }

  #app {
    height: 100%;
    min-height: 100%;
    overflow: hidden;
  }

  .login-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    border: 10px solid white;
  }

`

export const PageWrap = styled.div`
  height: 100%;
  min-height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
`

export const StyledLink = styled(Link)`
  color: var(--dark-grey);
  font-weight: 700;
  transition: 0.3s all ease;
  text-decoration: none;

  &:hover {
    color: var(--dark-orange);
  }
`
