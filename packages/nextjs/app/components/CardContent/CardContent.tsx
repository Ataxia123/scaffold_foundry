import React from 'react'
import styled from 'styled-components'

type StyleProps = {
  style?: any
  children?:any
}
const CardContent: React.FC<StyleProps> = ({ children, style = {} }) => (
  <StyledCardContent style={style}>{children}</StyledCardContent>
)

const StyledCardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

export default CardContent
