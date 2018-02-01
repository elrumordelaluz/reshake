import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

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
  '👽',
  '😎',
  '🚙',
  '👆',
  '🔔',
  '😹',
]

const Wrapper = styled.div`
  padding: 2em;
  background-color: #2ab8ac;
  color: white;
  min-height: 100vh;
  @media screen and (min-width: 52em) {
    padding: 2em 10em 4em;
  }
`

const Title = styled.h1`
  font-family: Dancing Script, 'cursive';
  font-size: 4em;
  margin-bottom: 0;
  margin-top: 0;
`

const Link = styled.a`
  text-decoration: none;
  color: #136760;
`

const Code = styled.pre`
  display: block;
  padding: 1em 2em;
  margin: 2em 0;
  font-size: 1em;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: rgba(240,240,240,.25);
  border: 1px solid rgba(240,240,240,.25);
  border-radius: 4px;
  overflow: auto;
`

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const Side = styled.aside`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 12em;
  @media screen and (min-width: 40em) {
    flex-grow: 0;
  }
`

const Main = styled.main`
  flex-grow: 1;
  flex-basis: 50vw;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 40em) {
    flex: 1;
  }
`

const Slider = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 8px 0px 0px;
  cursor: pointer;
  color: inherit;
  background-color: rgba(0, 0, 0, 0.121569);
  background-clip: content-box;
  height: 6px;
  border-radius: 999px;
  appearance: none;
`

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  font-size: .85em;
  margin-top: 3em;
`

const Range = ({ value, label, onChange, min = 0, max = 100, step = 1}) => {
  return (
    <div style={{ marginBottom: '1em' }}>
      <label style={{ fontSize: '.85em' }}>
        { label }
      </label>
      <Slider
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
    <div style={{ marginBottom: '1em' }}>
      <label style={{ fontSize: '.85em' }}>
        <input style={{ fontSize: '3em' }}
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
        <Section>
          <Main>
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
              <Title>&lt;Shake /&gt;</Title>
            </Shake>
          </Main>
          
          <Side>
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
          </Side>
          
        </Section>
        <Code>
          <code>
{`import React, { Component } from 'react'
import { Shake } from 'reshake'

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
        </Code>
      </section>
    )
  }
}


class App extends Component {
  render() {
    return (
      <Wrapper>
        
        <Title>&lt;Reshake/&gt;</Title>
        <p>
          <Shake elem='span'>
            <Link 
              href="http://elrumordelaluz.github.io/csshake/">CSShake</Link>
          </Shake> as a React functional Component <Link href="https://github.com/elrumordelaluz/reshake">[GitHub]</Link>
        </p>
        
        <Code>
          <code>
            npm i --save reshake
          </code>
        </Code>
        
        <Customizer />
        
        <Title>More...</Title>
        <p>Separated Components for each animation type</p>
        <ul style={{ margin: 0, padding: 0, }}>
          { shakes.map((s,i) => {
            const name = names[i]
            const Elem = s
            return (
              <ListItem key={i}>
                <Side>
                  <Code>
                    <code>
                      {`<${name} />`}
                    </code>
                  </Code>
                </Side>
                <Main>
                  <Elem 
                    orig={name === 'ShakeRotate' ? 'top center' : 'center center'}
                    style={{ fontSize: '3em' }}>
                    { emojee[i] }
                  </Elem>
                </Main>
              </ListItem>
            )})
          }
        </ul>
        <Footer >
          Made with <ShakeSlow fixed>♡</ShakeSlow> by <Link 
            href="https://twitter.com/elrumordelaluz">@elrumordelaluz</Link> using React.
        </Footer>
      </Wrapper>
    )
  }
}

ReactDOM.render(<App />, root)
