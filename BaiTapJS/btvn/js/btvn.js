//bai1 (S = 1 + 2 + 3 +...+ n)
function sum(n) {
    var tong = 0;
    for(let i=1; i <= n; i++){
        tong+=i;
    }
    return tong;
}

//bai2 (S = 1^2 + 2^2 +...+ n^2)
function bai2(n) {
    var tong = 0;
    for (let i = 1; i <= n; i++) {
        tong+=i*i;
    }
    return tong;
}

//bai3 (S = 1 + 1/2 + 1/3 +...+ 1/n)
function bai3(n) {
    var tong = 0;
    for (let i = 1; i <= n; i++) {
        tong+=(1/i);
    }
    return tong;
}

//bai4 (S = 1/2 + 1/4 +...+ 1/2n)
function bai4(n) {
    var tong = 0;
    for (let i = 2; i <= n; i+=2) {
        tong+=(1/i);
    }
    return tong;
}

//bai5 (S = 1 + 1/3 + 1/5 +...+ 1/(2n+1))
function bai5(n) {
    var tong = 0;
    for (let i = 0; i <= n; i++) {
        tong+=(1/((2*i)+1));
    }
    return tong;
}

//bai6 (S = 1/(1*2) + 1/(2*3) +...+ 1/(n*(n+1)))
function bai6(n) {
    var tong = 0;
    for (let i = 1; i <= n; i++) {
        tong+=1/(i*(i+1));
    }
    return tong;
}

//bai7 (S = 1/2 + 2/3 + 3/4 +...+ n/n+1)
function bai7(n) {
    var tong = 0;
    for (let i = 1; i <= n; i++) {
        tong+=(i/(i+1));
    }
    return tong;
}

//bai8 (S = 1/2 + 3/4 + 5/6 +...+ (2n+1)/(2n+2))
function bai8(n) {
    var tong = 0;
    for (let i = 0; i <= n; i++) {
        tong+=((1/2)*((2*i+1)/(i+1)));
    }
    return tong;
}

//bai9 (T = 1 x 2 x 3 x...x n)
function bai9(n) {
    var tich = 1;
    for (let i = 1; i <= n; i++) {
        tich*=i;
    }
    return tich;
}

//bai10: Tính T(x,n) = x^n
function bai10(x,n) {
    var result = 1;
    if (n==0)
        return result;
    for (let i = 1; i <= Math.abs(n); i++) {
        result*=x;        
    }
    return n < 0?(1/result):result;
}

//bai11: S = 1 + 1*2 + 1*2*3 +...+ 1*2*3*...*n
function bai11(n) {
    var tong = 0;
    var tich = 1;
    for (let i = 1; i <= n; i++) {
        tich*=i;
        tong+=tich;        
    }
    return tong;
}

//bai12: S = x + x^2 + x^3 +...+x^n
function bai12(x,n) {
    var tong = 0;
    var tich = 1;
    for (let i = 1; i <= Math.abs(n); i++) {
        tich*=x;
        tong+=tich;
    }
    return tong;
}

//bai13: S = x^2 + x^4 +...+x^2n
function bai13(x,n) {
    var tong = 0;
    var tich = 1;
    for (let i = 1; i <= Math.abs(n); i++) {
        tich*=x*x;
        tong+=tich;
    }
    return tong;
}

//bai14: S = x + x^3 + x^5 +...+x^2n+1

//bai15: S = 1 + 1/(1 + 2) + 1/(1 + 2 + 3) + ….. + 1/(1 + 2 + 3 + …. + n)
function bai15(n) {
    var tong1 = 0;
    var tong = 0;
    for (let i = 1; i <= n; i++) {
        tong1+=i;
        tong+=(1/tong1);
    }
    return tong;
}

//bai16: S = x + (x^2)/(1 + 2) + (x^3)/(1 + 2 + 3) + … + (x^n)/(1 + 2 + 3 + …. + n)
function bai16(x,n) {
    var tongMau = 0;
    var tong = 0;
    var tich = 1;
    for (let i = 1; i <= Math.abs(n); i++) {
        tongMau+=i;
        tich*=x;
        tong+=(tich/tongMau);
    }
    return tong;
}

//bai17: S = x + x^2/2! + x^3/3! + … + x^n/n!
function bai17(x,n) {
    var giaiThua = 1;
    var tuSo = 1;
    var tong = 0;
    for (let i = 1; i <= Math.abs(n); i++) {
        giaiThua*=i;
        tuSo*=x;
        tong+=(tuSo/giaiThua);
    }
    return tong;
}

