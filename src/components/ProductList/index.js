import React, { useState, useEffect } from 'react'
import { ListItem, Checkbox, Label } from './styles'
import { FaCheck } from 'react-icons/fa'

export const ProductList = ({ product, checked, onCheck, id }) => {
  const [check, setCheck] = useState(false)

  const handleCheckboxChange = event => {
    setCheck(event.target.checked)
    onCheck(check, id)
  }

  useEffect(() => {
    setCheck(checked)
  }, [checked])

  return (
    <ListItem>
      <Label check={checked}>
        <Checkbox type='checkbox' checked={checked} onChange={e => handleCheckboxChange(e)} />
        {product}
        {check &&
          <FaCheck size='18' className='margin-left-auto' />}
      </Label>
    </ListItem>
  )
}
