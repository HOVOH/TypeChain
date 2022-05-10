import TypechainEthers from '@typechain/ethers-v5'
import { FACTORY_POSTFIX } from '@typechain/ethers-v5/dist/common'
import { join } from 'path'
import { CodegenConfig, Contract, FileDescription } from 'typechain'

import { codegenAbstractContractFactory, codegenContractTypings } from './codegen'

export default class EthersMulticall extends TypechainEthers {
  override name = 'EthersMulticall'

  override genContractTypingsFile(contract: Contract, codegenConfig: CodegenConfig): FileDescription {
    return {
      path: join(this.outDirAbs, ...contract.path, `${contract.name}.ts`),
      contents: codegenContractTypings(contract, codegenConfig),
    }
  }

  override getAbstractFactoryFiles() {
    return Object.keys(this.contractsWithoutBytecode).map((contractName) => {
      const { contract, abi } = this.contractsWithoutBytecode[contractName]!
      return {
        path: join(this.outDirAbs, 'factories', ...contract.path, `${contract.name}${FACTORY_POSTFIX}.ts`),
        contents: codegenAbstractContractFactory(contract, abi),
      }
    })
  }

}

