import React, { useContext } from 'react'
import { Context } from '../../Context'
import firebase from '../firebase'
import { Button } from '../Button'
import { Header as StickyHeader, HeaderWrap, LogoText, BurguerIcon } from './styles'

export const Header = ({ title }) => {
  const { removeAuth } = useContext(Context)

  const signOut = () => {
    firebase.logout()
    removeAuth()
  }

  return (
    <StickyHeader>
      <HeaderWrap>
        <BurguerIcon />
        <LogoText>
          {title}
        </LogoText>
        <Button terciary onClick={() => signOut()} text='Log out' />
      </HeaderWrap>
    </StickyHeader>
  )
}
