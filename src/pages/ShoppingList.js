import React, { useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from '../components/firebase'
import { Context } from '../Context'

import { Header } from '../components/Header'
import { ShopList } from '../components/ShopList'
import { Loader } from '../components/Loader'

export const ShoppingList = () => {
  const { user } = useContext(Context)
  const [userData, dataLoading] = useCollectionData(firebase.db.collection('users').where('displayName', '==', user.name))

  return (
    <>
      <Header title='My shopping list' />
      {dataLoading && <Loader fullContainer />}
      {!dataLoading && <ShopList list={userData} />}
    </>
  )
}
