# reshake

[CSShake](http://elrumordelaluz.github.io/csshake/) as a React Functional Component.

##### [Playground](https://elrumordelaluz.github.io/reshake/) :: [Blog Post (ES)](http://octuweb.com/jugando-css-javascript/)

```
npm i --save reshake styled-components
```

#### Full customizable way

```js
import React from 'react'
import { Shake } from 'reshake'

const MyShake = () => (
  <Shake h={10} v={0} r={3}>
    Brrr...
  </Shake>
)
```

Available `props`:

| Prop        | Desc                                                                                | Type              | Default         | Result unit |
| ----------- | ----------------------------------------------------------------------------------- | ----------------- | --------------- | ----------- |
| `h`         | max horizontal                                                                      | `Number`          | 5               | `px`        |
| `v`         | max vertical                                                                        | `Number`          | 5               | `px`        |
| `r`         | max rotation                                                                        | `Number`          | 5               | `deg`       |
| `dur`       | complete animation cycle duration                                                   | `Number`          | 300             | `ms`        |
| `q`         | iterations quantity                                                                 | `Number` `String` | 'infinite'      |             |
| `tf`        | `CSS animation-timing-function`                                                     | `String`          | 'ease-in-out'   |             |
| `int`       | interval between each `@keyframe`, a kind of fine tuning for the animation          | `Number`          | 10              | `%`         |
| `max`       | max `@keyframe` value, in case other than `100%` creates a _pause_ in the animation | `Number`          | 100             | `%`         |
| `orig`      | `CSS transform-origin`                                                              | `String`          | 'center center' |             |
| `fixed`     | fixed animation                                                                     | `Boolean`         | `false`         |             |
| `freez`     | _pause_ in the animation when interacting                                           | `Boolean`         | `false`         |             |
| `active`    | active the animations                                                               | `Boolean`         | `true`          |             |
| `trigger`   | _CSS pseudo-class_ which interacts with animation                                   | `String`          | `true`          |             |
| `fixedStop` | Allows to stop the animation with `trigger` when animation is `fixed`               | `String`          | `false`         |             |

#### Easy way with _defaults_:

```js
import React from 'react'
import { ShakeLittle, ShakeSlow, ShakeHorizontal } from 'reshake'

const MoreShakes = () => (
  <div>
    <ShakeLittle>Tiny brrr...</ShakeLittle>
    <ShakeSlow>SlowMo ving...</ShakeSlow>
    <ShakeHorizontal>
      <span>✋</span>
    </ShakeHorizontal>
  </div>
)
```

Available Components:

* `<ShakeLittle />`
* `<ShakeSlow />`
* `<ShakeHard />`
* `<ShakeHorizontal />`
* `<ShakeVertical />`
* `<ShakeRotate />`
* `<ShakeCrazy />`

All components accept also the same `props` as `<Shake />`. The [defaults](https://github.com/elrumordelaluz/reshake/blob/master/src/shakes.js) could be imported as

```js
import { shakes } from reshake
```

#### [Playground](https://elrumordelaluz.github.io/reshake/)
