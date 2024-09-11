<?php
class databaseModel{
    private $dbuser = "vinhnh31";
    private $dbpass = "120488";
    private $conn;
    private $stmt;
    private $stmt1;

    function __construct()
    {
    try {
        $this->conn = new PDO("mysql:host=localhost;dbname=data", $this->dbuser, $this->dbpass);
        // set the PDO error mode to exception
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Connected successfully";
        } catch(PDOException $e) {
        //echo "Connection failed: " . $e->getMessage();
        }
    }

    // hàm truy vấn sql:
    function get_all($sql) {
        $this->stmt = $this->conn ->prepare($sql);
        $this->stmt->execute();
        // set the resulting array to associative
        $this->stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $this->stmt->fetchAll();
    }

    // get one
    
    // thêm xóa sửa


    



}


?>