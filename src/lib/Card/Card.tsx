import React from 'react';
import CardProps from './Card.props';
import CardStyle from './Card.less';

function Card(props: CardProps): JSX.Element {


    return (
        <div
            className={CardStyle.card}
        >
            {props.children}
        </div>
    );
}

export default Card;
