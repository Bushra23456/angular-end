<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header('Access-Control-Allow-headers:content-type,Autharization');

$connection = mysqli_connect("localhost","root","","bushra");
//fetch
$query = mysqli_query($connection,"select * from role");

while($data = mysqli_fetch_assoc($query)){
    $data['image'] = 'http://localhost:82/edit/images/' . $data['image'];
    $users[] = $data;
}
echo json_encode($users);
//update
if($_SERVER["REQUEST_METHOD"] == "PUT"){
    $data = json_decode(file_get_contents("php://input"),true);

    $id = $data['id'];
    $name = $data['name'];
    $email = $data['email'];
    $password = $data['password'];

    $query = mysqli_query($connection,"update role set name = '$name', email = '$email' , password = '$password' where id = '$id'");

}
//post
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // $data = json_decode(file_get_contents("php://input"),true);

 
    // $name = $data['name'];
    // $email = $data['email'];
    // $password = $data['password'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $folder = 'images/';
    $imagename = basename($_FILES['image']['name']);
    $final = $folder. $imagename;


    $query = mysqli_query($connection,"INSERT INTO role (name, email, password, image) VALUES ('$name','$email','$password','$imagename')") ;
    if($query){
        move_uploaded_file($_FILES['image']['tmp_name'], $final);
    }
    

}
//delete
if($_SERVER["REQUEST_METHOD"] == "DELETE"){
    $ids = json_decode(file_get_contents("php://input"),true);
    $id = $ids['id'];
    $query = mysqli_query($connection,"delete from role where id = '$id'");
}
?>


