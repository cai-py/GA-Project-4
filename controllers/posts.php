<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/post.php';

if($_REQUEST['action'] === 'index'){
  echo json_encode(Posts::all());
} elseif ($_REQUEST['action'] === 'create'){
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $new_post = new Post(null, $body_object->name, $body_object->title, $body_object->image);
  $all_posts = Posts::create($new_post);
  echo json_encode($all_posts);
} elseif ($_REQUEST['action'] === 'update') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_post = new Post($_REQUEST['id'], $body_object->name, $body_object->title, $body_object->image);
  $all_posts = Posts::update($updated_post);
  echo json_encode($all_posts);
} else if ($_REQUEST['action'] === 'delete'){
  $all_posts = Posts::delete($_REQUEST['id']);
  echo json_encode($all_posts);
}
?>
