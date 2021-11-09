const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;
const LimitChunkCountPlugin = require('webpack').optimize.LimitChunkCountPlugin;
// const SplitChunkPlugin = require('webpack').SplitChunksPlugin;

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/'),
                '~': path.join(__dirname, 'src/'),
            },
            extensions: ['.js', '.vue', '.json', '.ts']
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        chunks: 'all',
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        priority: -10
                    }
                }
            }
        },
        plugins: [
            // new BundleAnalyzerPlugin({
            //     analyzerMode: 'static',
            //     reportFilename: 'bundle-report.html',
            //     openAnalyzer: false,
            //     generateStatsFile: true,
            //     statsFilename: 'bundle-stats.json',
            // }),
            new ContextReplacementPlugin(/moment[/\\]locale$/, /(ko)$/),
            new LimitChunkCountPlugin({ maxChunks: 10 }),
        ]
    },
    // filenameHashing: false,
    productionSourceMap: false,
    transpileDependencies: ['vuetify'],
    devServer: {
        host: '0.0.0.0',
        // hot: false,
        disableHostCheck: true,
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "@/assets/scss/variables.scss";'
            }
        }
    }
}
