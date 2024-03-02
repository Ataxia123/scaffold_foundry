import React, { useEffect, useMemo } from 'react'
import { getMasterChefContract } from '~~/app/tokens/utils'
import { getContract } from '~~/app/utils/erc20'

import Spacer from '~~/app/components/Spacer'
import useFarm from '~~/app/hooks/useFarm'
import useRedeem from '~~/app/hooks/useRedeem'
import Button from '~~/app/components/Button'
import Harvest from './components/Harvest'
import Stake from './components/Stake'
import useETH from '~~/app/hooks/useETH'




const Farm: React.FC = () => {
  const farmId = "1"
  const {
    pid,
    lpToken,
    lpTokenAddress,
    tokenAddress,
    earnToken,
    name,
    icon,
  } = useFarm(farmId) || {
    pid: 0,
    lpToken: '',
    lpTokenAddress: '',
    tokenAddress: '',
    earnToken: '',
    name: '',
    icon: '',
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const vbtc:unknown = "" 
  const { eth } = useETH()
  const provider = eth?.provider

  const lpContract = useMemo(() => {
    return getContract(provider, lpTokenAddress)
  }, [provider, lpTokenAddress])

  const { onRedeem } = useRedeem(getMasterChefContract(vbtc as Vbtc))

  const lpTokenName = useMemo(() => {
    return lpToken.toUpperCase()
  }, [lpToken])

  const earnTokenName = useMemo(() => {
    return earnToken.toUpperCase()
  }, [earnToken])

  const getSymbol = (icon: string): any => {
    switch (icon) {
      case '1':
        return ''
      case '2':
        return ''
      case '3':
        return ''
      default:
        return icon
    }
  }

  return (
    <>
      <Spacer size="sm" />
      <Spacer size="lg" />
      <>
        <>
          <>
            <Harvest pid={pid} />
          </>
          <Spacer />
          <>
            <Stake
              lpContract={lpContract}
              pid={pid}
              icon={icon}
              tokenName={lpToken.toUpperCase()}
            />
          </>
        </>
        <Spacer size="lg" />
        <>
          ⭐️ Every time you stake and unstake LP tokens, the contract will
          automagically harvest $TRDL rewards for you!
        </>
        <Spacer size="lg" />
      </>
    </>
  )
}

const StyledFarm = `
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = `
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = `
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = `
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default Farm
