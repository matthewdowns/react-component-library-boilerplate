import React from 'react';
import ButtonGroupProps from './ButtonGroup.props';
import ButtonGroupStyle from './ButtonGroup.less';

function ButtonGroup(props: ButtonGroupProps): JSX.Element {

    function renderButtonGroupItem(child: typeof props.children, key?: string): JSX.Element {
        return (
            <div
                key={key}
                className={ButtonGroupStyle.buttonGroupItem}
            >
                {child}
            </div>
        )
    }

    return (
        <div
            id={props.id}
            className={`${ButtonGroupStyle.buttonGroup}${props.className ? ` ${props.className}` : ''}`}
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
