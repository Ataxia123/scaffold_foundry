import React, { useState } from 'react'

import { StrudelIcon } from '~~/app/components/StrudelIcon'
import AstroWave from '~~/app/assets/img/astroWave.png'
import ThumbsUp from '~~/app/assets/img/thumbs_up_astronaut.png'

import Button from '~~/app/components/Button'
import Page from '~~/app/components/Page'

import PageHeader from '~~/app/components/PageHeader'
import WalletProviderModal from '~~/app/components/WalletProviderModal'

import useModal from '~~/app/hooks/useModal'
import {useAccount} from 'wagmi'

import Farm from '~~/app/Farm'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core'

import FarmCards from '~~/app/components/FarmCards'
import MuiContainer from '@material-ui/core/Container'
import { TerraFarm } from '~~/app/components/Lottie'
import Spacer from '~~/app/components/Spacer'
import MuiPaper from '@material-ui/core/Paper'
import useETH from '~~/app/hooks/useETH'

const Paper = withStyles({
  rounded: {
    'border-radius': '10px',
  },
  root: {
    margin: 'auto',
    '@media (min-width: 500px)': {
      width: '70%',
    },
    '& > *': {
      padding: '10px',
    },
  },
})(MuiPaper)
const Container = withStyles({
  root: {
    margin: 'auto',
    textAlign: 'center',
  },
})(MuiContainer)

const Farms: React.FC = () => {
const account = useAccount()

  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
    <>
      <>
          <>
            <>
              <Container maxWidth="md" className="farm-container">
                <StyledP>
                  The Strudel Farms strengthen the protocol and the peg of vBTC to
                  BTC.
                </StyledP>
                <StyledP>
                  $TRDL is the crypto-economical incentive to stake and earn
                  rewards.
                </StyledP>
              </Container>
              <FarmCards />
            </>
            <>
              <Farm />
            </>
          </>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              boxShadowGlow={true}
              onClick={onPresentWalletProviderModal}
              text="Unlock Wallet"
            />
          </div>
      </>
    </>
  )
}

const StyledP = styled.p`
  text-align: center;
`

const StyledMulti = styled.span`
  font-size: 35px;
  font-family: 'azo-sans-web', Arial, Helvetica, sans-serif;
  font-weight: 700;
`

const StyledMoving = styled.div`
  & > div {
    height: 200px;
  }
`

export default Farms
