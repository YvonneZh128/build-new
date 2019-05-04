// import global from './global';
// const context = require.context('./', false, /\.js$/);
// const stores = { global };

// function createStores(injectStores){
//   if(injectStores && injectStores.length > 0){
//     context.keys().forEach(function (key) {
//       if(key !== './index.js'){
//         let k = '';
//         if(/\.\/[0-9a-zA-Z]+\.js/.test(key)){
//           k = key.replace('.js', '').replace('./', '');
//           if(injectStores.indexOf(k) > -1){
//             stores[k] = context(key);
//           }
//         }
//       }
//     });
//   }else{
//     context.keys().forEach(function (key) {
//       if(key !== './index.js'){
//         let k = '';
//         if(/\.\/[0-9a-zA-Z]+\.js/.test(key)){
//           k = key.replace('.js', '').replace('./', '');
//           stores[k] = context(key);
//         }
//       }
//     });
//   }

//   return stores;
// }

// export default createStores;

// 启用方式2
const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');
const stores = {};
for (let i = 0; i < keys.length; i++) {
  let key = keys[i].replace(/\.\/([\w]*)\.js/, (match, p1) => {
    return p1;
  });
  stores[key] = context(keys[i]);
}
export default stores;

