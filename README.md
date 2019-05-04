## 项目安装笔记

>> 安装使用 npm，更推荐 cnpm 淘宝镜像，速度更快。

如果是需要从react脚手架在做的话，就
`npm install -g create-react-app`
`create-react-app my-project`

如果是自己来做的配置可以按照下面的配置来重新配置：   
1. `npm init` 配置package.json   
2. 安装各种依赖：   
- `npm install --save react` 
- `npm install --save react-dom` react-dom 是用来处理虚拟DOM的包
- `npm install --save-dev webpack` 安装[webpack](https://www.webpackjs.com/concepts/)
  这里经常会遇见一系列报错，当前的安装方法是针对项目目录来做的，还有的是全局安装，如果是全局安装，那么安装出错可以选择 `npm uninstall webpack` 卸载一下重新安装；   
  或者mac会经常遇见这种错误：   
  ```
  ✖ Install fail! Error: EACCES: permission denied, mkdir '/Users/yvonnezh/.npminstall_tarball/b/i'
  Error: EACCES: permission denied, mkdir '/Users/yvonnezh/.npminstall_tarball/b/i'
  ```   
  好了，可以把文件改为超级管理员读写权限安装，或者 sudo 一下。
- `npm install --save-dev webpack-dev-server` 支持热加载
- `npm install --save-dev babel-core` 我一直认为babel就是一个转化ES的利器，但是[babel全家桶](https://www.babeljs.cn/docs/roadmap)真的值得好好学习。转化ES6转化成ES5的工具。
  - `npm install --save-dev babel-polyfill` 这个包包含一个定制的再生器 runtime 和 core.js。这将模拟完整的ES6环境；
  - `npm install --save-dev babel-loader` webpack中需要用到的loader；
  - `npm install --save babel-runtime` 再生器runtime插件的依赖；
  - `npm install --save-dev babel-preset-es2015`；
  - `npm install --save-dev babel-preset-react` 转化react JSX createElement 所需要的东西；
  - `npm install --save-dev babel-preset-stage-2` 转化为stage-2；

3. package.json 配置开始以及打包命令   
```
"start": "webpack-dev-server --hot --inline --colors --content-base ./build",
"build": "webpack --progress --colors"
```

4. 配置webpack   
```
// 一般配置文件都是这样的：
var webpack = require('webpack');
module.exports = {
  entry: './src/app.js',
  output: {
      path: __dirname + '/build',
      filename: "bundle.js"
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }]
  }
};

```

