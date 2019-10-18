import React, { useState, useContext } from 'react'
import { Context } from '../../Context'
import firebase from '../firebase'

import { Modal } from '../Modal'
import { MealForm } from '../MealForm'
import { Loader } from '../Loader'

import { CardWrap, DayTitle, EditIcon, Meal, Type, Description, NoMeal, DeleteBtn } from './styles'
import { FiTrash2 } from 'react-icons/fi'

export const DayCard = props => {
  const { user } = useContext(Context)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const deleteMeal = (e, type) => {
    e.preventDefault()
    setLoading(true)

    firebase.updateMenu(user.name, props.day, type, '').then(() => {
      setLoading(false)
    })
  }

  return (
    <CardWrap>
      <DayTitle>
        {props.day}
        <EditIcon onClick={() => setModalIsOpen(true)} />
      </DayTitle>

      {props.breakfast &&
        <Meal>
          <Type>
            Breakfast
            <DeleteBtn onClick={e => deleteMeal(e, 'breakfast')}><FiTrash2 size='20' /></DeleteBtn>
          </Type>
          <Description>{props.breakfast}</Description>
        </Meal>}

      {props.lunch &&
        <Meal>
          <Type>
            Lunch

            <DeleteBtn onClick={e => deleteMeal(e, 'lunch')}><FiTrash2 size='20' /></DeleteBtn>
          </Type>
          <Description>{props.lunch}</Description>
        </Meal>}

      {props.dinner &&
        <Meal>
          <Type>
          Dinner
            <DeleteBtn onClick={e => deleteMeal(e, 'dinner')}><FiTrash2 size='20' /></DeleteBtn>
          </Type>
          <Description>{props.dinner}</Description>
        </Meal>}

      {!props.breakfast && !props.lunch && !props.dinner &&
        <NoMeal>
          Organice your day!
        </NoMeal>}

      {modalIsOpen &&
        <Modal onClose={() => setModalIsOpen(false)}>
          <MealForm {...props} handleClose={() => setModalIsOpen(false)} />
        </Modal>}

      {loading && <Loader fullContainer opacityBg />}
    </CardWrap>
  )
}
