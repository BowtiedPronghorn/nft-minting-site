import "../styles/UseNetworkPopUp.css"
import { useNetwork, useSwitchNetwork } from 'wagmi';
import Popup from "reactjs-popup";
import { useAccount } from 'wagmi';

const network = 5; // goerli test net


function UseNetworkPopUp() {
    const { isConnected } = useAccount()
    const { chain } = useNetwork()
    const { error, isLoading, pendingChainId, switchNetwork } =
        useSwitchNetwork()

    
    if (isConnected && chain?.id !== network) {
    return (
        <Popup
           open={true}
           modal
        >
                <h1>Please use the Goerli Testnet for this app</h1>
                <button
                    className="switch-network-button"
                    onClick={() => switchNetwork?.(network)}
                >
                    Switch Network
                    {isLoading && pendingChainId === network && ' (switching)'}
                </button>

            <div>{error && error.message}</div>
        </Popup>
    )
  }

}

export default UseNetworkPopUp;
