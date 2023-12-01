// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

interface Props {
  hidden: LayoutProps['hidden']
  settings: LayoutProps['settings']
  saveSettings: LayoutProps['saveSettings']
  appBarContent: NonNullable<NonNullable<LayoutProps['horizontalLayoutProps']>['appBar']>['content']
  appBarBranding: NonNullable<NonNullable<LayoutProps['horizontalLayoutProps']>['appBar']>['branding']
}

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

const AppBarContent = (props: Props) => {
  // ** Props
  const { appBarContent: userAppBarContent, appBarBranding: userAppBarBranding } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {userAppBarBranding ? (
        userAppBarBranding(props)
      ) : (
        <LinkStyled href='/'>
          <svg width='184' height='32' viewBox='0 0 184 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clip-path='url(#clip0_1973_497)'>
              <path
                d='M1.42773 5.23047H3.21653V15.7928H15.1429V5.23047H16.9317V27.3206H15.1429V17.4829H3.21733V27.3206H1.42773V5.23047Z'
                fill='#1E2C5B'
              />
              <path
                d='M21.7041 9.15257C21.7041 6.19409 23.5873 5.1387 25.6577 5.22947L35.3569 5.65101V6.94871H25.6585C23.9009 6.94871 23.4937 7.8541 23.4937 9.15257V15.4588L34.1017 15.7003V17.0288L23.4937 17.2695V23.6073C23.4937 25.5988 24.7801 25.6896 25.9729 25.6896H35.3577V26.9565L25.9729 27.4096C23.9009 27.4996 21.7049 27.0173 21.7049 23.6073V9.15257H21.7041Z'
                fill='#1E2C5B'
              />
              <path
                d='M39.6592 5.22949H41.4472V23.5181C41.4472 25.5096 42.7344 25.5996 43.9272 25.5996H53.1856V27.3196H43.928C41.856 27.3196 39.66 26.9273 39.66 23.5181L39.6592 5.22949Z'
                fill='#1E2C5B'
              />
              <path
                d='M56.4199 5.22949H65.6167C68.0959 5.22949 71.1095 6.10411 71.1095 11.5065C71.1095 17.7534 67.9391 18.0842 65.6167 18.0842C64.3615 18.0842 58.3663 17.6627 58.2095 17.5719V27.3196H56.4207L56.4199 5.22949ZM65.6167 16.3357C67.5311 16.3357 69.3199 15.7919 69.2887 11.5065C69.2575 7.31104 67.1551 6.9795 65.6167 6.9795H58.2087V16.3357H65.6167Z'
                fill='#1E2C5B'
              />
              <path d='M75.4092 5.22949H77.198V27.3196H75.4092V5.22949Z' fill='#4CA1D9' />
              <path
                d='M81.9688 5.22949H83.7896L96.564 24.0904V5.22949H98.3528V27.3196H96.564L83.7583 8.45798V27.3196H81.9688V5.22949Z'
                fill='#4CA1D9'
              />
              <path
                d='M135.135 4.36279C140.564 4.36279 143.858 5.35895 143.858 15.7083C143.858 25.4545 140.784 26.7214 135.135 26.7214C129.486 26.7214 126.411 25.756 126.411 15.7083C126.411 5.35895 129.832 4.36279 135.135 4.36279ZM135.135 25.0022C140.187 25.0022 142.07 23.7045 142.07 15.7083C142.07 6.44435 139.686 6.08204 135.135 6.08204C130.805 6.08204 128.2 6.29358 128.2 15.7083C128.2 23.886 129.958 25.0022 135.135 25.0022Z'
                fill='#4CA1D9'
              />
              <path
                d='M147.939 4.51318L153.87 14.1686L159.895 4.51318H161.904L155.062 15.4979L161.747 26.601H159.738L153.869 17.0056L148.033 26.601H146.024L152.708 15.4979L145.93 4.51318H147.939Z'
                fill='#4CA1D9'
              />
              <path
                d='M164.194 24.9966C164.194 24.7281 164.322 24.5635 164.601 24.5635H165.435C165.755 24.5635 165.885 24.7289 165.885 24.9966V26.2096C165.885 26.4981 165.693 26.6004 165.435 26.6004H164.601C164.365 26.6004 164.194 26.4358 164.194 26.2096V24.9966Z'
                fill='#1E2C5B'
              />
              <path
                d='M168.772 12.7131C168.772 12.4454 168.923 12.2808 169.201 12.2808H169.992C170.248 12.2808 170.399 12.4661 170.399 12.7131V13.8654C170.399 14.1331 170.228 14.2777 169.992 14.2777H169.201C168.944 14.2777 168.772 14.1139 168.772 13.8654V12.7131ZM168.944 15.6769H170.164V26.6009H168.944V15.6769Z'
                fill='#1E2C5B'
              />
              <path
                d='M177.673 15.5728C181.461 15.5728 182.574 17.1158 182.574 21.292C182.574 25.3259 181.418 26.7044 177.673 26.7044C173.865 26.7044 172.773 25.2021 172.773 21.292C172.773 16.8281 174.057 15.5728 177.673 15.5728ZM177.673 25.5313C180.113 25.5313 181.354 25.0782 181.354 21.292C181.354 17.1981 180.2 16.7458 177.673 16.7458C175.213 16.7458 173.993 17.0751 173.993 21.292C173.993 25.182 175.298 25.5313 177.673 25.5313Z'
                fill='#1E2C5B'
              />
              <path d='M112.218 6.84973L117.362 9.98667L122.207 7.07819L112.218 0.98584' fill='#1E2C5B' />
              <path d='M107.342 9.9873V15.9989L117.508 22.0574L122.207 19.142L107.342 9.9873Z' fill='#223F6E' />
              <path d='M112.218 25.3732V31.0125L122.207 24.9155V19.1416L112.218 25.3732Z' fill='#1E2C5B' />
              <path
                d='M122.2 13.4828L107.225 22.292L112.221 25.3751V31.016L102.228 24.9159V7.19426H102.316L102.14 7.09272L112.221 0.992676V6.85502L107.348 9.76889V16.0035L122.2 7.07656V13.4828Z'
                fill='#4CA2DA'
              />
            </g>
            <defs>
              <clipPath id='clip0_1973_497'>
                <rect width='184' height='30.7694' fill='white' transform='translate(0 0.615234)' />
              </clipPath>
            </defs>
          </svg>
        </LinkStyled>
      )}
      {userAppBarContent ? userAppBarContent(props) : null}
    </Box>
  )
}

export default AppBarContent
