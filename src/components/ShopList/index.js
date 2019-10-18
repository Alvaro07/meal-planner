import React, { useState, useContext } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Context } from '../../Context'
import firebase from '../firebase'

import { ProductList } from '../ProductList'
import { Button } from '../Button'
import { Main } from '../../styles/GlobalStyles'
import { ListWrap, SearchBox, Input } from './styles'
import { Loader } from '../Loader'

export const ShopList = props => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const product = useInputValue('')
  const [products, setProducts] = useState(props.list[0].shopList)

  const handleClick = e => {
    e.preventDefault()
    setProducts([...products, { product: product.value, checked: false }])
    product.setValue('')
  }

  const handleUpdate = e => {
    e.preventDefault()
    setLoading(true)
    const updateList = products.filter(e => e.checked === false)

    firebase.updateShopList(user.name, updateList).then(() => {
      setLoading(false)
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
        <Button text='Add' onClick={e => handleClick(e)} />
      </SearchBox>
      {products.length > 0 &&
        <>
          <ListWrap>
            {products.map((item, i) => <ProductList key={i} {...item} onCheck={check => handleCheck(check, item)} />)}
          </ListWrap>
          <Button text='Update list' big secondary onClick={e => handleUpdate(e)} />
        </>}

      {loading && <Loader fullContainer opacityBg />}
    </Main>
  )
}
