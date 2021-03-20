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
            data-size={props.size}
            data-testid={props['data-testid']}
        >
            {props.children}
        </button>
    );
}

export default Button;
