import React, { useState } from 'react'
import { ListItem, Checkbox, Label } from './styles'
import { FaCheck } from 'react-icons/fa'

export const ProductList = () => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = event => {
    setChecked(event.target.checked)
  }

  return (
    <ListItem>
      <Label check={checked}>
        <Checkbox type='checkbox' checked={checked} onChange={e => handleCheckboxChange(e)} />
          Elemento de la lista de la compra
        {checked &&
          <FaCheck size='18' className='margin-left-auto' />}
      </Label>
    </ListItem>
  )
}
