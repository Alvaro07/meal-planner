import React, { useState, useContext } from 'react'
import { Context } from '../../Context'
import firebase from '../firebase'

import { Form, Title, Subtitle, ButtonsMeal, Textarea, Footer } from './styles'
import { Button } from '../Button'
import { Loader } from '../Loader'

export const MealForm = props => {
  const { user } = useContext(Context)
  const [description, setDescription] = useState(props.breakfast ? props.breakfast : '')
  const [type, setType] = useState('breakfast')
  const [loading, setLoading] = useState(false)

  const handleSelect = (e, mealType) => {
    e.preventDefault()
    setType(mealType)
    setDescription(props[mealType] ? props[mealType] : '')
  }

  const handleUpdate = e => {
    e.preventDefault()
    setLoading(true)

    firebase.updateMenu(user.name, props.day, type, description).then(() => {
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
          onClick={e => handleSelect(e, 'breakfast')}
          disabled={type === 'breakfast' ? true : null}
        />

        <Button
          text='Lunch'
          extraClass='margin-right-10'
          onClick={e => handleSelect(e, 'lunch')}
          disabled={type === 'lunch' ? true : null}
        />

        <Button
          text='Dinner'
          onClick={e => handleSelect(e, 'dinner')}
          disabled={type === 'dinner' ? true : null}
        />
      </ButtonsMeal>

      <Textarea
        placeholder='Your favorite meal!'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <Footer>
        <Button text='Close' terciary onClick={props.handleClose} />
        <Button text='Update your day' secondary extraClass='margin-left-auto' />
      </Footer>

      {loading && <Loader fullContainer opacityBg />}
    </Form>
  )
}
