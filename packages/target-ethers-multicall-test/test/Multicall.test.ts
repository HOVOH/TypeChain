import {InfuraProvider} from '@ethersproject/providers';
import { Provider } from 'ethcall'

import { expect } from 'earljs'

import { SimpleToken__factory } from '../types/factories/v0.8.9'
import { initMulticallProvider } from '../types/common'
import { BigNumber } from 'ethers'
const provider = new InfuraProvider('mainnet');


describe("Multicall typed contract", function() {
  it("Should execute all multicall", async ()=> {
    const ethcallProvider = await initMulticallProvider(provider);
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

  it("Should execute tryAll multicall", async ()=> {
    const ethcallProvider = await initMulticallProvider(provider);
    const YFI_CONTRACT = "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e";
    const UNI_CONTRACT = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";

    const yfiContract = SimpleToken__factory.multicall(YFI_CONTRACT);
    const uniContract = SimpleToken__factory.multicall(UNI_CONTRACT);

    const [yfiSupply, uniSymbol] = await ethcallProvider.tryAll([
      yfiContract.totalSupply(),
      uniContract.symbol()
    ]);

    expect(yfiSupply?.toString()).toEqual( '36666000000000000000000');
    expect(uniSymbol).toEqual('UNI');

  })

  it("Should execute tryEach multicall", async ()=> {
    const ethcallProvider = await initMulticallProvider(provider);
    const YFI_CONTRACT = "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e";
    const UNI_CONTRACT = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";

    const yfiContract = SimpleToken__factory.multicall(YFI_CONTRACT);
    const uniContract = SimpleToken__factory.multicall(UNI_CONTRACT);

    const [yfiSupply, uniSymbol] = await ethcallProvider.tryEach([
      yfiContract.totalSupply(),
      uniContract.symbol()
    ], [true, true]);

    expect(yfiSupply?.toString()).toEqual( '36666000000000000000000');
    expect(uniSymbol).toEqual('UNI');

  })
})
