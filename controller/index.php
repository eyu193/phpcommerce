<?php

// kết nối dữ liệu + show product ra trang chủ....
include "../model/databaseModel.php";
include "../model/productModel.php";

// khai báo các biến:
$model= new productModel();
    $hiensp = $model->getproduct();
    // xuất danh mục ra trang chủ:
    $hiends = $model->get_list();
    //lấy id để hiện ra trang chi tiết
    
    $hiendth=$model-> get_dienthoai(); // lấy ds điện thoại
    $hienlt=$model-> get_laptop(); // lấy danh sách laptop

    $hiensp_uutien =$model-> getview(); // lấy tất cả ds sp view cao đến thấp
    $hienview=$model-> getview(); // lấy danh sách view cao đến thấp
    $hienmin=$model-> getminprice(); // lấy danh sách giá thấp đến cao // design vinhnh31.
    $hienmax=$model-> getmaxprice(); // lấy danh sách giá cao đến thấp // design vinhnh31.
    $hienkm=$model-> getpromotion();// hiện khuyến mãi cao đến thấp
 
    
// cập nhật view dạng function ko dùng class.
    if(isset($_GET['idproduct'])) {
        $id1=$_GET['idproduct']; 
        addview($id1);
    } 
 


if(isset($_GET['act'])&&($_GET['act']!="")) {
    switch ($_GET['act']) {
            
        // xóa toàn bộ giỏ hàng:
        case 'delcart':
            if(isset($_GET['i'])&& $_GET['i']>=0 ) {
                array_splice($_SESSION['giohang'],$_GET['i'],1);
                header('location: index.php?act=cart');
            } else {
                if(isset($_SESSION['giohang'])) unset($_SESSION['giohang']);
                header('location: index.php');
            }
            break;
           
        case 'danhmuc1':
        $hiensp = $hiendth;
        include "../view/header.php";
        include "../view/home.php";
        break;
        case 'danhmuc2':
            $hiensp = $hienlt;
            include "../view/header.php";
            include "../view/home.php";
            break;
        case 'view':
            $hiensp_uutien = $hienview;
            include "../view/header.php";
            include "../view/f_view.php";
            break;
        
    default:
        //$hiensp = getproduct(); // lấy tất cả ds sp
        include "../view/header.php";
        include "../view/home.php";
        break;
    }
} else {
    //$hiensp = getproduct(); // lấy tất cả ds sp
    include "../view/header.php";
    include "../view/home.php";
    }


include "../view/footer.php";

// design vinhnh31.

?>
