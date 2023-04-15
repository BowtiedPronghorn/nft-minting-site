import '../styles/Mint.css'
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import JungleCards from "../abi/JungleCards.json";

const Mint = () => {

    const { config } = usePrepareContractWrite({
        address: '0x90d197fc1417bC58A2193E0B124771Eec5CC18ca',
        abi: JungleCards.abi,
        functionName: 'mint',
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)
    // txnhash : 0xc0a7544cd2221905c8585f28b8972f8b2974df93eccb54df36c0cf561cdd673f
    console.log(data);


    return (
        <div className={"center"}>


            <button disabled={!write} onClick={() => write?.()}>
                <div className="default-btn">
                    <span>Get Your Jungle Cards Now</span>
                </div>
                <div className="hover-btn">
                    <span>Mint</span>
                </div>
            </button>
            {isLoading && <div>Check Wallet</div>}
            {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}

        </div>
    );
};

export default Mint;