import  {numberTime}  from "../util/number.js";
import apendNumber from "./apendNumber.js";

var n = new numberTime(100);
n.creatNumber = function(n, isPrime){ // 给numberTime构造函数的creatNumber赋一个函数值
    apendNumber(n, isPrime)
}
var isStart = false; // 默认未开始
window.onclick = function(){
    if(isStart){
        n.stop();
        isStart = false
    }else{
        n.start();
        isStart = true;
    }
}
