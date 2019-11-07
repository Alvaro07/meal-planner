import React, { useState, useContext } from 'react'
import firebase from '../firebase'
import { Context } from '../../Context'
import { useInputValue } from '../../hooks/useInputValue'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { Wrapper, Input, Error, ValidateMessage } from './styles'
import { Button } from '../Button'
import { Loader } from '../Loader'

export const SearchBox = ({ inputValue, onClick, onUpdate, placeholder, validate }) => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const product = useInputValue('')
  const [userData, dataLoading] = useCollectionData(firebase.db.collection('users').where('displayName', '==', user.name))
  const [validateMessage, setValidateMessage] = useState(null)

  const handleClick = e => {
    e.preventDefault()
    const products = userData[0].shopList

    if (product.value === '') {
      setError('Please, introduce a valid product')
      return
    }

    if (products.filter(e => e.product.toLowerCase() === product.value.toLowerCase()).length > 0) {
      setError('Try another product, this is already in the list')
      return
    }

    setLoading(true)
    const updateList = [...products, { product: product.value, checked: false }]

    firebase.updateShopList(user.name, updateList).then(() => {
      setLoading(false)
      setError(null)
      product.setValue('')

      if (onUpdate) onUpdate(updateList)
      if (validate) setValidateMessage(`"${product.value}" is added to your shoplist`)
    })
  }

  return (
    <Wrapper>
      <Input {...product} placeholder={placeholder} />
      <Button text='Add' secondary onClick={e => handleClick(e)} />
      {error && <Error>{error}</Error>}
      {validateMessage && <ValidateMessage>{validateMessage}</ValidateMessage>}
      {(loading || dataLoading) && <Loader fullContainer opacityBg />}

    </Wrapper>
  )
}
