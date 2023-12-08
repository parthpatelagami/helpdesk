// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

interface DataType {
  icon: string
  stats: string
  title: string
  color: string
}

const data: DataType[] = [
  {
    stats: '1402',
    title: 'All Tickets',
    color: '#28C76F',
    icon: 'material-symbols:ballot-outline'
  },
  {
    color: '#7367F0',
    stats: '145',
    title: 'New Tickets',
    icon: 'carbon:email-new'
  },
  {
    color: '#28C76F',
    stats: '397',
    title: 'Open Tickets',
    icon: 'tabler:mail-opened'
  },
  {
    stats: '545',
    color: '#FF9F43',
    title: 'Closed Tickets',
    icon: 'cil:envelope-closed'
  },
  {
    stats: '363',
    color: '#EA5455',
    title: 'Pending Tickets',
    icon: 'mdi:receipt-text-pending'
  },
  {
    stats: '102',
    color: '#4CA1D9',
    title: 'On Hold',
    icon: 'tabler:mail-pause'
  }
]

const renderStats = () => {
  return data.map((sale: DataType, index: number) => (
    <Grid item xs={6} md={2} key={index}>
      <Card
        key={index}
        sx={{
          borderRadius: '2px',
          paddingY: '10px',
          boxShadow: '0px 0px 0px 1px rgba(75, 70, 92, 0.1)'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            borderLeftColor: sale.color,
            borderLeftStyle: 'solid'
          }}
        >
          <Grid container>
            <Grid paddingLeft='4px' item xs={12} md={7}>
              <Typography variant='body2'>{sale.title}</Typography>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h5'>{sale.stats}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Grid>
  ))
}

const CardStatisticsStatistics2 = () => {
  return (
    <Card>
      <CardHeader
        title='My Activity'
        sx={{ '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' } }}
        action={
          <Typography variant='body2' sx={{ color: 'text.disabled' }}>
            Updated 1 month ago
          </Typography>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2.5)} !important` }}>
        <Grid container spacing={6}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardStatisticsStatistics2
