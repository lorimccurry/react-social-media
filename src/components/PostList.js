import React from 'react';
import Post from './Post';

function PostList({ posts }) {
  return posts.map((post, i) => <Post {...post} key={i} />);
}

export default PostList;
