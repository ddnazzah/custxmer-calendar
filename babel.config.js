module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    // This needs to be mirrored in tsconfig.json
                    '@src': '/src',
                    '@components': './src/_shared/components',
                    '@shared': './src/_shared',
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
};
