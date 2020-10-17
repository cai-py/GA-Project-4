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
      <div>
        <CreateForm createCallback={this.updatePeople}></CreateForm>
        <h2>List of People</h2>
        {this.state.posts.map((post) => {
          return  <div className="post">
                    {post.name}: {post.title}<br/>
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
