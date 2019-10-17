import React, { useState } from 'react'
import { Form, Title, Subtitle, ButtonsMeal, Textarea, Footer } from './styles'
import { Button } from '../Button'

export const MealForm = props => {
  const [type, setType] = useState('Breakfast')

  const handleSelect = (e, mealType) => {
    e.preventDefault()
    setType(mealType)
  }

  return (
    <Form>
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

      <Textarea placeholder='Your favorite meal!' />

      <Footer>
        <Button text='Close' terciary onClick={props.handleClose} />
        <Button text='Update your day' secondary extraClass='margin-left-auto' />
      </Footer>
    </Form>
  )
}
