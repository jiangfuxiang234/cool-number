// 判断一个数是否为素数
export default function(n){
    if(n < 2){
        return false
    }
    for(var i = 2; i < n - 1; i++){
        if(n % i === 0){
            return false
        }
    }
    return true;
}