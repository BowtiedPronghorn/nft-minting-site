import { useNetwork, useSwitchNetwork } from 'wagmi';
import Popup from "reactjs-popup";
import ConnectWallet from "./ConnectWallet";
import { useAccount } from 'wagmi';

const network = 5; // goerli test net


function UseNetworkPopUp() {
    const { isConnected } = useAccount()
    const { chain } = useNetwork()
    const { error, isLoading, pendingChainId, switchNetwork } =
        useSwitchNetwork()

    
    if (isConnected && chain?.id !== network) {
    return (
      <div>
        <Popup
           open={true}
           modal
        >
                <button
                    onClick={() => switchNetwork?.(network)}
                >
                   Please use the Goerli Testnet
                    {isLoading && pendingChainId === network && ' (switching)'}
                </button>

            <div>{error && error.message}</div>
        </Popup>
      </div>
    )
  }

}

export default UseNetworkPopUp;
