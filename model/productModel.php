<?php

class productModel{
    private $db;

    function __construct(){
        $this->db = new databaseModel;
    }

    function getproduct() {
        $sql = "SELECT * FROM product WHERE 1 ORDER BY id_product ASC";
        return $this->db->get_all($sql);
    }

    // hàm xuất danh mục sản phẩm ra trang chủ:
    function get_list() {
        $sql = "SELECT * FROM catalog";
        return $this->db->get_all($sql);
    }
    // lấy ID Table product để hiện ra trang chi tiết
    function get_detailID($idproduct) {
        $sql = "SELECT * FROM product WHERE id_product=".$idproduct;
        return $this->db->get_all($sql);
    }
    // lấy các hình nhỏ (Table image) hiện ra trang chi tiết:
    function get_detailID_($idproduct) {
        $sql = "SELECT * FROM image WHERE id_product=".$idproduct;
        return $this->db->get_all($sql);
    }
    // hàm xuất tất cả sản phẩm - xem nhiều:
    function getview() {
        $sql = "SELECT * FROM product WHERE 1 ORDER BY view DESC";
        return $this->db->get_all($sql);
    }

    // hàm xuất tất cả sản phẩm - giá thấp nhất:
    function getminprice() {
        $sql = "SELECT * FROM product WHERE 1 ORDER BY price ASC";
        return $this->db->get_all($sql);
    }
    // hàm xuất tất cả sản phẩm - giá cao nhất:
    function getmaxprice() {
        $sql = "SELECT * FROM product WHERE 1 ORDER BY price DESC";
        return $this->db->get_all($sql);
    }
    // hàm xuất tất cả sản phẩm - giá cao nhất:
    function getpromotion() {        
        $sql = "SELECT * FROM product WHERE 1 ORDER BY promotion DESC";
        return $this->db->get_all($sql);
    }

    // hàm xuất "điện thoại" ra trang chủ:
    function get_dienthoai() {        
        $sql = 'SELECT * FROM product WHERE id_catalog=1' ;
        return $this->db->get_all($sql);
    }
    // hàm xuất "laptop" ra trang chủ:
    function get_laptop() {        
        $sql = 'SELECT * FROM product WHERE id_catalog=2' ;
        return $this->db->get_all($sql);
    }

    // hàm tăng lượt view:
    function setview($id1) {        
        $sql = "UPDATE product SET view=view+1 WHERE id_product=".$id1;
        return $this->db->addview($sql);
    }
}
    
// cập nhật view dạng function ko dùng class.
function addview($id1) 
{
    $username = "root";
    $password = "";
    try 
    {
        $conn1 = new PDO("mysql:host=localhost;dbname=asm_php1", $username, $password);
        // set the PDO error mode to exception
        $conn1->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql1 = "UPDATE product SET view=view+1 WHERE id_product=".$id1;
        // Prepare statement
        $stmt1 = $conn1->prepare($sql1);
        // execute the query
        $stmt1->execute();
        // echo a message to say the UPDATE succeeded
        //echo $stmt->rowCount() . " records UPDATED successfully";
    } 
    catch(PDOException $e) 
    {
        //echo $sql . "<br>" . $e->getMessage();
    }
    $conn1 = null;
}
?>