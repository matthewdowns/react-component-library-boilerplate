import React from 'react';
import ButtonGroupProps from './button-group.props';
import './button-group.less';

/**
 * A collection of buttons
 * @param props {@link ButtonGroupProps}
 * @returns
 */
function ButtonGroup(props: ButtonGroupProps): JSX.Element {
    function renderButtonGroupItem(child: ButtonGroupProps['children'], key?: string): JSX.Element {
        return (
            <div
                key={key}
                className="button-group-item"
            >
                {child}
            </div>
        );
    }

    return (
        <div
            id={props.id}
            className={`button-group${props.className ? ` ${props.className}` : ''}`}
            data-block={props.block}
            data-shape={props.shape}
            data-testid={props['data-testid']}
        >
            {Array.isArray(props.children)
                ? props.children.map((o, i) => renderButtonGroupItem(o, `button-group-item-${i}`))
                : renderButtonGroupItem(props.children)}
        </div>
    );
}

export default ButtonGroup;
