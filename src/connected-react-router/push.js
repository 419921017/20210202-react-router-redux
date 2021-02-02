/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: power_840
 * @Date: 2021-02-02 19:04:52
 * @LastEditors: power_840
 * @LastEditTime: 2021-02-02 19:50:30
 */

import { CALL_HISTORY_METHOD } from "./constants";

export function push(path) {
  return {
    type: CALL_HISTORY_METHOD,
    payload: {
      path,
      method: "push",
    },
  };
}
