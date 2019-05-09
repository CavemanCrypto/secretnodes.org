import styled from '@emotion/styled'
import { useState } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles'

import CalculatorInput from './calculator_input'
import CalculatorOutput from './calculator_output'

//radio buttons:
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'

//Radio labels:
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




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
    typography: {
      useNextVariants: true,
    },
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

var radioButtonResult=[0]

const Calculator = props => {

  const constantValues = {
    engCirculatingSupply: 75000000.0,
    totalStakedPercent: 13.33,
    yearlyRewards: 62500.0 * 12
  }

  const [inputs, setInputs] = useState({
    totalGenisisNodeStake: 250000 * 50,
    nodeStake: 50000.0,
    yearlyNodeCost: 840.0,
    ENGPrice: 0.60
  })

  const keyList = [ 'totalGenisisNodeStake', 'nodeStake', 'yearlyNodeCost', 'ENGPrice'  ]

  const formatValue = {
    totalGenisisNodeStake: false,
    nodeStake: false,
    ENGPrice: false,
    yearlyNodeCost: false
  }

  //console.dir(inputs)

  const maxInputValues = {
    totalGenisisNodeStake: 150000000.0,
    totalStakedPercent: 100.0,
    nodeStake: 500000.0,
    ENGPrice: 10.0,
    yearlyNodeCost: 10000.0
  }

  const minInputValues = {
    totalGenisisNodeStake: 0,
    totalStakedPercent: 0,
    nodeStake: 0,
    ENGPrice: 0,
    yearlyNodeCost: 0
  }

  const stepValues = {
    totalGenisisNodeStake: 1000,
    nodeStake: 100,
    ENGPrice: .01,
    yearlyNodeCost: 1
  }

  function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }

    function handleClose() {
      setAnchorEl(null);
    }

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    )
  }


  function RadioButtons() {

    const [selectedValue, setSelectedValue] = React.useState('a')

    function handleChange(event) {
      setSelectedValue(event.target.value)
      radioButtonResult=event.target.value
    }

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">CURRENCY</FormLabel>
        <RadioGroup aria-label="value" name="currency-radio-button group" value={selectedValue} onChange={handleChange} row>
          <FormControlLabel
            value="a"
            control={<Radio color="primary" />}
            label="A"
            labelPlacement="top"
          />
          <FormControlLabel
            value="b"
            control={<Radio color="primary" />}
            label='B'
            labelPlacement="top"
          />
          <FormControlLabel
            value="c"
            control={<Radio color="primary" />}
            label='C'
            labelPlacement="top"
          />
          <FormControlLabel
            value="d"
            control={<Radio color="primary" />}
            label='D'
            labelPlacement="top"
          />
          <FormControlLabel
            value="e"
            control={<Radio color="primary" />}
            label='E'
            labelPlacement="top"
          />
          <FormControlLabel
            value="f"
            control={<Radio color="primary" />}
            label='F'
            labelPlacement="top"
          />
          <FormControlLabel
            value="g"
            control={<Radio color="primary" />}
            label='G'
            labelPlacement="top"
          />
          <FormControlLabel
            value="h"
            control={<Radio color="primary" />}
            label='H'
            labelPlacement="top"
          />
        </RadioGroup>
      </FormControl>
    )
  }

  const calculate = updatedInputs => {
    setInputs({ ...inputs, ...updatedInputs })
  }

  return (
    <CalculatorSection id='calculator'>
      <MuiThemeProvider theme={theme}>
        <h1>Calculator</h1>
        <div className={'calculator-container'}>
          <div>
            {keyList.map(k => (
              <CalculatorInput
                key={k}
                min={minInputValues[k] || 0}
                max={maxInputValues[k] || 100.0}
                step={stepValues[k] || 1}
                onChange={calculate}
                title={k}
                value={inputs[k]}
                formatValue={formatValue[k]}
              />
            ))}
          </div>
          <div>
            {/*Object.keys(constantValues).map(k => (
              <CalculatorInput
                key={k}
                disabled
                formatValue
                max={constantValues[k]}
                title={k}
                value={constantValues[k]}
              />
            ))*/}
          </div>
          <div>
            {/*RadioButtons()*/}
            {/*console.log(radioButtonResult)*/}
            {/*RadioButtons()*/}
            {SimpleMenu()}
            {/*<CalculatorOutput inputValues={inputs} constantValues={constantValues} />*/}
          </div>
        </div>
      </MuiThemeProvider>
    </CalculatorSection>
  )
}

export default Calculator
