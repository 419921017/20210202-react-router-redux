/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: power_840
 * @Date: 2021-02-02 19:03:31
 * @LastEditors: power_840
 * @LastEditTime: 2021-02-02 19:57:26
 */
import connectRouter from "./connectRouter";
import routerMiddleware from "./routerMiddleware";
import push from "./push";
import ConnectedRouter from "./ConnectedRouter";

export {
  connectRouter, // 创建路由中间件函数, 都接受一个history参数,
  routerMiddleware, // 创建reducer函数, 都接受一个history参数
  push, // 返回一个跳转路径的action
  ConnectedRouter, // 路由容器
};
