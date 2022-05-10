import {
  codegenCommonContractFactory,
  generateContractTypesBody,
  generateFactoryConstructor,
  generateFactoryConstructorParamsAlias, } from '@hovoh/typechain-ethers-v5/dist/codegen'
import {
  EVENT_IMPORTS,
} from '@hovoh/typechain-ethers-v5/dist/codegen/events'
import {
  codegenFunctions,
  generateParamNames,
} from '@hovoh/typechain-ethers-v5/dist/codegen/functions'
import { reservedKeywords } from '@hovoh/typechain-ethers-v5/dist/codegen/reserved-keywords'
import { generateInputTypes, generateOutputTypes } from '@hovoh/typechain-ethers-v5/dist/codegen/types'
import { FACTORY_POSTFIX } from '@hovoh/typechain-ethers-v5/dist/common'
import { values } from 'lodash'
import {
  BytecodeWithLinkReferences,
  CodegenConfig,
  Contract,
  createImportsForUsedIdentifiers,
  createImportTypeDeclaration,
} from 'typechain'

export function codegenContractTypings(contract: Contract, codegenConfig: CodegenConfig) {
  const ethersSource = generateContractTypesBody(contract, codegenConfig);

  const source = `
  ${ethersSource}

  export interface ${contract.name}Multicall {
    address: string;
    abi: Fragment[];
    functions: FunctionFragment[];

    ${
      values(contract.functions)
        .filter((f) => f[0].stateMutability === "view" || f[0].stateMutability === "pure")
        .filter((f) => !reservedKeywords.has(f[0].name))
        .map((f) => codegenFunctions(
          {
            codegenConfig,
            overrideOutput:
              `ContractCall<${generateOutputTypes(
                {
                  useStructs: true
                },
                f[0].outputs)}>`
          },
          f))
        .join('\n')
    }
  }`

  const commonPath = contract.path.length
    ? `${new Array(contract.path.length).fill('..').join('/')}/common`
    : './common'

  const imports =
    createImportsForUsedIdentifiers(
      {
        'type ethers': [
          'BaseContract',
          'BigNumber',
          'BigNumberish',
          'BytesLike',
          'CallOverrides',
          'ContractTransaction',
          'Overrides',
          'PayableOverrides',
          'PopulatedTransaction',
          'Signer',
          'utils',
        ],
        'type @ethersproject/abi': ['Fragment', 'FunctionFragment', 'Result', 'EventFragment'],
        'type @ethersproject/providers': ['Listener', 'Provider'],
        'type @hovoh/ethers-multicall': ['ContractCall']
      },
      source,
    ) +
    '\n' +
    createImportTypeDeclaration(EVENT_IMPORTS, commonPath)

  return imports + source;
}

export function codegenContractFactory(
  codegenConfig: CodegenConfig,
  contract: Contract,
  abi: any,
  bytecode?: BytecodeWithLinkReferences,
): string {
  const constructorArgs =
    `${contract.constructor[0] ? generateInputTypes(contract.constructor[0].inputs, { useStructs: true }) : ''} overrides?: ${
      contract.constructor[0]?.stateMutability === 'payable'
        ? 'PayableOverrides & { from?: string | Promise<string> }'
        : 'Overrides & { from?: string | Promise<string> }'
    }`
  const constructorArgNamesWithoutOverrides = contract.constructor[0]
    ? generateParamNames(contract.constructor[0].inputs)
    : ''
  const constructorArgNames = constructorArgNamesWithoutOverrides
    ? `${constructorArgNamesWithoutOverrides}, overrides || {}`
    : 'overrides || {}'
  if (!bytecode) return codegenAbstractContractFactory(contract, abi)

  // tsc with noUnusedLocals would complain about unused imports

  const { body, header } = codegenCommonContractFactory(contract, abi)

  const source = `
  ${header}

  const _bytecode = "${bytecode.bytecode}";

  ${generateFactoryConstructorParamsAlias(contract, bytecode)}

  export class ${contract.name}${FACTORY_POSTFIX} extends ContractFactory {
    ${generateFactoryConstructor(codegenConfig, contract, bytecode)}
    override deploy(${constructorArgs}): Promise<${contract.name}> {
      return super.deploy(${constructorArgNames}) as Promise<${contract.name}>;
    }
    override getDeployTransaction(${constructorArgs}): TransactionRequest {
      return super.getDeployTransaction(${constructorArgNames});
    };
    override attach(address: string): ${contract.name} {
      return super.attach(address) as ${contract.name};
    }
    override connect(signer: Signer): ${contract.name}${FACTORY_POSTFIX} {
      return super.connect(signer) as ${contract.name}${FACTORY_POSTFIX};
    }
    ${codegenConfig.discriminateTypes ? `static readonly contractName: '${contract.name}';\n` : ``}
    ${codegenConfig.discriminateTypes ? `public readonly contractName: '${contract.name}';\n` : ``}
    static readonly bytecode = _bytecode;
    ${body}
  }

  ${generateLibraryAddressesInterface(contract, bytecode)}
  `

  const imports = createImportsForUsedIdentifiers(
    {
      ethers: [
        'Signer',
        'utils',
        'Contract',
        'ContractFactory',
        'PayableOverrides',
        'BytesLike',
        'BigNumberish',
        'Overrides',
      ],
      'type @ethersproject/providers': ['Provider', 'TransactionRequest'],
    },
    source,
  )

  return imports + source
}

export function codegenAbstractContractFactory(contract: Contract, abi: any): string {
  const { body } = codegenCommonContractFactory(contract, abi);
  const imports: Set<string> = new Set([contract.name, contract.name + 'Interface', contract.name + 'Multicall'])
  const contractTypesImportPath = [...Array(contract.path.length + 1).fill('..'), ...contract.path, contract.name].join(
    '/',
  )
  const header = `
  import type { ${[...imports.values()].join(', ')} } from "${contractTypesImportPath}";

  const _abi = ${JSON.stringify(abi, null, 2)};
  `.trim()
  return `
  import type { Provider } from "@ethersproject/providers";
  import { Contract, Signer, utils } from "ethers";
  import { Contract as MulticallContract} from "@hovoh/ethers-multicall";
  ${header}

  export class ${contract.name}${FACTORY_POSTFIX} {
    ${body}

    static multicall(address: string): ${contract.name}Multicall {
      return new MulticallContract(address, _abi) as unknown as ${contract.name}Multicall;
    }
  }
  `
}

function generateLibraryAddressesInterface(contract: Contract, bytecode: BytecodeWithLinkReferences): string {
  if (!bytecode.linkReferences) return ''

  const linkLibrariesKeys = bytecode.linkReferences.map(
    (linkRef) => `    ["${linkRef.name || linkRef.reference}"]: string;`,
  )
  return `
  export interface ${contract.name}LibraryAddresses {
    ${linkLibrariesKeys.join('\n')}
  };`
}
