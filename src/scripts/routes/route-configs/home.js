import Loadable from 'react-loadable';
import LoadingComponent from 'components/ComponentLoading';

const Home = {
  component: Loadable({
    loader: () => import('pages/index/routes/home'),
    loading: LoadingComponent
  }),
  path: 'home',
  index: 10

  //当前路由默认是文件名，如果需要自定义或者加参数，可以在下面添加path属性，如
  // , path: 'home/:id' //这是个demo，参数可根据实际情况填写
  // , index: 0  //优先级，同等条件下index越大最先被匹配，比如默认跳转地址
};
const Menu = {
  component: Loadable({
    loader: () => import('pages/index/routes/home'),
    loading: LoadingComponent
  }),
  path: 'home',
  index: 10

  //当前路由默认是文件名，如果需要自定义或者加参数，可以在下面添加path属性，如
  // , path: 'home/:id' //这是个demo，参数可根据实际情况填写
  // , index: 0  //优先级，同等条件下index越大最先被匹配，比如默认跳转地址
};


module.exports = {
  Home,
  Menu
};
