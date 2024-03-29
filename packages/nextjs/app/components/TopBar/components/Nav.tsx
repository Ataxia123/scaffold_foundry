import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledAbsoluteLink
        href="https://hackmd.io/@HD-Strudel/WtS"
        target="_blank">
        Strudel Guide
      </StyledAbsoluteLink>
      <StyledLink exact activeClassName="active" to="/BTC">
        Bitcoin
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/BCH">
        Bitcoin Cash
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/farms">
        Strudel Farms
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/governance">
        Governance
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/bridge">
        BSC Bridge
      </StyledLink>
      {false && (
        <StyledLink exact activeClassName="active" to="/staking">
          Gravity Bags
        </StyledLink>
      )}
      <StyledAbsoluteLink
        href="https://strudel-finance.medium.com/"
        target="_blank"
      >
        Medium
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => {
    // return useLocation().pathname === '/BCH'
    // ? props.theme.color.BCHgreen[100]
    return props.theme.color.primary.main
  }};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
