// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import Autocomplete from '../Autocomplete'
import ShortcutsDropdown, { ShortcutsType } from 'src/@core/layouts/components/shared-components/ShortcutsDropdown'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}
const shortcuts: ShortcutsType[] = [
  {
    title: 'Create Ticket',
    url: '/apps/calendar',
    icon: 'material-symbols:note-add-outline'
  },
  {
    title: 'Create Customer',
    icon: 'tabler:users',
    url: '/apps/user/list'
  },
  {
    icon: 'tabler:help',
    title: 'Create FAQ',
    url: '/pages/help-center'
  },
  {
    title: 'Send SMS',
    url: '/apps/roles',
    icon: 'material-symbols:sms-outline'
  },
  {
    title: 'Send Email',
    url: '/dashboards/crm',
    icon: 'ic:outline-email'
  }
]
const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden && !settings.navHidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <Icon fontSize='1.5rem' icon='tabler:menu-2' />
          </IconButton>
        ) : null}
        <Autocomplete hidden={hidden} settings={settings} />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        <ShortcutsDropdown settings={settings} shortcuts={shortcuts} />
        <NotificationDropdown settings={settings} notifications={[]} />
        <UserDropdown settings={settings} />
      </Box>
    </Box>
  )
}

export default AppBarContent
