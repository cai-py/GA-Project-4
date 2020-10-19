class UpdateForm extends React.Component {
  updatePost = (event) => {
    event.preventDefault();
    axios.put('/post/' + this.props.post.id,
      {
        name: this.refs.name.value,
        title: this.refs.title.value,
        image: this.refs.image.value,
        votes: this.refs.votes.value
      }
    ).then(
      (response) => {
        this.props.updateCallback(response.data);
      }
    )
  }

  render = () => {
    return (
      <div>
        <form onSubmit={this.updatePost}>
          <input ref="name" defaultValue={this.props.post.name} type="text" /><br/>
          <input ref="title" defaultValue={this.props.post.title} type="text" /><br/>
          <input ref="image" defaultValue={this.props.post.image} type="text" /><br/>
          <input ref="votes" value={this.props.post.votes} type="number" /><br/>
          <input type="submit" value="Update Post"/>
        </form>
      </div>
    )
  }
}
