import React from 'react'
import { Wrap, BoxLink } from './styles'
import { MdShoppingCart, MdEventNote } from 'react-icons/md'

export const Menu = ({ onLink }) => {
  return (
    <Wrap>
      <BoxLink to={`${process.env.PUBLIC_URL}/`} onClick={onLink}><MdEventNote size='64' />Weekly Menu</BoxLink>
      <BoxLink to={`${process.env.PUBLIC_URL}/shopping-list`} onClick={onLink}><MdShoppingCart size='64' />Shopping list</BoxLink>
    </Wrap>
  )
}
