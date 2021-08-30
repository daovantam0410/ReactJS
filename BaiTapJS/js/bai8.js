var products = [
    {
        id: 4,
        name:'Book',
        price:15000,
        description:'this is my book',
        importDate:'3/1/2021'
    },
    {
        id: 10,
        name:'Pen',
        price:5000,
        description:'this is my pen',
        importDate:'1/5/2021'
    },
    {
        id: 5,
        name:'Laptop',
        price:15000000,
        description:'this is my laptop',
        importDate:'11/10/2021'
    },
    {
        id: 2,
        name:'calculator',
        price:350000,
        description:'this is my calculator',
        importDate:'4/10/2021'
    }
];
// In ra  các phần tử mảng
// console.log(products);

// Sắp xếp các mảng theo Id hoặc tên, hoặc giá
// Theo id giảm dần
// for (var i = 0; i < (products.length)-1; i++) {
//     for (var j = i+1; j < (products.length); j++) {
//         if (products[i].id < products[j].id) {
//             var temp = products[i];
//             products[i] = products[j];
//             products[j] = temp;
//         }
//     }
// }
// console.log(products);

// Theo giá giảm dần
// for (var i = 0; i < (products.length)-1; i++) {
//     for (var j = i+1; j < (products.length); j++) {
//         if (products[i].price < products[j].price) {
//             var temp = products[i];
//             products[i] = products[j];
//             products[j] = temp;
//         }
//     }
// }
// console.log(products);

// Thêm mới 1 sản phẩm
// const product = {
//         id: 1,
//         name:'abc',
//         price:350000,
//         description:'this is my abc',
//         importDate:'5/10/2021'
// };

// products.push(product);
// console.log(products);

// Xóa sản phẩm theo id

delete products[0];
console.log(products);


// Tìm phần tử có giá lớn nhất
// var priceMax = products[0];
// for (var i = 0; i < products.length; i++) {
//     if (priceMax.price < products[i].price) {
//         priceMax = products[i];
//     }
// }
// console.log(priceMax);
