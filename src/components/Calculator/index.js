import styled from '@emotion/styled'
import { useState } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles'

import CalculatorInput from './calculator_input'
import CalculatorOutput from './calculator_output'

const CalculatorSection = styled('section')({
  h1: {
    marginLeft: 41,
    textAlign: 'center'
  },
  '.role-container': {
    marginLeft: 20
  },
  '.calculator-container': {
    display: 'block',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '0 40px',
    justifyContent: 'center'
  },
  letterSpacing: '.6px',
  height: 'auto',
  width: '100%',
  background: '#060b47',
  color: '#fbfbfd',
  minHeight: 300
})

const theme = createMuiTheme({
  palette: {
    background: {
      paper: '#FFF',
      default: '#FFF'
    },
    text: {
      primary: '#FFF',
      secondary: '#FFF',
      disabled: '#FFF',
      hint: '#FFF'
    },
    primary: {
      main: '#E82E9D',
      light: '#E82E9D',
      dark: '#E82E9D',
      contrastText: '#E82E9D'
    },
    secondary: {
      main: '#FFF',
      light: '#FFF',
      dark: '#FFF',
      contrastText: '#FFF',
      color: '#FFF'
    }
  }
})

const Calculator = props => {
  const constantValues = {
    engCirculatingSupply: 75000000.0,
    totalStakedPercent: 13.33,
    yearlyRewards: 62500.0 * 12
  }

  const [inputs, setInputs] = useState({
    totalGenisisNodeStake: 250000 * 50,
    nodeStake: 50000.0,
    engPrice: 0.60,
    yearlyNodeCost: 840.0
  })

  const maxInputValues = {
    totalGenisisNodeStake: 150000000.0,
    totalStakedPercent: 100.0,
    nodeStake: 500000.0,
    engPrice: 10.0,
    yearlyNodeCost: 10000.0
  }

  const calculate = (updatedInputs) => {
    setInputs({ ...inputs, ...updatedInputs })
  }

  return (
    <CalculatorSection id='calculator'>
      <MuiThemeProvider theme={theme}>
        <h1>Calculator</h1>
        <div className={'calculator-container'}>
          <div>
            {Object.keys(inputs).map(k => (
              <CalculatorInput
                key={k}
                max={maxInputValues[k] || 100.0}
                onChange={calculate}
                title={k}
                value={inputs[k]}
              />
            ))}
          </div>
          <div>
            {Object.keys(constantValues).map(k => (
              <CalculatorInput
                key={k}
                disabled
                formatValue
                max={constantValues[k]}
                title={k}
                value={constantValues[k]}
              />
            ))}
          </div>
          <div>
            <CalculatorOutput inputValues={inputs} constantValues={constantValues} />
          </div>
        </div>
      </MuiThemeProvider>
    </CalculatorSection>
  )
}

export default Calculator
