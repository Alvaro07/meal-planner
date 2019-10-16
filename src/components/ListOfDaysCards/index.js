import React, { useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from '../firebase'
import { Context } from '../../Context'

import { Main } from '../../styles/GlobalStyles'
import { List } from './styles'
import { Loader } from '../Loader'
import { DayCard } from '../DayCard'

export const ListOfDaysCards = () => {
  const { user } = useContext(Context)
  const [userData, dataLoading] = useCollectionData(firebase.db.collection('users').where('displayName', '==', user.name))

  return (
    <Main>
      {dataLoading && <Loader fullContainer fixed />}
      <List>
        {userData &&
          userData[0].menu.map((data, i) => <DayCard key={i} {...data} />)}
      </List>
    </Main>
  )
}
