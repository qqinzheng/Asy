var f1 = function (a) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            //异步操作
            //获取a的值
        }, 1000);
        if (a == 1) {
            resolve(a);
        }
        if (a !== 1) {
            reject(new Error('抛出一个错误'));
        }


    })
};

f1(1)
    .then(function (value) {
        return f1(value + 2);//return返回一个promise值，后面的promise和这个一致。
    })
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    });

//结果为Error:抛出一个错误
