import React from 'react'
import Shake from './Shake'
import Shaking from './Shaking'
import shakes from './shakes'

export { default as Shake } from './Shake'
export { default as Shaking } from './Shaking'
export { default as shakes } from './shakes'

export const ShakeLittle = props => <Shaking {...props} type="little" />
export const ShakeSlow = props => <Shaking {...props} type="slow" />
export const ShakeHard = props => <Shaking {...props} type="hard" />
export const ShakeHorizontal = props => <Shaking {...props} type="horizontal" />
export const ShakeVertical = props => <Shaking {...props} type="vertical" />
export const ShakeRotate = props => <Shaking {...props} type="rotate" />
export const ShakeCrazy = props => <Shaking {...props} type="crazy" />

export default {
  Shake,
  Shaking,
  shakes,
  ShakeLittle,
  ShakeSlow,
  ShakeHard,
  ShakeHorizontal,
  ShakeVertical,
  ShakeRotate,
  ShakeCrazy,
}
