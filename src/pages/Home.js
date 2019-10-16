import React from 'react'

import { Header } from '../components/Header'
import { ListOfDaysCards } from '../components/ListOfDaysCards'

export const Home = () => {
  return (
    <>
      <Header title='My weekly menu' />
      <ListOfDaysCards />
    </>
  )
}
