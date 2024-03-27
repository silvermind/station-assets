module.exports = {
  chainID: 'kava_2222-10',
  lcd: 'https://lcd-kava.tfl.foundation',
  gasAdjustment: 1.75,
  gasPrices: { ukava: 0.1 },
  prefix: 'kava',
  coinType: '459',
  baseAsset: 'ukava',
  name: 'Kava',
  icon: process.env.CF_PAGES_URL + '/img/chains/Kava.svg',
  // used by Station to decide which endpoint to use
  version: '0.46',
  channels: {
    'celestia': 'channel-140',
    'cosmoshub-4': 'channel-0',
    'dydx-mainnet-1': 'channel-137',
    'injective-1': 'channel-122',
    'kaiyo-1': 'channel-116',
    'migaloo-1': 'channel-120',
    'neutron-1': 'channel-136',
    'osmosis-1': 'channel-1',
    'pacific-1': 'channel-132',
    'phoenix-1': 'channel-138',
    'akashnet-2': 'channel-5',
  },
  explorer: {
    address: 'https://www.mintscan.io/kava/account/{}',
    tx: 'https://www.mintscan.io/kava/txs/{}',
    validator: 'https://www.mintscan.io/kava/validators/{}',
    block: 'https://www.mintscan.io/kava/blocks/id/{}',
  },
  tokens: [
    {
      token: 'ukava',
      symbol: 'KAVA',
      name: 'Kava',
      icon: process.env.CF_PAGES_URL + '/img/coins/Kava.svg',
      decimals: 6,
    },
    {
      token: 'erc20/tether/usdt',
      symbol: 'USDT',
      name: 'Tether USD',
      icon: process.env.CF_PAGES_URL + '/img/coins/USDT.svg',
      decimals: 6,
  },
    {
      token: 'hard',
      symbol: 'HARD',
      name: 'Kava Hard',
      icon: process.env.CF_PAGES_URL + '/img/coins/HARD.svg',
      decimals: 6,
    },
    {
      token: 'swp',
      symbol: 'SWP',
      name: 'Kava Swap',
      icon: process.env.CF_PAGES_URL + '/img/coins/SWP.svg',
      decimals: 6,
    },
    {
      token: 'usdx',
      symbol: 'USDX',
      name: 'USDX',
      icon: process.env.CF_PAGES_URL + '/img/coins/usdx.svg',
      decimals: 6,
  },
  ],
};
