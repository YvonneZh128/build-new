/* 
* react-router4 根节点路由
* route-pages 装载嵌套路由的页面
* route-configs 装载最外层路由的配置
*/
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  hashHistory,
  Redirect
} from 'react-router-dom';

import {
  Home,
  Menu
} from './route-configs/home';

// 去中心化
// const context = require.context('../../index', true, /.js$/);
// const routeList = [];

// let defaultPathObj = null;
// context.keys().forEach(function (key) {
//   let k = key.replace('.js', '').replace('./', '').toLocaleLowerCase();
  
//   let loader = context(key);
//   loader.index = loader.index || 0;
//   let path = loader.path || k;
//   path = `/${path}`.replace(/\/+/, '/');
  
//   defaultPathObj = defaultPathObj ? 
//     (
//       defaultPathObj.index < loader.index ?
//         {path: path, index: loader.index} :
//         defaultPathObj
//     ): 
//     {
//       path: path,
//       index: loader.index
//     };
//   routeList.push({
//     component: context(key).component,
//     name: path
//   });
// });


// class BasicLayoutWrapper extends Component{
//   render(){
//     return <div className="Layout">
//       <BasicLayout>
//         <Switch>
//           {
//             routeList.map((item, index) => {
//               return (item.name != 'notfound') ? <Route
//                 key = {index}
//                 path = {item.name}
//                 component={item.component} 
//               /> : null ;

//             })
//           }
//           <Redirect to={defaultPathObj.path || routeList[0].name} />
//         </Switch>
//       </BasicLayout>
//     </div>
//     ;
//   }
// }

export default class RootRouter extends Component{
  render(){
    return (
      <Router history={hashHistory}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/menu" component={Menu}></Route>
        </Switch>
      </Router>
    );
  }
}