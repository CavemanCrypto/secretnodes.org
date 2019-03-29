import { useState } from 'react'
import CalculatorInput from './calculator_input'
import CalculatorOutput from './calculator_output'

const Calculator = props => {
  const constantValues = {
    engCirculatingSupply: 75000000.0,
    totalStakedPercent: 13.33,
    monthlyRewards: 625000.0
  }

  const [inputs, setInputs] = useState({
    totalGenisisNodeStake: 10000000.0,
    nodeStake: 220000.0,
    engPrice: 0.60,
    monthlyNodeCost: 120.0
  })

  const maxInputValues = {
    totalGenisisNodeStake: 150000000.0,
    totalStakedPercent: 100.0,
    nodeStake: 150000000.0,
    monthlyRewards: 62500.0,
    engPrice: 100000.0,
    monthlyNodeCost: 10000.0
  }

  const calculate = (updatedInputs) => {
    setInputs({ ...inputs, ...updatedInputs })
  }

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <div>
          {Object.keys(inputs).map(k => (
            <CalculatorInput
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
              disabled
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
    </div>
  )
}

export default Calculator
