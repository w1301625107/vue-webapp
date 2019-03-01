import request from '../util/request.js'
import * as _base from './base';
export default function fetch(option = {}) {
  //debugger;
  if (option.method == "GET" || !option.method) option = _base.getFormat(option);

  let url = option.url || _base.urlMissError();
  let method = option.method || "GET";
  let param = option.param || {};

  return new Promise((resolve, reject) => {
    request({
      url: url,
      method: method,
      param
    }).then(response => {
      console.log(response);
      resolve(response.data)
      // let data = response.data;
      // if (data.rs) {
      //   resolve(data.extend.pageInfo)
      // }
    })
  });
}