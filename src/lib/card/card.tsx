import React from 'react';
import CardProps from './card.props';
import './card.less';

/**
 * Container to place a header, footer, and content
 * @param props
 * @returns
 */
function Card(props: CardProps): JSX.Element {
    return (
        <div
            {...props}
            className={`card${props.className ? ` ${props.className}` : ''}`}
            data-size={props.size}
        >
            {props.header && (
                <div className={`card-header${props.headerClassName ? ` ${props.headerClassName}` : ''}`}>
                    {props.header}
                </div>
            )}
            <div className={`card-body${props.headerClassName ? ` ${props.headerClassName}` : ''}`}>
                {props.children}
            </div>
            {props.footer && (
                <div className={`card-footer${props.headerClassName ? ` ${props.headerClassName}` : ''}`}>
                    {props.footer}
                </div>
            )}
        </div>
    );
}

export default Card;
