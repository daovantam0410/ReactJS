// var students = ["Dong","Minh","Duy","Loi"];
// console.log(students.length);

var mang1 = [1,2,4];
var mang2 = [11,14,44,120];
//Cach 1
// mang1 = mang1.concat(mang2);

//Theo ES6 (dấu ... lấy tất cả phần tử của mảng)
mang1 = [...mang1,...mang2];
console.log(mang1);

var danhsachhocsinh = ["a","b","c"];
danhsachhocsinh.splice(1,0,"d","e");

// 04/08/2021
var str = "Xin chao";
document.write(str.indexOf("chao"));