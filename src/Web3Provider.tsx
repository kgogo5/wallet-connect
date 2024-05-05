import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 0. 설치 쿼리 클라이언트
const queryClient = new QueryClient();

// 1. https://cloud.walletconnect.com 에서 projectId를 가져옵니다
const projectId = "b24b182a5a550c16a058479c34d4b24e";

// 2. WagmiConfig 만들기
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // 오리진은 도메인 및 하위 도메인과 일치해야 합니다
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  // ...wagmiOptions // Optional - createConfig 매개변수 재정의
});

// 3. 모달 생성
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - 클라우드 구성의 기본값
  enableOnramp: true, // Optional - false as default
});

export function Web3ModalProvider({ children }: { children: JSX.Element }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
