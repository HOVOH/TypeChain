import TypechainEthers from '@hovoh/typechain-ethers-v5'
import { FACTORY_POSTFIX } from '@hovoh/typechain-ethers-v5/dist/common'
import { join } from 'path'
import { BytecodeWithLinkReferences, CodegenConfig, Contract, FileDescription, parseContractPath } from 'typechain'
import { uniqBy } from 'lodash'

import { codegenAbstractContractFactory, codegenContractTypings, codegenContractFactory } from './codegen'
import { readFileSync } from 'fs'

export default class EthersMulticall extends TypechainEthers {
  override name = 'EthersMulticall'

  override genContractTypingsFile(contract: Contract, codegenConfig: CodegenConfig): FileDescription {
    return {
      path: join(this.outDirAbs, ...contract.path, `${contract.name}.ts`),
      contents: codegenContractTypings(contract, codegenConfig),
    }
  }

  override genContractFactoryFile(contract: Contract, abi: any, bytecode?: BytecodeWithLinkReferences) {
    return {
      path: join(this.outDirAbs, 'factories', ...contract.path, `${contract.name}${FACTORY_POSTFIX}.ts`),
      contents: codegenContractFactory(this.cfg.flags, contract, abi, bytecode),
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

  override afterRun(): FileDescription[] {
    let allFiles = super.afterRun();
    allFiles = allFiles.map((file) => {
      if (file.path.includes("common.ts")){
        return ({
          path: join(this.outDirAbs, 'common.ts'),
            contents: readFileSync(join(__dirname, '../static/common.ts'), 'utf-8'),
        })
      }
      return file;
    })
    return allFiles;
  }

}

function createRootIndexContent(rootIndexes: FileDescription[], paths: string[]) {
  const contracts: { path: string[]; name: string }[] = paths.map(parseContractPath)
  const rootReexports = uniqBy(Object.values(contracts), (c) => c.name).flatMap((c) => {
    const path = c.path.length === 0 ? c.name : `${c.path.join('/')}/${c.name}`
    return [
      `export type { ${c.name} } from './${path}';`,
      `export { ${c.name}${FACTORY_POSTFIX} } from './factories/${path}${FACTORY_POSTFIX}';`,
    ]
  })

  const rootIndexContent = new Set([
    ...rootIndexes[0].contents.split('\n'),
    ...rootIndexes[1].contents.split('\n'),
    ...rootReexports,
  ])

  return [...rootIndexContent].join('\n')
}
