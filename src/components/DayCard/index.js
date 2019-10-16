import React, { useState } from 'react'
import { CardWrap, DayTitle, EditIcon, Meal, Type, Description } from './styles'
import { Modal } from '../Modal'

export const DayCard = ({ day }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <CardWrap>
      <DayTitle>
        {day}
        <EditIcon onClick={() => setModalIsOpen(true)} />
      </DayTitle>

      <Meal>
        <Type>Breakfast</Type>
        <Description>Huevos con bacon</Description>
      </Meal>

      <Meal>
        <Type>Lunch</Type>
        <Description>Lentejas</Description>
      </Meal>

      <Meal>
        <Type>Dinner</Type>
        <Description>Ensalada de tomate con galletas</Description>
      </Meal>

      {modalIsOpen &&
        <Modal onClose={() => setModalIsOpen(false)}>
          <p>Modal</p>
        </Modal>}
    </CardWrap>
  )
}
