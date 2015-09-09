/**
 *＊＊＊＊ Created by qinzheng on 15/8/25.
 */

function f1(callback) {
    console.log('f1'); //没有经过setTimeout，这边还是同步的
    setTimeout(function () {
        console.log('f1 again');
        callback();
    }, 1000);
}

function f2() {
    console.log('f2');

}

function f3() {
    console.log('f3');
}

console.log(f1(f2));
console.log(f3());

//运行结果
//f1
//f3
//f1 again
//f2
