import React from 'react';

function CreatePost({ user, handleAddPost }) {
  const [content, setContent] = React.useState('');
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const post = {
      content,
      image,
      user,
    };
    handleAddPost(post);
    setContent('');
    imageInputRef.current.value = '';
  }

  return (
    <div>
      <h1> Create New Post </h1>{' '}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={e => setContent(e.target.value)}
          value={content}
        />{' '}
        <input
          type="file"
          onChange={e => setImage(e.target.files[0])}
          ref={imageInputRef}
        />{' '}
        <button type="submit"> Submit </button>{' '}
      </form>{' '}
    </div>
  );
}

export default CreatePost;
