class DeleteForm extends React.Component {
  deletePost = (event) => {
    axios.delete('/post/' + this.props.post.id).then(
      (response) => {
        this.props.deleteCallback(response.data);
      }
    )
  }

  render = () => {
    return  <button className="btn btn-danger" onClick={this.deletePost}>
              Delete
            </button>
  }
}
