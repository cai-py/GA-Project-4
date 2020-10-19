class CreateForm extends React.Component {

  changeNewPostName = (event) => {
    this.setState({
      newPostName: event.target.value
    })
  }

  changeNewPostTitle = (event) => {
    this.setState({
      newPostTitle: event.target.value
    })
  }

  changeNewPostImage = (event) => {
    this.setState({
      newPostImage: event.target.value
    })
  }

  createPost = (event) => {
    event.preventDefault();
    event.target.reset();
    axios.post('/post',
      {
        name: this.state.newPostName,
        title: this.state.newPostTitle,
        image: this.state.newPostImage
      }
    ).then(
      (response) => {
        this.props.createCallback(response.data);
      }
    )
  }

  render = () => {
    return (
      <div>
      <h2>Create Post</h2>
        <form onSubmit={this.createPost}>
          <input onKeyUp={this.changeNewPostName} type="text" placeholder="name"/><br/>
          <input onKeyUp={this.changeNewPostTitle} type="text" placeholder="title"/><br/>
          <input onKeyUp={this.changeNewPostImage} type="text" placeholder="image"/><br/>
          <input type="submit" value="Create Post"/>
        </form>
      </div>
    )
  }
}
