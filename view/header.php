<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang thương mại</title>
    <link rel="stylesheet" href="../view/css/style.css">
    <link rel="stylesheet" href="../view/css/all.css">
</head>

<body>

<?php global $sl_dh ?>

    <div class="container">
        <header>
            <img src="../view/img/logo-shop.png" alt="">
            <div class="header-search">
                <input type="text" placeholder="Tìm kiếm">
                <a href="#" ><i class="fa-solid fa-magnifying-glass" style=" color: aliceblue;"></i></a>
            </div>

            <!--Nút giỏ hàng trang chủ----------------------------->
            <div class="button_cart" onclick="hienthigiohang_index()">
              <a href="index.php?act=cart" style=" color: aliceblue;" ><i class="fa-solid fa-cart-shopping"></i> <span id="cart_count">
                <?=$sl_dh?>
              </span></a>  
            </div>
            <!--Nút giỏ hàng trang chủ----------------------------->
        </header>

        <nav class="row">
            <div class="menu">
                <ul>
                    <li><a href="index.php">Trang chủ</a></li>
                    <li><a href="index.php?act=chitiet">Sản phẩm</a></li>
                    <li><a href="#">Danh mục</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="index.php?act=cart"><i class="fa-solid fa-cart-shopping"></i> Giỏ hàng</a></li>
                    <li><a href="index.php?act=dangky" onclick="showdk()">Đăng ký</a></li>
                </ul>
            </div>
            <div class="search"></div>
        </nav>