class App extends React.Component {
  state = {
    people: []
  }

  componentDidMount = () => {
    axios.get('/people').then(
      (response) => {
        this.setState(
        {
          people: response.data
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
        <ul>
          {this.state.people.map((person) => {
            return  <li>
                      {person.name}: {person.age}<br/>
                      <DeleteForm
                        deleteCallback={this.updatePeople}
                        person={person}>
                      </DeleteForm>
                      <UpdateForm
                        updateCallback={this.updatePeople}
                        person={person}>
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
