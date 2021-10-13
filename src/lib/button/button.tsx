import React from 'react';
import ButtonProps from './button.props';
import './button.less';

/**
 * A generic button
 * @param props {@link ButtonProps}
 */
function Button(props: ButtonProps): JSX.Element {
    return (
        <button
            {...props}
            className={`button${props.className ? ` ${props.className}` : ''}`}
            data-block={props.block}
            data-hollow={props.hollow}
            data-shape={props.shape || 'square'}
            data-size={props.size || 'medium'}
            data-variant={props.variant || 'primary'}
        >
            {props.children}
        </button>
    );
}

export default Button;
