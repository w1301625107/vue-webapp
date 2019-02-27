import * as _base from './base';

export default function myfetch(option) {
  //debugger;
  if (option.method == "GET" || !option.method) option = _base.getFormat(option);

  let url = option.url || _base.urlMissError();
  let method = option.method || "GET";
  let param = option.param || {};

  return fetch(url, {
      method: method,
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
        //'Content-Type': 'application/json; charset=utf-8'
      }),
      mode: 'no-cors', // no-cors, cors, *same-origin
      referrer: 'no-referrer',
    })
    .then(
      response => response.json()
    )
    .catch(
      e => console.log("Oops, error", e)
    )
}