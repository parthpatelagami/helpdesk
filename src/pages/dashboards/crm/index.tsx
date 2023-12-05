import { useEffect, useState } from 'react'
import axios from 'axios'

// ** MUI Import
import Grid from '@mui/material/Grid'
import { Skeleton, Box } from '@mui/material'
import Card from '@mui/material/Card'

// ** Demo Component Imports
import CrmSessions from 'src/views/dashboards/crm/CrmSessions'
import CrmRevenueGrowth from 'src/views/dashboards/crm/CrmRevenueGrowth'
import CrmBrowserStates from 'src/views/dashboards/crm/CrmBrowserStates'
import CrmProjectStatus from 'src/views/dashboards/crm/CrmProjectStatus'
import CrmActiveProjects from 'src/views/dashboards/crm/CrmActiveProjects'
import CrmLastTransaction from 'src/views/dashboards/crm/CrmLastTransaction'
import CrmActivityTimeline from 'src/views/dashboards/crm/CrmActivityTimeline'
import CrmSalesWithAreaChart from 'src/views/dashboards/crm/CrmSalesWithAreaChart'
import CrmSalesWithRadarChart from 'src/views/dashboards/crm/CrmSalesWithRadarChart'
import CrmEarningReportsWithTabs from 'src/views/dashboards/crm/CrmEarningReportsWithTabs'

// ** Custom Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import CardStatistics from 'src/views/dashboards/crm/CrmTicketsCount'

const CrmDashboard = () => {
  const [res, setRes] = useState<boolean>(false)

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        setRes(true)
      })
      .catch(error => {
        console.log(error)
        setRes(false)
      })
  }, [])

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          {res ? (
            <CardStatistics />
          ) : (
            <Card sx={{ height: 150 }}>
              <Box sx={{ marginTop: 6, marginLeft: 5 }}>
                <Skeleton width={190} sx={{ marginLeft: 2 }} />
              </Box>
              <Box sx={{ display: 'flex', marginTop: 10, marginLeft: 5 }}>
                <Skeleton animation='wave' variant='circular' width={40} height={40} sx={{ marginLeft: 2 }} />
                <Skeleton width={190} sx={{ marginLeft: 2 }} />
                <Skeleton animation='wave' variant='circular' width={40} height={40} sx={{ marginLeft: 2 }} />
                <Skeleton width={190} sx={{ marginLeft: 2 }} />
                <Skeleton animation='wave' variant='circular' width={40} height={40} sx={{ marginLeft: 2 }} />
                <Skeleton width={190} sx={{ marginLeft: 2 }} />
                <Skeleton animation='wave' variant='circular' width={40} height={40} sx={{ marginLeft: 2 }} />
                <Skeleton width={190} sx={{ marginLeft: 2 }} />
                <Skeleton animation='wave' variant='circular' width={40} height={40} sx={{ marginLeft: 2 }} />
                <Skeleton width={190} sx={{ marginLeft: 2 }} />
                <Skeleton animation='wave' variant='circular' width={40} height={40} sx={{ marginLeft: 2 }} />
                <Skeleton width={190} sx={{ marginLeft: 2 }} />
              </Box>
            </Card>
          )}
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CrmDashboard
