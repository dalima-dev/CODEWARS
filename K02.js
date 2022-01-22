/*Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered valid if they consist of four octets, with values between 
0 and 255, inclusive. */

function isValidIP(str) {
  let arr = str.split(".");
  if (arr.length != 4) return false;
  if (
    !/^\d+$/.test(arr[0]) ||
    !/^\d+$/.test(arr[1]) ||
    !/^\d+$/.test(arr[2]) ||
    !/^\d+$/.test(arr[3])
  )
    return false;
  if (
    /^0\d/.test(arr[0]) ||
    /^0\d/.test(arr[1]) ||
    /^0\d/.test(arr[2]) ||
    /^0\d/.test(arr[3])
  )
    return false;
  if (
    arr[0] >= 0 &&
    arr[0] <= 255 &&
    arr[1] >= 0 &&
    arr[1] <= 255 &&
    arr[2] >= 0 &&
    arr[2] <= 255 &&
    arr[3] >= 0 &&
    arr[3] <= 255
  )
    return true;
  else return false;
}
