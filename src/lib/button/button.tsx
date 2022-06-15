import classNames from 'classnames'
import React from 'react'
import ButtonProps from './button.props'
import './button.less'

/**
 * A generic button
 * @param props {@link ButtonProps}
 * @returns Element
 */
function Button (props: ButtonProps): JSX.Element {
  return (
    <button
      id={props.id}
      className={classNames('button', props.className)}
      disabled={props.disabled}
      name={props.name}
      data-block={props.block}
      data-hollow={props.hollow}
      data-shape={props.shape ?? 'square'}
      data-size={props.size ?? 'medium'}
      data-variant={props.variant ?? 'primary'}
      data-testid={props['data-testid']}
    >
      {props.children}
    </button>
  )
}

export default Button
