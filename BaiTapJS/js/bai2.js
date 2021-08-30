// var a = prompt("Nhập vào hệ số a: ");
// var b = prompt("Nhập vào hệ số b: ");
// alert("Phương trình bạn vừa nhập là: "+a+"x + "+b+" = 0");
// if(a==0 && b==0)
// {
//     alert("Phương trình có vô số nghiệm!");
// }
// else if(a==0 && b!=0)
// {
//     alert("Phương trình vô nghiệm!");
// }
// else if(a!=0)
// {
//     alert("Phương trình có nghiệm duy nhất x = "+(-b/a));
// }

function giaiPhuongTrinhBac1(a,b,c) {
    if (a==0) {
        return b==c ? "PT vo so nghiem!" : "PT vo nghiem!";
    }
    else
        return (c-b)/a;
}