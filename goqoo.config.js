// @ts-check

/**
 * @type {import('./goqoo.config.types').ExternalApi}
 */
const externalApi = {
  proxyConfigPluginId: 'dchfilgefeikgiemdongclkghfopbjhc',
  kintone: {
    recordsGet: {
      url: 'https://the-red.cybozu.com/k/v1/records.json',
      method: 'GET',
    },
    recordsPut: {
      url: 'https://the-red.cybozu.com/k/v1/records.json',
      method: 'PUT',
    },
    commentPost: {
      url: 'https://the-red.cybozu.com/k/v1/record/comment.json',
      method: 'POST',
    },
  },
}

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
      externalApi,
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
      externalApi,
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
      externalApi,
    },
  ],
}
module.exports = config
