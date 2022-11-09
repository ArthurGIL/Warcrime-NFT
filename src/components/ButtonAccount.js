import '../App.css';
//import AccountPage from '../AccountPage';

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../components/Nav.css';
import '../components/Button.css';

import abi from '../contracts/ABI.json';
import { ethers } from 'ethers';


const contractAddress = "0xd23e8525548bC55C2E81c78f505f7147E0B4265E";

function Account() {

  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
    }
  }

  const conNftHandler = async () => {
    /*try {
      const { ethereum } = window;
      
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");
        let nftTxn = await nftContract.safeMint();

        console.log("Mining... please wait");
        await nftTxn.wait();

        console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);

      } else {
        console.log("Ethereum object does not exist");
      }

    } catch (err) {
      console.log(err);
    }*/
    console.log("Connected");
  }
  

  const connectWalletButton = () => {
    return (
      <Button onClick={connectWalletHandler} buttonStyle='btn--outline'>
        Connexion
      </Button>
    )
  }

  const conNftButton = () => {
    return (
      <Link to='/Account'>
        <Button onClick={conNftHandler} buttonStyle='btn--outline'>
          Account
        </Button>
      </Link>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <div className='main-app'>
      <div>
        {currentAccount ? conNftButton() : connectWalletButton()}
      </div>
    </div>
  )
}

export default Account;