//bai18: S = 1 + x^2/2! + x^4/4! + … + x^2n/(2n)!
function bai18(x,n) {
    var giaiThua = 1;
    var tuSo = 1;
    var tong = 0;
    for (let i = 0; i <= Math.abs(n); i+=2) {
        
    }
    return tong;
}

//bai19: S = 1 + x + x^3/3! + x^5/5! + … + x^(2n+1)/(2n+1)!

//bai20: Liệt kê tất cả các “ước số” của số nguyên dương n.
function bai20(n) {
    for (let i = 1; i <= n; i++) {
        if (n%i==0) {
            console.log(i);
        }
    }
}

//bai21: Tính tổng tất cả các “ ước số” của số nguyên dương n.
function bai21(n) {
    var tong = 0;
    console.log("Các ước số của số nguyên dương "+n+" là:" );
    for (let i = 1; i <= n; i++) {
        if (n%i==0) {
            console.log(i);
            tong+=i;
        }
    }
    console.log("Tổng các ước số là: "+tong);
}

//bai22: Tính tích tất cả các “ước số” của số nguyên dương n.
function bai22(n) {
    var tich = 1;
    console.log("Các ước số của số nguyên dương "+n+" là:" );
    for (let i = 1; i <= n; i++) {
        if (n%i==0) {
            console.log(i);
            tich*=i;
        }
    }
    console.log("Tích các ước số là: "+tich);
}

//bai23: Đếm số lượng “ước số” của số nguyên dương n.
function bai23(n) {
    var count = 0;
    for (let i = 1; i <= n; i++) {
        if (n%i==0) {
            count++;
        }
    }
    console.log("Số các ước số là: "+count);
}

//bai24: Liệt kê tất cả các “ước số lẻ” của số nguyên dương n.
function bai24(n) {
    console.log("Các ước số lẻ của số nguyên dương "+n+" là:" );
    for (let i = 1; i <= n; i++) {
        if (n%i==0) {
            if (i%2!=0) {
                console.log(i);
            }
        }
    }
}

//bai25: Tính tổng tất cả các “ước số chẵn” của số nguyên dương n.
function bai25(n) {
    var tong = 0;
    console.log("Các ước số chắn của số nguyên dương "+n+" là:" );
    for (let i = 1; i <= n; i++) {
        if (n%i==0) {
            if (i%2==0) {
                console.log(i);
                tong+=i;
            }
        }
    }
    console.log("Tổng các ước số chẵn là: "+tong);
}

//bai26: Tính tích tất cả các “ước số lẻ” của số nguyên dương n.
function bai26(n) {
    var tich = 1;
    console.log("Cac uoc so le cua so nguyen duong "+n+" la:" );
    for (let i = 1; i <= n; i++) {
        if (n%i==0) {
            if (i%2!=0) {
                console.log(i);
                tich*=i;
            }
        }
    }
    console.log("Tich cac uoc so le la: "+tich);
}

//bai27: Đếm số lượng “ước số chẵn” của số nguyên dương n.
function bai27(n) {
    var count = 0;
    console.log("Cac uoc so chan cua so nguyen duong "+n+" la:" );
    for (let i = 1; i <= n; i++) {
        if (n%i==0) {
            if (i%2==0) {
                console.log(i);
                count++;
            }
        }
    }
    console.log("Co "+count+" uoc so chan cua so nguyen duong "+n);
}

//bai28: Cho số nguyên dương n. Tính tổng các ước số nhỏ hơn chính nó.
function bai28(n) {
    var tong = 0;
    console.log("Cac uoc so cua so nguyen duong "+n+" la:" );
    for (let i = 1; i <= n; i++) {
        if (n%i==0) {
            console.log(i);
            if (i<n) {
                tong+=i;                
            }
        }
    }
    console.log("Tong cac uoc so nho hon "+n+" la: "+tong);
}

//bai29: Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25
//bai30: Cho số nguyên dương n. Kiểm tra xem n có phải là số hoàn thiện hay không?
//bai31: Cho số nguyên dương n. Kiểm tra xem n có phải là số nguyên tố hay không?
function bai31(n) {
    var flag = 1;
    for (let i = 2; i <n ; i++) {
        if (n%i==0) {
            flag = 0;
            break;
        }
    }
    if(flag==1)
        console.log("Số "+n+" là số nguyên tố!");
    else
        console.log("Số "+n+" không phải số nguyên tố!");
}

