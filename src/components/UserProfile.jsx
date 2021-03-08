import React from 'react';
import withData from './hoc/withData';

const UserProfile = ({ data, name, email }) => {
  const postList = data.map(post => {
    return (
        <div className="post" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
      </div>
    );
  });

  return (
    <div className='container'>
      <h1>{name}</h1>
      <h2>{email}</h2>
      {postList}
    </div>
  );
}

export default withData(UserProfile, "https://jsonplaceholder.typicode.com/posts");

