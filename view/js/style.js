// Slider_auto
var listimg = document.querySelector('.listimg');
    var arrimg = document.getElementsByName('rong');
    console.log(arrimg);
    var rong = arrimg[0].offsetWidth; // lấy độ rộng 1 hình
    var z = 0;
    setInterval(() => 
    {
        z++;
        if ( z == arrimg.length) z = 0;
        listimg.style.transform = `translateX(${-rong * z}px)`;
        listimg.style.transition = '2s';
    },3000);


function show_img(x) 
    {
        
        console.log(x);
        //document.getElementById('show_img').src = y;        
    }

//Tạo slider:

var arr_hinh = 
[
    "../view/img/banner_01.jpg",
    "../view/img/banner_02.jpg",
    "../view/img/banner_03.jpg"
]

var arr_mota = 
[
    "Thông tin mô tả 1",
    "Thông tin mô tả 2",
    "Thông tin mô tả 3"
]
var j = 0;
//thiết kế nút next
function next() 
    {
        j++;
        if (j == arr_hinh.length) j=0;
        document.getElementById('hinh').src = arr_hinh[j];
        document.getElementById('mota').innerText = arr_mota[j];
        
    }
function prev() 
    {
        j--;
        if (j < 0) j = arr_hinh.length - 1;
        document.getElementById('hinh').src = arr_hinh[j];
        document.getElementById('mota').innerText = arr_mota[j];

    }
setInterval(next, 2000);




// // giỏ hàng:
// var giohang = new Array();
// var cart_count = 0;
// function addcart(x) 
// {
//     var tenID = x.parentElement.children[2].innerText;
//     var giasp = x.parentElement.children[3].getAttribute('value');
//     alert('Cảm ơn bạn đã chọn mua sản phẩm ' + `${tenID}`);
//     var soluong = 1;
//     //alert(giasp +'\n'+ img +'\n'+ tenID )
//     var item = new Array(tenID, giasp, soluong);
//     cart_count++;
//     // rỗng đưa phần từ đầu tiên vào mảng.
//     if (giohang.length == 0) {
//         giohang.push(item);
//     }
//     else // chạy vòng lặp để xét trùng mã ID sp....
//     {
//         for (var x = 0; x < giohang.length; x++) 
//         {
//             if (giohang[x][0] == tenID) {
//                 giohang[x][2]++;
//                 break;//tim thay thoat ngang for
//             }
//         }
//         if (x == giohang.length) 
//         {
//             //Ko trùng tăng dòng sp
//             giohang.push(item);
//         }
//     }
//     viewcart();
//     //localStorage.getItem('luugiohang', JSON.stringify(giohang));
//     localStorage.setItem('giohang_index', JSON.stringify(giohang));
    
// }

// var kq = '';
// function viewcart() {
//     var kq =
//         `<tr class="bgtb">
//         <th >Stt</th>
//         <th>Tên Sản phẩm</th>
//         <th>Đơn giá</th>
//         <th>Số lượng</th>
//         <th>Thành tiền</th>
//         <th>Xóa</th>
//     </tr>`;
//     var tongtien = 0;
//     var sldonhang = 0;
//     for (let i = 0; i < giohang.length; i++) {
//         let stt = i + 1;
//         let thanhtien = giohang[i][1] * giohang[i][2];
//         tongtien += thanhtien;
//         sldonhang++;

//         kq += `<tr>
//                     <td>`+ stt + `</td>
//                     <td>`+ giohang[i][0] + `</td>
//                     <td>`+ giohang[i][1] + `</td>
//                     <td>`+ giohang[i][2] + `</td>
//                     <td>`+ thanhtien + `</td>
//                     <td>
//                         <button class="fm" onclick="xoa(this, ${i})">
//                             Xóa
//                         </button>
//                     </td>
//                 </tr>`;
//     }
//     kq +=
//         `<tr>
//             <td colspan="3"> Tổng thành tiền: </td>
//             <td colspan="2" id="tongtien_id">`+ tongtien + `</td>
//             <td>
//                 <button class="fm1">
//                 Đặt hàng ngay
//                 </button>
//             </td>
//         </tr>`

//     document.getElementById('hienthigiohang').style.display = 'block';
//     document.getElementById('chuachonsanpham').style.display = 'none';
//     document.getElementById('hienthigiohang').innerHTML = kq;
    
//     //để hiển thi số lượng giỏ hàng cùng 1 loại sản phẩm
//     //cart_count++; 
//     //document.getElementById('cart_count').innerText = giohang.length + ' loại sản phẩm';
//     //////////////////////////////

//     document.getElementById('cart_count').innerText = cart_count;
//     console.log(giohang)
// }

// function xoa(ojb, i) {
//     //  cách tạo biến xóa đi số lượng sản phẩm
//     var diemsl_spxoa = giohang[i][2]; // đếm sl sản phẩm được xóa để trừ cho biến "market"
//     alert('Bạn chọn xóa sản phẩm: ' + giohang[i][0] +'\n số lượng sản phẩm được xóa đi: '+ diemsl_spxoa);
//     cart_count =  cart_count - diemsl_spxoa;
    
