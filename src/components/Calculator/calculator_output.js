import numeral from 'numeral'
import upperFirst from 'lodash.upperfirst'

const calculateDaily = (inputValues, constantValues, days = 1) => {
  // Assume 30 days in a month for simplicity
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

  const calculateAll = () => {
    return {
      daily: calculateDaily(props.inputValues, constantValues),
      weekly: calculateDaily(props.inputValues, constantValues, 7),
      monthly: calculateDaily(props.inputValues, constantValues, 30.416666),
      yearly: calculateDaily(props.inputValues, constantValues, 365)
    }
  }

  const state = calculateAll()

  return (
    <div>
      {Object.keys(state).map(period => (
        <table key={period}>
          <thead>
            <tr>
              <th>{upperFirst(period)} ROI</th>
              <th>{upperFirst(period)} ENG Earned</th>
              <th>{upperFirst(period)} Revenue</th>
              <th>{upperFirst(period)} Node Cost</th>
              <th>{upperFirst(period)} Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{numeral(state[period].roi).format('(0.00 %)')}</td>
              <td>{numeral(state[period].earned).format('$0,0.00')}</td>
              <td>{numeral(state[period].revenue).format('$0,0.00')}</td>
              <td>{numeral(state[period].cost).format('$0,0.00')}</td>
              <td>{numeral(state[period].profit).format('$0,0.00')}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  )
}

export default CalculatorOutput
