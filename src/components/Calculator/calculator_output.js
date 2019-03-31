import numeral from 'numeral'
import styled from '@emotion/styled'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import upperFirst from 'lodash.upperfirst'

const CalculatorOutputSection = styled('section')({
})

const calculateDaily = (inputValues, constantValues, days = 1) => {
  const daysInYear = 365.0
  const dailyCost = inputValues.yearlyNodeCost / daysInYear
  const dailyRewards = constantValues.yearlyRewards / daysInYear
  const dailyEngEarned = dailyRewards * (inputValues.nodeStake / inputValues.totalGenisisNodeStake)
  const dailyRevenue = dailyEngEarned * inputValues.engPrice
  const dailyProfit = dailyRevenue - dailyCost
  const dailyReturn = dailyEngEarned / inputValues.nodeStake

  return {
    roi: dailyReturn * days,
    earned: dailyEngEarned * days,
    revenue: dailyRevenue * days,
    cost: dailyCost * days,
    profit: dailyProfit * days
  }
}

const CalculatorOutput = props => {
  const { constantValues } = props

  const calculateAll = () => ({
    daily: calculateDaily(props.inputValues, constantValues),
    weekly: calculateDaily(props.inputValues, constantValues, 7),
    monthly: calculateDaily(props.inputValues, constantValues, 30.416666),
    yearly: calculateDaily(props.inputValues, constantValues, 365)
  })

  const state = calculateAll()

  return (
    <CalculatorOutputSection>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Period</TableCell>
            <TableCell>ROI</TableCell>
            <TableCell>ENG Earned</TableCell>
            <TableCell>Revenue</TableCell>
            <TableCell>Node Cost</TableCell>
            <TableCell>Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(state).map(period => {
            return (
              <TableRow>
                <TableCell>{upperFirst(period)}</TableCell>
                <TableCell>{numeral(state[period].roi).format('(0.00 %)')}</TableCell>
                <TableCell>{numeral(state[period].earned).format('0,0')}</TableCell>
                <TableCell>{numeral(state[period].revenue).format('$0,0.00')}</TableCell>
                <TableCell>{numeral(state[period].cost).format('$0,0.00')}</TableCell>
                <TableCell>{numeral(state[period].profit).format('$0,0.00')}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </CalculatorOutputSection>
  )
}

export default CalculatorOutput
