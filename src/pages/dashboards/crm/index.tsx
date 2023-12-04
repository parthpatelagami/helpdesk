// ** MUI Import
import Grid from '@mui/material/Grid'

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
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CardStatistics />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CrmDashboard
