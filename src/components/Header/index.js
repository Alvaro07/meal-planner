import React, { useContext, useState } from 'react'
import { Context } from '../../Context'
import firebase from '../firebase'
import { Button } from '../Button'
import { Header as StickyHeader, HeaderWrap, LogoText, BurguerIcon } from './styles'
import { Modal } from '../Modal'
import { Menu } from '../Menu'
import { MdExitToApp } from 'react-icons/md'

export const Header = ({ title }) => {
  const { removeAuth } = useContext(Context)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const signOut = () => {
    firebase.logout()
    removeAuth()
  }

  return (
    <StickyHeader>
      <HeaderWrap>
        <BurguerIcon onClick={() => setModalIsOpen(true)} />
        <LogoText>
          {title}
        </LogoText>
        <Button small onClick={() => signOut()} icon={MdExitToApp} iconSize='24' />
      </HeaderWrap>

      {modalIsOpen &&
        <Modal onClose={() => setModalIsOpen(false)}><Menu onLink={() => setModalIsOpen(false)} /></Modal>}
    </StickyHeader>
  )
}
