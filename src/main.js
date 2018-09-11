// 引入 bootstrap 的 scss
import 'bootstrap/scss/bootstrap.scss';
// 引入自定义 less 及 scss
import './views/lesss/main.less';
import './views/scss/main.scss';
// 引入自定义动画的 less
import './styles/animates/animates.less';
// 引入angular
import Angular from 'angular';
// 引入路由 angular-route
// import Route from 'angular-route';
// 引入动画 angular-animate
import animate from 'angular-animate';
// 引入 angular-ui-bootstrap
// import uiBootstrap from 'angular-ui-bootstrap/ui-bootstrap';
// 引入 angular-ui-router
import uiRoute from 'angular-ui-router';

// 引入路由配置
import router from './route/index.js';
/*
 * -------------------------- 分割线 --------------------------
*/
// 将 jQuery 对象绑定到 window
window.$ = $;
// 定义一个angular模块
let App = Angular.module('app', [animate, uiRoute]);
window.App = App;
// run 方法在 angular 加载后执行一次
// App.run(['$rootScope', '$state', function ($rootScope, $state) {
//     // 检测用户是否已登录
//     $rootScope.$on('$stateChangeStart', function (event, to, toParams, from, fromParams) {
//         // 如果用户未登录
//         if(!localStorage.isLogin && 'login' !== to.name) {
//             event.preventDefault();// 取消默认跳转行为
//             $state.go('login'); //跳转到登录界面
//         }
//     });
// }]);
// 配置路由
App.config(['$stateProvider', '$urlRouterProvider', router]);
