import { useButtonProps } from '@restart/ui/Button';
import React, { ElementType } from 'react';
import ButtonProps from './button.props';
import './button.less';

/**
 * A generic button
 * @param props {@link ButtonProps}
 */
function Button(props: ButtonProps): JSX.Element {
    const [buttonProps, { tagName }] = useButtonProps({ ...props });

    const Component = tagName as ElementType;

    return (
        <Component
            {...props}
            {...buttonProps}
            className={`button${props.className ? ` ${props.className}` : ''}`}
            data-block={props.block}
            data-hollow={props.hollow}
            data-shape={props.shape || 'square'}
            data-size={props.size || 'medium'}
            data-variant={props.variant || 'primary'}
            data-testid={props['data-testid']}
        >
            {props.children}
        </Component>
    );
}

export default Button;
