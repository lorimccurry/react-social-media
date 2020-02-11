import React from 'react';
import Post from './Post';

function PostList({ posts }) {
  return posts.map((post, i) => <Post {...post} key={post.id} />);
}

export default PostList;
