class DeleteForm extends React.Component {
  deletePost = (event) => {
    axios.delete('/post/' + this.props.post.id).then(
      (response) => {
        this.props.deleteCallback(response.data);
      }
    )
  }

  render = () => {
    return  <button onClick={this.deletePost}>
              DELETE
            </button>
  }
}
