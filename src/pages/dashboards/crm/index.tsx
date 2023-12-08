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
import ApexDonutChart from 'src/views/dashboards/crm/TicketsByChannelChart'
import ApexBarChart from 'src/views/dashboards/crm/CsatChart'
import CardStatisticsStatistics2 from 'src/views/ui/cards/statistics/CardStatisticsStatistics2'
import CardStatisticsStatistics3 from 'src/views/ui/cards/statistics/CardStatisticsStatistics3'
import CardStatisticsStatistics from 'src/views/ui/cards/statistics/CardStatisticsStatistics'

const CrmDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CardStatistics cards={<CardStatisticsStatistics />} />
        </Grid>
        <Grid item xs={12}>
          <CardStatistics cards={<CardStatisticsStatistics2 />} />
        </Grid>
        <Grid item xs={12}>
          <CardStatistics cards={<CardStatisticsStatistics3 />} />
        </Grid>

        <Grid item xs={12} md={5}>
          <ApexDonutChart />
        </Grid>
        <Grid item xs={12} md={7}>
          <ApexBarChart />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CrmDashboard
