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

  updatePeople = (allPeople) => {
    this.setState(
      {
        people: allPeople
      }
    )
  }

  render = () => {
    return (
      <div className="container">
        <CreateForm createCallback={this.updatePeople}></CreateForm>
        <h2>POSTS</h2>
        {this.state.posts.map((post) => {
          return  <div className="post">
                    <h4>{post.name}</h4>
                    <img src={post.img}></img>
                    <p>{post.title}</p>
                    {/* <DeleteForm
                      deleteCallback={this.updatePeople}
                      post={post}>
                    </DeleteForm>
                    <UpdateForm
                      updateCallback={this.updatePeople}
                      post={post}>
                    </UpdateForm> */}
                  </div>
              })
        }
      </div>
    )
  }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
