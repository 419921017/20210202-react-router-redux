/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: power_840
 * @Date: 2021-02-02 19:04:09
 * @LastEditors: power_840
 * @LastEditTime: 2021-02-02 20:16:05
 */

import { LOCATION_CHANGE, CALL_HISTORY_METHOD } from "./constants";
function reducer(history) {
  let initState = {
    action: history.action,
    location: history.location,
  };
  return function (state = initState, action) {
    switch (action.type) {
      case LOCATION_CHANGE:
        return {
          ...action.payload,
        };
      default:
        return state;
    }
  };
}

export default reducer;
