const dayjs = require('dayjs');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    outputDir: 'dist',
    chainWebpack: config => {
        config
            .plugin('define')
            .tap(args => {
                const env = args[0]['process.env'];
                env.VUE_APP_TIME = JSON.stringify(new Date().toLocaleString());
                console.log(``);
                console.log(`打包环境:`, env.VUE_APP_ENV_NAME);
                console.log(`系统版本:`, env.VUE_APP_VERSION);
                console.log(`打包时间:`, env.VUE_APP_TIME);
                return args
            });
        config
            .when(process.env.NODE_ENV === 'production', config => {
                config
                    .plugin('filemanager')
                    .use(FileManagerPlugin,[{
                        onEnd: {
                            delete: [
                                `./${process.env.VUE_APP_PROJECT_NAME}*.zip`,
                            ],
                            archive: [
                                {
                                    source: './dist',
                                    destination: `./${process.env.VUE_APP_PROJECT_NAME}-${dayjs().format('YYYYMMDDHHmm')}.zip`
                                }
                            ]
                        }
                    }])
            });
        config.resolve.alias
            .set('@', resolve('src')); // key,value自行定义，比如.set('@@', resolve('src/components'))

    },
    productionSourceMap: false
};
