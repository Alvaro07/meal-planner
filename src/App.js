import React, { useEffect, useContext, useState } from 'react'
import firebase from './components/firebase'
import { Context } from './Context'
import { Router, Redirect, Location } from '@reach/router'

import { GlobalStyle, ResetStyle, PageWrap } from './styles/GlobalStyles'
import { HelperClasses } from './styles/HelperClasses'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'
import { Loader } from './components/Loader'
import { ShoppingList } from './pages/ShoppingList'

function App () {
  const { activateAuth, isAuth, user, addUser } = useContext(Context)
  const [initializing, setInitializing] = useState(true)

  useEffect(() => {
    setInitializing(true)

    firebase
      .getUser()
      .then(data => {
        if (data) {
          if (!user || data.email !== user.email) {
            addUser({ email: data.email, name: data.displayName, following: [] })
          }
          activateAuth()
          setInitializing(false)
        }
      })
      .catch(() => {
        setInitializing(false)
      })
  }, [activateAuth, isAuth, user, addUser])

  return (
    <PageWrap>
      <ResetStyle />
      <GlobalStyle />
      <HelperClasses />

      {initializing ? (
        <Loader />
      ) : isAuth ? (
        <Router>
          <NotFound default />
          <Home path={`${process.env.PUBLIC_URL}/`} />
          <ShoppingList path={`${process.env.PUBLIC_URL}/shopping-list`} />
          <Redirect noThrow from={`${process.env.PUBLIC_URL}/login`} to={`${process.env.PUBLIC_URL}/`} />
          <Redirect noThrow from={`${process.env.PUBLIC_URL}/register`} to={`${process.env.PUBLIC_URL}/`} />
        </Router>
      ) : (
        <Location>
          {({ location }) => (
            <Router className='login-wrap'>
              <Login path={`${process.env.PUBLIC_URL}/login`} />
              <Register path={`${process.env.PUBLIC_URL}/register`} />

              {location.pathname !== `${process.env.PUBLIC_URL}/register` && (
                <Redirect noThrow from={`${process.env.PUBLIC_URL}/*`} to={`${process.env.PUBLIC_URL}/login`} />
              )}
            </Router>
          )}
        </Location>
      )}
    </PageWrap>
  )
}

export default App