//bai32: Cho số nguyên dương n. Kiểm tra xem n có phải là số chính phương hay không?
function bai32(n) {
    var flag = 0;
    for (let i = 1; i <= Math.sqrt(n) ; i++) {
        if (i*i==n) {
            flag = 1;
            break;
        }
    }
    if(flag)
        console.log("Số "+n+" là số chính phương!");
    else
        console.log("Số "+n+" không phải số chính phương!");
}

//bai43: Hãy đếm số lượng chữ số của số nguyên dương n.
function bai43(n) {
    var count = 0;
    while(n!=0)
    {
        var a = n % 10;
        count++;
        n=parseInt(n/10);
    }
    console.log("So cac chu so cua so nguyen duong la: "+count);
}

//bai44: Hãy tính tổng các chữ số của số nguyên dương n.
function bai44(n) {
    var tong = 0;
    while(n!=0)
    {
        var a = n % 10;
        tong+=a;
        n=parseInt(n/10);
    }
    console.log("Tong cac chu so cua so nguyen duong la: "+tong);
}

//bai45: Hãy tính tích các chữ số của số nguyên dương n.
function bai45(n) {
    var tich = 1;
    while(n!=0)
    {
        var a = n % 10;
        tich*=a;
        n=parseInt(n/10);
    }
    console.log("Tich cac chu so cua so nguyen duong la: "+tich);
}

//bai46: Hãy đếm số lượng chữ số lẻ của số nguyên dương n.
function bai46(n) {
    var count = 0;
    while(n!=0)
    {
        var a = n % 10;
        if (a%2!=0) {
            count++;
        }
        n=parseInt(n/10);
    }
    console.log("So cac chu so le cua so nguyen duong la: "+count);
}

//bai47: Hãy tính tổng các chữ số chẵn của số nguyên dương n
function bai47(n) {
    var tong = 0;
    while(n!=0)
    {
        var a = n % 10;
        n=parseInt(n/10);
        if (a%2==0) {
            tong+=a;
        }
    }
    console.log("Tong cac chu so chan cua so nguyen duong la: "+tong);
}

//bai48: Hãy tính tích các chữ số lẻ của số nguyên dương n
function bai48(n) {
    var tich = 1;
    while(n!=0)
    {
        var a = n % 10;
        n=parseInt(n/10);
        if (a%2!=0) {
            tich*=a;
        }
    }
    console.log("Tich cac chu so le cua so nguyen duong la: "+tich);
}

//bai49: Cho số nguyên dương n. Hãy tìm chữ số đầu tiên của n (đang xử lý)
function bai49(n) {
    var arrays = [];
    while(n!=0)
    {
        var a = n % 10;
        n=parseInt(n/10);
        var add = arrays.push(a);
        // console.log(a);
    }
    console.log(arrays[2]);
}

//bai50: Hãy tìm số đảo ngược của số nguyên dương n (đang xử lý)
function bai50(n) {
    var arrays = [];
    while(n!=0)
    {
        var a = n % 10;
        n=parseInt(n/10);
        // console.log(a);
        var add = arrays.push(a);
        var map = String(arrays);

    }
    console.log(map);
}

//bai51: Tìm chữ số lớn nhất của số nguyên dương n
function bai51(n) {
    var arrays = [];
    while(n!=0)
    {
        var a = n % 10;
        n=parseInt(n/10);
        var add = arrays.push(a);
    }
    console.log(arrays);
    var max = arrays[0];
    for (let i = 0; i <= arrays.length; i++) {
        if (max < arrays[i]) {
            max = arrays[i];
        }
    }
    console.log("Chu so lon nhat cua so nguyen duong la: "+max);
}

//bai52: Tìm chữ số nhỏ nhất của số nguyên dương n
function bai52(n) {
    var arrays = [];
    while(n!=0)
    {
        var a = n % 10;
        n=parseInt(n/10);
        var add = arrays.push(a);
    }
    console.log(arrays);
    var min = arrays[0];
    for (let i = 0; i <= arrays.length; i++) {
        if (min > arrays[i]) {
            min = arrays[i];
        }
    }
    console.log("Chu so nho nhat cua so nguyen duong la: "+min);
}

//bai53: Hãy đếm số lượng chữ số lớn nhất của số nguyên dương n
//bai54: Hãy đếm số lượng chữ số nhỏ nhất của số nguyên dương n
//bai56: Hãy kiểm tra số nguyên dương n có toàn chữ số lẻ hay không
function bai56(n) {
    var arrays = [];
    var check = 1; // biến check để kiểm tra có đều là chữ số lẻ không?
    while (n!=0) {
        var a = n % 10;
        n=parseInt(n/10);
        var add = arrays.push(a);
    }
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i]%2==0) {
            check = 0;
            break;
        }
    }
    if (check==1)
    {
        console.log("Cac chu so deu la chu so le!");
    }
    else
    {
        console.log("Cac chu co deu khong phai chu so le!");
    }
}

