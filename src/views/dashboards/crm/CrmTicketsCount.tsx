// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Third Party Components
import axios from 'axios'

// ** Demo Components Imports
import CardStatisticsStatistics from 'src/views/ui/cards/statistics/CardStatisticsStatistics'

// ** Custom Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import {
  CardStatsSquareProps,
  CardStatsVerticalProps,
  CardStatsHorizontalProps,
  CardStatsWithAreaChartProps,
  CardStatsHorizontalWithDetailsProps
} from 'src/@core/components/card-statistics/types'

interface propsType {
  apiData?: InferGetStaticPropsType<typeof getStaticProps>
  cards?: JSX.Element
}

const CardStatistics = (props: propsType) => {
  const { apiData, cards } = props
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          {cards}
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

// Card Statistics Page
//-------------------------------
export type CardStatsType = {
  statsSquare: CardStatsSquareProps[]
  statsVertical: CardStatsVerticalProps[]
  statsHorizontal: CardStatsHorizontalProps[]
  statsWithAreaChart: CardStatsWithAreaChartProps[]
  statsHorizontalWithDetails: CardStatsHorizontalWithDetailsProps[]
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData: CardStatsType = res.data

  return {
    props: {
      apiData
    }
  }
}

export default CardStatistics
