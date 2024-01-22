const goqooConfig = require('./goqoo.config')

// goqoo.config.jsを利用しつつ一部ginueの仕様に変換
const env = Object.fromEntries(
  goqooConfig.environments.map((obj) => {
    const { host, appId, ...other } = obj
    return [
      obj.env,
      {
        domain: host,
        app: Object.fromEntries(Object.entries(appId).map(([appName, appId]) => [appName.toLowerCase(), appId])),
        ...other,
      },
    ]
  })
)

module.exports = {
  location: 'kintone-settings',
  alt: true,
  fileType: 'js',
  env,
  oauth: true,
}
