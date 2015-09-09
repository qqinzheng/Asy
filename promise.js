var f1 = function (success) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(success);
            //可以用判断在不满足某些条件时，reject
        }, 1000);

    })
};

f1('success')
    .then(function (value) {
        return f1(value + '2');//return返回一个promise值，后面的promise和这个一致。
    })
    .then(function(value){
        return value;          //返回一个普通值，则后面promise的函数参数接受这个值。
    }).then(function(value){
        console.log(value);
    });

//测试结果为success2;