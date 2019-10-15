import React, { useContext } from 'react'
import { Context } from '../Context'
import firebase from '../components/firebase'

export const Home = () => {
  const { removeAuth } = useContext(Context)

  const signOut = () => {
    firebase.logout()
    removeAuth()
  }

  return <div onClick={() => signOut()}>Home</div>
}
