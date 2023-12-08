// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Third Party Imports
import format from 'date-fns/format'
import { ApexOptions } from 'apexcharts'
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

interface PickerProps {
  start: Date | number
  end: Date | number
}

const ApexBarChart = () => {
  // ** States
  const [endDate, setEndDate] = useState<DateType>(null)
  const [startDate, setStartDate] = useState<DateType>(null)

  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    legend: {
      position: 'right',
      markers: { offsetX: -3, radius: 10 },
      labels: { colors: theme.palette.text.secondary },
      itemMargin: {
        vertical: 10,
        horizontal: 10
      },
      fontSize: '15'
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
      },
      textAnchor: 'start'
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 5,
        barHeight: '70%',
        horizontal: true,
        startingShape: 'rounded',
        dataLabels: {
          position: 'bottom'
        }
      }
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f'],

    grid: {
      show: false
    },
    yaxis: {
      labels: {
        style: { colors: theme.palette.text.disabled }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: theme.palette.divider },
      categories: ['Great', 'Good', 'Average', 'Poor', 'Bad'],
      labels: {
        style: { colors: theme.palette.text.disabled }
      }
    }
  }

  const CustomInput = forwardRef((props: PickerProps, ref) => {
    const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
    const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return (
      <CustomTextField
        {...props}
        value={value}
        inputRef={ref}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Icon fontSize='1.25rem' icon='tabler:calendar-event' />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <Icon fontSize='1.25rem' icon='tabler:chevron-down' />
            </InputAdornment>
          )
        }}
      />
    )
  })

  const handleOnChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <Card>
      <CardHeader
        title='My CSAT'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center']
        }}
      />
      <CardContent>
        <ReactApexcharts type='bar' height={300} options={options} series={[{ data: [90, 75, 50, 30, 10] }]} />
      </CardContent>
    </Card>
  )
}

export default ApexBarChart
