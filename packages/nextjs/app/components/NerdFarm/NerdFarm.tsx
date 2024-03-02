
import {useEffect} from "react"

export const NerdFarm = () =>{

return (
    <>
 
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
              tokenName={"Enjoy"}
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