import { ReactNode } from 'react'

interface ButtonProps extends Partial<Omit<HTMLButtonElement, 'children'>> {
  block?: boolean
  children?: ReactNode
  hollow?: boolean
  shape?: 'square' | 'round' | 'circle'
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary'
  'data-testid'?: string
}

export default ButtonProps
