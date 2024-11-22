import { TonConnectUI } from '@tonconnect/ui';
import { toNano, beginCell } from '@ton/core';
import { storeIncrement } from './contracts/counter';
import { CONTRACT_ADDRESS } from './constants';

const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://s3.laisky.com/uploads/2024/09/connect-manifest-v2.json',
  buttonRootId: 'ton-connect',
});

tonConnectUI.onStatusChange(async (walletInfo) => {
  console.log('walletInfo', walletInfo);

  const getJettonButton = document.getElementById(
    'getJetton'
  ) as HTMLButtonElement;
  const getNftButton = document.getElementById('getNft') as HTMLButtonElement;

  if (walletInfo) {
    // enable buttons
    getJettonButton.disabled = false;
    getNftButton.disabled = false;
  } else {
    // disable buttons
    getJettonButton.disabled = true;
    getNftButton.disabled = true;
  }
});

document.getElementById('getJetton')?.addEventListener('click', async (evt) => {
  evt.preventDefault();

  // random int from 1 to 100
  const number = Math.floor(Math.random() * 100) + 1;

  const transaction = {
    validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
    messages: [
      {
        address: CONTRACT_ADDRESS,
        amount: toNano('1').toString(),
        payload: beginCell()
          .store(
            storeIncrement({
              $$type: 'Increment',
              amount: toNano(number),
            })
          )
          .endCell()
          .toBoc()
          .toString('base64'),
      },
    ],
  };

  const result = await tonConnectUI.sendTransaction(transaction);
  console.log('result', result);
});
