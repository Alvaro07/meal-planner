import React, { useContext, useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from '../firebase'
import { Context } from '../../Context'
import { setTest } from '../../redux/reducer'
import { useSelector, useDispatch } from 'react-redux'

import { Main } from '../../styles/GlobalStyles'
import { List } from './styles'
import { Loader } from '../Loader'
import { DayCard } from '../DayCard'

export const ListOfDaysCards = () => {
  const { user } = useContext(Context)
  const [userData, dataLoading] = useCollectionData(firebase.db.collection('users').where('displayName', '==', user.name))

  const test = useSelector(state => state.test)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(test)
  }, [test])

  return (
    <Main>
      {dataLoading && <Loader fullContainer fixed />}
      {test}
      <button onClick={() => dispatch(setTest(test + 1))}>Set test</button>
      <List>
        {userData &&
          userData[0].menu.map((data, i) => <DayCard key={i} {...data} />)}
      </List>
    </Main>
  )
}
