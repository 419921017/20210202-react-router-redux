import { CALL_HISTORY_METHOD } from "./constants";

/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: power_840
 * @Date: 2021-02-02 19:04:03
 * @LastEditors: power_840
 * @LastEditTime: 2021-02-02 19:55:53
 */
function routerMiddleware(history) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (action.type === CALL_HISTORY_METHOD) {
      const { method, path } = action.payload;
      history[method](path);
    } else {
      next(action);
    }
  };
}

export default routerMiddleware;
