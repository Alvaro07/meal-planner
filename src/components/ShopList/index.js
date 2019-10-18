import React from 'react'
import { Main } from '../../styles/GlobalStyles'
import { ListWrap } from './styles'
import { ProductList } from '../ProductList'

export const ShopList = () => {
  return (
    <Main>
      <ListWrap>
        {[1, 2, 3].map((e, i) => <ProductList key={i} />)}
      </ListWrap>
    </Main>
  )
}
