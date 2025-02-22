import { ChangeEvent, Dispatch, DragEvent, ReactNode, SetStateAction } from 'react'

export interface ChildrenProps {
  children: ReactNode
}

export type Inputs = {
  [key: string]: string | number | boolean | undefined | any
}

export type Errors = {
  [key: string]: string
}

export type UseFormHook = {
  inputs: Inputs
  errors: Errors
  handleInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void
  setInputs: Dispatch<SetStateAction<Inputs>>
  setErrors: Dispatch<SetStateAction<Errors>>
  handleUploadProgress: (progress: number) => void
  uploadProgress: number
  handleDrop: (e: DragEvent<HTMLDivElement>) => void
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  submitted: boolean
  setSubmitted: Dispatch<SetStateAction<boolean>>
}

export interface ClientPageProps {
  children: ReactNode
  data: any
}
