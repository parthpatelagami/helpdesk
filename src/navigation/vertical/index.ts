// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      icon: 'carbon:home',
      path: '/dashboards/crm'
    },
    {
      title: 'Tickets',
      icon: 'mdi:ticket-outline',
      children: [
        {
          title: 'View All Tickets'
        }
      ]
    },
    {
      title: 'People',
      icon: 'octicon:people-24'
    },
    {
      title: 'Settings',
      icon: 'clarity:settings-line'
    },
    {
      title: 'Reports',
      icon: 'iconoir:reports',
      children: [
        {
          title: 'Incidents Detail Report'
        },
        {
          title: 'Email Send Report',
          icon: 'mdi-light:email'
        }
      ]
    }
  ]
}

export default navigation
