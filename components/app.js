class App extends React.Component {
  state = {
    posts: [],
    likes: 0
  }

  componentDidMount = () => {
    this.handleMount();
  }

  updatePosts = (allPosts) => {
    // console.log("allPosts", allPosts);
    this.setState(
      {
        posts: allPosts
      }
    )
  }

  handleMount = () => {
    axios.get('/post')
      .then(
      (response) => {
        // console.log("response", response);
        this.setState(
        {
          posts: response.data
        }
      )
    })
  }

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  decLike = () => {
    this.setState({
      likes: this.state.likes - 1
    })
  }

  render = () => {
    return (
      <div className="page">
        <Navbar updatePostCallback={this.updatePosts}></Navbar>
        <ul>
          {this.state.posts.map((post) => {
            return  <li key={post.id} className="user-post">
                      <div className="post-header">
                        <div className="name-title">
                          <p className="post-name">posted by: {post.name}</p><br/>
                          <h5 className="post-title">{post.title}</h5><br/>
                        </div>
                        <div className="edit-tab">
                          <EditModal
                            updatePostCallback={this.updatePosts}
                            deletePostCallback={this.updatePosts}
                            post={post}>
                          </EditModal>
                        </div>
                      </div>
                      <div className="likes">
                        <ion-icon className="upvote" name="chevron-up-outline" onClick={this.addLike}></ion-icon>
                        <p className="numlikes">{this.state.likes}</p>
                        <ion-icon className="downvote" name="chevron-down-outline" onClick={this.decLike}></ion-icon>
                      </div>
                      <div className="image">
                        <img className="img-fluid" alt="Responsive image" src={post.image}/><br/>
                      </div>
                      {/*<div className="post-votes">
                        <p className="postvote">{post.votes}</p><br/>
                      </div>*/}
                    </li>
                })}
        </ul>
        <Footer></Footer>
      </div>
    )
  }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
