import React from 'react'
import './departmentButton.scss'

export interface DepartmentButtonProps {
  name: string
}

const DepartmentButton: React.FC<DepartmentButtonProps> = (props) => {
  return (
        <div className="department__button">
            {props.name}
        </div>
  )
}

export { DepartmentButton }
