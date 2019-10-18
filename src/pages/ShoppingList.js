import React from 'react'
import { Header } from '../components/Header'
import { ShopList } from '../components/ShopList'

export const ShoppingList = () => {
  return (
    <>
      <Header title='My shopping list' />
      <ShopList />
    </>
  )
}
