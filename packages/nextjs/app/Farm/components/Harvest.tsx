import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '~~/app/components/Button'
import Card from '~~/app/components/Card'
import CardContent from '~~/app/components/CardContent'
import CardIcon from '~~/app/components/CardIcon'
import Label from '~~/app/components/Label'
import Value from '~~/app/components/Value'
import useEarnings from '~~/app/hooks/useEarnings'
import useReward from '~~/app/hooks/useReward'
import { getBalanceNumber } from '~~/app/utils/formatBalance'
import StrudelIcon from '~~/app/assets/img/STRDL_icon.svg'
interface HarvestProps {
  pid: number
}

const Harvest: React.FC<HarvestProps> = ({ pid }) => {
  const earnings = useEarnings(pid)
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(pid)

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>
              <img src={StrudelIcon} height="55px" />
            </CardIcon>
            <Value value={getBalanceNumber(earnings)} />
            <Label text="STRUDEL Earned" />
          </StyledCardHeader>
          <StyledCardActions>
            <Button
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? 'Collecting STRUDEL' : 'Harvest'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Harvest
