// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

interface PickerProps {
  label?: string
  end: Date | number
  start: Date | number
}

const PickersRange = ({ popperPlacement }: { popperPlacement: ReactDatePickerProps['popperPlacement'] }) => {
  // ** States
  const [startDate, setStartDate] = useState<DateType>(new Date())
  const [endDate, setEndDate] = useState<DateType>(addDays(new Date(), 15))
  const [startDateRange, setStartDateRange] = useState<DateType>(new Date())
  const [endDateRange, setEndDateRange] = useState<DateType>(addDays(new Date(), 45))

  const handleOnChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const handleOnChangeRange = (dates: any) => {
    const [start, end] = dates;

    setStartDateRange(start);
    setEndDateRange(end);
  }

  const CustomInput = forwardRef((props: PickerProps, ref) => {
    const startDate = format(props.start, 'MM/dd/yyyy')
    const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return <CustomTextField inputRef={ref} label={props.label || ''} {...props} value={value} />
  })

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
        <DatePicker
          selectsRange
          monthsShown={2}
          endDate={endDateRange}
          selected={startDateRange}
          startDate={startDateRange}
          shouldCloseOnSelect={false}
          id='date-range-picker-months'
          onChange={handleOnChangeRange}
          popperPlacement={popperPlacement}
          customInput={
            <CustomInput
              label='Multiple Months'
              end={endDateRange as Date | number}
              start={startDateRange as Date | number}
            />
          }
        />
    </Box>
  )
}

export default PickersRange