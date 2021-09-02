import React from 'react';
import CardProps from './card.props';
import './card.less';

function Card(props: CardProps): JSX.Element {


    return (
        <div
            id={props.id}
            className={`card${props.className ? ` ${props.className}` : ''}`}
            title={props.title}
            data-testid={props['data-testid']}
        >
            {props.header && (
                <div className="card-header">
                    {props.header instanceof String
                        ? <strong>{props.header}</strong>
                        : props.header}
                </div>
            )}
            <div className="card-body">
                {props.children}
            </div>
            {props.footer && (
                <div className="card-footer">
                    {props.footer}
                </div>
            )}
        </div>
    );
}

export default Card;
