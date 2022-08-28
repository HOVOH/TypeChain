import { BlockTag, Provider } from 'ethcall'
import { JsonFragmentType } from '@ethersproject/abi'
import {
  Provider as EthersProvider,
} from '@ethersproject/providers';

export async function initMulticallProvider(ethersProvider: EthersProvider) {
  const provider = new Provider();
  await provider.init(ethersProvider);
  return provider as unknown as AllProvider;
}

interface Call<T> {
  contract: {
    address: string;
  };
  name: string;
  inputs: readonly JsonFragmentType[];
  outputs: readonly JsonFragmentType[];
  params: any[];
}


interface AllProvider {
  all<T1, T2>(calls: [Call<T1>, Call<T2>]): Promise<[T1, T2]>;
  all<T1, T2, T3>(calls: [Call<T1>, Call<T2>, Call<T3>]): Promise<[T1, T2, T3]>;
  all<T1, T2, T3, T4>(calls: [
    Call<T1>,
    Call<T2>,
    Call<T3>,
    Call<T4>
  ]): Promise<[T1, T2, T3, T4]>;
  all<T1, T2, T3, T4, T5>(calls: [
    Call<T1>,
    Call<T2>,
    Call<T3>,
    Call<T4>,
    Call<T5>
  ]): Promise<[T1, T2, T3, T4, T5]>;
  all<T1, T2, T3, T4, T5, T6>(calls: [
    Call<T1>,
    Call<T2>,
    Call<T3>,
    Call<T4>,
    Call<T5>,
    Call<T6>,
  ]): Promise<[T1, T2, T3, T4, T5, T6]>;
  all<T1, T2, T3, T4, T5, T6, T7>(calls: [
    Call<T1>,
    Call<T2>,
    Call<T3>,
    Call<T4>,
    Call<T5>,
    Call<T6>,
    Call<T7>,
  ]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
  all<T1, T2, T3, T4, T5, T6, T7, T8>(calls: [
    Call<T1>,
    Call<T2>,
    Call<T3>,
    Call<T4>,
    Call<T5>,
    Call<T6>,
    Call<T7>,
    Call<T8>,
  ]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
  all<T>(calls: Call<T>[], block?: BlockTag): Promise<T[]>;
}
