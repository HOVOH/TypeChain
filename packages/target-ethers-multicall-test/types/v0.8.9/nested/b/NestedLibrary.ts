/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { Fragment, FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { ContractCall } from "@hovoh/ethers-multicall";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface NestedLibraryInterface extends utils.Interface {
  functions: {
    "getValue()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getValue"): FunctionFragment;

  encodeFunctionData(functionFragment: "getValue", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;

  events: {};
}

export interface NestedLibrary extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NestedLibraryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getValue(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getValue(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getValue(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getValue(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

export interface NestedLibraryMulticall {
  address: string;
  abi: Fragment[];
  functions: FunctionFragment[];

  getValue(overrides?: CallOverrides): ContractCall<BigNumber>;
}
