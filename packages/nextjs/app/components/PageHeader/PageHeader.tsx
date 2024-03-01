import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

interface PageHeaderProps {
  icon?: React.ReactNode
  iconSize?: number
  subtitle?: string
  title?: string
  className?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
  icon,
  iconSize = 120,
  subtitle,
  title,
  className
}) => {
  const StyledIcon = styled.div`
    & > div {
      height: ${iconSize}px;
    }
    font-size: ${iconSize}px;
    height: ${iconSize}px;
    line-height: ${iconSize}px;
    text-align: center;
    width: ${iconSize}px;
  `
  return (
    <Container size="md">
      <StyledPageHeader className={className}>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media (max-width: 426px) {
  }
  margin: 0 auto;
`

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 49px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  @media (max-width: 426px) {
    font-size: 40px;
  }
`

const StyledSubtitle = styled.h3`
  margin-top: 16px;
  margin-bottom: 0px;
  color: ${(props) => 'rgba(37, 37, 44, 0.48);'};
  font-size: 18px;
  font-weight: 300;
  padding: 0;
  text-align: center;
`

export default PageHeader
