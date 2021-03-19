import classNames from 'classnames';
import React from 'react';
import ButtonProps from './Button.props';
import ButtonStyle from './Button.less';

function Button(props: ButtonProps): JSX.Element {


    return (
        <button
            id={props.id}
            className={classNames(ButtonStyle.button, {
                [ButtonStyle.buttonSmall]: props.size === 'small',
                [ButtonStyle.buttonLarge]: props.size === 'large'
            })}
            disabled={props.disabled}
            name={props.name}
            data-testid={props['data-testid']}
        >
            {props.children}
        </button>
    );
}

export default Button;
