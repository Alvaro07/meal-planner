import React, { useState } from 'react'
import { CardWrap, DayTitle, EditIcon, Meal, Type, Description } from './styles'
import { Modal } from '../Modal'
import { MealForm } from '../MealForm'

export const DayCard = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <CardWrap>
      <DayTitle>
        {props.day}
        <EditIcon onClick={() => setModalIsOpen(true)} />
      </DayTitle>

      {!props.breakfast &&
        <Meal>
          <Type>Breakfast</Type>
          <Description>Huevos con bacon</Description>
        </Meal>}

      {!props.lunch &&
        <Meal>
          <Type>Lunch</Type>
          <Description>Lentejas</Description>
        </Meal>}

      {!props.dinner &&
        <Meal>
          <Type>Dinner</Type>
          <Description>Ensalada de tomate con galletas</Description>
        </Meal>}

      {modalIsOpen &&
        <Modal onClose={() => setModalIsOpen(false)}>
          <MealForm {...props} handleClose={() => setModalIsOpen(false)} />
        </Modal>}
    </CardWrap>
  )
}
