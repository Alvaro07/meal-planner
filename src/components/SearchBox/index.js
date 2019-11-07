import React from 'react'
import { Wrapper, Input } from './styles'
import { Button } from '../Button'

export const SearchBox = ({ inputValue, onClick, placeholder }) => {
  return (
    <Wrapper>
      <Input {...inputValue} placeholder={placeholder} />
      <Button text='Add' secondary onClick={e => onClick(e)} />
    </Wrapper>
  )
}
