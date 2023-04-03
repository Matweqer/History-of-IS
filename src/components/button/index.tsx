import React, { FC } from 'react';
import './styles.scss';

interface ButtonProps {
    text: string,
    onClick: any,
    disabled?: boolean,
}

const Button: FC<ButtonProps> = ({
    text,
    onClick,
    disabled,
}) => {
    const handleClick = (ev: React.MouseEvent):void => {
        if (ev === null && ev === undefined) {           
            return;
        }

        onClick(ev);
    }

    return (
        <button 
            className="button"
            disabled = { disabled }
            onClick = { handleClick }
        >
            { text }
        </button>
    )
}

export default Button