<?php
$dbconn = pg_connect("host=localhost dbname=ga_project_4");

class Post {
    public $id;
    public $name;
    public $title;
    public $image;
    public $votes;


    public function __construct($id, $name, $title, $image, $votes = 0){
      $this->id = $id;
      $this->name = $name;
      $this->title = $title;
      $this->image = $image;
      $this->votes = $votes;
    }
}

class Posts {

  static function delete($id){
      $query = "DELETE FROM posts WHERE id = $1";
      $query_params = array($id);
      pg_query_params($query, $query_params);
      return self::all();
  }

  static function update($updated_post){
      $query ="UPDATE posts SET name = $1, title = $2, image = $3, votes = $4 WHERE id = $5";
      $query_params = array($updated_post->name, $updated_post->title, $updated_post->image, $updated_post->votes, $updated_post->id);
      pg_query_params($query, $query_params);
      return self::all();
  }

  static function create($post){
      $query = "INSERT INTO posts (name, title, image, votes) VALUES ($1, $2, $3, 0)";
      $query_params = [$post->name, $post->title, $post->image];
      pg_query_params($query, $query_params);
       return self::all();
  }

  static function all(){
    $posts= array();

    $results = pg_query("SELECT * FROM posts ORDER BY id ASC");

    $row_object = pg_fetch_object($results);
      while($row_object !== false){

        $new_post = new Post(
          intval($row_object->id),
          $row_object->name,
          $row_object->title,
          $row_object->image,
          intval($row_object->votes)
        );
        $posts[] = $new_post;

        $row_object = pg_fetch_object($results);
      }


    return $posts;
  }
}
?>
