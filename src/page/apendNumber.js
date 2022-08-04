import $ from "jquery"
import radColor from "../util/radColor.js";
import {getRandom} from "../util/radColor.js";
var divContainer = $("#divContainer");
var divCenter = $("#divCenter");

export default function(n, isPrime) {
    var span = $("<span>").text(n);
    if(isPrime){ // 如果是素数就给他加上颜色样式
        var color = radColor();
        span.css("color", color);
        createCenterPrime(n, color)
    }
    createCenter(n);
    divContainer.append(span)
}

// 中间显示的数
function createCenter(n){
    divCenter.text(n)
}

// 中间显示的素数
function createCenterPrime(n, color){
   var centerPrime = $("<div>").addClass("center").text(n).css("color", color);
   $("body").append(centerPrime)
    divCenter[0].clientLeft; // 随便读取某个元素的位置尺寸信息，则会导致重新渲染(reflow) 
                            //因为在页面渲染出来之前就把动画设置了，所以监测不到过渡动画，所以要在加动画之前先渲染一下页面
                            //平时都是有动作触发动画，而那都是在页面渲染完成之后才触发的，所以不用重新渲染
                            // 理解的不一定对 ^……^
    centerPrime.css("transform", `translate(${getRandom(-200, 200)}px, ${getRandom(-200, 200)}px)`).css("opacity", 0)
}