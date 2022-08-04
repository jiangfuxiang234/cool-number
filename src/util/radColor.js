var colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];
/**
 * 生成一个随机数
 * @param {最小值} min 
 * @param {最大值} max 
 * @returns 
 */
export function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
// 随机取一个颜色值
export default function(){
    var index = getRandom(0, colors.length);
    return colors[index]
}