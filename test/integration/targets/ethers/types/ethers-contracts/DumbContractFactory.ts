/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { DumbContract } from "./DumbContract";

export class DumbContractFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(initialCounter: BigNumberish): Promise<DumbContract> {
    return super.deploy(initialCounter) as Promise<DumbContract>;
  }
  getDeployTransaction(initialCounter: BigNumberish): UnsignedTransaction {
    return super.getDeployTransaction(initialCounter);
  }
  attach(address: string): DumbContract {
    return super.attach(address) as DumbContract;
  }
  connect(signer: Signer): DumbContractFactory {
    return super.connect(signer) as DumbContractFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DumbContract {
    return new Contract(address, _abi, signerOrProvider) as DumbContract;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "arrayParamLength",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "countupForEther",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "someAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "",
        type: "uint8",
      },
      {
        name: "",
        type: "uint8",
      },
      {
        name: "ret",
        type: "uint256",
      },
    ],
    name: "twoUnnamedArgs",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "offset",
        type: "int256",
      },
    ],
    name: "returnSigned",
    outputs: [
      {
        name: "",
        type: "int256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "boolParam",
        type: "bool",
      },
    ],
    name: "callWithBoolean",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "arrayParam",
        type: "uint256[]",
      },
    ],
    name: "callWithArray2",
    outputs: [
      {
        name: "",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "address",
      },
    ],
    name: "testAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "counter",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "string",
      },
    ],
    name: "testString",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "byteParam",
        type: "bytes32",
      },
    ],
    name: "callWithBytes",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "boolArrayParam",
        type: "bool[]",
      },
    ],
    name: "callWithBooleanArray",
    outputs: [
      {
        name: "",
        type: "bool[]",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "counterArray",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "offset",
        type: "uint256",
      },
    ],
    name: "countup",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "returnAll",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "SOME_VALUE",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "offset",
        type: "uint256",
      },
    ],
    name: "counterWithOffset",
    outputs: [
      {
        name: "sum",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "dynamicByteArray",
    outputs: [
      {
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "testVoidReturn",
    outputs: [],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "testSmallUint",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "dynamicBytes",
        type: "bytes",
      },
    ],
    name: "callWithDynamicByteArray",
    outputs: [
      {
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "byteArray",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "arrayParam",
        type: "uint256[]",
      },
    ],
    name: "callWithArray",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "returnSmallUint",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        name: "initialCounter",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051602080610e34833981018060405281019080805190602001909291905050508060008190555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610da98061008b6000396000f30060806040526004361061013e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301989d4314610143578063144e61da1461016e57806318e5f16b14610178578063323e4406146101cf578063385980701461021d5780633bf9ed311461025e5780633dfc6471146102a557806342f457901461036057806361bc221a146103e357806361cb5a011461040e5780636813441f146104f05780637074ce581461053d57806370a5ae35146105f85780637916df081461063957806385b1423e146106665780638dbf1f28146106985780638e095299146106c757806397bc19cf14610708578063c15a2dcd14610798578063d422654f146107af578063d91a6347146107e0578063dad2718d146108c2578063e65d5abe146108f5578063f1cb2e021461096f575b600080fd5b34801561014f57600080fd5b506101586109a0565b6040518082815260200191505060405180910390f35b6101766109a6565b005b34801561018457600080fd5b5061018d610a33565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610207600480360381019080803560ff169060200190929190803560ff16906020019092919080359060200190929190505050610a59565b6040518082815260200191505060405180910390f35b34801561022957600080fd5b5061024860048036038101908080359060200190929190505050610a65565b6040518082815260200191505060405180910390f35b34801561026a57600080fd5b5061028b600480360381019080803515159060200190929190505050610a6f565b604051808215151515815260200191505060405180910390f35b3480156102b157600080fd5b5061030960048036038101908080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050610a7c565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561034c578082015181840152602081019050610331565b505050509050019250505060405180910390f35b34801561036c57600080fd5b506103a1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a86565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103ef57600080fd5b506103f8610a90565b6040518082815260200191505060405180910390f35b34801561041a57600080fd5b50610475600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610a96565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104b557808201518184015260208101905061049a565b50505050905090810190601f1680156104e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104fc57600080fd5b5061051f6004803603810190808035600019169060200190929190505050610aa0565b60405180826000191660001916815260200191505060405180910390f35b34801561054957600080fd5b506105a160048036038101908080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050610ab7565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105e45780820151818401526020810190506105c9565b505050509050019250505060405180910390f35b34801561060457600080fd5b5061062360048036038101908080359060200190929190505050610ac4565b6040518082815260200191505060405180910390f35b34801561064557600080fd5b5061066460048036038101908080359060200190929190505050610ae7565b005b34801561067257600080fd5b5061067b610b27565b604051808381526020018281526020019250505060405180910390f35b3480156106a457600080fd5b506106ad610b3f565b604051808215151515815260200191505060405180910390f35b3480156106d357600080fd5b506106f260048036038101908080359060200190929190505050610b44565b6040518082815260200191505060405180910390f35b34801561071457600080fd5b5061071d610b52565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561075d578082015181840152602081019050610742565b50505050905090810190601f16801561078a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156107a457600080fd5b506107ad610bf0565b005b3480156107bb57600080fd5b506107c4610bf2565b604051808260ff1660ff16815260200191505060405180910390f35b3480156107ec57600080fd5b50610847600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610bfb565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561088757808201518184015260208101905061086c565b50505050905090810190601f1680156108b45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156108ce57600080fd5b506108d7610cb6565b60405180826000191660001916815260200191505060405180910390f35b34801561090157600080fd5b5061095960048036038101908080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050610cbc565b6040518082815260200191505060405180910390f35b34801561097b57600080fd5b50610984610ccf565b604051808260ff1660ff16815260200191505060405180910390f35b60035481565b346000808282540192505081905550600160005490806001815401808255809150509060018203906000526020600020016000909192909190915055503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040518082815260200191505060405180910390a2565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008190509392505050565b6000819050919050565b6000819150819050919050565b6060819050919050565b6000819050919050565b60005481565b6060819050919050565b600081600481600019169055506004549050919050565b6060819150819050919050565b600181815481101515610ad357fe5b906000526020600020016000915090505481565b8060008082825401925050819055506001600054908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b600080600054610b376005610b44565b915091509091565b600181565b600081600054019050919050565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610be85780601f10610bbd57610100808354040283529160200191610be8565b820191906000526020600020905b815481529060010190602001808311610bcb57829003601f168201915b505050505081565b565b60006005905090565b60608160059080519060200190610c13929190610cd8565b5060058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610caa5780601f10610c7f57610100808354040283529160200191610caa565b820191906000526020600020905b815481529060010190602001808311610c8d57829003601f168201915b50505050509050919050565b60045481565b6000815160038190555081519050919050565b60006012905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d1957805160ff1916838001178555610d47565b82800160010185558215610d47579182015b82811115610d46578251825591602001919060010190610d2b565b5b509050610d549190610d58565b5090565b610d7a91905b80821115610d76576000816000905550600101610d5e565b5090565b905600a165627a7a72305820a7b051b7eab8fd5120b4a47ac2f5d08f2b0197fa39035b272c10be9da2b5f7270029";
