import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

interface SpacerProps {
  size?: 'sm' | 'md' | 'lg' | 'xs'
}

const Spacer: React.FC<SpacerProps> = ({ size = 'md' }) => {
  let s: number
  switch (size) {
  }

  return (
    <StyledSpacer size={s} />
  )
}

interface StyledSpacerProps {
  size: number,
}

const StyledSpacer = styled.div<StyledSpacerProps>`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`

export default Spacer