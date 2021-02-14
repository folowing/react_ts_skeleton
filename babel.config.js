module.exports = function(api) {
  api.cache(true);

  const presets = [
    ['@babel/env', { modules: false, useBuiltIns: 'usage', corejs: 3 }],
    '@babel/typescript',
    '@babel/react',
  ];

  const plugins = [
    ['@babel/plugin-transform-runtime', { useESModules: true }],
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-classes', { loose: true }],
    ['@babel/plugin-transform-template-literals', { loose: true }],
    ['lodash'],
  ];

  return { presets, plugins };
};
