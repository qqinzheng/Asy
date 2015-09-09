/**
 * Created by qinzheng on 15/8/25.
 */


var util = require('util');
var events = require('events');


var Anything = function (name) {
    this.name = name;
};

util.inherits(Anything, events.EventEmitter);//Anything继承了EventEmitter类型，所以可以直接使用属性方法


var sub = new Anything('订阅中心');
sub.on('done',function a(){
    setTimeout(function(){
        console.log('done1');
    },2000);
});
sub.on('done',function b(){
    setTimeout(function(){
        console.log('done2');
    },3000);
});//任务完成，发布信号

sub.on('test',function c(){
    setTimeout(function(){
        console.log('test1');
    },2000);
});
sub.on('test',function d(){
    setTimeout(function(){
        console.log('test2');
    },2000);
});

console.log(sub);//获取订阅中心的所有信息
sub.emit('test');//订阅信号
sub.emit('done');