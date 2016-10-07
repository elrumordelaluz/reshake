import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
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

const shakes = [
  ShakeLittle,
  ShakeSlow,
  ShakeHard,
  ShakeHorizontal,
  ShakeVertical,
  ShakeRotate,
  ShakeCrazy,
]

const names = [
  'ShakeLittle',
  'ShakeSlow',
  'ShakeHard',
  'ShakeHorizontal',
  'ShakeVertical',
  'ShakeRotate',
  'ShakeCrazy',
]

const emojee = [
  '😬',
  '🙄',
  '😎',
  '🚙',
  '👆',
  '🔔',
  '😹',
]

const styles = StyleSheet.create({
  wrapper: {
    padding: '2em',
    backgroundColor: '#2ab8ac',
    color: 'white',
    minHeight: '100vh',
    '@media (min-width: 52em)': {
        padding: '2em 10em 4em',
    },
  },
  title: {
    fontFamily: 'Dancing Script, cursive',
    fontSize: '4em',
    marginBottom: 0,
    marginTop: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#136760',
  },
  code: {
    display: 'block',
    padding: '1em 2em',
    margin: '2em 0',
    fontSize: '1em',
    lineHeight: '1.42857143',
    color: '#333',
    wordBreak: 'break-all',
    wordWrap: 'break-word',
    backgroundColor: 'rgba(240,240,240,.25)',
    border:' 1px solid rgba(240,240,240,.25)',
    borderRadius: '4px',
    overflow: 'auto',
  },
  
  section: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  side: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '12em',
    '@media (min-width: 40em)': {
      flexGrow: 0,
    },
  },
  main: {
    flexGrow: 1,
    flexBasis: '50vw',
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-width: 40em)': {
      flex: 1,
    }
  },
  
  range: {
    marginBottom: '1em',
  },
  slider: {
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    margin: '8px 0px 0px',
    cursor: 'pointer',
    color: 'inherit',
    backgroundColor: 'rgba(0, 0, 0, 0.121569)',
    backgroundClip: 'content-box',
    height: '6px',
    borderRadius: '999px',
    WebkitAppearance: 'none',
  },
  label: {
    fontSize: '.85em',
  },
  
  checkbox: {
    fontSize: '3em',
  },
  
  footer: {
    width: '100%',
    textAlign: 'center',
    fontSize: '.85em',
    marginTop: '3em',
  },
})


const Range = ({ value, label, onChange, min = 0, max = 100, step = 1}) => {
  return (
    <div className={css(styles.range)}>
      <label
        className={css(styles.label)}>
        { label }
      </label>
      <input 
        className={css(styles.slider)}
        type="range"
        value={value}
        onChange={onChange}
        min={min} 
        max={max} 
        step={step} />
    </div>
  )
}

const Check = ({ checked = false, label, onChange }) => {
  return (
    <div className={css(styles.range)}>
      <label
        className={css(styles.label)}>
        <input 
          className={css(styles.checkbox)}
          type="checkbox"
          onChange={onChange}
          checked={checked} />
        { label }
      </label>
    </div>
  )
}

