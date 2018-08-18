export function dateFmt(oldDate, fmt) {
  if (oldDate == undefined || oldDate === '') {
    return '--';
  }
  let date = new Date(oldDate);
  let o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(
    4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (
      RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

// 解决豆瓣403图片缓存问题
export function fixImages403(_url) {
  if (_url !== undefined) {
    let _u = _url.substring(7);
    return 'https://images.weserv.nl/?url=' + _u;
  }
}