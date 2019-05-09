import styled from '@emotion/styled'
import { useState } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles'

import CalculatorInput from './calculator_input'
import CalculatorOutput from './calculator_table'

// Drop down menu widget:
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';

// Currency methods:
import getSymbolFromCurrency from 'currency-symbol-map'
import currencySymbolMap from 'currency-symbol-map'

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
    padding: '0 30px',
    justifyContent: 'center'
  },
  letterSpacing: '.6px',
  height: 'auto',
  width: '100%',
  background: '#060b47',
  color: '#fbfbfd',
  minHeight: 300,

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

const options = [
  ['USD'],
  ['GBP'],
  ['EUR'],
  ['JPY'],
  ['AUD'],
];

var menuItemSelected = options[0]

const ITEM_HEIGHT = 100;

class CurrencyMenu extends React.Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ anchorEl: null })
    const menuSelectionValue = event.nativeEvent.target.outerText // this does not work on Mozilla
    if(menuSelectionValue == '') {
      console.log("menuSelectionValue ERROR!")
      return undefined
    }
	  menuItemSelected=menuSelectionValue
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        {menuItemSelected}
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          color='primary'
          label="currency"
          background='rgba(0, 0, 0, .7)'
        >
          <MoreVertIcon/>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              borderRadius: 10,
              border: 0,
              disableGutters: true,
              background: 'rgba(0, 0, 0, .7)',
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 'auto',
              padding: '0px 10px',
            },
          }}
        >
          {options.map (option => (
            <MenuItem
              key={option}
              selected={option === {menuItemSelected}}
              onClick={this.handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
        {getSymbolFromCurrency(menuItemSelected)}
      </div>
    );
  }
}

const Calculator = props => {

  const keyList = [
    'totalGenesisNodeStake',
    'nodeStake',
    'yearlyNodeCost',
    'ENGPrice' ]

  const constantValues = {
    engCirculatingSupply: 75000000.0,
    totalStakedPercent: 3.33,
    yearlyRewards: 62500.0 * 12
  }

  const [inputs, setInputs] = useState({
    totalGenesisNodeStake: 10000000,
    nodeStake: 50000.0,
    yearlyNodeCost: 600.0,
    ENGPrice: 0.60
  })

  const formatValue = {
    totalGenesisNodeStake: false,
    nodeStake: false,
    ENGPrice: false,
    yearlyNodeCost: false
  }

  const maxInputValues = {
    totalGenesisNodeStake: 75000000,
    totalStakedPercent: 100.0,
    nodeStake: 500000.0,
    ENGPrice: 10.0,
    yearlyNodeCost: 1200.0
  }

  const minInputValues = {
    totalGenesisNodeStake: 1250000,
    totalStakedPercent: 0,
    nodeStake: 0,
    ENGPrice: 0,
    yearlyNodeCost: 0
  }

  const stepValues = {
    totalGenesisNodeStake: 1000,
    nodeStake: 100,
    ENGPrice: .01,
    yearlyNodeCost: 1
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
            {/*<CurrencyMenu />*/}
            {<CalculatorOutput inputValues={inputs} constantValues={constantValues} currency={menuItemSelected} />}
          </div>
        </div>
      </MuiThemeProvider>
    </CalculatorSection>
  )
}
//
export default Calculator
