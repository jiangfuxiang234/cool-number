import isPrime from "./isPrime.js";

export class numberTime {
    constructor(duration = 500){ // 默认duration值为500
        this.duration = duration;
        this.timer = null;
        this.number = 1; // 当前的数字
        this.creatNumber = null // 当一个数字产生的时候，要调用的回调函数
    }
    start(){
           if(this.timer){
            return
           }
           this.timer = setInterval( () => { // 以后定时器一定一定一定要记得用箭头函数，要用外面的this
            this.creatNumber && this.creatNumber(this.number, isPrime(this.number));
            this.number++;
        }, this.duration)

    }

    stop(){
        clearInterval(this.timer);
        this.timer = null;
    }
}