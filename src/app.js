import 'css/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
// import createStores from './stores';
import store from './stores';
import RootRouter from './routes/index';
/**
 * 此处可以注入需要的store，如： 
 *   const injectStores = ['test']，注入内容是store下面的文件名
 * 空数组则加载所有store
 */
// const injectStores = [];  
// const store = createStores(injectStores);

ReactDOM.render(
  <Provider {...store}>
    <RootRouter />
  </Provider>,
  document.getElementById('app')
);
