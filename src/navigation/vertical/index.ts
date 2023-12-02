// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      icon: 'tabler:smart-home',
      path: '/dashboards/crm'
    },
    {
      title: 'Tickets',
      icon: 'tabler:file'
    }
  ]
}

export default navigation
