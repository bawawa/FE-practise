function counter(index){
    var num=index||0;
    return function add(){
        num+=1;
        console.log(num)
    }
}
var a =counter(2);
a()
a()
a()
a()
a()





for (var i = 0; i < 10; i++) {
    (function(i){
    setTimeout(function() { console.log(i); }, 100 * i);
    })(i)
}

let temp = 0;
while(temp<10){
    var x= temp++;
    console.log('temp:'+x)
}