class App extends React.Component {
  state = {
    posts: []
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
                      <div className="image">
                        <img className="img-fluid" alt="Responsive image" src={post.image}/><br/>
                      </div>
                      {/*<div className="post-votes">
                        <p className="postvote">{post.votes}</p><br/>
                      </div>*/}
                    </li>
                })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
