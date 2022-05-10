const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@utils': 'src/utils',
        '@constants': 'src/constants',
        '@services': 'src/services',
        '@hoc-helpers': 'src/hoc-helpers',
        '@containers': 'src/containers',
        '@routes': 'src/routes',
    })(config)
    return config;
}