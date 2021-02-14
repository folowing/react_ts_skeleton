module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'number-no-trailing-zeros': null,
    'color-hex-length': 'long',
    'color-hex-case': 'upper',
    // rpx
    // 'unit-no-unknown': [
    //   true,
    //   {
    //     ignoreUnits: [/rpx/i],
    //   },
    // ],
    // cover-image, cover-view等自定义标签
    // 'selector-type-no-unknown': [
    //   true,
    //   { ignore: ['custom-elements', 'default-namespace'] },
    // ],
    // 去掉下面这个就没有属性分组的空行
    'declaration-empty-line-before': [
      'never',
      {
        ignore: 'after-declaration',
      },
    ],
    // 'custom-property-empty-line-before': 'always',
    // 块与块之间的空行
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment'],
      },
    ],
    'order/properties-order': [
      [
        {
          groupName: 'position',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'position',
            'z-index',
            'top',
            'bottom',
            'left',
            'right',
            'margin',
            'margin-top',
            'margin-bottom',
            'margin-left',
            'margin-right',
            'align-self',
          ],
        },
        {
          groupName: 'dimensions',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'width',
            'height',
            'min-height',
            'min-width',
            'max-width',
            'max-height',
            'flex',
            'flex-shrink'
          ],
        },
        {
          groupName: 'look',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'background',
            'background-color',
            'opacity',
            'border',
            'border-top',
            'border-bottom',
            'border-left',
            'border-right',
            'border-color',
            'border-radius',
            'box-shadow',
          ],
        },
        {
          groupName: 'sub elements layout',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'display',
            'flex-direction',
            'align-items',
            'justify-content',
            'text-align',
            'vertical-align',
            'padding',
            'padding-top',
            'padding-bottom',
            'padding-left',
            'padding-right',
            'overflow',
          ],
        },
        {
          groupName: 'font',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'color',
            'font-family',
            'font-size',
            'font-weight',
            'line-height',
          ],
        },
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
  },
};
