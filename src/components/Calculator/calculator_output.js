import numeral from 'numeral'
import upperFirst from 'lodash.upperfirst'

const CalculatorOutput = props => {
  const { constantValues } = props

  const calculateDaily = (inputValues, days = 1) => {
    // Assume 30 days in a month for simplicity
    const daysInMonth = 30.0
    const dailyCost = inputValues.monthlyNodeCost / daysInMonth
    const dailyRewards = constantValues.monthlyRewards / daysInMonth
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

  const calculateAll = () => {
    return {
      daily: calculateDaily(props.inputValues),
      weekly: calculateDaily(props.inputValues, 7),
      monthly: calculateDaily(props.inputValues, 30),
      yearly: calculateDaily(props.inputValues, 365)
    }
  }

  const state = calculateAll()

  const periods = [
    'daily',
    'weekly',
    'monthly',
    'yearly'
  ]

  return (
    <div>
      {periods.map(period => (
        <table>
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
              <td>{numeral(state[period].roi).format('0,0.000')}</td>
              <td>{numeral(state[period].earned).format('0,0.00')}</td>
              <td>{numeral(state[period].revenue).format('0,0.00')}</td>
              <td>{numeral(state[period].cost).format('0,0.00')}</td>
              <td>{numeral(state[period].profit).format('0,0.00')}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  )
}

export default CalculatorOutput
