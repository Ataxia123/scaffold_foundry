import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

interface ButtonProps {
  borderButton?: boolean
  boxShadowGlow?: boolean
  hideBoxShadow?: boolean
  children?: React.ReactNode
  disabled?: boolean
  href?: string
  onClick?: () => void
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  to?: string
  disableCursor?: boolean
  variant?: 'default' | 'secondary' | 'tertiary'
  backgroundImage?: string
  color?: string
  className?: string
  icon?: string
  style?: any
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  href,
  onClick,
  size,
  text,
  to,
  variant,
  boxShadowGlow,
  borderButton,
  backgroundImage,
  className,
  icon,
  hideBoxShadow,
  style,
  disableCursor
}) => {

  let buttonColor: string
  switch (variant) {
    case 'secondary':
      break
    case 'default':
  }

  let boxShadow: string
  let buttonSize: number
  let buttonPadding: number
  let fontSize: number
  switch (size) {
    case 'xs':
      buttonSize = 20
      fontSize = 14
      break
    case 'sm':
      buttonSize = 36
      fontSize = 14
      break
    case 'lg':
      buttonSize = 72
      fontSize = 16
      break
    case 'md':
    default:
  }

  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink style={{ cursor: disableCursor ? 'default' : '' }} to={to}>{text}</StyledLink>
    } else if (href) {
      return (
        <StyledExternalLink href={href} target="__blank">
          {text}
        </StyledExternalLink>
      )
    } else {
      return text
    }
  }, [href, text, to])

  return (
    <>
      {(() => {
        if (size === 'xl') {
          return (
            <>
              <>
                {icon && (
                  <div className="icon-wrap">
                    <i className={icon}></i>
                  </div>
                )}
                {children}
                {ButtonChild}
              </>
            </>
          )
        }

        if (size !== 'xs') {
          if (borderButton)
            return (
              <>
                <>
                  {icon && (
                    <div>
                      <i className={icon}></i>
                    </div>
                  )}
                  {children}
                  {ButtonChild}
                </>
              </>
            )

          return (
            <>
              <>
                {icon && (
                  <div className="icon-wrap">
                    <i className={icon}></i>
                  </div>
                )}
                {children}
                {ButtonChild}
              </>
            </>
          )
        }
        return (
          <>
            <>
              {icon &&
                <div>
                  <i className={icon}></i>
                </div>
              }
              {children}
            </>
          </>
        )
      })()}
    </>
  )
}

interface StyledButtonProps {
  boxShadow: string
  borderButton?: boolean
  boxShadowGlow?: boolean
  color: string
  disabled?: boolean
  fontSize: number
  padding: number
  size: number
  backgroundImage?: string
  BCH?: boolean,
  hideBoxShadow?: boolean
}

const StyledButtonBorder = styled.button<StyledButtonProps>`
  align-items: center;
  border: 1px solid #25252C52;
  border-radius: 9px;
  background: transparent;
  background-color: ${(props) => {
    if (props.disabled) return 'rgba(229, 147, 16, 0.48)'
    return props.theme.color.primary.main

    // if(props.BCH) return !props.disabled ? props.theme.color.BCHgreen[100] : 'rgba(229, 147, 16, 0.5)'
    // return !props.disabled ? 'rgba(229, 147, 16, 1)' : 'rgba(229, 147, 16, 0.5)'
  }};
  cursor: pointer;
  display: flex;
  font-size: ${(props) => props.fontSize}px;
  height: 48px;
  justify-content: center;
  outline: none;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: ${(props) => {
    if (props.BCH) return '0px 0px 30px rgb(47 208 109 / 48%);'
    if (props.boxShadowGlow) return '0px 0px 30px rgba(229, 147, 16, 0.48)'
    if (props.hideBoxShadow) return 'none'
    return !props.disabled ? '0px 0px 30px rgba(229, 147, 16, 0.48)' : '0px 0px 30px rgba(229, 147, 16, 0.48)'
  }}
  padding-left: ${(props) => props.padding}px;
  padding-right: ${(props) => props.padding}px;
  pointer-events: ${(props) => (!props.disabled ? undefined : 'none')};
  width: 100%;
`

const StyledXLButton = styled.button<StyledButtonProps>`
  align-items: center;
  border: 0;
  border-radius: 9px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: ${(props) => props.fontSize}px;
  justify-content: center;
  outline: none;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: ${(props) => {
    return props.theme.color.shadow.light
    // if (props.BCH) return '0px 0px 30px rgb(47 208 109 / 48%);'
    // if (props.boxShadowGlow) return '0px 0px 30px rgba(229, 147, 16, 0.48)'
    // if (props.hideBoxShadow) return 'none'
    // return !props.disabled ? '0px 0px 30px rgba(229, 147, 16, 0.48)' : '0px 0px 30px rgba(229, 147, 16, 0.48)'
  }};
  padding-left: ${(props) => props.padding}px;
  padding-right: ${(props) => props.padding}px;
  pointer-events: ${(props) => (!props.disabled ? undefined : 'none')};
  // width: 100%;
  // height: 90px;
  height: 48px;
  width: 300px;
  background-color: ${(props) => props.theme.color.primary.main};
`

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  background-color: ${(props) => {
    if (props.disabled) return 'rgba(229, 147, 16, 0.48)'
  }};
  border: 0;
  border-radius: 9px;
  cursor: pointer;
  display: flex;
  font-size: ${(props) => props.fontSize}px;
  height: 48px;
  justify-content: center;
  outline: none;
  font-weight: 700;
  letter-spacing: 1px;
  padding-left: ${(props) => props.padding}px;
  padding-right: ${(props) => props.padding}px;
  pointer-events: ${(props) => (!props.disabled ? undefined : 'none')};
  width: 100%;
`

const StyledSmallButton = styled.button<StyledButtonProps>`
  align-items: center;
  background-color: ${(props) => {
    return props.theme.color.primary.main
  }};

  border: 0;
  border-radius: 9px;
  color: ${(props) =>
    !props.disabled ? props.theme.color.white : props.theme.color.grey[400]};
  cursor: pointer;
  font-size: ${(props) => props.fontSize}px;
  font-weight: 700;
  justify-content: center;
  outline: none;
  box-shadow: ${(props) => {
    // if (props.BCH) return '0px 0px 30px rgb(47 208 109 / 48%);'
    return props.theme.color.shadow.light
    // if (props.boxShadowGlow) return '0px 0px 30px rgba(229, 147, 16, 0.48)'
    // if (props.hideBoxShadow) return 'none'
    // return !props.disabled
    //   ? '0px 0px 30px rgba(229, 147, 16, 0.48)'
    //   : '0px 0px 30px rgba(229, 147, 16, 0.48)'
  }};
  padding: ${(props) => props.padding}px;
  // padding-bottom: ${(props) => props.padding}px;
  margin-top: 5px;
  pointer-events: ${(props) => (!props.disabled ? undefined : 'none')};
`

const StyledLink = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  text-decoration: none;
`

const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${(props) => -props.theme.spacing[4]}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
`

export default Button
