var a = prompt("Xin mời nhập a: ");
var b= prompt("Xin mời nhập b: ");
var c = prompt("Xin mời nhập c: ");
delta = b*b-4*a*c;
if(delta < 0)
    alert("Phương trình vô nghiệm!");
else if(delta == 0)
    alert("Phương trình có nghiệm kép: x = x1 = x2 = "+(-b/(2*a)));
else
    alert("Phương trình có 2 nghiệm phân biệt: x1 = "+(-b+Math.sqrt(delta)/2*a)+" và x2 = "+(-b-Math.sqrt(delta)/2*a));