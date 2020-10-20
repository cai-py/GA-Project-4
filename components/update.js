class UpdateForm extends React.Component {

  updatePost = (event) => {
    event.preventDefault();
    axios.put('/post/' + this.props.post.id,
      {
        name: this.refs.name.value,
        title: this.refs.title.value,
        image: this.refs.image.value
      }
    ).then(
      (response) => {
        this.props.updateCallback(response.data);
      }
    )
  }

  // editForm = (event) => {
  //   let id = event.target.getAttribute('id');
  //   for(let key of this.props.allPosts){
  //     if (id == key.id) {
  //       console.log(key);
  //       this.setState({
  //         post: key
  //       })
  //     }
  //   }
  // }

  render = () => {
    return (
      <div>
        <form className="editpost-area" onSubmit={this.updatePost}>
          <input className="edit-input" ref="name" defaultValue={this.props.post.name} type="text" /><br/>
          <input className="edit-input" ref="title" defaultValue={this.props.post.title} type="text" /><br/>
          <input className="edit-input" ref="image" defaultValue={this.props.post.image} type="text" /><br/>
          <input className="edit-post" type="submit" value="Update"/>
        </form>
      </div>
    )
  }
}
