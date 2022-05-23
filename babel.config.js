const plugins = [
  ['import', {
    libraryName: 'vant',
    libraryDirectory: 'es',
    style: true
  }, 'vant'],
  [
    'component',
    {
      'libraryName': 'element-ui',
      'styleLibraryName': 'theme-chalk'
    }
  ]
]


module.exports = {
  exclude: [
    /node_modules/
  ],
  presets: [
    [
      // 转换es6等新特性代码
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需引入ployfill
        corejs: 3,
        'modules': false
      }
    ]
  ],
  plugins: plugins
}
