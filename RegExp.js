/*
正则练习
https://blog.csdn.net/h610443955/article/details/81079439
*/

/*
删除字符串中所有小写字母
*/
function removeLowerCase(str){
    let result = '';
    result = str.replace(/[a-z]/g,'')
    return result
}
var str = 'ABcdEfG'
console.log(removeLowerCase(str))

/*
验证四位数字验证码
*/
function checkCode(code){
    var ifCode;
    ifCode = /^\d{4}$/.test(code);
    return ifCode;
}
code = 1011;
console.log(checkCode(code))

/*
验证密码，必须包含大写字母，小写字母，数字，特殊符号，长度为6-18位
*/
function checkPsw(psw){
    let result;
    result = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,.~])^[0-9a-zA-Z,.~]{6,18}$/.test(psw)
    return result;
}
var psw = '123acbAB~'
console.log(checkPsw(psw))

/*
验证11位手机号，且以13，15，18开头
*/
function checkPhone(phone){
    var ifPhone;
    ifPhone = /^1[3,5,8]\d{9}$/.test(phone)
    return ifPhone
}
var phone= 15566075378
console.log(checkPhone(phone))