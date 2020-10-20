class Navbar extends React.Component {
  render = () => {
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="/"><ion-icon className="skull" name="skull-outline"></ion-icon> re-did-it</a>
        <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#postModal">
          Add Post
        </button>
        <How></How>
        <CreateForm createCallback={this.props.updatePostCallback}></CreateForm>
      </nav>
    )
  }
}
