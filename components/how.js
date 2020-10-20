class How extends React.Component {
  render = () => {
    return (
      <div>
      <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
        How it works
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">How it works</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h6>You can view the posts that users have made. If you would like to add a post you can add a post by using the button "Add Post". Enjoy!</h6>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
