<?php
$mysqli = new mysqli("localhost","root","","spinny_app");

// Check connection
if ($mysqli->connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$where = '';
$limit = '';
if(isset($_GET) && isset($_GET['page']) && isset($_GET['limit'])){
    if($_GET['page'] == 0){
        $offset = ($_GET['page']) * $_GET['limit'];
    } else {
        $offset = ($_GET['page'] - 1) * $_GET['limit'];
    }
    $limit = " limit ".$offset.','.$_GET['limit'];
}
$whereYear = '';
$where = " where city_id = 1"; 
if(isset($_GET['min_year']) && !empty($_GET['min_year'])){
  $year = $_GET['min_year'];
  $whereYear = ' and p.year='.$year;
}
$whereMilage = '';
if(isset($_GET['max_milage']) && !empty($_GET['max_milage'])){
  $milage = $_GET['max_milage'];
  $whereMilage = ' and p.max_mileage <='.$milage;
}

$whereBrand = '';
if(isset($_GET['search']) && !empty($_GET['search'])){
  foreach($_GET['search'] as $brand_val){
    $brand_aid_arr[] = $brand_val['brand_id'];
  }
  if(!empty($brand_aid_arr)){
    $whereIn = implode('","', $brand_aid_arr);
    $whereBrand = ' and p.brand_id IN ("'.$whereIn.'")';
  }
}
$whereID = '';
if(isset($_GET) && isset($_GET['id']) && isset($_GET['id'])){
  $whereID = ' and p.id = '. $_GET['id'];
}


$sql = "SELECT p.*,b.name as brand_name FROM products as p inner join brands as b on p.brand_id = b.id $where $whereID $whereYear $whereMilage $whereBrand ORDER BY p.id $limit";
$result = $mysqli->query($sql);
$row = $result->fetch_all(MYSQLI_ASSOC);

$response = array();
if(empty($whereID)){
  $sql = "SELECT count(p.id) as id FROM products as p inner join brands as b on p.brand_id = b.id $where  $whereYear $whereMilage $whereBrand";
  $resultCount = $mysqli->query($sql);
  $rowCount = $resultCount->fetch_all(MYSQLI_ASSOC);
  $total = '0';
  if(isset($rowCount[0]) && $rowCount[0]['id']){
      $total = $rowCount[0]['id'];
  }

  $brandSql = "SELECT b.name as brand_name,p.brand_id FROM products as p inner join brands as b on p.brand_id = b.id $where group by b.id";
  $resultBrandCount = $mysqli->query($brandSql);
  $brands = $resultBrandCount->fetch_all(MYSQLI_ASSOC);

  $sql1 = "SELECT b.name as brand_name,count(b.id) as count,p.brand_id FROM products as p inner join brands as b on p.brand_id = b.id $where $whereYear $whereMilage $whereBrand group by b.id";
  $resultCount = $mysqli->query($sql1);
  $brandRow = $resultCount->fetch_all(MYSQLI_ASSOC);
  $brandArr = array();
  foreach($brands as $brand){
    $brand_id = $brand['brand_id'];
    $sql1 = "SELECT count(b.id) as count FROM products as p inner join brands as b on p.brand_id = b.id $where $whereYear $whereMilage $whereBrand and p.brand_id = $brand_id group by b.id";
    $resultCount = $mysqli->query($sql1);
    $brandRow = $resultCount->fetch_all(MYSQLI_ASSOC);
    $brandArr[] = array(
      'brand_name' => $brand['brand_name'],
      'count' => isset($brandRow[0]['count']) ? $brandRow[0]['count'] : '0',
      'brand_id' => $brand['brand_id'],
    );
  }

  $sql1 = "SELECT year,count(p.id) as id FROM products as p inner join brands as b on p.brand_id = b.id $where $whereMilage $whereBrand  group by year";
  $resultCount = $mysqli->query($sql1);
  $yearRow = $resultCount->fetch_all(MYSQLI_ASSOC);

  $milagesql = "SELECT max_mileage FROM products as p inner join brands as b on p.brand_id = b.id $where $whereYear $whereMilage $whereBrand";

  $milageresult = $mysqli->query($milagesql);
  $milageRow = $milageresult->fetch_all(MYSQLI_ASSOC);
  $milage10 = $milage30 = $milage50 = $milage80 = $milage110 = 0;
  foreach($milageRow as $milage){
    if($milage['max_mileage'] <= '10000'){
      $milage10 += '1';
    }
    if($milage['max_mileage'] <= '30000'){
      $milage30 += '1';
    }
    if($milage['max_mileage'] <= '50000'){
      $milage50 += '1';
    }
    if($milage['max_mileage'] <= '80000'){
      $milage80 += '1';
    }
    if($milage['max_mileage'] <= '120000'){
      $milage110 += '1';
    }
  }
  $milageArr = array(
            array('milage' => '10000','count' => $milage10),
            array('milage' =>'30000','count' => $milage30),
            array('milage' =>'50000','count' => $milage50),
            array('milage' =>'80000','count' => $milage80), 
            array('milage' =>'120000','count' => $milage110)
        );

  $meta_arr = array(
    'brand' => $brandArr,
    'max_milage' => $milageArr,
    'year' => $yearRow,
  );
  $response['meta']['total'] = $total;
  $response['meta']['filter_data'] = $meta_arr; 
  $response['meta']['per_page'] = isset($_GET['limit']) ? $_GET['limit'] : '2'; 
}
$response['data'] = $row;
$response['status'] = '200'; 

echo json_encode($response);