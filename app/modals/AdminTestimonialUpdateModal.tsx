import React, { FormEvent } from 'react'
import useForm from '../hooks/useForm'
import AdminTestimonialForm from '../forms/AdminTestimonialForm'
import { useUpdateTestimonialMutation } from '../redux/services/testimonialApi'
import Modal from '../components/common/Modal'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { resetTestimonialError, setCloseModalEdit } from '../redux/features/testimonialSlice'
import validateTestimonialForm from '../validations/validateTestimonialForm'
import useSoundManager from '../hooks/useSoundManager'
import { TESTIMONIAL_INITIAL_VALUES } from '../data/form.initial-values'

const AdminTestimonialUpdateModal = () => {
  const dispatch = useAppDispatch()
  const { openModalEdit, testimonial } = useAppSelector((state: RootState) => state.testimonial)
  const [updateTestimonial, { isLoading, error }] = useUpdateTestimonialMutation()
  const { inputs, errors, handleInput, setInputs, setErrors, setSubmitted, submitted } = useForm(
    TESTIMONIAL_INITIAL_VALUES,
    validateTestimonialForm,
    testimonial
  )
  const user = useAppSelector((state: RootState) => state.user)
  const { playError, playSuccess } = useSoundManager(user.isSoundEffectsOn)

  const reset = () => {
    dispatch(resetTestimonialError())
    dispatch(setCloseModalEdit())
    setErrors({})
    setInputs({})
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    const isValid = validateTestimonialForm(inputs, setErrors)
    if (!isValid) return

    await updateTestimonial(inputs)
      .unwrap()
      .then(() => {
        playSuccess()
        reset()
      })
      .catch(() => playError())
  }

  return (
    <Modal isOpen={openModalEdit} onClose={reset}>
      <AdminTestimonialForm
        handleSubmit={handleSubmit}
        inputs={inputs}
        submitted={submitted}
        errors={errors}
        handleInput={handleInput}
        error={error?.data?.message}
        isLoading={isLoading}
        isUpdating={true}
        setInputs={setInputs}
        reset={reset}
      />
    </Modal>
  )
}

export default AdminTestimonialUpdateModal
