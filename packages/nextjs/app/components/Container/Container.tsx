import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

interface ContainerProps {
  children?: React.ReactNode,
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Container: React.FC<ContainerProps> = ({ children, size = 'md' }) => {
  return (
    <>
      {children}
    </>
  )
}

interface StyledContainerProps {
  width: number
}

const StyledContainer = styled.div<StyledContainerProps>`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${props => props.width}px;
  padding: 0 ${props => props.theme.spacing[4]}px;
  width: 100%;
`

export default Container