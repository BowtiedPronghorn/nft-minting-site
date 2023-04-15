import '../styles/ConnectWallet.css'

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

const ConnectWallet = () => {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()


    const WalletClick = async () => {
        if (isConnected) {
            disconnect();
        }
        else {
            connect();
        }
    }
    if (isConnected) {
        return (
            <button className={"WalletConnected"} onClick={WalletClick}>
                {address}
            </button>
        );
    }
    else {
        return (
            <button className={"ConnectWallet"} onClick={WalletClick}>
                Connect Wallet
            </button>
        );
    }

    };
export default ConnectWallet;
