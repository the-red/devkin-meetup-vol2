import { context } from 'context'
import type { DetailEvent, SalesActivityRecord } from 'types'

type KintoneProxyResponse = [string, number, Record<string, string>]
type KintoneApiResponse<T> = { records: T[] }

// PluginProxy経由で任意のAPIリクエストをする関数
const fetchViaPluginProxy = async <T>({
  pluginId,
  url,
  method,
  headers: reqHeaders = {},
  body: reqBody = {},
}: {
  pluginId: string
  url: string
  method: string
  headers?: Record<string, string>
  body?: any
}): Promise<T> => {
  const [resBody, resStatus, resHeaders] = (await kintone.plugin.app.proxy(
    pluginId,
    url,
    method,
    reqHeaders,
    reqBody
  )) as KintoneProxyResponse
  if (resStatus !== 200) {
    console.error(resBody, resHeaders)
    throw new Error(resBody)
  }
  return JSON.parse(resBody)
}

kintone.events.on(['app.record.create.show', 'app.record.edit.show', 'app.record.index.edit.show'], async (event) => {
  // 活動履歴IDは自動採番なので編集不可にする
  event.record.活動履歴ID.disabled = true
  return event
})

const numbering = async (event: DetailEvent<SalesActivityRecord>) => {
  try {
    // 活動履歴IDの最新値を取得（自分にレコードアクセス権がないレコードもAPIトークンで取得する）
    const appId = kintone.app.getId()
    const query = 'order by 活動履歴ID desc limit 1'
    const fields = `fields[0]=活動履歴ID`
    const params = `?app=${appId}&query=${encodeURIComponent(query)}&${fields}`
    const latestRecord = await fetchViaPluginProxy<KintoneApiResponse<SalesActivityRecord>>({
      pluginId: context.externalApi.proxyConfigPluginId,
      url: context.externalApi.kintone.recordsGet.url + params,
      method: context.externalApi.kintone.recordsGet.method,
    }).then((res) => res.records[0])

    // 採番してレコードに反映
    const latestNumber = Number(latestRecord?.活動履歴ID.value ?? 0)
    event.record.活動履歴ID.value = String(latestNumber + 1)
    return event
  } catch (e) {
    console.error(e)
    alert(`採番に失敗しました。`)
    return false
  }
}

kintone.events.on('app.record.create.submit', numbering)
kintone.events.on(['app.record.edit.submit', 'app.record.index.edit.submit'], numbering)
