type KintoneEvent = {
  appId: number
  type: string
  error?: string
}

export type IndexEvent<T> = KintoneEvent & {
  records: T[]
  viewType: 'list' | 'calendar' | 'custom'
  viewId: number
  viewName: string
  offset: number | null
  size: number | null
  date: string | null
}

export type DetailEvent<T> = KintoneEvent & {
  record: T
  recordId: number
  reuse?: boolean
}

export type CustomerRecord = kintone.types.SavedCustomerFields
export type ProjectRecord = kintone.types.SavedProjectFields
export type SalesActivityRecord = kintone.types.SavedSalesActivityFields
