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
    const time = new Date();
    document.write(time.getDay()+"/"+time.getMonth()+"/"+time.getFullYear()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
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