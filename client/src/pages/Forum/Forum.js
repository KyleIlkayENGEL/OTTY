import React, { useState } from 'react';

const Forum = () => {
  const [posts, setPosts] = useState([
    { user: 'Alice', content: 'How do I start with JavaScript?' },
    { user: 'Bob', content: 'Can someone explain closures?' }
  ]);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    setPosts([...posts, { user: 'You', content: newPost }]);
    setNewPost('');
  };

  return (
    <div>
      <h2>Community Forum</h2>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <strong>{post.user}</strong>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default Forum;
