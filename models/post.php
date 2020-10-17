<?php
$dbconn = pg_connect("host=localhost dbname=ga_project_4");

class Post {
    public $id;
    public $title;
    public $text;
    public $votes;

    public function __construct($id, $name, $age){
        $this->id = $id;
        $this->title = $title;
        $this->text = $text;
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
        $query = "UPDATE posts SET name = $1, age = $2 WHERE id = $3";
        $query_params = array($updated_post->title, $updated_post->text, $updated_post->votes, $updated_post->id);
        pg_query_params($query, $query_params);
        return self::all();
    }

    static function create($post){
        $query = "INSERT INTO posts (title, text, votes) VALUES ($1, $2)";
        $query_params = array($post->title, $post->age, $post->votes);
        pg_query_params($query, $query_params);
        return self::all();
    }

    static function all(){
        $post = array();

        $results = pg_query("SELECT * FROM post ORDER BY id ASC");
        $row_object = pg_fetch_object($results);

        while($row_object !== false){

            $new_post = new Post(
                intval($row_object->id),
                $row_object->title,
                $row_object->text,
                intval($row_object->votes)
            );

            $posts[] = $new_post;

            $row_object = pg_fetch_object($results);
        }

        return $posts;
    }
}
?>
