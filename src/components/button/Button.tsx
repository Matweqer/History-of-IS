import { type FC } from 'react'
import './button.scss'

interface ButtonProps {
  text: string
  onClick?: () => void
  disabled?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  className
}) => {
  return (
        <button
            className={ `button ${className ?? ''}` }
            disabled = { disabled }
            onClick = { onClick }
        >
            { text }
        </button>
  )
}

export { Button }
