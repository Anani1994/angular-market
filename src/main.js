// 引入 bootstrap 的 css 文件
import 'bootstrap/dist/css/bootstrap.min.css';
//引入angular
import Angular from 'angular';
//定义一个angular模块
let App = Angular.module('app', []);
// 引入自定义的指令文件
require('./controllers/hello-world/hello-world.js')(App);