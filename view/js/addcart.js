var giohang = new Array();
var marketsl = 0;
var luu_localStorage = '';
function addcart(x) 
{
    var img = x.parentElement.children[2].src;
    var tenID = x.parentElement.children[3].innerText;
    var giasp = x.parentElement.children[4].getAttribute('value');
    alert('Cảm ơn bạn đã chọn mua sản phẩm ' + `${tenID}`);
    var soluong = 1;
    //alert(giasp +'\n'+ img +'\n'+ tenID )
    var item = new Array(img, tenID, giasp, soluong);

    // rỗng đưa phần từ đầu tiên vào mảng.
    if (giohang.length == 0) {
        giohang.push(item);
        
    }
    else // chạy vòng lặp để xét trùng mã ID sp....
    {
        for (var x = 0; x < giohang.length; x++) 
        {
            if (giohang[x][1] == tenID) {
                giohang[x][3]++;
                break;//tim thay thoat ngang for
            }
        }
        if (x == giohang.length) 
        {
            //Ko trùng tăng dòng sp
            giohang.push(item);
        }
    }
    viewcart();
    //localStorage.getItem('luugiohang', JSON.stringify(giohang));
    localStorage.setItem('luugiohang', JSON.stringify(giohang));
    
}

var kq = '';
function viewcart() {
    var kq =
        `<tr class="bgtb">
        <th >Stt</th>
        <th class="rongcot">Hình</th>
        <th>Tên Sản phẩm</th>
        <th>Đơn giá</th>
        <th>Số lượng</th>
        <th>Thành tiền</th>
        <th>Xóa</th>
    </tr>`;
    var tongtien = 0;
    var sldonhang = 0;
    for (let i = 0; i < giohang.length; i++) {
        let stt = i + 1;
        let thanhtien = giohang[i][2] * giohang[i][3];
        tongtien += thanhtien;
        sldonhang++;

        kq += `<tr>
                    <td>`+ stt + `</td>
                    <td class="rongcot"><img src="`+ giohang[i][0] + `"></td>
                    <td>`+ giohang[i][1] + `</td>
                    <td>`+ giohang[i][2] + `</td>
                    <td>`+ giohang[i][3] + `</td>
                    <td>`+ thanhtien + `</td>
                    <td>
                        <button class="fm" onclick="xoa(this, ${i})">
                            Xóa
                        </button>
                    </td>
                </tr>`;
    }
    kq +=
        `<tr>
            <td colspan="4"> Tổng thành tiền: </td>
            <td colspan="2" id="tongtien_id">`+ tongtien + `</td>
            <td>
                <button class="fm1">
                <a href="#" onclick="showdk()" style="color: aliceblue;">Đặt hàng ngay</a>
                </button>
            </td>
        </tr>`

    //document.getElementById('hienthigiohang').style.display = 'block';
    //document.getElementById('chuachonsanpham').style.display = 'none';
    document.getElementById('hienthigiohang').innerHTML = kq;
    // hiện số lượng giỏ hàng trên trang chủ
    marketsl++;
    document.getElementById('marketsl').innerText = giohang.length + ' loại sản phẩm';
    console.log(giohang)
}

function xoa(ojb, i) {
    ojb.parentElement.parentElement.remove();
    giohang.splice(i, 1)
    viewcart()
    localStorage.setItem('luugiohang', JSON.stringify(giohang));

}
