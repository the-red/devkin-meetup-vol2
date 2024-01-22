// @ts-check

/**
 * @type {import('./goqoo.config.types').Config}
 */
const config = {
  bundlerType: 'default',
  dtsGen: {
    env: 'development',
    // skip: ['customer'],
  },
  environments: [
    {
      env: 'development',
      host: 'the-red.cybozu.com',
      auth: { type: 'apiToken' },
      // auth: { type: 'oauth' },
      appId: {
        project: 235,
        customer: 236,
        sales_activity: 237,
      },
    },
    {
      env: 'staging',
      host: 'the-red.cybozu.com',
      auth: { type: 'apiToken' },
      // auth: { type: 'oauth' },
      appId: {
        project: 238,
        customer: 239,
        sales_activity: 240,
      },
    },
    {
      env: 'production',
      host: 'the-red.cybozu.com',
      auth: { type: 'apiToken' },
      // auth: { type: 'oauth' },
      appId: {
        project: 241,
        customer: 242,
        sales_activity: 243,
      },
    },
  ],
}
module.exports = config
