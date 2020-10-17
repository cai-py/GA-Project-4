<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/post.php';

if($_REQUEST['action'] === 'index'){
    echo json_encode( Posts::all() );
} else if ($_REQUEST['action'] === 'create'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    // print_r($body_object);
    // echo $body_object->age;
    $new_post = new Posts(null, $body_object->title, $body_object->text, $body_object->votes);
    // print_r($new_person);
    $all_posts = Posts::create($new_ppst);
    echo json_encode($all_posts);
} else if ($_REQUEST['action'] === 'update'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    $updated_post = new Post($_REQUEST['id'], $body_object->title, $body_object->text, $body_object->votes);
    $all_posts = People::update($updated_post);
    echo json_encode($all_posts);
} else if ($_REQUEST['action'] === 'delete'){
    $all_posts = People::delete($_REQUEST['id']);
    echo json_encode($all_people);
}
?>
