const presets = [
  "@babel/env",
  "@babel/typescript",
  "@babel/react",
];

const plugins = [
  // typescript
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread",

  // dynamic import
  "@babel/plugin-transform-runtime",
  "@babel/plugin-syntax-dynamic-import",
];

module.exports = {presets, plugins};