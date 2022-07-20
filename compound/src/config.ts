import { getEnvVar } from '@spec.dev/utils'

export default {
    ALCHEMY_ETH_REST_URL: `wss://eth-mainnet.g.alchemy.com/v2/${getEnvVar('ALCHEMY_API_KEY')}`,
}
