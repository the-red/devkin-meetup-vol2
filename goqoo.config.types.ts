import type { Auth, Config as _Config } from 'goqoo'

export type Env = 'development' | 'staging' | 'production'

export type AppId = {
  project: number // 案件管理
  customer: number // 顧客管理
  sales_activity: number // 活動履歴
}

export type ExternalApi = {
  proxyConfigPluginId: string
  kintone: {
    recordsGet: { url: string; method: 'GET' }
  }
}

export type Context = {
  env: Env
  host: string
  appId: AppId
  auth: Auth
  externalApi: ExternalApi
}

export type Config = _Config<Env, Context>
