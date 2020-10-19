class App extends React.Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    axios.get('/post').then(
      (response) => {
        this.setState(
        {
          posts: response.data
        }
      )
    })
  }

  updatePosts = (allPosts) => {
    this.setState(
      {
        posts: allPosts
      }
    )
  }

  render = () => {
    return (
      <div>
        <CreateForm createCallback={this.updatePosts}></CreateForm>
        <h2>List of Posts</h2>
        <ul>
          {this.state.posts.map((post) => {
            return  <li>
                      {post.name} <br/>
                      {post.title}<br/>
                      <img src={post.image}/><br/>
                      Votes: {post.votes}<br/>
                      <DeleteForm
                        deleteCallback={this.updatePosts}
                        post={post}>
                      </DeleteForm>
                      <UpdateForm
                        updateCallback={this.updatePosts}
                        post={post}>
                      </UpdateForm>
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
