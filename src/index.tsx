import Shake, { ShakePropType } from './Shake'
import Shaking from './Shaking'
import shakes from './shakes'

export { default as Shake } from './Shake'
export { default as Shaking } from './Shaking'
export { default as shakes } from './shakes'

export const ShakeLittle = (props: ShakePropType) => (
  <Shaking {...props} type="little" />
)
export const ShakeSlow = (props: ShakePropType) => (
  <Shaking {...props} type="slow" />
)
export const ShakeHard = (props: ShakePropType) => (
  <Shaking {...props} type="hard" />
)
export const ShakeHorizontal = (props: ShakePropType) => (
  <Shaking {...props} type="horizontal" />
)
export const ShakeVertical = (props: ShakePropType) => (
  <Shaking {...props} type="vertical" />
)
export const ShakeRotate = (props: ShakePropType) => (
  <Shaking {...props} type="rotate" />
)
export const ShakeCrazy = (props: ShakePropType) => (
  <Shaking {...props} type="crazy" />
)

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
