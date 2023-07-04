import { useMemo } from 'react'
import styled, { Keyframes, keyframes } from 'styled-components'

type TransformObjectType = { [key: string]: { transform: any } }
const toString = (obj: TransformObjectType) => {
  return Object.keys(obj).reduce((acc, next) => {
    return `${acc}
			${next} {
				transform: ${obj[next].transform}
			}`
  }, '')
}

export type CommonShakePropType = {
  h: number
  v: number
  r: number
  dur: number
  q: number | string
  tf: string
  int: number
  max: number
  orig: string
  fixed: boolean
  freez: boolean
  active: boolean
  trigger: string
  fixedStop: string | false
}

const ShakeComp = styled.div<
  {
    shouldShakeDefault: boolean
    shakeKeyframes: Keyframes
    shouldShakeWhenTriggered: boolean
  } & CommonShakePropType
>`
  animation-name: ${(p) => p.shouldShakeDefault && p.shakeKeyframes};
  animation-duration: ${(p) => p.dur}ms;
  animation-iteration-count: ${(p) => p.q};
  display: 'inline-block';
  transform-origin: ${(p) => p.orig};

  &${(p) => p.trigger} {
    animation-name: ${(p) => p.shouldShakeWhenTriggered && p.shakeKeyframes};
    animation-play-state: ${(p) =>
      p.freez && (!p.fixed ? 'running' : 'paused')};
    animation: ${(p) => p.fixed && p.fixedStop && 'initial'};
  }

  animation-play-state: ${(p) =>
    p.active ? (p.freez && !p.fixed ? 'paused' : 'running') : 'paused'};
`

const random = (max: number, min: number = 0) => {
  return Math.random() * (max - min) - max / 2
}

const doKeyframes = (
  int: number,
  max: number,
  h: number,
  v: number,
  r: number
) => {
  const init = 'translate(0,0) rotate(0)'
  // el objecto que iremos llenando
  const kf: TransformObjectType = {
    '0%': {
      transform: init,
    },
  }

  // loop con intervalos basados en `int`
  for (let st = int; st <= max; st += int) {
    // Numeros aleatorios en cada keyframe
    const x = random(h)
    const y = random(v)
    const rot = random(r)

    kf[`${st}%`] = {
      transform: `translate(${x}px, ${y}px) rotate(${rot}deg)`,
    }
  }

  // Init de las transformaciones en 0% y 100%
  kf[`${Math.min(max, 100)}%`] = {
    transform: init,
  }

  return toString(kf)
}

export type ShakePropType = Partial<CommonShakePropType> &
  Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'as'
  > & { elem?: any }

const Shake = ({
  h = 5,
  v = 5,
  r = 3,
  dur = 300,
  q = 'infinite',
  tf = 'ease-in-out',
  int = 10,
  max = 100,
  orig = 'center center',
  fixed = false,
  freez = false,
  active = true,
  trigger = ':hover',
  fixedStop = false,
  elem = 'div',
  ...props
}: ShakePropType) => {
  // Creamos los @keyframes
  const shakeKeyframes = useMemo(
    () => keyframes`${doKeyframes(int, max, h, v, r)}`,
    [int, max, h, v, r]
  )
  const shouldShakeDefault = fixed || (!fixed && freez)
  const shouldShakeWhenTriggered = !fixed && !freez

  return (
    <ShakeComp
      as={elem}
      dur={dur}
      orig={orig}
      q={q}
      freez={freez}
      fixed={fixed}
      fixedStop={fixedStop}
      active={active}
      trigger={trigger}
      shakeKeyframes={shakeKeyframes}
      shouldShakeDefault={shouldShakeDefault}
      shouldShakeWhenTriggered={shouldShakeWhenTriggered}
      {...props}
    >
      {props.children}
    </ShakeComp>
  )
}

export default Shake
