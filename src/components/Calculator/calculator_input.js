import Input from '@material-ui/core/Input'
import Slider from '@material-ui/lab/Slider'
import numeral from 'numeral'
import startCase from 'lodash.startcase'
import styled from '@emotion/styled'

const CalculatorInputSection = styled('section')({
  '.field': {
    display: 'flex'
  },
  '.field-input': {
    display: 'block',
    width: '100%'
  },
  '.text-input': {
    position: 'relative',
    top: '-20px',
    padding: '0 15px'
  }
})

const shouldFormatCurrency = title => title.includes('Price') || title.includes('Cost')

const CalculatorInput = (props) => {
  const { title, value, max, disabled = false, formatValue = false } = props
  const displayValue = formatValue ? numeral(value).format('0,0.00') : value || null

  return (
    <CalculatorInputSection>
      <h3>{startCase(title)}</h3>
      <div className='field'>
        <div className='field-input'>
          <Slider
            onChange={(e, nextVal) => { props.onChange({ [title]: nextVal }) }}
            value={value}
            max={max}
            disabled={disabled}
          />
        </div>
        <div className='field-input text-input'>
          {shouldFormatCurrency(title) && <span>$</span>}
          <Input
            onChange={(e) => { props.onChange({ [title]: e.target.value }) }}
            value={displayValue}
            disabled={disabled}
          />
        </div>
      </div>
    </CalculatorInputSection>
  )
}

export default CalculatorInput