class Customizer extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      h: 5,
      v: 5,
      r: 3,
      dur: 300,
      int: 10,
      max: 100,
      fixed: true,
      fixedStop: false,
      freez: false,
    }
    
    this.handleChangeRange = this.handleChangeRange.bind(this)
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
  }
  
  handleChangeRange (e, attr) {
    const { value } = e.target
    this.setState({
      [attr]: Number(value)
    })
  }
  
  handleChangeCheckbox (e, attr) {
    const { checked } = e.target
    this.setState({
      [attr]: checked ? true : false
    })
  }
  
  render () {
    const { h, v, r, dur, int, max, fixed, fixedStop, freez } = this.state
    const changeH = e => this.handleChangeRange(e, 'h')
    const changeV = e => this.handleChangeRange(e, 'v')
    const changeR = e => this.handleChangeRange(e, 'r')
    const changeDur = e => this.handleChangeRange(e, 'dur')
    const changeInt = e => this.handleChangeRange(e, 'int')
    const changeMax = e => {
      this.handleChangeRange(e, 'max')
      if (int > max) {
        this.setState({
          int: max
        })
      }
    }
    const toggleFixed = e => this.handleChangeCheckbox(e, 'fixed')
    const toggleFixedStop = e => this.handleChangeCheckbox(e, 'fixedStop')
    const toggleFreez = e => this.handleChangeCheckbox(e, 'freez')
    
    return (
      <section>
        <section className={css(styles.section)}>
          <main className={css(styles.main)}>
            <Shake 
              fixed={fixed}
              fixedStop={fixedStop}
              freez={freez}
              h={h}
              v={v}
              r={r}
              dur={dur}
              int={int}
              max={max}>
              <h1 className={css(styles.title)}>&lt;Shake /&gt;</h1>
            </Shake>
          </main>
          
          <aside className={css(styles.side)}>
            <Range label={`Horizontal ${h}`} value={h} onChange={changeH} />
            <Range label={`Vertical ${v}`} value={v} onChange={changeV} />
            <Range 
              label={`Rotate ${r}`} 
              max={360}
              value={r} 
              onChange={changeR} />  
            <Range 
              label={`Duration ${dur}`} 
              value={dur} 
              min={10}
              max={1000}
              step={10}
              onChange={changeDur} />
            <Range 
              label={`Interval ${int}`} 
              value={int} 
              min={0.5}
              max={max}
              step={0.1}
              onChange={changeInt} />
            <Range 
              label={`Max ${max}`} 
              value={max} 
              min={1}
              max={100}
              step={1}
              onChange={changeMax} />
            <Check 
              label="freez" 
              onChange={toggleFreez}
              checked={freez} />
            <Check 
              label="fixed" 
              onChange={toggleFixed}
              checked={fixed} />
            { fixed && (
              <Check 
                label="fixedStop" 
                onChange={toggleFixedStop}
                checked={fixedStop} />
            )}
          </aside>
          
        </section>
        <pre className={css(styles.code)}>
          <code>
{`import React, { Component } from 'react'
import Shake from 'reshake'

class App extends Component {
  render () {
    return (
      <Shake 
        h={${h}}
        v={${v}}
        r={${r}}
        dur={${dur}}
        int={${int}}
        max={${max}}
        fixed={${fixed}}
        fixedStop={${fixedStop}}
        freez={${freez}}>
        <h1>&lt;Shake /&gt;</h1>
      </Shake>
    )
  }
}`}
          </code>
        </pre>
      </section>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        
        <h1 className={css(styles.title)}>&lt;Reshake/&gt;</h1>
        <p>
          <Shake elem='span'>
            <a 
              className={css(styles.link)} 
              href="http://elrumordelaluz.github.io/csshake/">CSShake</a>
          </Shake> as a React functional Component <a 
            className={css(styles.link)} 
            href="https://github.com/elrumordelaluz/reshake">[GitHub]</a>
        </p>
        
        <pre className={css(styles.code)}>
          <code>
            npm i --save reshake
          </code>
        </pre>
        
        <Customizer />
        
        <h1 className={css(styles.title)}>More...</h1>
        <p>Separated Components for each animation type</p>
        <ul style={{ margin: 0, padding: 0, }}>
          { shakes.map((s,i) => {
            const name = names[i]
            const Elem = s
            return (
              <li key={i} className={css(styles.section)}>
                <aside className={css(styles.side)}>
                  <pre className={css(styles.code)}>
                    <code>
                      {`<${name} />`}
                    </code>
                  </pre>
                </aside>
                <main className={css(styles.main)}>
                  <Elem 
                    orig={name === 'ShakeRotate' ? 'top center' : 'center center'}
                    style={{ fontSize: '3em' }}>
                    { emojee[i] }
                  </Elem>
                </main>
              </li>
            )})
          }
        </ul>
        <footer className={css(styles.footer)}>
          Made with <ShakeSlow fixed>♡</ShakeSlow> by <a className={css(styles.link)} 
            href="https://twitter.com/elrumordelaluz">@elrumordelaluz</a> using React.</footer>
      </div>
    )
  }
}

ReactDOM.render(<App />, root)
