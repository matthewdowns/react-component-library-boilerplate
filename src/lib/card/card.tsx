import classNames from 'classnames'
import React from 'react'
import CardProps from './card.props'
import './card.less'

function Card (props: CardProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={classNames('card', props.className)}
      title={props.title}
      data-testid={props['data-testid']}
    >
      {props.header !== undefined && (
        <div className='card-header'>
          {props.header}
        </div>
      )}
      {props.children !== undefined && (
        <div className='card-body'>
          {props.children}
        </div>
      )}
      {props.footer !== undefined && (
        <div className='card-footer'>
          {props.footer}
        </div>
      )}
    </div>
  )
}

export default Card
