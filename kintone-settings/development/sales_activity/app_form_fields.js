// Generated by ginue
module.exports = {
  properties: {
    カテゴリー: {
      type: 'CATEGORY',
      code: 'カテゴリー',
      label: 'カテゴリー',
      enabled: false,
    },
    ステータス: {
      type: 'STATUS',
      code: 'ステータス',
      label: 'ステータス',
      enabled: false,
    },
    レコード番号: {
      type: 'RECORD_NUMBER',
      code: 'レコード番号',
      label: 'レコード番号',
      noLabel: false,
    },
    作成日時: {
      type: 'CREATED_TIME',
      code: '作成日時',
      label: '作成日時',
      noLabel: false,
    },
    作成者: {
      type: 'CREATOR',
      code: '作成者',
      label: '作成者',
      noLabel: false,
    },
    作業者: {
      type: 'STATUS_ASSIGNEE',
      code: '作業者',
      label: '作業者',
      enabled: false,
    },
    商談メモ: {
      type: 'MULTI_LINE_TEXT',
      code: '商談メモ',
      label: '商談メモ',
      noLabel: false,
      required: false,
      defaultValue: '',
    },
    対応内容: {
      type: 'DROP_DOWN',
      code: '対応内容',
      label: '対応内容',
      noLabel: false,
      required: false,
      options: {
        問い合わせ: {
          label: '問い合わせ',
          index: '0',
        },
        ご挨拶: {
          label: 'ご挨拶',
          index: '1',
        },
        商談: {
          label: '商談',
          index: '2',
        },
        フェア: {
          label: 'フェア',
          index: '3',
        },
        セミナー: {
          label: 'セミナー',
          index: '4',
        },
        見積提示: {
          label: '見積提示',
          index: '5',
        },
        注文書回収: {
          label: '注文書回収',
          index: '6',
        },
        その他: {
          label: 'その他',
          index: '7',
        },
      },
      defaultValue: '',
    },
    対応日時: {
      type: 'DATE',
      code: '対応日時',
      label: '対応日時',
      noLabel: false,
      required: false,
      unique: false,
      defaultValue: '',
      defaultNowValue: true,
    },
    対応者: {
      type: 'USER_SELECT',
      code: '対応者',
      label: '対応者',
      noLabel: false,
      required: false,
      entities: [],
      defaultValue: [
        {
          type: 'FUNCTION',
          code: 'LOGINUSER()',
        },
      ],
    },
    担当者名: {
      type: 'SINGLE_LINE_TEXT',
      code: '担当者名',
      label: '担当者名',
      noLabel: false,
      required: false,
      minLength: '',
      maxLength: '',
      expression: '',
      hideExpression: false,
      unique: false,
      defaultValue: '',
    },
    更新日時: {
      type: 'UPDATED_TIME',
      code: '更新日時',
      label: '更新日時',
      noLabel: false,
    },
    更新者: {
      type: 'MODIFIER',
      code: '更新者',
      label: '更新者',
      noLabel: false,
    },
    案件名: {
      type: 'SINGLE_LINE_TEXT',
      code: '案件名',
      label: '案件名',
      noLabel: false,
      required: false,
      lookup: {
        relatedApp: {
          app: '235',
          code: '',
        },
        relatedKeyField: '案件名',
        fieldMappings: [
          {
            field: '案件管理レコード番号_関連レコード一覧紐付け用',
            relatedField: 'レコード番号',
          },
        ],
        lookupPickerFields: ['作成日時', '顧客名', '案件名'],
        filterCond: '',
        sort: 'レコード番号 desc',
      },
    },
    案件管理レコード番号_関連レコード一覧紐付け用: {
      type: 'NUMBER',
      code: '案件管理レコード番号_関連レコード一覧紐付け用',
      label: '案件管理レコード番号（関連レコード一覧紐付け用）',
      noLabel: false,
      required: false,
      minValue: '',
      maxValue: '',
      digit: false,
      unique: false,
      defaultValue: '',
      displayScale: '',
      unit: '',
      unitPosition: 'BEFORE',
    },
    案件詳細: {
      type: 'REFERENCE_TABLE',
      code: '案件詳細',
      label: '案件詳細',
      noLabel: false,
      referenceTable: {
        relatedApp: {
          app: '235',
          code: '',
        },
        condition: {
          field: '案件管理レコード番号_関連レコード一覧紐付け用',
          relatedField: 'レコード番号',
        },
        filterCond: '',
        displayFields: ['確度', '受注予定日', '提案プラン', 'オプション', '合計費用'],
        sort: 'レコード番号 desc',
        size: '5',
      },
    },
    添付ファイル: {
      type: 'FILE',
      code: '添付ファイル',
      label: '添付ファイル',
      noLabel: false,
      required: false,
      thumbnailSize: '150',
    },
    部署名: {
      type: 'SINGLE_LINE_TEXT',
      code: '部署名',
      label: '部署名',
      noLabel: false,
      required: false,
      minLength: '',
      maxLength: '',
      expression: '',
      hideExpression: false,
      unique: false,
      defaultValue: '',
    },
    顧客名: {
      type: 'SINGLE_LINE_TEXT',
      code: '顧客名',
      label: '顧客名',
      noLabel: false,
      required: false,
      lookup: {
        relatedApp: {
          app: '236',
          code: '',
        },
        relatedKeyField: '顧客名',
        fieldMappings: [
          {
            field: '担当者名',
            relatedField: '担当者名',
          },
          {
            field: '部署名',
            relatedField: '部署名',
          },
          {
            field: '顧客管理レコード番号_関連レコード一覧紐付け用',
            relatedField: 'レコード番号',
          },
        ],
        lookupPickerFields: ['顧客名', '部署名', '担当者名'],
        filterCond: '',
        sort: 'レコード番号 desc',
      },
    },
    顧客管理レコード番号_関連レコード一覧紐付け用: {
      type: 'NUMBER',
      code: '顧客管理レコード番号_関連レコード一覧紐付け用',
      label: '顧客管理レコード番号（関連レコード一覧紐付け用）',
      noLabel: false,
      required: false,
      minValue: '',
      maxValue: '',
      digit: false,
      unique: false,
      defaultValue: '',
      displayScale: '',
      unit: '',
      unitPosition: 'BEFORE',
    },
  },
}
