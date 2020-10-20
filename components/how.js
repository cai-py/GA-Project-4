class How extends React.Component {
  render = () => {
    return (
      <div>
      <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
        How it works
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">How it works</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h6>You can view the posts that users have made. If you would like to add a post you can add a post by using the button "Add Post". Enjoy!</h6>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
