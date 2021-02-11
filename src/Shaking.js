import React from 'react'
import Shake from './Shake'
import shakes from './shakes'

const Shaking = ({ type = null, ...props }) => {
  const attrs = type && shakes[type]
  return (
    <Shake {...attrs} {...props}>
      {props.children}
    </Shake>
  )
}

export default Shaking
