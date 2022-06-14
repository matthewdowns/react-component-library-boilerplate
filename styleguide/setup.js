if (process.env.NODE_ENV !== 'production') {
  const React = require('react')
  const ReactDOM = require('react-dom')

  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000, undefined, {
    include: [['[data-preview]']]
  })
}
