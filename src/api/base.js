export function urlMissError() {
  throw new Error("请求参数缺失url")
}

export function paramToURLString(obj) {
  return "?" + new URLSearchParams(obj).toString()
}

export function checkNullObj(obj) {
  return Object.keys(obj).length === 0
}

export function getFormat(option) {
  if (option.param) {
    let paramType = Object.prototype.toString.call(option.param).match(
      /\[object (.*?)\]/)[1].toLowerCase();
    console.log("paramType:",
      paramType)
    if (paramType == "string") option.url = option.url + option.param;
    if (paramType == "object") option.url = option.url + paramToURLString(
      option.param);

  }
  return option;
}