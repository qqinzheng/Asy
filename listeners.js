/**
 * Createssssd by qinzheng on 15/8/25.
 */
import {Listener} from './ontrigger.js'

let l =new Listener();

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

l.on('done',f2);

l.on('done',f3);

function f1(){
    console.log('f1');
    setTimeout(()=>{
        console.log('f1');//这边执行f1的代码
        l.trigger('done');//触发事件，执行回调函数
    },1000);
    //return 'f1的返回值'
}
console.log(f1());
//事件的优势每个可以执行多个回调函数
