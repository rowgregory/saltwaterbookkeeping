import React, { FormEvent } from 'react'
import useForm from '../hooks/useForm'
import AdminTestimonialForm from '../forms/AdminTestimonialForm'
import { useCreateTestimonialMutation } from '../redux/services/testimonialApi'
import Modal from '../components/common/Modal'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { resetTestimonialError, setCloseModal } from '../redux/features/testimonialSlice'
import validateTestimonialForm from '../validations/validateTestimonialForm'
import useSoundManager from '../hooks/useSoundManager'
import { TESTIMONIAL_INITIAL_VALUES } from '../data/form.initial-values'

const AdminTestimonialCreateModal = () => {
  const dispatch = useAppDispatch()
  const { openModal } = useAppSelector((state: RootState) => state.testimonial)
  const [createTestimonial, { isLoading, error }] = useCreateTestimonialMutation()
  const { inputs, errors, handleInput, setInputs, setErrors, setSubmitted, submitted } = useForm(
    TESTIMONIAL_INITIAL_VALUES,
    validateTestimonialForm
  )
  const user = useAppSelector((state: RootState) => state.user)
  const { playError, playSuccess } = useSoundManager(user.isSoundEffectsOn)

  const reset = () => {
    dispatch(resetTestimonialError())
    dispatch(setCloseModal())
    setErrors({})
    setInputs({})
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    const isValid = validateTestimonialForm(inputs, setErrors)
    if (!isValid) return

    await createTestimonial(inputs)
      .unwrap()
      .then(() => {
        playSuccess()
        reset()
      })
      .catch(() => {
        playError()
      })
  }

  return (
    <Modal isOpen={openModal} onClose={reset}>
      <AdminTestimonialForm
        handleSubmit={handleSubmit}
        inputs={inputs}
        submitted={submitted}
        errors={errors}
        handleInput={handleInput}
        error={error}
        isLoading={isLoading}
        isUpdating={false}
        setInputs={setInputs}
        reset={reset}
      />
    </Modal>
  )
}

export default AdminTestimonialCreateModal
