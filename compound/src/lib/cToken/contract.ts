import Web3 from 'web3'
import { cToken, cETH } from '@spec.types/compound'
import addresses from './addresses'
import { AbiItem } from 'web3-utils'
import config from '../../config'

const web3 = new Web3(config.ALCHEMY_ETH_WS_URL)

function createContract(id: string): cToken.CToken | cETH.CETH {
    const address = addresses[id]
    if (!address) throw `No address for cToken ${id}`

    if (id === 'cETH') {
        const contract = new web3.eth.Contract(cETH.abi as AbiItem[], address)
        const cETHContract = contract.methods as unknown as cETH.CETH
        cETHContract.address = address
        return cETHContract
    }

    const contract = new web3.eth.Contract(cToken.abi as AbiItem[], address)
    const cTokenContract = contract.methods as unknown as cToken.CToken
    cTokenContract.address = address
    return cTokenContract
}

export default createContract
