class EditModal extends React.Component {
  render = () => {
    return (
      <div>
        <button id={this.props.post.id} type="button" className="btn" data-toggle="modal" data-target={`#editModal${this.props.post.id}`}>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </button>
        <div className="modal fade" id={`editModal${this.props.post.id}`} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <UpdateForm updateCallback={this.props.updatePostCallback} post={this.props.post}></UpdateForm>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <DeleteForm
                  deleteCallback={this.props.deletePostCallback}
                  post={this.props.post}>
                </DeleteForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
