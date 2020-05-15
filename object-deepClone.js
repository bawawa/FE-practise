/*
对象深拷贝
*/

function deepClone(object){
    if(object.constructor.toString().indexOf('Object')===-1){
        throw 'target is not an object'
    }
    var clonedObj = new Object();
    for (let item in object){
        if(typeof object[item] !== 'object')
            clonedObj[item] = object[item];
        else{
            if(object[item].constructor.toString().indexOf('Array')!==-1){
                let tempArr = new Array();
                object[item].forEach(arrItem=>{
                    tempArr.push(arrItem);
                });
                clonedObj[item] = tempArr;
            }else if(object[item].constructor.toString().indexOf('Object')!==-1){
                clonedObj[item] = deepClone(object[item])
            }
        }
    }
    console.log(clonedObj)
    return clonedObj;
}


var a = {o:[1,2,3],i:{b:2,c:{d:[4,5,6]}}}
deepClone(a)