//     ojb.parentElement.parentElement.remove();
//     giohang.splice(i, 1);// remove obj thứ 1, phần tử=1
//     viewcart();
//     localStorage.setItem('luugiohang', JSON.stringify(giohang));

// }

// // nhấn nút để hiển thị giỏ hàng ngay trên trang chủ ....

function hienthigiohang_index() {
        let i = document.getElementById('hienthigiohang');
        if(i.style.display === "none") {
            i.style.display = 'block';
        } else {
            i.style.display = 'none'
        }
}


//Kiểm tra Form đăng kí:-------------------------------------------------
    //function showdk() { document.getElementById('hienthi-formdk').style.display = 'block'; }
    //function hidden() { document.getElementById('hienthi-formdk').style.display = 'none'; }

    function kiemtra() {
        var loi = "";
        // Kiểm tra  nhập họ và tên:
        var hten = document.getElementById('hoten');
        if (hten.value == "") {
            loi += 'Họ tên không được để trống. \n';
            hoten.className = 'nenvang';
        } else {
            hten.className = 'form-control';
        }

        // Kiểm tra  nhập email:
        var email = document.getElementById('email');
        if (email.value == "") {
            loi += 'Email không được để trống. \n';
            email.className = 'nenvang';
        } else {
            email.className = 'form-control';
        }

        // Kiểm tra  nhập số điện thoại:
        var dienthoai = document.getElementById('dienthoai');
        if (dienthoai.value == "") {
            loi += 'Điện thoại không được bỏ trống. \n';
            dienthoai.className = 'nenvang';
        } else if (isNaN(dienthoai.value)) {
            loi += 'Giá trị  nhập vào không phải là số. \n';
        }
        else {
            dienthoai.className = 'form-control';
        }

        // Kiểm tra  Giới tính:
        //document.getElementsByName('phai')  >> trả về tập hợp các phần tử trong trang có thuộc tính 'phai'
        var dem = 0;
        var phai = document.getElementsByName('phai');
        for (var i = 0; i < phai.length; i++) {
            if (phai[i].checked) dem++;
        }
        if (dem == 0) {
            loi += 'Bạn chưa chọn phái. \n';
            fs.className = 'nenvang';
        }
        else { fs.className = 'form-control'; };

        // Kiểm tra  Quốc tịch:
        var tinhthanh = document.getElementById('tinhthanh');
        if (tinhthanh.value == 0) {
            loi += 'Bạn chưa chọn quốc tịch. \n';
            tinhthanh.className = 'nenvang';
        } else { tinhthanh.className = 'form-control'; };

        // Kiểm tra  nhập mk lần 1:
        var password = document.getElementById('password');
        if (password.value == 0) {
            loi += 'Bạn chưa nhập password. \n';
            password.className = 'nenvang';
        } else { password.className = 'form-control'; };

        // Kiểm tra  nhập mk lần 2:
        var password1 = document.getElementById('password1');
        if (password1.value == 0) {
            loi += 'Bạn chưa nhập password lần 2. \n';
            password1.className = 'nenvang';
        } else if (password.value != password1.value) {
            loi += 'Bạn nhập sai password xác nhận lại. \n';
            password1.className = 'nenvang';
        }
        else { password1.className = 'form-control'; };

        if (loi != "") {
            alert(loi);
            return false;
        }
        else {
            alert('bạn đã đăng kí thành công!')
        }
    }


//thêm laptop trên trang chủ bằng JS-----------------------------------------
// const arr_laptop = 
// [
//     { ma: 'sp001',ten: 'Laptop tên 1',hinh: 'laptop1.jpg', gia: '10000000'},
//     { ma: 'sp002',ten: 'Laptop tên 2',hinh: 'laptop2.jpg', gia: '20000000'},
//     { ma: 'sp003',ten: 'Laptop tên 3',hinh: 'laptop3.jpg', gia: '30000000'},
//     { ma: 'sp004',ten: 'Laptop tên 4',hinh: 'laptop4.jpg', gia: '40000000'},
//     { ma: 'sp005',ten: 'Laptop tên 5',hinh: 'laptop5.jpg', gia: '50000000'},
//     { ma: 'sp006',ten: 'Laptop tên 6',hinh: 'laptop6.jpg', gia: '50000000'},
//     { ma: 'sp007',ten: 'Laptop tên 7',hinh: 'laptop7.jpg', gia: '50000000'},
//     { ma: 'sp008',ten: 'Laptop tên 8',hinh: 'laptop8.jpg', gia: '50000000'},
// ];

// var add_laptop = "";
// for (let i = 0; i < arr_laptop.length; i++) {
//     add_laptop += 
//     `
//     <div class="col3">
//         <img src="../view/img/${arr_laptop[i].hinh}" alt="">
//         <h5><a href="#">${arr_laptop[i].ten}</a></h5>
//         <h4>${arr_laptop[i].gia} VND</h4>
//         <button class="fm">AddCart</button>
//     </div>
//     `    
// }
// //document.getElementById('themlaptop').innerHTML=add_laptop; //cách 1//
// document.querySelector('#themlaptop').innerHTML = add_laptop;