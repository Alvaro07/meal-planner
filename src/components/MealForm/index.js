import React, { useState, useContext } from 'react'
import { Context } from '../../Context'
import firebase from '../firebase'

import { Form, Title, Subtitle, ButtonsMeal, Textarea, Footer } from './styles'
import { Button } from '../Button'
import { useInputValue } from '../../hooks/useInputValue'
import { Loader } from '../Loader'

export const MealForm = props => {
  const { user } = useContext(Context)
  const mealDescription = useInputValue('')
  const [type, setType] = useState('Breakfast')
  const [loading, setLoading] = useState(false)

  const handleSelect = (e, mealType) => {
    e.preventDefault()
    setType(mealType)
  }

  const handleUpdate = e => {
    e.preventDefault()
    setLoading(true)

    firebase.getUserData(user.name).then(data => {
      setLoading(false)
      props.handleClose()
    })
  }

  return (
    <Form onSubmit={handleUpdate}>
      <Title>{props.day}</Title>
      <Subtitle>Select the type of food and enter the food you like best for that moment!</Subtitle>

      <ButtonsMeal>
        <Button
          text='Breakfast'
          extraClass='margin-right-10'
          onClick={e => handleSelect(e, 'Breakfast')}
          disabled={type === 'Breakfast' ? true : null}
        />
        <Button
          text='Lunch'
          extraClass='margin-right-10'
          onClick={e => handleSelect(e, 'Lunch')}
          disabled={type === 'Lunch' ? true : null}
        />
        <Button
          text='Dinner'
          onClick={e => handleSelect(e, 'Dinner')}
          disabled={type === 'Dinner' ? true : null}
        />
      </ButtonsMeal>

      <Textarea placeholder='Your favorite meal!' {...mealDescription} />

      <Footer>
        <Button text='Close' terciary onClick={props.handleClose} />
        <Button text='Update your day' secondary extraClass='margin-left-auto' />
      </Footer>

      {loading && <Loader fullContainer opacityBg />}
    </Form>
  )
}
