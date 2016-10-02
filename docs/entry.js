import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  Shake,
  ShakeLittle,
  ShakeSlow,
  ShakeHard,
  ShakeHorizontal,
  ShakeVertical,
  ShakeRotate,
  ShakeCrazy,
} from '../src'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Shake  fixed
          className="my-custom-class"
          style={{ color: 'deepskyblue' }}>
          &lt;Shake /&gt;
        </Shake>
        <Shake fixed>
          &lt;Shake fixed /&gt;
        </Shake>
        <Shake freez style={{ 
            textDecoration: 'line-through',
            fontWeight: '100',
            margin: '1em'
          }}>
        	&lt;Shake freez /&gt;
        </Shake>
        <Shake fixed freez>
        	&lt;Shake fixed freez /&gt;
        </Shake>
        <Shake fixed fixedStop style={{ 
            letterSpacing: '2px',
            margin: '1em'
          }}>
        	&lt;Shake fixed fixedStop /&gt;
        </Shake>
      </div>
    );
  }
}

ReactDOM.render(<App />, root)
