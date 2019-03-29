import Input from '@material-ui/core/Input'
import Slider from '@material-ui/lab/Slider'
import numeral from 'numeral'
import startCase from 'lodash.startcase'

const CalculatorInput = (props) => {
  const { title, value, max, disabled = false } = props
  return (
    <div>
      <h3>{startCase(title)}</h3>
      <Slider
        onChange={(e, nextVal) => { props.onChange({ [title]: nextVal }) }}
        value={value}
        max={max}
        disabled={disabled}
      />
      <Input
        onChange={(e) => { props.onChange({ [title]: e.target.value }) }}
        value={numeral(value).format('0,0.00')}
        disabled={disabled}
      />
    </div>
  )
}

export default CalculatorInput
