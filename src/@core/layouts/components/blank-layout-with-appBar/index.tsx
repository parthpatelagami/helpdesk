// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { styled, useTheme } from '@mui/material/styles'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Hook
import { useSettings } from 'src/@core/hooks/useSettings'
import { Settings } from 'src/@core/context/settingsContext'

import LanguageDropdown from '../shared-components/LanguageDropdown'

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

interface Props {
  saveSettings: (values: Settings) => void
}

const BlankLayoutAppBar = (props: Props) => {
  // ** Hooks & Vars
  const theme = useTheme()
  const { settings } = useSettings()
  const { skin } = settings
  const { saveSettings } = props

  return (
    <AppBar
      color='default'
      position='static'
      elevation={skin === 'bordered' ? 0 : 0}
      sx={{
        backgroundColor: 'background.paper',
        ...(skin === 'bordered' && { borderBottom: `1px solid ${theme.palette.divider}` })
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          p: theme => `${theme.spacing(0, 6)} !important`,
          minHeight: `${(theme.mixins.toolbar.minHeight as number) - (skin === 'bordered' ? 1 : 0)}px !important`
        }}
      >
        <LinkStyled href='/'>
          <svg width='184' height='32' viewBox='0 0 184 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clip-path='url(#clip0_2385_4780)'>
              <path
                d='M1.42773 5.23096H3.21653V15.7933H15.1429V5.23096H16.9317V27.3211H15.1429V17.4833H3.21733V27.3211H1.42773V5.23096Z'
                fill='#1E2C5B'
              />
              <path
                d='M21.7031 9.1533C21.7031 6.19482 23.5863 5.13943 25.6567 5.2302L35.3559 5.65174V6.94944H25.6575C23.8999 6.94944 23.4927 7.85483 23.4927 9.1533V15.4595L34.1007 15.701V17.0295L23.4927 17.2703V23.608C23.4927 25.5996 24.7791 25.6903 25.9719 25.6903H35.3567V26.9573L25.9719 27.4103C23.8999 27.5004 21.7039 27.018 21.7039 23.608V9.1533H21.7031Z'
                fill='#1E2C5B'
              />
              <path
                d='M39.6602 5.23022H41.4482V23.5188C41.4482 25.5104 42.7354 25.6004 43.9282 25.6004H53.1866V27.3204H43.929C41.857 27.3204 39.661 26.9281 39.661 23.5188L39.6602 5.23022Z'
                fill='#1E2C5B'
              />
              <path
                d='M56.4199 5.23022H65.6167C68.0959 5.23022 71.1095 6.10485 71.1095 11.5072C71.1095 17.7542 67.9391 18.0849 65.6167 18.0849C64.3615 18.0849 58.3663 17.6634 58.2095 17.5726V27.3204H56.4207L56.4199 5.23022ZM65.6167 16.3365C67.5311 16.3365 69.3199 15.7926 69.2887 11.5072C69.2575 7.31178 67.1551 6.98024 65.6167 6.98024H58.2087V16.3365H65.6167Z'
                fill='#1E2C5B'
              />
              <path d='M75.4102 5.23022H77.199V27.3204H75.4102V5.23022Z' fill='#4CA1D9' />
              <path
                d='M81.9688 5.23022H83.7896L96.564 24.0911V5.23022H98.3528V27.3204H96.564L83.7583 8.45871V27.3204H81.9688V5.23022Z'
                fill='#4CA1D9'
              />
              <path
                d='M135.135 4.36304C140.564 4.36304 143.858 5.3592 143.858 15.7085C143.858 25.4547 140.784 26.7217 135.135 26.7217C129.486 26.7217 126.411 25.7563 126.411 15.7085C126.411 5.3592 129.832 4.36304 135.135 4.36304ZM135.135 25.0024C140.187 25.0024 142.07 23.7047 142.07 15.7085C142.07 6.44459 139.686 6.08228 135.135 6.08228C130.805 6.08228 128.2 6.29382 128.2 15.7085C128.2 23.8862 129.958 25.0024 135.135 25.0024Z'
                fill='#4CA1D9'
              />
              <path
                d='M147.939 4.51343L153.87 14.1689L159.895 4.51343H161.904L155.062 15.4981L161.747 26.6013H159.738L153.869 17.0058L148.033 26.6013H146.024L152.708 15.4981L145.93 4.51343H147.939Z'
                fill='#4CA1D9'
              />
              <path
                d='M164.194 24.9966C164.194 24.7281 164.322 24.5635 164.601 24.5635H165.435C165.755 24.5635 165.885 24.7289 165.885 24.9966V26.2096C165.885 26.4981 165.693 26.6004 165.435 26.6004H164.601C164.365 26.6004 164.194 26.4358 164.194 26.2096V24.9966Z'
                fill='#1E2C5B'
              />
              <path
                d='M168.772 12.7133C168.772 12.4456 168.923 12.281 169.201 12.281H169.992C170.248 12.281 170.399 12.4664 170.399 12.7133V13.8656C170.399 14.1333 170.228 14.2779 169.992 14.2779H169.201C168.944 14.2779 168.772 14.1141 168.772 13.8656V12.7133ZM168.944 15.6772H170.164V26.6011H168.944V15.6772Z'
                fill='#1E2C5B'
              />
              <path
                d='M177.673 15.5732C181.461 15.5732 182.574 17.1163 182.574 21.2925C182.574 25.3264 181.418 26.7049 177.673 26.7049C173.865 26.7049 172.773 25.2025 172.773 21.2925C172.773 16.8286 174.057 15.5732 177.673 15.5732ZM177.673 25.5318C180.113 25.5318 181.354 25.0787 181.354 21.2925C181.354 17.1986 180.2 16.7463 177.673 16.7463C175.213 16.7463 173.993 17.0756 173.993 21.2925C173.993 25.1825 175.298 25.5318 177.673 25.5318Z'
                fill='#1E2C5B'
              />
              <path d='M112.218 6.85046L117.362 9.9874L122.207 7.07892L112.218 0.986572' fill='#1E2C5B' />
              <path d='M107.342 9.98755V15.9991L117.508 22.0576L122.207 19.1422L107.342 9.98755Z' fill='#223F6E' />
              <path d='M112.218 25.3734V31.0127L122.207 24.9157V19.1418L112.218 25.3734Z' fill='#1E2C5B' />
              <path
                d='M122.2 13.483L107.225 22.2923L112.221 25.3754V31.0162L102.228 24.9162V7.1945H102.316L102.14 7.09296L112.221 0.99292V6.85527L107.348 9.76913V16.0038L122.2 7.07681V13.483Z'
                fill='#4CA2DA'
              />
            </g>
            <defs>
              <clipPath id='clip0_2385_4780'>
                <rect width='184' height='30.7694' fill='white' transform='translate(0 0.615234)' />
              </clipPath>
            </defs>
          </svg>
        </LinkStyled>
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
      </Toolbar>
    </AppBar>
  )
}

export default BlankLayoutAppBar
