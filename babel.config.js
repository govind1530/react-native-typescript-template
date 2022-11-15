module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          'jsx',
          '.android.js',
          '.ios.js',
          '.json',
          '.native',
        ],
        alias: {
          app: './src/App.tsx',
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          controllers: './src/controllers',
          navigation: './src/navigations',
          screens: './src/screens/index.ts',
          utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
