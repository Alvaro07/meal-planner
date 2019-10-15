import React, { useContext } from 'react'
import { Context } from '../../Context'
import firebase from '../firebase'
import { Logo } from '../Logo'
import { Header as HeaderWrap, LogoText } from './styles'

export const Header = () => {
  const { removeAuth } = useContext(Context)

  const signOut = () => {
    firebase.logout()
    removeAuth()
  }

  return (
    <HeaderWrap>
      <LogoText>
        <Logo size='32' />Menu Planner
      </LogoText>
    </HeaderWrap>
  )
}
