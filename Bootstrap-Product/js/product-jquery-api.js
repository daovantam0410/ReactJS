/*
*Dùng Jquery API
*/

$(document).ready(function() {
    getProductList();
});

function getProductList()
{
    $.ajax(
        {
            url : "http://localhost:8081/product",
            type : "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                // console.log(response);
                renderTable(response);
            },
            error: function(er){
                console.log(er);
            }
        }
    );
}

$(document)
    .ajaxStart(function () {
    $("#loading").show();
  })
  .ajaxStop(function () {
    $("#loading").hide();
});

var listProduct = [];

//Tạo sản phẩm mới
function createProduct() {
    //Tạo sản phẩm mới
    var newProduct = {
        Name : $("#productName").val(),
        Code : $("#productCode").val(),
        Unit : $("#productUnit").val(),
        Price : $("#productPrice").val(),
        Date : $("#productDate").val(),
        Description : $("#productDescription").val(),
        Type : []
    };

    //Lấy thông tin loại sản phẩm (jquery)
    $('input[name="productType"]').each(function(i, element){
        if (element.checked) {
            newProduct.Type.push(element.value);
        }
    });

    //Call API tạo mới sản phẩm
    $.ajax({
        type: "POST",
        url: "http://localhost:8081/product",
        data: JSON.stringify(newProduct),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            console.log(response);
            getProductList();
        },
        error: function(er){
            console.log(er);
        }
    });
    // services.post().then(function(){
    //     getProductList();
    // });

    //Xóa thông tin form
    clearForm();

    //Đóng modal
    closeForm();
}

function clearForm() {
    $('#productId').val("");
    $('#productForm').trigger("reset");
}

function closeForm() {
    $('#productForm').modal('hide');
}

//Lưu thông tin sản phẩm
function SaveProduct() {
    var productId = $('#productId').val();
    // Kiểm tra id có giá trị hay không?
    if(productId) {
        updateProduct(); //update nếu tồn tại id
    }
    else{
        createProduct(); //Thêm mới khi chưa tồn tại id
    }
}

//Lấy thông tin sản phẩm
function getProductById(id) {
    //1. Call API lấy sản phẩm theo id
    services.get(`product/${id}`).then((response) => {
        //Hiển thị modal
        $('#productModal').modal('show');
        //Hiển thị thông tin sản phẩm lên form
        $('#productName').val(response.Name);
        $('#productCode').val(response.Code);
        $('#productPrice').val(response.Price);
        $('#productUnit').val(response.Unit);
        $('#productDate').val(response.Date);
        $('#productDescription').val(response.Description);
        $('#productId').val(response.Id);
        $('input[name="productType"]').each(function(i,e){
            e.checked = response.Type.includes(e.value);
        });
    });
}

//Update sản phẩm
function updateProduct() {
    debugger;
    var product = {
        Id : $('#productId').val(),
        Name : $('#productName').val(),
        Code : $('#productCode').val(),
        Unit : $('#productUnit').val(),
        Price : $('#productPrice').val(),
        Date : $('#productDate').val(),
        Description : $('#productDescription').val(),
        Type : []
    };

    //Lấy thông tin loại sản phẩm (jquery)
    $('input[name="productType"]').each(function(i, element){
        if (element.checked) {
            product.Type.push(element.value);
        }
    });

    services.put(`product/${product.Id}`,product).then(() => {
        clearForm();
        closeForm();
        getProductList();
    })
}

//Xóa sản phẩm
function deleteProductById(id) {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8081/product/${id}`,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(){
            getProductList();
        },
        error: function(e){
            console.log(e);
        }
    });
}

//Hiển thị lại bảng sản phẩm (jquery)
function renderTable(data) {
    $("#bodyTable").empty();
    //Cập nhật toàn bộ dữ liệu lấy về API
    data.forEach((e,index) => {
        $("#bodyTable").append(
            `<tr>
                <td>${index + 1}</td>
                <td>${e.Name}</td>
                <td>${e.Price}</td>
                <td>Cái</td>
                <td>${e.Type}</td>
                <td>
                    <button type="button" class="btn btn-primary"><i class="bi bi-search"></i></button>
                    <button type="button" class="btn btn-success" onclick=getProductById(${e.Id})><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-danger" onclick="deleteProductById(${e.Id})"><i class="bi bi-trash"></i></button>
                </td>
            </tr>`
        );
    });
}