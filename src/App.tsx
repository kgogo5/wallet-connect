import { useReadContract } from "wagmi";
import ConnectButton from "./Button";
import { abi } from "./abi";

const App = () => {
  const result = useReadContract({
    abi,
    address: "0x2445269C2ec8Cda5EB246D87e758f70064EF9CbD",
    functionName: "totalSupply",
  });

  console.log(result);
  return (
    <>
      <h1>Web3 Wagmi 연동 테스트</h1>

      <ConnectButton />
    </>
  );
};

export default App;
