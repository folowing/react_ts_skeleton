const presets = [
  "@babel/env",
  "@babel/typescript",
  "@babel/react",
];

const plugins = [
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread",
  "@babel/plugin-transform-runtime",
  "@babel/plugin-syntax-dynamic-import",
];

module.exports = {presets, plugins};
