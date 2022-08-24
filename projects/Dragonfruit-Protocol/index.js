const { getUniTVL, staking, } = require('../helper/unknownTokens')

const chain = 'dogechain'
const DFRUIT = '0x2A3C691e08262aC2406aB9C3ee106C59Fff3E5ec'
const lps = ['0x0d76e72407e1aFD9cbE90d374df7780642286185']


module.exports = {
  misrepresentedTokens: true,
  dogechain: {
    tvl: getUniTVL({
      chain, useDefaultCoreAssets: true,
      factory: '0x4bddb586ddd8f05b5c229bc66f5d71ccb10e9a18',
    }),
    staking: staking({
      chain, useDefaultCoreAssets: true,
      tokens: [DFRUIT],
      lps,
     })
  }
}