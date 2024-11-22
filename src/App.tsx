import { Address, beginCell, OpenedContract, toNano } from '@ton/core';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';
import { Counter, storeIncrement } from './contracts/counter';
import { CONTRACT_ADDRESS } from './constants';
import { useTonClient } from './hooks/useTonClient';
import { useState } from 'react';
import { useAsyncInitialize } from './hooks/useAsyncInitialize';

const App = () => {
  const [counter, setCounter] = useState<null | number>();

  const client = useTonClient();
  const [tonConnectUI] = useTonConnectUI();

  const counterContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = Counter.fromAddress(Address.parse(CONTRACT_ADDRESS));
    return client.open(contract) as OpenedContract<Counter>;
  }, [client]);

  const handleIncrement = async () => {
    const result = await tonConnectUI.sendTransaction({
      validUntil: Date.now() / 1000 + 60,
      messages: [
        {
          address: CONTRACT_ADDRESS,
          amount: toNano('0.01').toString(),
          payload: beginCell()
            .storeUint(0, 32)
            .storeStringTail('increment')
            .endCell()
            .toBoc()
            .toString('base64'),
        },
      ],
    });

    console.log('Result: ', result);
  };

  const handleIncrementByValue = async (value: bigint) => {
    const result = await tonConnectUI.sendTransaction({
      validUntil: Date.now() / 1000 + 60,
      messages: [
        {
          address: CONTRACT_ADDRESS,
          amount: toNano('0.01').toString(),
          payload: beginCell()
            .store(
              storeIncrement({
                $$type: 'Increment',
                amount: value,
              })
            )
            .endCell()
            .toBoc()
            .toString('base64'),
        },
      ],
    });

    console.log('Result: ', result);
  };

  const handleGetCounter = async () => {
    if (!counterContract) return;
    const val = await counterContract.getCounter();
    setCounter(Number(val));
  };

  return (
    <div>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <button onClick={() => handleIncrementByValue(2n)}>
          Send Increment by 2
        </button>
      </div>
      <div>
        <button onClick={handleIncrement}>Send Increment</button>
      </div>
      <div>
        <button onClick={handleGetCounter}>Get Counter</button>
      </div>

      <div>
        <b>Counter Value</b>
        <div>{counter}</div>
      </div>
    </div>
  );
};

export default App;
