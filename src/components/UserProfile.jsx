import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }

  renderPostList() {
    return this.state.posts.map(post => (
        <div className="post" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))
  }

  render() {
    return (
      <div className='container'>
        <h1>{this.props.name}</h1>
        <h1>{this.props.name}</h1>
        Posts: {this.renderPostList()}
      </div>
    );
  }
}

export default UserProfile;

