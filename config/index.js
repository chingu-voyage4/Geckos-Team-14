build: {
index: path.resolve(__dirname, '../docs/index.html'),
assetsRoot: path.resolve(__dirname, '../docs'),
assetsSubDirectory: 'static',
assetsPublicPath: '',
productionSourceMap: true,
devtool: '#source-map',
productionGzip: false,
productionGzipExtensions: ['js', 'css'],
bundleAnalyzerReport: process.env.npm_config_report
}
