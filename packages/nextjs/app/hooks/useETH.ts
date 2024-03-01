import { useContext } from 'react'
import { Context } from '~~/app/contexts/WalletProvider'

const useETH = () => {
  const eth = useContext(Context)
  return eth
}

export default useETH
