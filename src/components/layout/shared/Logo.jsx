'use client'

// Third-party Imports
import styled from '@emotion/styled'

// Config Imports
import themeConfig from '@configs/themeConfig'

const LogoText = styled.span`
  color: ${({ color }) => color ?? 'var(--mui-palette-text-primary)'};
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  margin-inline-start: 10px;
`

const TextLogo = {
  templateName: 'Flow Detect',
  settingsCookieName: 'materio-mui-next-free-demo',
  mode: 'light', // 'light', 'dark'
  layoutPadding: 24, // Common padding for header, content, footer layout components (in px)
  compactContentWidth: 1440, // in px
  disableRipple: false // true, false
}

const Logo = ({ color }) => {
  return (
    <div className='flex items-center min-bs-[24px]'>
      <img src='/images/logo-app/logo-flowdetect.png' alt='Logo' className='w-[70px] h-auto' />
      <LogoText color={color}>{TextLogo.templateName}</LogoText>
    </div>
  )
}

export default Logo