//bai57: Hãy kiểm tra số nguyên dương n có toàn chữ số chẵn hay không
function bai57(n) {
    var arrays = [];
    var check = 1; // biến check để kiểm tra có đều là chữ số chẵn không?
    while (n!=0) {
        var a = n % 10;
        n=parseInt(n/10);
        var add = arrays.push(a);
    }
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i]%2!=0) {
            check = 0;
            break;
        }
    }
    if (check==1)
    {
        console.log("Cac chu so deu la chu so chan!");
    }
    else
    {
        console.log("Cac chu co deu khong phai chu so chan!");
    }
}

//bai60: Hãy kiểm tra các chữ số của số nguyên dương n có tăng dần từ trái sang phải hay không?
function bai60(n) {
    var chuSoCuoiCung = n%10;
    n=parseInt(n/10);
    var check = 1; // biến check để kiểm tra các chữ số có tăng dần từ trái sang phải không?
    while (n!=0) {
        var chuSoKeCuoiCung = n % 10;
        n=parseInt(n/10);
        if (chuSoCuoiCung < chuSoKeCuoiCung) {
            check = 0;
            break;
        }
        else
        {
            chuSoCuoiCung=chuSoKeCuoiCung;
        }
    }
    if (check)
    {
        console.log("Các chữ số của số nguyên dương tăng dần từ trái qua phải!");
    }
    else
    {
        console.log("Các chữ số của số nguyên dương không tăng dần từ trái qua phải!");
    }
}

//bai61: Hãy kiểm tra các chữ số của số nguyên dương n có giảm dần từ trái sang phải hay không?
function bai61(n) {
    var chuSoCuoiCung = n%10;
    n=parseInt(n/10);
    var check = 1; // biến check để kiểm tra các chữ số có giảm dần từ trái sang phải không?
    while (n!=0) {
        var chuSoKeCuoiCung = n % 10;
        n=parseInt(n/10);
        if (chuSoCuoiCung > chuSoKeCuoiCung) {
            check = 0;
            break;
        }
        else
        {
            chuSoCuoiCung=chuSoKeCuoiCung;
        }
    }
    if (check)
    {
        console.log("Các chữ số của số nguyên dương giảm dần từ trái qua phải!");
    }
    else
    {
        console.log("Các chữ số của số nguyên dương không giảm dần từ trái qua phải!");
    }
}

//bai62: Cho 2 số nguyên dương a và b. Hãy tìm ước chung lớn nhất của 2 số này.
function bai62(a,b) {
    var temp1 = a;
    var temp2 = b;
    while (temp1!=temp2) {
        if (temp1>temp2) {
            temp1-=temp2;
        }
        else {
            temp2-=temp1;
        }
    }
    var uscln = temp1;
    return uscln;
}

//bai63: Cho 2 số nguyên dương a và b. Hãy tìm bội chung nhỏ nhất của 2 số này
function bai63(a,b) {
    return (a*b)/bai62(a,b);
}

//bai64: Giải phương trình bậc nhất
//bai65: Giải phương trình bậc 2
//bai66: Giải phương trình bậc 4
//bai67: Tính S(x, n) = x – x^2 + x^3 + … + (-1)^n+1 * x^n
function bai67(x,n) {
    var tich = 1;
    var tong = 0;
    for (let i = 1; i <= n; i++) {
        if (i%2==0) {
            tich = -1;
            tich*=x;
        }
        tich*=x;
        tong+=tich;
    }
    return tong;    
}

//bai68: Tính S(x, n) = -x^2 + x^4  + … + (-1)^n * x^2n
function bai68(x,n) {
    var result = 0;
    for (let i = 0; i < n; i++) {
        var tich = 1;
        for(let j = 1; j < i*2; j+=2){
            tich*=x;
        }
        tich = n%2 == 0? tich:tich*(-1);
        result+=tich;
    }
    return result;
}
//bai69: Tính S(x, n) = x – x^3 + x^5 + … + (-1)^n * x^2n+1
//bai70: Tính S(n) = 1 – 1/(1 + 2) + 1/(1 + 2 + 3)  + … + (-1)^n+1 * 1/(1 + 2 + 3+ … + n)
//bai71: Tính S(x, n) = -x + x^2/(1 + 2) – x^3/(1 + 2 + 3) + … + (-1)^n * x^n/(1 + 2 +… + n)
//bai72: Tính S(x, n) = – x + x^2/2! – x^3/3! + … + (-1)^n * x^n/n!
//bai73: Tính S(x, n) = -1 + x^2/2! – x^4/4! + … + (-1)^n+1 * x^2n/(2n)!
//bai74: Tính S(x, n) = 1 – x + x^3/3! – x^5/5! + … + (-1)^n+1 * x^2n+1/(2n + 1)!

