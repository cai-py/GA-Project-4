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
    // console.log("state", this.state);
    axios.post('/post',
      {
        name: this.state.newPostName,
        title: this.state.newPostTitle,
        image: this.state.newPostImage,
      }
    ).then(
      (response) => {
        this.props.createCallback(response.data);
      }
    )
  }

  render = () => {
    return (
        <div className="modal fade" id="postModal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="addpost-area" onSubmit={this.createPost}>
                  <input className="addpost-input" onChange={this.changeNewPostName} type="text" placeholder="name"/><br/>
                  <input className="addpost-input" onChange={this.changeNewPostTitle} type="text" placeholder="title"/><br/>
                  <input className="addpost-input" onChange={this.changeNewPostImage} type="text" placeholder="image-url"/><br/>
                  <input className="create" type="submit" value="Create Post"/>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
