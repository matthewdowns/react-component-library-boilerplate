import React from 'react';
import CardProps from './Card.props';
import CardStyle from './Card.less';

function Card(props: CardProps): JSX.Element {


    return (
        <div
            id={props.id}
            className={`${CardStyle.card}${props.className ? ` ${props.className}` : ''}`}
            data-testid={props['data-testid']}
        >
            {props.title && (
                <div className={CardStyle.cardHead}>
                    {props.title}
                </div>
            )}
            <div className={CardStyle.cardBody}>
                {props.children}
            </div>
        </div>
    );
}

export default Card;