//04/08/2021
//Math.random, ceil ,floor
//bai75: Viết chương trình nhập vào 1 số, in ra số tự nhiên ngẫu nhiên nhỏ hơn sô đã nhập
function bai75(x) {
    var a = Math.floor(Math.random() * x);
    document.write("\n"+a);
}

//bai76: Viết chương trình nhập vào 2 chuỗi, xoá chuỗi 1 trong chuôi 2
function bai76() {
    var str1 = "my";
    var str2 = "Hello, Welcome to my program";
    document.write(str2.split(str1).join(''));
}

//bai77: Viết 1 chương trình lấy ngày giờ hiện tại theo định dạng (ngày/tháng/năm giờ:phút:giây)
function bai77() {
    // const time = new Date();
    // document.write(time.getDay()+"/"+time.getMonth()+"/"+time.getFullYear()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());

    const dateObj = new Date();
    const month = String(dateObj.getMonth()+1).padStart(2,'0');
    const day = String(dateObj.getDay()).padStart(2,'0');
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();
    const second = dateObj.getSeconds();
    //Return dùng theo cú pháp ES6 để trả về
    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

//bai78: Viết chương trình so sánh ngày giờ;
function bai78() {
    var time1 = new Date(2020,10,4,23,10);
    var time2 = new Date(2020,02,09,23,09);
    if (time1.getDay() > time2.getDay()) {
        document.write("Ngày thứ 1 sau ngày thứ 2\n");
        if (time1.getHours() > time2.getHours()) {
            document.write("Giờ thứ 1 sau giờ thứ 2");
        } else if(time1.getHours() < time2.getHours()) {
            document.write("Giờ thứ 2 sau giờ thứ nhất");
        } else {
            document.write("Giờ thứ 1 = giờ thứ 2");
        }
    } else if(time1.getDay() < time2.getDay()) {
        document.write("Ngày thứ 2 sau ngày thứ 1\n");
        if (time1.getHours() > time2.getHours()) {
            document.write("Giờ thứ 1 sau giờ thứ 2");
        } else if(time1.getHours() < time2.getHours()) {
            document.write("Giờ thứ 2 sau giờ thứ nhất");
        } else {
            document.write("Giờ thứ 1 = giờ thứ 2");
        }
    } else {
        document.write("Ngày thứ 1 = ngày thứ 2\n");
        if (time1.getHours() > time2.getHours()) {
            document.write("Giờ thứ 1 sau giờ thứ 2");
        } else if(time1.getHours() < time2.getHours()) {
            document.write("Giờ thứ 2 sau giờ thứ nhất");
        } else {
            document.write("Giờ thứ 1 = giờ thứ 2");
        }
    }
}

//bai79: Viết chương trình so sánh ngày tháng nhập vào với ngày 01/01/2010
function bai79() {
    var time1 = new Date();
    var time2 = new Date();
    time2.setFullYear(2010,1,1);
    if (time2 > time1) {
        document.write("Hôm nay là trước ngày "+time2.getDay()+"/"+time2.getMonth()+"/"+time2.getFullYear());
    } else
    {
        document.write("Hôm nay là sau ngày "+time2.getDay()+"/"+time2.getMonth()+"/"+time2.getFullYear());
    }
}

//Chess
// function chessMan(chessName,x,y) {
    // khai báo vị trí con cờ đi được
    // vòng lặp, lặp qua vị trí x và y đến khi x và y gặp điểm giới hạn
    // return;
    // khai báo mảng các nước cờ đó có thể đi được
    // sử dụng vòng lặp 0-7
// }

function chessMan(cd,cr) {
    var arrays1 = [x,y];
    for (var i = 0; i <= cd; i++) {
        var x = Math.floor(Math.random(chessMan()) * cd);
    }
    arrays1[0] =  arrays1.push(x);
    for (var i = 0; i <= cr; i++) {
        var y = Math.floor(Math.random(chessMan()) * cr);
    }
    arrays1[1] = arrays1.push(y);
    console.log(arrays1); 
}
