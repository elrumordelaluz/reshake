import Shake, { ShakePropType } from './Shake'
import shakes, { ShakeTypes } from './shakes'

const Shaking = ({
  type = null,
  ...props
}: {
  type: ShakeTypes
} & ShakePropType) => {
  const attrs = type && shakes[type]
  return (
    <Shake {...attrs} {...props}>
      {props.children}
    </Shake>
  )
}

export default Shaking
