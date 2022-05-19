const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@ui': 'src/components/UI',
        '@utils': 'src/utils',
        '@constants': 'src/constants',
        '@services': 'src/services',
        '@hoc-helpers': 'src/hoc-helpers',
        '@containers': 'src/containers',
        '@routes': 'src/routes',
        '@hooks': 'src/hooks',
        '@store': 'src/store',
    })(config)
    return config;
}