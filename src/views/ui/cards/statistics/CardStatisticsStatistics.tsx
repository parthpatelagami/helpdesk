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
  color: ThemeColor
}

const data: DataType[] = [
  {
    stats: '1402',
    title: 'All Tickets',
    color: 'primary',
    icon: 'material-symbols:ballot-outline'
  },
  {
    color: 'info',
    stats: '145',
    title: 'New Tickets',
    icon: 'carbon:email-new'
  },
  {
    color: 'error',
    stats: '397',
    title: 'Open Tickets',
    icon: 'tabler:mail-opened'
  },
  {
    stats: '545',
    color: 'success',
    title: 'Closed Tickets',
    icon: 'cil:envelope-closed'
  },
  {
    stats: '363',
    color: 'warning',
    title: 'Pending Tickets',
    icon: 'mdi:receipt-text-pending'
  },
  {
    stats: '102',
    color: 'warning',
    title: 'On Hold',
    icon: 'tabler:mail-pause'
  }
]

const renderStats = () => {
  return data.map((sale: DataType, index: number) => (
    <Grid item xs={6} md={2} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar skin='light' color={sale.color} sx={{ mr: 4, width: 42, height: 42 }}>
          <Icon icon={sale.icon} fontSize='1.5rem' />
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5'>{sale.stats}</Typography>
          <Typography variant='body2'>{sale.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const CardStatisticsStatistics = () => {
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

export default CardStatisticsStatistics
