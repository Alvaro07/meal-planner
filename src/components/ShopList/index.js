import React, { useState, useContext } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Context } from '../../Context'
import firebase from '../firebase'

import { ProductList } from '../ProductList'
import { Button } from '../Button'
import { Main } from '../../styles/GlobalStyles'
import { ListWrap, SearchBox, Input, Error } from './styles'
import { Loader } from '../Loader'

export const ShopList = props => {
  const { user } = useContext(Context)
  const product = useInputValue('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [products, setProducts] = useState(props.list)

  const handleClick = e => {
    e.preventDefault()

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
    setProducts(updateList)

    firebase.updateShopList(user.name, updateList).then(() => {
      setLoading(false)
      setError(null)
      product.setValue('')
    })
  }

  const handleUpdate = e => {
    e.preventDefault()
    setLoading(true)
    const updateList = products.filter(e => e.checked === false)

    firebase.updateShopList(user.name, updateList).then(() => {
      setProducts(updateList)
      setLoading(false)
      setError(null)
      product.setValue('')
    })
  }

  const handleCheck = (check, item) => {
    const productsFilter = products.map(e => e.product === item.product ? { product: item.product, checked: !check } : e)
    setProducts(productsFilter)
  }

  return (
    <Main shoplist>
      <SearchBox>
        <Input {...product} placeholder='Add product to the list' />
        <Button text='Add' secondary onClick={e => handleClick(e)} />
      </SearchBox>
      {products.length > 0 &&
        <>
          {products.filter(e => !e.checked).length > 0 &&
            <ListWrap>
              {products.map((item, i) => !item.checked ? <ProductList key={i} {...item} onCheck={check => handleCheck(check, item)} /> : null)}
            </ListWrap>}

          {products.filter(e => e.checked).length > 0 &&
            <ListWrap>
              {products.map((item, i) => item.checked ? <ProductList key={i} {...item} onCheck={check => handleCheck(check, item)} /> : null)}
            </ListWrap>}

          <Button text='Update list' big terciary onClick={e => handleUpdate(e)} />
        </>}

      {error && <Error>{error}</Error>}

      {loading && <Loader fullContainer opacityBg />}
    </Main>
  )
}
