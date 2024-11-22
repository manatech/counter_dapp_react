import { getHttpEndpoint, Network } from '@orbs-network/ton-access';
import { TonClient } from '@ton/ton';
import { useAsyncInitialize } from './useAsyncInitialize';
import { NETWORK_TYPE } from '../constants';

export function useTonClient(network: Network = NETWORK_TYPE) {
  return useAsyncInitialize(
    async () =>
      new TonClient({
        endpoint: await getHttpEndpoint({ network }),
      })
  );
}
