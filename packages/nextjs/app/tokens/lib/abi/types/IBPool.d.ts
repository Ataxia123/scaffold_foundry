/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IBPoolInterface extends ethers.utils.Interface {
  functions: {
    "bind(address,uint256,uint256)": FunctionFragment;
    "getBalance(address)": FunctionFragment;
    "getCurrentTokens()": FunctionFragment;
    "getDenormalizedWeight(address)": FunctionFragment;
    "getSwapFee()": FunctionFragment;
    "getTotalDenormalizedWeight()": FunctionFragment;
    "gulp(address)": FunctionFragment;
    "isBound(address)": FunctionFragment;
    "isPublicSwap()": FunctionFragment;
    "rebind(address,uint256,uint256)": FunctionFragment;
    "setPublicSwap(bool)": FunctionFragment;
    "setSwapFee(uint256)": FunctionFragment;
    "swapExactAmountIn(address,uint256,address,uint256,uint256)": FunctionFragment;
    "unbind(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bind",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getBalance", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getCurrentTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDenormalizedWeight",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalDenormalizedWeight",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gulp", values: [string]): string;
  encodeFunctionData(functionFragment: "isBound", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isPublicSwap",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rebind",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPublicSwap",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactAmountIn",
    values: [string, BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unbind", values: [string]): string;

  decodeFunctionResult(functionFragment: "bind", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDenormalizedWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSwapFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalDenormalizedWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gulp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isBound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPublicSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rebind", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPublicSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setSwapFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapExactAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unbind", data: BytesLike): Result;

  events: {};
}

export class IBPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IBPoolInterface;

  functions: {
    bind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "bind(address,uint256,uint256)"(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBalance(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "getBalance(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCurrentTokens(
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    "getCurrentTokens()"(
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    getDenormalizedWeight(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getDenormalizedWeight(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSwapFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getSwapFee()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalDenormalizedWeight(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getTotalDenormalizedWeight()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    gulp(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "gulp(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isBound(token: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isBound(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPublicSwap(overrides?: CallOverrides): Promise<[boolean]>;

    "isPublicSwap()"(overrides?: CallOverrides): Promise<[boolean]>;

    rebind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "rebind(address,uint256,uint256)"(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPublicSwap(
      publicSwap: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setPublicSwap(bool)"(
      publicSwap: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSwapFee(
      swapFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setSwapFee(uint256)"(
      swapFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactAmountIn(
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      tokenOut: string,
      minAmountOut: BigNumberish,
      maxPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "swapExactAmountIn(address,uint256,address,uint256,uint256)"(
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      tokenOut: string,
      minAmountOut: BigNumberish,
      maxPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unbind(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unbind(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bind(
    token: string,
    balance: BigNumberish,
    denorm: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "bind(address,uint256,uint256)"(
    token: string,
    balance: BigNumberish,
    denorm: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getBalance(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrentTokens(overrides?: CallOverrides): Promise<string[]>;

  "getCurrentTokens()"(overrides?: CallOverrides): Promise<string[]>;

  getDenormalizedWeight(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getDenormalizedWeight(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSwapFee(overrides?: CallOverrides): Promise<BigNumber>;

  "getSwapFee()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalDenormalizedWeight(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalDenormalizedWeight()"(overrides?: CallOverrides): Promise<BigNumber>;

  gulp(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "gulp(address)"(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isBound(token: string, overrides?: CallOverrides): Promise<boolean>;

  "isBound(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPublicSwap(overrides?: CallOverrides): Promise<boolean>;

  "isPublicSwap()"(overrides?: CallOverrides): Promise<boolean>;

  rebind(
    token: string,
    balance: BigNumberish,
    denorm: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "rebind(address,uint256,uint256)"(
    token: string,
    balance: BigNumberish,
    denorm: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPublicSwap(
    publicSwap: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setPublicSwap(bool)"(
    publicSwap: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSwapFee(
    swapFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setSwapFee(uint256)"(
    swapFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactAmountIn(
    tokenIn: string,
    tokenAmountIn: BigNumberish,
    tokenOut: string,
    minAmountOut: BigNumberish,
    maxPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "swapExactAmountIn(address,uint256,address,uint256,uint256)"(
    tokenIn: string,
    tokenAmountIn: BigNumberish,
    tokenOut: string,
    minAmountOut: BigNumberish,
    maxPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unbind(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unbind(address)"(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "bind(address,uint256,uint256)"(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getBalance(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentTokens(overrides?: CallOverrides): Promise<string[]>;

    "getCurrentTokens()"(overrides?: CallOverrides): Promise<string[]>;

    getDenormalizedWeight(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDenormalizedWeight(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapFee(overrides?: CallOverrides): Promise<BigNumber>;

    "getSwapFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalDenormalizedWeight(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalDenormalizedWeight()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gulp(token: string, overrides?: CallOverrides): Promise<void>;

    "gulp(address)"(token: string, overrides?: CallOverrides): Promise<void>;

    isBound(token: string, overrides?: CallOverrides): Promise<boolean>;

    "isBound(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPublicSwap(overrides?: CallOverrides): Promise<boolean>;

    "isPublicSwap()"(overrides?: CallOverrides): Promise<boolean>;

    rebind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "rebind(address,uint256,uint256)"(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPublicSwap(
      publicSwap: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPublicSwap(bool)"(
      publicSwap: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapFee(swapFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setSwapFee(uint256)"(
      swapFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactAmountIn(
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      tokenOut: string,
      minAmountOut: BigNumberish,
      maxPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokenAmountOut: BigNumber;
        spotPriceAfter: BigNumber;
      }
    >;

    "swapExactAmountIn(address,uint256,address,uint256,uint256)"(
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      tokenOut: string,
      minAmountOut: BigNumberish,
      maxPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tokenAmountOut: BigNumber;
        spotPriceAfter: BigNumber;
      }
    >;

    unbind(token: string, overrides?: CallOverrides): Promise<void>;

    "unbind(address)"(token: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    bind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "bind(address,uint256,uint256)"(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getBalance(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentTokens(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrentTokens()"(overrides?: CallOverrides): Promise<BigNumber>;

    getDenormalizedWeight(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDenormalizedWeight(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapFee(overrides?: CallOverrides): Promise<BigNumber>;

    "getSwapFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalDenormalizedWeight(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalDenormalizedWeight()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gulp(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "gulp(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isBound(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isBound(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPublicSwap(overrides?: CallOverrides): Promise<BigNumber>;

    "isPublicSwap()"(overrides?: CallOverrides): Promise<BigNumber>;

    rebind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "rebind(address,uint256,uint256)"(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPublicSwap(
      publicSwap: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setPublicSwap(bool)"(
      publicSwap: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSwapFee(
      swapFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setSwapFee(uint256)"(
      swapFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactAmountIn(
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      tokenOut: string,
      minAmountOut: BigNumberish,
      maxPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "swapExactAmountIn(address,uint256,address,uint256,uint256)"(
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      tokenOut: string,
      minAmountOut: BigNumberish,
      maxPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unbind(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unbind(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "bind(address,uint256,uint256)"(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBalance(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBalance(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCurrentTokens()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDenormalizedWeight(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDenormalizedWeight(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getSwapFee()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalDenormalizedWeight(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalDenormalizedWeight()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gulp(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "gulp(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isBound(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBound(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPublicSwap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isPublicSwap()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebind(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "rebind(address,uint256,uint256)"(
      token: string,
      balance: BigNumberish,
      denorm: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPublicSwap(
      publicSwap: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setPublicSwap(bool)"(
      publicSwap: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSwapFee(
      swapFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setSwapFee(uint256)"(
      swapFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactAmountIn(
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      tokenOut: string,
      minAmountOut: BigNumberish,
      maxPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "swapExactAmountIn(address,uint256,address,uint256,uint256)"(
      tokenIn: string,
      tokenAmountIn: BigNumberish,
      tokenOut: string,
      minAmountOut: BigNumberish,
      maxPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unbind(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unbind(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
