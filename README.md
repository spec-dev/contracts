import { cToken } from '@spec.contracts/compound'

const { data: supplyRatePerBlock, error } = await cToken('cDAI').supplyRatePerBlock()

