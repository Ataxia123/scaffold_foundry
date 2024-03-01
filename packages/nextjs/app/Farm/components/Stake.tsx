import BigNumber from 'bignumber.js'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Contract } from 'web3-eth-contract'
import Button from '~~/app/components/Button'
import Card from '~~/app/components/Card'
import CardContent from '~~/app/components/CardContent'
import CardIcon from '~~/app/components/CardIcon'
import IconButton from '~~/app/components/IconButton'
import { AddIcon } from '~~/app/components/icons'
import Label from '~~/app/components/Label'
import Value from '~~/app/components/Value'
import useAllowance from '~~/app/hooks/useAllowance'
import useApprove from '~~/app/hooks/useApprove'
import useModal from '~~/app/hooks/useModal'
import useStake from '~~/app/hooks/useStake'
import useStakedBalance from '~~/app/hooks/useStakedBalance'
import useTokenBalance from '~~/app/hooks/useTokenBalance'
import useUnstake from '~~/app/hooks/useUnstake'
import { getBalanceNumber } from '~~/app/utils/formatBalance'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import VBtcEth from '~~/app/assets/img/vBTC-ETH.png'
import StrudelEth from '~~/app/assets/img/STRDL-ETH.png'
import renBTC from '~~/app/assets/img/renBTC-ETH.png'
import wBTC from '~~/app/assets/img/wBTC-ETH.png'
import vBTCtBTC from '~~/app/assets/img/vBTC-tBTC.png'
import OneBTCImg from '~~/app/assets/img/onevBTC.png'

interface StakeProps {
  lpContract: Contract
  pid: number
  tokenName: string
  icon: string
}

const Stake: React.FC<StakeProps> = ({ lpContract, pid, tokenName, icon }) => {
  const [requestedApproval, setRequestedApproval] = useState(false)

  const allowance = useAllowance(lpContract)
  const { onApprove } = useApprove(lpContract)

  const tokenBalance = useTokenBalance(lpContract.options.address)
  const stakedBalance = useStakedBalance(pid)

  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
    />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
    />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.log(e)
    }
  }, [onApprove, setRequestedApproval])

  const getLPIcon = (icon: string): any => {
    switch (icon) {
      case '1':
        return <LPImage src={StrudelEth} />
      case '2':
        return <LPImage src={VBtcEth} />
      case '3':
        return <LPImage style={{ height: '50px' }} src={vBTCtBTC} />
      case '4':
        return <LPImage style={{ height: '50px' }} src={OneBTCImg} />
      case '🐋':
        return <LPImage src={wBTC} />
      case '🦏':
        return <LPImage src={renBTC} />
      default:
        return '🌪️'
    }
  }
  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>{getLPIcon(icon)}</CardIcon>
            <Value value={getBalanceNumber(stakedBalance)} />
            <Label text={`${tokenName} Tokens Staked`} />
          </StyledCardHeader>
          <StyledCardActions>
            {!allowance.toNumber() ? (
              <Button
                disabled={requestedApproval}
                onClick={handleApprove}
                text={`Approve ${tokenName}`}
              />
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0))}
                  text="Unstake"
                  onClick={onPresentWithdraw}
                />
                <StyledActionSpacer />
                <IconButton onClick={onPresentDeposit}>
                  <AddIcon />
                </IconButton>
              </>
            )}
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
  width: 100%;
`

const StyledActionSpacer = styled.div`
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

const LPImage = styled.img`
  height: 55px;
`

export default Stake
