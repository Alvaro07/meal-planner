import React, { useState, useContext } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Context } from '../../Context'
import firebase from '../firebase'

import { ProductList } from '../ProductList'
import { Button } from '../Button'
import { Main } from '../../styles/GlobalStyles'
import { ListWrap, SearchCard } from './styles'
import { Loader } from '../Loader'
import { SearchBox } from '../SearchBox'

export const ShopList = props => {
  const { user } = useContext(Context)
  const product = useInputValue('')
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState(props.list)

  const handleUpdate = e => {
    e.preventDefault()
    setLoading(true)
    const updateList = products.filter(e => e.checked === false)

    firebase.updateShopList(user.name, updateList).then(() => {
      setProducts(updateList)
      setLoading(false)
      product.setValue('')
    })
  }

  const handleCheck = (check, item) => {
    const productsFilter = products.map(e => e.product === item.product ? { product: item.product, checked: !check } : e)
    setProducts(productsFilter)
  }

  return (
    <Main shoplist>
      <SearchCard>
        <SearchBox placeholder='Add product to the list' onUpdate={data => setProducts(data)} />
      </SearchCard>

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

      {loading && <Loader fullContainer opacityBg />}
    </Main>
  )
}
