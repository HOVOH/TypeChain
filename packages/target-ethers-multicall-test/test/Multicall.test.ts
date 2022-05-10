import {InfuraProvider} from '@ethersproject/providers';
import { Provider } from '@hovoh/ethers-multicall'

import { expect } from 'earljs'

import { SimpleToken__factory } from '../types/factories/v0.8.9'
const provider = new InfuraProvider('mainnet');
const ethcallProvider = Provider.create(provider, 1);

describe("Multicall typed contract", function() {
  it("Should execute a multicall", async ()=> {

    const YFI_CONTRACT = "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e";
    const UNI_CONTRACT = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";

    const yfiContract = SimpleToken__factory.multicall(YFI_CONTRACT);
    const uniContract = SimpleToken__factory.multicall(UNI_CONTRACT);

    const [yfiSupply, uniSymbol] = await ethcallProvider.all([
      yfiContract.totalSupply(),
      uniContract.symbol()
    ]);

    expect(yfiSupply.toString()).toEqual( '36666000000000000000000');
    expect(uniSymbol).toEqual('UNI');
  })
})
