import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import CompaingsView from './views/campaigns-view';
import WalletWrapper from './wrappers/wallet-wrapper';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { RegisterScreen } from './screens/RegisterScreen';
interface AppProps {}

// const network = 'http://127.0.0.1:8899';
const network = clusterApiUrl(WalletAdapterNetwork.Devnet);

const App: React.FC<AppProps> = () => {
  return (
    <WalletWrapper network={network}>
      {/*""*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<RegisterScreen network={network} />} />
          <Route
            path="/example"
            element={<CompaingsView network={network} />}
          />
        </Routes>
      </BrowserRouter>
    </WalletWrapper>
  );
};

export default App;
