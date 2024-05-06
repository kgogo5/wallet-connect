import {
  useAccount,
  useDisconnect,
  useReadContract,
  useSignMessage,
} from "wagmi";
import ConnectButton from "./Button";
import { abi } from "./abi";
import {
  useWalletInfo,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalTheme,
  // useWeb3ModalState,
} from "@web3modal/wagmi/react";

const App = () => {
  const { open, close } = useWeb3Modal();

  const { disconnect } = useDisconnect();

  const { walletInfo } = useWalletInfo(); // 연결된 지갑의 메타데이터 정보

  const { address, isConnecting, isDisconnected } = useAccount(); // 이더리움

  const { signMessage } = useSignMessage(); // 연결된 계정으로 메시지에 서명하기 위한 후크

  // const { open, selectedNetworkId } = useWeb3ModalState() // 모달 상태의 현재 값

  const { themeMode, themeVariables, setThemeMode, setThemeVariables } =
    useWeb3ModalTheme(); // 테마 모드, 테마 색상

  const events = useWeb3ModalEvents();

  const result = useReadContract({
    abi,
    address: "0x2445269C2ec8Cda5EB246D87e758f70064EF9CbD",
    functionName: "totalSupply",
  });

  console.log(walletInfo);
  console.log(result);

  return (
    <>
      <h1>Web3 Wagmi 연동 테스트</h1>
      <button onClick={() => open({ view: "Connect" })}>Connect</button>
      <button onClick={() => open({ view: "Account" })}>Account</button>
      <button onClick={() => open({ view: "AllWallets" })}>AllWallets</button>
      <button onClick={() => open({ view: "Networks" })}>Networks</button>
      <button onClick={() => open({ view: "WhatIsANetwork" })}>
        WhatIsANetwork
      </button>
      <button onClick={() => open({ view: "WhatIsAWallet" })}>
        WhatIsAWallet
      </button>
      <button onClick={() => open({ view: "OnRampProviders" })}>
        OnRampProviders
      </button>
      <button onClick={() => close()}>close</button>
      <button onClick={() => disconnect()}>disconnect</button>

      <ConnectButton />

      <h2>Address</h2>
      {isConnecting && <div>Connecting…</div>}
      {isDisconnected && <div>Disconnected</div>}
      <p>{address}</p>

      <button onClick={() => signMessage({ message: "hello world" })}>
        Sign message
      </button>
    </>
  );
};

export default App;
