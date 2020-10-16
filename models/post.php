<?php
$dbconn = pg_connect("host=localhost dbname=project");

class Post {
    public $id;
    public $name;
    public $age;

    public function __construct($id, $name, $age){
      $this->id = $id;
      $this->name = $name;
      $this->age = $age;
    }
}

class Posts {

  static function delete($id){
      $query = "DELETE FROM people WHERE id = $1";
      $query_params = array($id);
      pg_query_params($query, $query_params);
      return self::all();
  }

  static function update($updated_person){
      $query ="UPDATE people SET name = $1, age = $2 WHERE id =$3";
      $query_params = array($updated_person->name, $updated_person->age, $updated_person->id);
      pg_query_params($query, $query_params);
      return self::all();
  }

  static function create($person){
      $query = "INSERT INTO people (name, age) VALUES ($1, $2)";
      $query_params = [$person->name, $person->age];
      pg_query_params($query, $query_params);
       return self::all();
  }

  static function all(){
    $posts= array();

    $results = pg_query("SELECT * FROM people");

    $row_object = pg_fetch_object($results);
      while($row_object !== false){

        $new_person = new Post(
          intval($row_object->id),
          $row_object->name,
          intval($row_object->age)
        );
        $posts[] = $new_person;

        $row_object = pg_fetch_object($results);
      }


    return $posts;
  }
}

?>
