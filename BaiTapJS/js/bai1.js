// var tong = 0;
// for (let index = 0; index <= 10; index++) {
//     tong+=index*2;
// }
// alert("Tổng 10 số chẵn đầu tiên = "+tong);

function tinhTongSoChan(x) {
    var tong = 0;
    for(var i=1;i<=x;i++)
    {
        tong+=i*2;
    }
    return tong;
}