import Input from '@material-ui/core/Input'
import Slider, { defaultValueReducer } from './Slider'
import Typography from '@material-ui/core/Typography'
import numeral from 'numeral'
import startCase from 'lodash.startcase'
import styled from '@emotion/styled'

const CalculatorInputSection = styled('section')({


    ".field": {
      display: "flex",
      //width: '100%',
      //position: "relative",
    },

    ".field-input": {
      display: "block",
      width: "100%",
      //width: "275px",
      //padding: "0px 40px",
    },

    ".text-input": {
      //display: "flex",
      width: '120px',
      position: "relative",
      top: "-17px",
      right: "-10px",
      padding: "0px 10px",
    },

    thumbIcon: {
      borderRadius: '50%',
    },

})

function valueReducer(rawValue, props, event) {
  const { disabled, max, min, step } = props;

  function roundToStep(number, step) {
    const sliderValue = Math.round((number / step)) * step;
    return Math.round(sliderValue * 100) /100; // added 19th_April_2019 to fix small epsilon math error.
  }

  return roundToStep(rawValue, step);
}

const shouldFormatCurrency = title => title.includes('Price') || title.includes('Cost')
const shouldFormatPercent = title => title.includes('Percent')

const CalculatorInput = (props) => {
  const { title, value, min, max, step, disabled = false, formatValue = false } = props
  const displayValue = formatValue ? numeral(value).format('0.00') || null : value

  return (
    <CalculatorInputSection>
      <h3>{startCase(title)}</h3>
      <div className='field'>
        <div className='field-input'>
          <Slider
            onChange={(e, value) => { props.onChange({ [title]: value }) }}
            value={value}
            step={step}
            min={min}
            max={max}
            disabled={disabled}
            valueReducer={valueReducer}
          />
        </div>
        <div className='field-input text-input'>
          {/*shouldFormatCurrency(title) && <span>$</span>*/}
          <Input
            onChange={(e) => { props.onChange({ [title]: e.target.value }) }}
            value={displayValue}
            //style={{ margin: 12 }}
            margin="normal"
            fullWidth
            disabled={disabled}
            disableUnderline={false}
            InputLabelProps={{ shrink: true }}
          />
          {shouldFormatPercent(title) && <span>%</span>}
        </div>
      </div>
    </CalculatorInputSection>
  )
}

export default CalculatorInput
