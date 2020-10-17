class DeleteForm extends React.Component {
  deletePerson = (event) => {
    axios.delete('/people/' + this.props.person.id).then(
      (response) => {
        this.props.deleteCallback(response.data);
      }
    )
  }

  render = () => {
    return  <button onClick={this.deletePerson}>
              DELETE
            </button>
  }
}
