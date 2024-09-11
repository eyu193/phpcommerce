<!--------------------------------------------------------------------------------------------->
<div class="row">
    <div class="main">
        <div class="row2">
            <div class="slidegthieu">
                <div class="listimg">
                    <img src="../view/img/gioithieu-banner-01.png" alt="" name="rong">
                    <img src="../view/img/gioithieu-banner-02.png" alt="" name="rong">
                    <img src="../view/img/gioithieu-banner-03.png" alt="" name="rong">
                    <img src="../view/img/gioithieu-banner-05.webp" alt="" name="rong">
                    <img src="../view/img/gioithieu-banner-01.png" alt="" name="rong">
                    <img src="../view/img/gioithieu-banner-02.png" alt="" name="rong">
                    <img src="../view/img/gioithieu-banner-03.png" alt="" name="rong">
                    <img src="../view/img/gioithieu-banner-05.webp" alt="" name="rong">
                </div>
            </div>
        </div>

<!-- hiện thị sản phẩm từ csdl------------------------------------------------>
    <div id="danhmuc_sp">
        <label for="">Danh mục:</label>
        <?php
            $kq="";
            foreach ($hiends as $item) {
                extract($item);
                $kq .= '<a href="index.php?act=danhmuc'.$id_catalog.'">'.$name .'</a>';
            }
            echo $kq;
        ?>
    </div>
            
    <div class="row1">   
        <?php
            $kq="";
            foreach ($hiensp as $item) {
                extract($item);
                $linkchitiet = 'index.php?act=chitiet&idproduct='.$id_product;
                if($promotion>0) {
                    $km='<div class="sale50">'.$promotion.'%</div>';
                } else $km='';

                $kq .= '<div class="col4">
                        <form action="index.php?act=cart" method="post">          
                                '.$km.'
                                <a href="'.$linkchitiet.'"><img src="../view/img/'.$img.'" alt=""></a>
                                <h5>'.$name.'</h5>
                                <h4>'.$price.'$</h4>
                                <input type="submit" name="cart" value="Add to card" class="fm">
                                <input type="number" name="soluong" value="'.$soluong.'" class="fm1">
                                <div class="chitiet">
                                    <a href="'.$linkchitiet.'">
                                    Chi tiết (<i class="fa-regular fa-eye"></i>'. $view.')
                                    </a>
                                </div> 
                                <input type="hidden" name="id" value="'.$id_product.'">
                                <input type="hidden" name="tensp" value="'.$name.'">
                                <input type="hidden" name="hinhsp" value="'.$img.'">
                                <input type="hidden" name="dongiasp" value="'.$price.'">
                                </form>                                         
                            </div> '; 
            }
            echo $kq; 
        ?>
    </div>
       

<!--------- Sản phầm view cao, giá cao nhất, thấp nhất.// design vinhnh31......------->
        <div id="danhmuc_sp">
            <label for="">Ưu tiên xem:</label>
            <a href="index.php?act=view"> Xem nhiều</a>
            <a href="index.php?act=max">Giá cao đến thấp</a>
            <a href="index.php?act=min">Giá thấp đến cao</a>
            <a href="index.php?act=khuyenmai">Khuyến mãi</a>
        </div>
        
        

    </div>

<!------khung bên phải trang chủ--------------------------------------------------------------------------------------->
    <div class="list-right"> 
        
        <div class="danhmuc">
                <div class="form-name">Danh mục</div>
                <div class="form-name-list">
                    <ul>
                        
                    </ul>
                </div>
        </div>
        <div class="danhmuc">
                <div class="form-name">Lựa chọn yêu thích</div>
                <div class="form-name-list">
                    <ul>
                        <li><a href="index.php?act=view"><i class="fa-solid fa-arrow-right-to-bracket"></i>Xem nhiều</a></li>
                        <li><a href="index.php?act=min"><i class="fa-solid fa-arrow-right-to-bracket"></i>Giá thấp đến cao</a></li>
                        <li><a href="index.php?act=max"><i class="fa-solid fa-arrow-right-to-bracket"></i>Giá cao đến thấp</a></li>
                        <li><a href="index.php?act=khuyenmai"><i class="fa-solid fa-arrow-right-to-bracket"></i>Khuyến mãi</a></li>
                    </ul>
                </div>
        </div>

        <div class="toplike">
            <img src="../view/img/hinh-ben phai-01.png" alt="">
        </div>
        <div class="conlai">phần còn lại frame bên phải</div>
        </div>
    </div>
</div>