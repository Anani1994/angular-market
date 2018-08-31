// 引入通用 css
import './styles/common/common.less';
// 引入自定义的动画
import './styles/animates/animates.less';
// 引入 bootstrap 的 less 文件
import 'bootstrap/bootstrap.less';
// 引入angular
import Angular from 'angular';
// 定义一个angular模块
let App = Angular.module('app', [
    require('angular-animate'),
    require('angular-route')
]);
// 引入自定义的指令文件
require('./templates/global-tips/global-tips.js')(App);
// 引入路由
require('./route/index.js')(App);
