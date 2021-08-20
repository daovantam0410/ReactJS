/*
*Dùng Jquery
*/

var listProduct = [];

//Tạo sản phẩm mới
function createProduct() {
    //Tạo sản phẩm mới
    var newProduct = {
        id : 0,
        name : $("#productName").val(),
        code : $("#productCode").val(),
        unit : $("#productUnit").val(),
        price : $("#productPrice").val(),
        date : $("#productDate").val(),
        description : $("#productDescription").val(),
        type : []
    };

    //Lay thong tin loai san pham (jquery)
    $('input[name="productType"]').each(function(i, element){
        if (element.checked) {
            newProduct.type.push(element.value)
        }
    });

    //Khởi tạo danh sách chứa giá trị của các ô checkbox
    var listType = [];

    //Lấy các giá trị trong danh mục theo name là productType
    var checks = document.getElementsByName("productType");
    for (let i = 0; i < checks.length; i++) {
        //Kiểm tra các ô check box đã được check
        if (checks[i].checked) {
            listType.push(checks[i].value); //Thêm giá trị của các ô check box vào danh sách
        }
    }

    //Lấy tất cả giá trị của các ô checkbox trong danh sách thêm vào sản phẩm
    newProduct.type = [...listType];

    //Thêm sản phẩm vào danh sách sản phẩm
    listProduct.push(newProduct);

    //Lấy Object đầu tiên trong danh sách
    var p = listProduct[0];
    for (let i = 0; i < listProduct.length; i++) {
        //So sánh ID của Object đầu tiên vs ID các Object còn lại trong danh sách 
        if (p.id < listProduct[i].id) {
            p = listProduct[i]; //Lấy ra Object có ID_MAX
        }
    }
    newProduct.id = p.id; //Gán ID_MAX cho ID sản phẩm tiếp theo 
    newProduct.id++; //ID sản phẩm tự động tăng

    //update lại bảng sản phẩm
    renderTable();
}

//Lưu thông tin sản phẩm
function SaveProduct() {
    var productID = $("#productID").val();
    // Kiểm tra id có giá trị hay không?
    if (productID) {
        updateProduct(productID); //update nếu tồn tại id
    }
    else{
        createProduct(); //Thêm mới khi chưa tồn tại id
    }
}

var index = document.getElementById("bodyTable");

//Lấy thông tin sản phẩm
function getProductById(id) {
    //Tìm ra phần tử cần sửa theo id
    var index = listProduct.findIndex(function(i){
        return i.id == id;
    });
    var product = listProduct[index];
    //Đẩy thông tin sản phẩm vừa lấy được lên form
    $('#productName').val(product.name);
    $('#productCode').val(product.code);
    $('#productPrice').val(product.price);
    $('#productUnit').val(product.unit);
    $('#productDate').val(product.date);
    $('input[name="productType"]').each(function(i,e){
        e.checked = product.type.includes(e.value);
    });
    $('#productID').val(product.id);
    //Set giá trị các ô checkbox là chưa được tích
    var setAllCheckBoxs = document.querySelectorAll(`input[type='checkbox'][name='productType']`);
    setAllCheckBoxs.forEach(e => {
       e.checked = false; 
    });

    //Hiện giá trị các ô checkbox lên form
    product.type.forEach(e => {
        var checkBoxs = document.querySelectorAll(`input[type='checkbox'][name='productType'][value="${e}"]`);
        checkBoxs[0].checked = true;
    });
}

//Update sản phẩm
function updateProduct(id) {
    var index = listProduct.findIndex(function(i){
        return i.id == id;
    });
    //Sửa thông tin
    listProduct[index].name = $('#productName').val();
    listProduct[index].code = $('#productCode').val();
    listProduct[index].price = $('#productPrice').val();
    listProduct[index].unit = $('#productUnit').val();
    listProduct[index].date = $('#productDate').val();
    $('input[name="productType"]').each(function(i,e){
        if(e.checked){
            listProduct[index].type.push(e.value);
        }
    });
    //update lại table
    renderTable();
}


//Xóa sản phẩm
function deleteProductById(id) {
    //---Cách 1---
    for (let i = 0; i < listProduct.length; i++) {
        if (id === listProduct[i].id) {
            listProduct.splice(i,1);
        }
    }

    //---Cách 2---
    //Tìm ra phần tử cần xóa
    // var index = listProduct.findIndex(function(i){
    //     return i.id == id;
    // });
    //Sử dụng hàm của JS xóa phần tử đó khỏi mảng
    // if (index > -1)
        // listProduct.splice(index,1);

    //---Cách 3---

    //Update lại table
    renderTable();
}

//Hiển thị lại bảng sản phẩm (jquery)
function renderTable() {
    $("#bodyTable").empty();
    //Cập nhật toàn bộ dữ liệu lấy về API
    listProduct.forEach((e,index) => {
        $("#bodyTable").append(
            `<tr>
                <td>${index+1}</td>
                <td>${e.name}</td>
                <td>${e.price}</td>
                <td>Cái</td>
                <td>${e.type}</td>
                <td>
                    <button type="button" class="btn btn-primary"><i class="bi bi-search"></i></button>
                    <button type="button" class="btn btn-success" onclick="getProductById(${e.id})"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-danger" onclick="deleteProductById(${e.id})"><i class="bi bi-trash"></i></button>
                </td>
            </tr>`
        );
    })
}
//Cách2
//dùng hàm filter, lấy ra mảng không chứa phần tử cần tìm
//Update lại HTML
//---Cách 1---

//---Cách 2---
//Khi ấn nút xóa/thêm: Js call API, xóa/thêm dữa liệu trong DB
//JS call API để lấy danh sách mới về
