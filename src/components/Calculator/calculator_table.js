import numeral from 'numeral'
import styled from '@emotion/styled'

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

const CalculatorOutputSection = styled('section')({

  letterSpacing: '.3px',
  height: 'auto',
  width: '100%',
  background: '#060b47',
  color: '#fbfbfd',
  minHeight: 150,
  //minHeight: 300,
  padding: '5px 0px',

  table: {
    width: '100%',
    //borderSpacing: '.5rem',
    background: '#065198',
    //border: 'solid thin',
    borderCollapse: 'collapse',
  },

})

const data = [];

function setData (state, period, currency) {

  var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  data.push({
    id: period,
    profit: formatter.format(state[period].profit),
    earned: numeral(state[period].earned).format('0,0'),
    cost: formatter.format(state[period].cost),
    roi: numeral(state[period].roi).format('(0.00 %)'),
  });
}

function updateData (state, period, currency) {

  const index = {
    //id: 0,
    daily: 0,
    weekly: 1,
    monthly: 2,
    yearly: 3,
  }

  var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  data[index[period]].profit=formatter.format(state[period].profit)
  data[index[period]].earned=numeral(state[period].earned).format('0,0')
  data[index[period]].cost=formatter.format(state[period].cost)
  data[index[period]].roi=numeral(state[period].roi).format('(0.00 %)')

}

const calculateDaily = (inputValues, constantValues, days = 1) => {
  const daysInYear = 365.0
  const dailyCost = inputValues.yearlyNodeCost / daysInYear
  const dailyRewards = constantValues.yearlyRewards / daysInYear
  const dailyEngEarned = dailyRewards * (inputValues.nodeStake / inputValues.totalGenesisNodeStake)
  const dailyRevenue = dailyEngEarned * inputValues.ENGPrice
  const dailyProfit = dailyRevenue - dailyCost
  const dailyReturn = dailyEngEarned / inputValues.nodeStake

  return {
    revenue: dailyRevenue * days,
    profit: dailyProfit * days,
    earned: dailyEngEarned * days,
    cost: dailyCost * days,
    roi: dailyReturn * days,
  }
}
//
const CalculatorOutput = props => {
  const { constantValues } = props
  const { currency } = props

  const calculateAll = () => ({
    daily: calculateDaily(props.inputValues, constantValues),
    weekly: calculateDaily(props.inputValues, constantValues, 7),
    monthly: calculateDaily(props.inputValues, constantValues, 30.416666),
    yearly: calculateDaily(props.inputValues, constantValues, 365)
  })

  const state = calculateAll()

  {Object.keys(state).map(period => {
    if(data.length < 4 ) { setData(state, period, currency) }
      else {
          updateData(state, period, currency)
      }
  })}

  const options = {
      noDataText: 'ERROR: No data in Enigma table!'
    }

  return (
    <div>
    <CalculatorOutputSection>
          <BootstrapTable data= { data } options={ options }
          tableStyle={ { border: 'solid thin' }  }
          containerStyle={ { border: 'solid thin', width: '100%' } }
          border={ true }>
            <TableHeaderColumn width='150' dataField='id' isKey={ true } headerAlign={'center'} tdStyle={ { 'border': 'solid thin', 'padding': '5px'} }>Period</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='profit' headerAlign={'center'} tdStyle={ { 'border': 'solid thin', 'padding': '2px'} }>Profit</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='earned' headerAlign={'center'} tdStyle={ { 'border': 'solid thin', 'padding': '2px'} }>ENG Earned</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='cost' headerAlign={'center'} tdStyle={ { 'border': 'solid thin', 'padding': '2px'} }>Node Cost</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='roi' headerAlign={'center'} tdStyle={ { 'border': 'solid thin', 'padding': '2px'} }>ROI</TableHeaderColumn>
          </BootstrapTable>
    </CalculatorOutputSection>
    {/*<dl>
        <font size="2.5" color="#20B1F9"><dt>Total genesis Node Stake</dt></font>
        <font size="2"><dd>This should be set to the combined total ENG stake across all nodes.</dd></font>
        <font size="2.5" color="#20B1F9"><dt>Node Stake</dt></font>
        <font size="2"><dd>This is the amount of ENG you plan to stake in a secretnode.</dd></font>
        <font size="2.5" color="#20B1F9"><dt>Yearly Node Cost</dt></font>
        <font size="2"><dd>This is the yearly cost of electricity or fees for running a node.</dd></font>
        <font size="2.5" color="#20B1F9"><dt>ENG Price</dt></font>
        <font size="2"><dd>This is the market value of a single ENG token.</dd></font>
    </dl>*/}
        <font size="2" color="#E82E9D">Disclosure:</font> <font size="1.75">We make no warranties of any kind in relation to this content, including but not limited to accuracy and updatedness. No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant for your specific reliance for any purpose. Any use or reliance on our content is solely at your own risk and discretion. You should conduct your own research, review, analyse and verify our content before relying on it. No content on our site is meant to be a solicitation or offer of any kind.</font>
    </div>
    )
}

export default CalculatorOutput
