// Generated by ginue
module.exports = {
  layout: [
    {
      type: 'ROW',
      fields: [
        {
          type: 'LABEL',
          label: '<div><b><font color="#0b5394" size="4">顧客管理</font></b></div>',
          size: {
            width: '104',
          },
        },
      ],
    },
    {
      type: 'ROW',
      fields: [
        {
          type: 'RECORD_NUMBER',
          code: 'レコード番号',
          size: {
            width: '120',
          },
        },
        {
          type: 'CREATOR',
          code: '作成者',
          size: {
            width: '136',
          },
        },
        {
          type: 'CREATED_TIME',
          code: '作成日時',
          size: {
            width: '196',
          },
        },
        {
          type: 'MODIFIER',
          code: '更新者',
          size: {
            width: '136',
          },
        },
        {
          type: 'UPDATED_TIME',
          code: '更新日時',
          size: {
            width: '196',
          },
        },
      ],
    },
    {
      type: 'ROW',
      fields: [
        {
          type: 'SINGLE_LINE_TEXT',
          code: '顧客名',
          size: {
            width: '467',
          },
        },
        {
          type: 'SINGLE_LINE_TEXT',
          code: '部署名',
          size: {
            width: '193',
          },
        },
      ],
    },
    {
      type: 'ROW',
      fields: [
        {
          type: 'SINGLE_LINE_TEXT',
          code: '担当者名',
          size: {
            width: '321',
          },
        },
      ],
    },
    {
      type: 'ROW',
      fields: [
        {
          type: 'SINGLE_LINE_TEXT',
          code: '郵便番号',
          size: {
            width: '193',
          },
        },
        {
          type: 'SINGLE_LINE_TEXT',
          code: '住所',
          size: {
            width: '469',
          },
        },
      ],
    },
    {
      type: 'ROW',
      fields: [
        {
          type: 'LINK',
          code: 'TEL',
          size: {
            width: '182',
          },
        },
        {
          type: 'LINK',
          code: 'FAX',
          size: {
            width: '174',
          },
        },
        {
          type: 'LINK',
          code: 'メールアドレス',
          size: {
            width: '308',
          },
        },
      ],
    },
    {
      type: 'ROW',
      fields: [
        {
          type: 'MULTI_LINE_TEXT',
          code: '備考',
          size: {
            width: '662',
            innerHeight: '84',
          },
        },
      ],
    },
    {
      type: 'ROW',
      fields: [
        {
          type: 'REFERENCE_TABLE',
          code: '案件一覧',
        },
      ],
    },
    {
      type: 'ROW',
      fields: [
        {
          type: 'REFERENCE_TABLE',
          code: '活動履歴',
        },
      ],
    },
  ],
}
