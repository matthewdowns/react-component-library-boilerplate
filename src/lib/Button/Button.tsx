import React from 'react';
import ButtonProps from './Button.props';
import ButtonStyle from './Button.less';

function Button(props: ButtonProps): JSX.Element {


    return (
        <button
            id={props.id}
            className={ButtonStyle.button}
            disabled={props.disabled}
            name={props.name}
            data-shape={props.shape || 'square'}
            data-size={props.size || 'medium'}
            data-testid={props['data-testid']}
        >
            {props.children}
        </button>
    );
}

export default Button;
