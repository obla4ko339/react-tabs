const {src, dest, parallel, task } = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const react = require('gulp-react');
const reactBabel = require('babel-plugin-transform-react-jsx')


function js(){
    return src('./src/js/main.js')
        .pipe(webpackStream({
            output:{
                filename:'bundle.js'
            },
            resolve:{
              extensions:['.js','.json', '.jsx']
            },
            module:{
                rules:[
                    {
                        test:/\.(js)/,
                        loader:'babel-loader',
                        exclude:/(node_modules)/,
                        options:{
                            presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                        }
                    }
                ]
            },
            mode:'production'
        },webpack))
        .pipe(dest('./dist/js'))
}

function html(){
    return src('./src/public/index.html')
    .pipe(dest('./dist'))
}

function css(){
    return src('./src/css/style.scss')
    .pipe(sass())
    .pipe(dest('./dist/css'));
}




exports.js =js;
exports.html = html;
exports.css = css;


exports.default = parallel([js, html, css]);