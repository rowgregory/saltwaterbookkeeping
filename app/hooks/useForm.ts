'use client'

import { ChangeEvent, DragEvent, useEffect, useState } from 'react'
import { Errors, Inputs, UseFormHook } from '@/app/types/common.types'

const useForm = (
  fields: Record<string, string | number | boolean | string[] | File | object | undefined | null>,
  validateForm?: (inputs: Inputs, setErrors: (errors: Errors) => void, name?: string) => void,
  data?: Inputs
): UseFormHook => {
  const [inputs, setInputs] = useState<Inputs>(fields)
  const [errors, setErrors] = useState<Errors>({})
  const [uploadProgress, setUploadProgress] = useState<number>(-1)
  const [submitted, setSubmitted] = useState<boolean>(false)

  useEffect(() => {
    if (data) {
      setInputs((prev) => ({
        ...prev,
        ...data
      }))
    }
  }, [data])

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setInputs((prev) => ({
      ...prev,
      [name]: value
    }))

    if (validateForm) {
      validateForm({ ...inputs, [name]: value }, setErrors, name)
    }
  }

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setInputs((prev) => ({
      ...prev,
      [name]: value
    }))

    if (validateForm) {
      validateForm({ ...inputs, [name]: value }, setErrors, name)
    }
  }

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    setInputs((prev) => ({
      ...prev,
      [name]: checked
    }))

    if (validateForm) {
      validateForm({ ...inputs, [name]: checked }, setErrors, name)
    }
  }

  const handleUploadProgress = (progress: number) => {
    setUploadProgress(progress)
    if (progress === 100) {
      setUploadProgress(-1)
    }
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const files = e.dataTransfer.files

    if (
      files.length > 0 &&
      files[0].type.startsWith('image/') &&
      !files[0].type.startsWith('image/heic')
    ) {
      const reader = new FileReader()
      reader.onload = () => {
        setInputs((prev) => ({
          ...prev,
          image: reader.result as string,
          file: files[0]
        }))
        if (validateForm) {
          validateForm({ ...inputs, image: reader.result as string }, setErrors, 'image')
        }
      }
      reader.readAsDataURL(files[0])
    }
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (
      files &&
      files.length > 0 &&
      files[0].type.startsWith('image/') &&
      !files[0].type.startsWith('image/heic')
    ) {
      const reader = new FileReader()
      reader.onload = () => {
        setInputs((prev) => ({
          ...prev,
          image: reader.result as string,
          file: files[0]
        }))
        if (validateForm) {
          validateForm({ ...inputs, image: reader.result as string }, setErrors, 'image')
        }
      }
      reader.readAsDataURL(files[0])
    }
  }

  return {
    inputs,
    errors,
    handleInput,
    handleSelect,
    handleToggle,
    setInputs,
    setErrors,
    handleUploadProgress,
    uploadProgress,
    handleDrop,
    handleFileChange,
    submitted,
    setSubmitted
  }
}

export default useForm
