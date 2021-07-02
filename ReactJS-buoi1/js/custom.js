var action;
var message;
function xoa1() {
    message = confirm("Bạn có chắc chắn muốn xóa không?");
    if(message == true)
        action = $("#line1").remove();
}
function xoa2() {
    message = confirm("Bạn có chắc chắn muốn xóa không?");
    if(message == true)
        $("#line2").remove();
}
function xoa3() {
    message = confirm("Bạn có chắc chắn muốn xóa không?");
    if(message == true)
        $("#line3").remove();
}