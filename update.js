class UpdateForm extends React.Component {
  updatePerson = (event) => {
    event.preventDefault();
    axios.put('/people/' + this.props.person.id,
      {
        name: this.refs.name.value,
        age: this.refs.age.value
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
        <form onSubmit={this.updatePerson}>
          <input ref="name" defaultValue={this.props.person.name} type="text" /><br/>
          <input ref="age" defaultValue={this.props.person.age} type="number" /><br/>
          <input type="submit" value="Update Person"/>
        </form>
      </div>
    )
  }
}
