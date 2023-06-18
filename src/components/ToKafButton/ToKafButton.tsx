import React from 'react';
import classes from './ToKafButton.module.scss';

type empty = () => {};

export interface ToKafButtonProps {
    onClick?: empty,
    name: string;
}

export const ToKafButton: React.FC<ToKafButtonProps> = (props) => {
    return (
        <div className={classes.Button}>
            {props.name}
        </div>
    );
};