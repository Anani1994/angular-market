// 引入 bootstrap 的 scss
import "bootstrap/scss/bootstrap.scss";
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

// 定义一个angular模块
let App = Angular.module('app', [animate, uiRoute]);
// 引入路由
import router from './route/index.js';
App.config(router);

// 引入自定义的指令文件
require('./templates/global-tips/global-tips.js')(App);
