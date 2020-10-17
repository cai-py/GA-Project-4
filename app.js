class App extends React.Component {

    state = {
        posts: []
    }

    componentDidMount = () => {
        axios.get('/posts').then(
            (response) => {
                this.setState({
                    posts: response.data
                }
            )
        })
    }

    changeNewPostTitle = (event) => {
        this.setState({
            newPostTitle: event.target.value
        })
    }
    
    changeNewPostText = (event) => {
        this.setState({
            newPostText: event.target.value
        })
    }

    changeNewPostValue = (event) => {
        this.setState({
            newPostValue:event.target.value
        })
    }
    
    createPost = (event) => {
        axios.post(
            '/posts',
            {
                title:this.state.newPostTitle,
                text: this.state.newPostText,
                value: 0
            }
        ).then(
            (response) => {
                this.setState({
                    posts: response.data
                })
            }
        )
    }

    deletePost = (event) => {
        axios.delete('/posts/' + event.target.value).then(
            (response) => {
                this.setState({
                    posts: response.data
                })
            }
        )
    }

    changeUpdatePersonName = (event) => {
        this.setState({
            updatePersonName:event.target.value
        })
    }
    
    changeUpdatePersonAge = (event) => {
        this.setState({
            updatePersonAge:event.target.value
        })
    }
    
    updatePerson = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/posts/' + id,
            {
                name:this.state.updatePersonName,
                age: this.state.updatePersonAge,
            }
        )
        .then((response) => {
            this.setState({
                posts: response.data
            })
        })
    }

    render = () => {
        return <div>
            <h2>Create Person</h2>
            <form onSubmit={this.createPerson}>
                <input onKeyUp={this.changeNewPostTitle} type="text" placeholder="name"/><br/>
                <input onKeyUp={this.changeNewPostText} type="number" placeholder="age"/><br/>
                <input type="submit" value="Create Person"/>
            </form>

            <h2>List of People</h2>
            <ul>
                {
                    this.state.posts.map(
                        (person) => {
                            return <li>
                                {person.name}: {person.age}
                                <button value={person.id} onClick={this.deletePost}>
                                    DELETE
                                </button>

                                <form id={person.id} onSubmit={this.updatePerson}>
                                    <input onKeyUp={this.changeUpdatePersonName} type="text" placeholder="name"/><br/>
                                    <input onKeyUp={this.changeUpdatePersonAge} type="number" placeholder="age"/><br/>
                                    <input type="submit" value="Update Person"/>
                                </form>
                            </li>
                            
                        }
                    )
                }
            </ul>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)