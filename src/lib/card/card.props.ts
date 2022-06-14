import { ReactNode } from 'react'

interface CardProps extends Partial<Omit<HTMLElement, 'children'>> {
  children?: ReactNode
  footer?: ReactNode
  header?: ReactNode
  'data-testid'?: string
}

export default CardProps
